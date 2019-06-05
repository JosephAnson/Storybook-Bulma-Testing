module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor',
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: ['**/stories/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
    testURL: 'http://localhost/',
    transformIgnorePatterns: [
        '/node_modules/(?!(@storybook/.*\\.vue$))',
    ],
    moduleNameMapper: {
        "\\.(s?css|less)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'node'],
    setupFiles: ['<rootDir>/.jest/register-context.js'],
    globals: {
        "vue-jest": {
            hideStyleWarn: true,
            experimentalCSSCompile: true
        }
    }
};