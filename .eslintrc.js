module.exports = {
    root: true,
    extends: '@react-native-community',
    rules: {
        'semi': ['error', 'never', { 'beforeStatementContinuationChars': 'never' }],
        'no-unexpected-multiline': 'error',
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    }
};
