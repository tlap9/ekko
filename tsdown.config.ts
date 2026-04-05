import { defineConfig } from 'tsdown'

export default defineConfig({
    clean: true,
    dts: false,
    entry: [
        "src/index.ts"
    ],
    fixedExtension: false,
    format: "esm",
    minify: "dce-only",
    outDir: "./build",
    sourcemap: false,
    target: "esnext",
    treeshake: false,
    deps: {
        neverBundle: ["oxfmt", "oxlint"]
    }
})