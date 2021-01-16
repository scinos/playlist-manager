module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.eslint.json',
    },
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
};
