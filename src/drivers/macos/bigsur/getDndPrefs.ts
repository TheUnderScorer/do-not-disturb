import { parseBuffer } from 'bplist-parser';
import { first } from '../../../util/first';
import { getNcPrefs } from './getNcPrefs';
import { DndPrefs, NcPrefsContents } from './types';

export const getDndPrefs = async (
  prefs?: NcPrefsContents
): Promise<DndPrefs | null> => {
  const parsedPlist = prefs ?? (await getNcPrefs());

  if (!parsedPlist?.dnd_prefs) {
    return null;
  }

  return first(await parseBuffer(parsedPlist.dnd_prefs)) as DndPrefs;
};
