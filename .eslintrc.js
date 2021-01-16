module.exports = {
    env: {
        node: true,
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: './tsconfig.json',
            },
        },
    ],
    extends: ['eslint:recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
};
