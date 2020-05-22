module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  rules: {
    // --- from eslint-config-standard-with-typescript
    camelcase: "off", // in favor of TypeScript rule
    indent: "off", // in favor of TypeScript rule
    "no-array-constructor": "off",
    "no-undef": "off", // TypeScript has this functionality by default
    "no-unused-vars": "off", // in favor of TypeScript rule
    "no-useless-constructor": "off",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: "first", body: 1 },
        FunctionExpression: { parameters: "first", body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: { delimiter: "semi" },
        singleline: { delimiter: "semi", requireLast: false },
      },
    ],
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-this-alias": ["error", { allowDestructuring: true }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "all",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/ban-ts-ignore": "off",

    // --- custom rules
    semi: ["error", "always"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "space-before-function-paren": ["error", "never"],
    "no-fallthrough": "error",
    "standard/no-callback-literal": "off",
    "max-classes-per-file": ["error", 1],
    "no-use-before-define": "off",
    "no-mixed-operators": "off",
    "no-console": "error",
    "no-useless-escape": "off",
    "@typescript-eslint/interface-name-prefix": [
      "error",
      { prefixWithI: "always" },
    ],

    // -- Enforce code style
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-multi-spaces": "error",
    "array-bracket-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "keyword-spacing": ["error", { before: true }],
    "object-curly-spacing": ["error", "always"],
    "block-spacing": "error",
    "space-before-blocks": "error",
    "brace-style": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-style": ["error", "last"],
    "multiline-comment-style": ["error", "starred-block"],
    "no-whitespace-before-property": "error",
    "padded-blocks": ["error", "never"],

    // - Improve code quality
    "max-lines-per-function": ["error", 50],
    "max-params": ["error", 3],
    yoda: "error",
    "no-var": "error",
    "prefer-const": "error",

    // - Avoid coding mistakes
    "no-return-assign": "error",
    "no-else-return": "error",
    "no-extra-bind": "error",
    "no-implied-eval": "error",
    "no-self-compare": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-unneeded-ternary": "error",
    "no-duplicate-imports": "error",
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off", //
      },
    },
  ],
};
