# Do Not Disturb

[![npm](https://img.shields.io/npm/dm/@theunderscorer/do-not-disturb)](https://www.npmjs.com/package/@theunderscorer/do-not-disturb)
[![npm](https://img.shields.io/npm/v/@theunderscorer/do-not-disturb)](https://www.npmjs.com/package/@theunderscorer/do-not-disturb)

A simple API for managing "Do Not Disturb" mode.

> Currently only MacOS is supported.

## Installation

```sh
  $ npm install @theunderscorer/do-not-disturb
```

## Why this exists

There are already plenty of packages for managing "Do Not Disturb" mode, however I was not able to get them to work on
latest MacOS version (Big Sur) hence I've created this package :P.

For MacOS Montrey it uses a combo of `macos-focus-mode` for toggling DnD mode, and `macos-notification-state` for checking if DnD mode is enabled or not.

It also supports older MacOS versions via `@sindresorhus/do-not-disturb` package used as fallback.

## Usage

```js
import {
  enable,
  disable,
  toggle,
  isEnabled,
  installRequired,
  install
} from '@theunderscorer/do-not-disturb';

// Enables "Do Not Disturb" mode
await enable();

// Disables "Do Not Disturb" mode
await disable();

// Toggles "Do Not Disturb" mode
await toggle();

// Returns "true" if "Do Not Disturb" mode is enabled
await isEnabled();

// Returns "true" if driver needs to be installed (which is a case for MacOS Montrey)
await installRequired();

// Installs DnD driver if it is required. If not, does nothing.
await install();
```

## Development

The package is written in typescript. In order to build it run:

```sh
  $ npm run build
```

To run tests (will run only on MacOS) run:

```sh
  $ npm run test
```

## Future plans

- [ ] Support Linux and Windows
- [ ] Test Suite for CI
