module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["/Users/valdivia/Cursos/Mto-Coche/functions/tsconfig.json", "/Users/valdivia/Cursos/Mto-Coche/functions/tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignorar archivos generados.
    "/generated/**/*", // Ignorar archivos generados.
    "*.js" // Ignorar todos los archivos .js
  ],
  plugins: [
    "@typescript-eslint",
    "import",
  ],
  rules: {
    "quotes": ["error", "double"],
    "import/no-unresolved": 0,
    "indent": ["error", 2],
  },
};
