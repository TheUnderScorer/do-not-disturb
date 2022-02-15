import { DndDriver } from '../../../types';
import { enable } from './enable';
import { disable } from './disable';
import { isEnabled } from './isEnabled';

export const bigsurDndDriver: DndDriver = {
  enable,
  disable,
  isEnabled,
};
