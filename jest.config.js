module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy'
    }
  };