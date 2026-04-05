import { defineConfig } from "oxfmt";

export default defineConfig({
    printWidth: 100,
    trailingComma: 'all',
    semi: false,
    useTabs: false,
    singleQuote: true,
    quoteProps: 'consistent',
    bracketSpacing: true,
    arrowParens: 'avoid',
    ignorePatterns: ['node_modules/**', 'dist/**', 'build/**', '*.yml'],
    htmlWhiteSpaceSensitivity: 'ignore'
})