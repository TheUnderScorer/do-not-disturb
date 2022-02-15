declare module '@sindresorhus/do-not-disturb' {
  const doNotDisturb: {
    enable: () => Promise<void>;
    disable: () => Promise<void>;
    isEnabled: () => Promise<boolean>;
    tiggke: () => Promise<void>;
  };

  export default doNotDisturb;
}
