import { getDndPrefs } from './getDndPrefs';

export const isEnabled = async (): Promise<boolean> => {
  const dndPrefs = await getDndPrefs();

  return Boolean(dndPrefs?.userPref?.enabled);
};
