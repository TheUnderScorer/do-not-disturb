import toBplistBuffer from 'bplist-creator';
import fs from 'fs';
import { getNcPrefs } from './getNcPrefs';
import { getDndPrefs } from './getDndPrefs';
import { execFile } from '../../../util/execFile';
import { getNcPrefsPath } from './getNcPrefsPath';
import { DndPrefs } from './types';

export const writeDndPrefs = async (dndPrefs?: DndPrefs) => {
  const ncPrefs = (await getNcPrefs()) ?? {};
  const currentDndPrefs = await getDndPrefs(ncPrefs);

  if (!currentDndPrefs) {
    throw new Error(
      'Unable to write dnd prefs: failed to read current dnd prefs.'
    );
  }

  if (!dndPrefs) {
    delete currentDndPrefs!.userPref;
  }

  ncPrefs.dnd_prefs = toBplistBuffer({
    ...currentDndPrefs,
    ...dndPrefs,
  });

  const buffer = toBplistBuffer(ncPrefs);
  const path = getNcPrefsPath();

  await execFile('/usr/bin/defaults', [
    'write',
    'com.apple.ncprefs.plist',
    '-data',
    buffer.toString('hex'),
  ]);

  fs.writeFileSync(path, buffer);

  try {
    await execFile('/usr/bin/killall', ['usernoted']);
  } catch (e) {
    console.error(e);
  }
};
