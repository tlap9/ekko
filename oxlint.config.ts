import { defineConfig } from 'oxlint'
import { julrPreset } from '@julr/tooling-configs/oxc/lint'

export default defineConfig({
  extends: [julrPreset({ perfectionist: true })],

  // TODO: remove once https://github.com/oxc-project/oxc/issues/10223 is fixed
  ignorePatterns: [
    'node_modules/**',
    'dist/**',
    'build/**',
    '*.yml',
  ],
})