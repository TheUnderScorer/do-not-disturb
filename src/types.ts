export type MaybePromise<T> = T | Promise<T>;

interface BaseDndDriver {
  /**
   * Enables DnD mode.
   *
   * @return boolean True on success, false if DnD is not enabled.
   * */
  enable: () => MaybePromise<boolean>;

  /**
   * Disables DnD mode.
   *
   * @return boolean True if DnD was disabled, false on failure
   * */
  disable: () => MaybePromise<boolean>;

  isEnabled: () => MaybePromise<boolean>;
}

export type DndDriver =
  | (BaseDndDriver & {
      installable?: false;
    })
  | (BaseDndDriver & {
      installable: true;
      /**
       * Performs installation of DnD driver.
       * */
      install: () => MaybePromise<void>;

      /**
       * Determines whenever installation of DnD driver is required.
       * */
      installRequired: () => MaybePromise<boolean>;
    });
