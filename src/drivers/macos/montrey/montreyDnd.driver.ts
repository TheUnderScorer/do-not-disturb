import { DndDriver } from '../../../types';
import {
  disableFocusMode,
  isFocusModeShortcutInstalled,
  installFocusModeShortcut,
  enableFocusMode,
} from 'macos-focus-mode';
import { getDoNotDisturb } from 'macos-notification-state';

export const montreyDndDriver: DndDriver = {
  enable: async () => {
    if (!isFocusModeShortcutInstalled()) {
      return false;
    }

    enableFocusMode();

    return true;
  },

  disable: async () => {
    if (!isFocusModeShortcutInstalled()) {
      return false;
    }

    disableFocusMode();

    return true;
  },

  isEnabled: getDoNotDisturb,
  installable: true,
  install: installFocusModeShortcut,
  installRequired: () => !isFocusModeShortcutInstalled(),
};
