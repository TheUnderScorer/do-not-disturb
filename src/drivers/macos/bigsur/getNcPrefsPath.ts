import path from 'path';
import os from 'os';

export const getNcPrefsPath = () =>
  path.join(os.homedir(), 'Library/Preferences/com.apple.ncprefs.plist');
