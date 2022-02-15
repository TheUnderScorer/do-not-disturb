import semver from 'semver';
import os from 'os';

const getOsVersion = () => {
  const result = semver.parse(os.release());

  if (!result) {
    throw new TypeError('Failed to parse OS version.');
  }
  return result;
};

export const isBigSurOrNewer = () => {
  const version = getOsVersion();

  return version.major >= 20;
};

export const isMontreyOrNewer = () => {
  const version = getOsVersion();

  return version.major >= 21;
};
