import toBplistBuffer from 'bplist-creator';
import fs from 'fs';
import { DndPrefs } from '../types';
import { getNcPrefs } from './getNcPrefs';
import { getDndPrefs } from './getDndPrefs';
import { execFile } from '../util/execFile';
import { getNcPrefsPath } from './getNcPrefsPath';

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

  fs.writeFileSync(path, buffer);

  try {
    await execFile('/usr/bin/killall', ['usernoted']);
  } catch (e) {
    console.error(e);
  }
};