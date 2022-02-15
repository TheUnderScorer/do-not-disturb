export interface NcPrefsContents {
  dnd_prefs?: Buffer;
}

export interface DndPrefs {
  userPref?: {
    enabled?: boolean;
    date?: Date | string;
    reason?: 0 | 1;
  };
}
