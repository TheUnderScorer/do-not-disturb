import { DndDriver } from '../../types';
import dnd from '@sindresorhus/do-not-disturb';

const { disable, enable, isEnabled } = dnd;

export const legacyMacosDndDriver: DndDriver = {
  enable: async () => {
    await enable();

    return isEnabled();
  },
  disable: async () => {
    await disable();

    const enabled = await isEnabled();

    return !enabled;
  },
  isEnabled,
};
