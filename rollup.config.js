export default {
  input: "src/index.js",
  output: [
    {
      file: "build/bundle.cjs.js",
      format: "cjs",
      sourcemap: "inline"
    },

    {
      file: "build/bundle.js",
      format: "iife",
      name: "Compiler",
      sourcemap: "inline"
    }
  ]
};