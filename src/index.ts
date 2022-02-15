import { getDriver } from './drivers/getDriver';

export { DndDriver } from './types';

export const enable = () => getDriver().enable();

export const disable = () => getDriver().disable();

export const isEnabled = () => getDriver().isEnabled();

export const toggle = async () => {
  const driver = getDriver();

  const enabled = await driver.isEnabled();

  return enabled ? await driver.disable() : driver.enable();
};

export const install = async () => {
  const driver = getDriver();

  if (driver.installable) {
    await driver.install();
  }
};

export const installRequired = () => {
  const driver = getDriver();

  return driver.installable ? driver.installRequired() : false;
};
