import { existsSync, writeFileSync } from 'fs';
import { spawn } from 'child_process';
import { build } from 'esbuild';

import { tsconfig } from './tsconfig.mjs';

const main = () => {
  try {
    if (!existsSync('tsconfig.json')) {
      writeFileSync('tsconfig.json', tsconfig, 'utf-8');
    }

    build({
      entryPoints: ['src/index.ts'],
      outdir: 'dist',
      bundle: true,
      minify: true,
      treeShaking: true,
      sourcemap: true,
      platform: 'node',
      target: ['node14'],
      jsx: 'automatic',
      format: 'esm',
      external: [
        'react',
        'react-dom',
        '@types/react',
        '@types/react-dom',
        '@nostyle/*',
      ],
    });

    spawn('tsc', ['--declaration', '--emitDeclarationOnly'], {
      stdio: 'inherit',
    }).on('error', err => {
      console.error(err);
      process.exit(1);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
