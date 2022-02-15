declare module 'macos-focus-mode' {
  export const enableFocusMode: (duration?: number) => void;
  export const disableFocusMode: () => void;
  export const isFocusModeShortcutInstalled: () => boolean;
  export const installFocusModeShortcut: () => void;
}
