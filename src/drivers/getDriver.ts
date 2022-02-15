import * as os from 'os';
import { isBigSurOrNewer, isMontreyOrNewer } from '../osVersion';
import { bigsurDndDriver } from './macos/bigsur/bigsurDnd.driver';
import { legacyMacosDndDriver } from './macos/legacyMacosDnd.driver';
import { montreyDndDriver } from './macos/montrey/montreyDnd.driver';

export const getDriver = () => {
  if (os.type() !== 'Darwin') {
    throw new Error('This module is only supported on Darwin!');
  }

  return resolveMacosDriver();
};

const resolveMacosDriver = () => {
  if (isMontreyOrNewer()) {
    return montreyDndDriver;
  }

  return isBigSurOrNewer() ? bigsurDndDriver : legacyMacosDndDriver;
};
