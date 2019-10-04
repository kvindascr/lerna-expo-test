module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'react-app',
        'plugin:react/recommended',
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'react/display-name': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
        ],
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
