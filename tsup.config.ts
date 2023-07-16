import { Options } from 'tsup';

const config: Options = {
  splitting: true,
  format: ['esm', 'cjs'],
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  dts: true,
  outDir: './build',
  tsconfig: './tsconfig.json',
};

export default config;
