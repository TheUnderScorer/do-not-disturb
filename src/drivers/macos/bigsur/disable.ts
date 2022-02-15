import { writeDndPrefs } from './writeDndPrefs';
import { isEnabled } from './isEnabled';
import { execFile } from '../../../util/execFile';

let didControlCenterReset = false;

/**
 * Disables DnD mode.
 *
 * @return boolean True if DnD was disabled, false on failure
 * */
export const disable = async (): Promise<boolean> => {
  await writeDndPrefs();

  if (!didControlCenterReset) {
    /**
     * The first time after boot that DND is programatically turned off,
     * the interface doesn’t update until Control Center is restarted.
     * */
    await execFile('/usr/bin/killall', ['ControlCenter']);

    didControlCenterReset = true;
  }

  const enabled = await isEnabled();

  return !enabled;
};
