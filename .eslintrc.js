module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        'semi': ['error', 'never', { 'beforeStatementContinuationChars': 'never' }],
        'no-unexpected-multiline': 'error',
        'prettier/prettier': ['error', { 'singleQuote': true, 'semi': false }],
        'prettier/prettier': ['error', { 'bracketSpacing': true }],
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    }
};
