module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: "eslint:recommended",
  rules: {
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    quotes: [
      "error",
      "single"
    ],
    semi: [
      "error",
      "always"
    ],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "space-before-function-paren": 0,
    "no-useless-escape": 0,
    "no-unused-vars": process.env.NODE_ENV === "production" ? 2 : 1,
    "no-console": process.env.NODE_ENV === "production" ? 2 : 1
  }
};