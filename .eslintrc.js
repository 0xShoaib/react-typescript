module.exports = {
    extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    plugins: ["react", "prettier", "@typescript-eslint"],
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-var-requires': 0,
    }
}