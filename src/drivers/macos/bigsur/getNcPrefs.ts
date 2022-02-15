import fs from 'fs';
import { parseFile } from 'bplist-parser';
import { getNcPrefsPath } from './getNcPrefsPath';
import { first } from '../../../util/first';
import { NcPrefsContents } from './types';

export const getNcPrefs = async (): Promise<NcPrefsContents | null> => {
  const prefsPath = getNcPrefsPath();

  if (!fs.existsSync(prefsPath)) {
    return null;
  }

  return first(await parseFile(prefsPath)) as NcPrefsContents;
};
