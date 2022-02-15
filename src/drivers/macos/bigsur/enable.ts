import { writeDndPrefs } from './writeDndPrefs';
import { isEnabled } from './isEnabled';

/**
 * Enables DnD mode.
 *
 * @return boolean True on success, false if DnD is not enabled.
 * */
export const enable = async (): Promise<boolean> => {
  await writeDndPrefs({
    userPref: {
      date: new Date(),
      enabled: true,
      reason: 1,
    },
  });

  return isEnabled();
};
