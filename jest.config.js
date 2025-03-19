<<<<<<< HEAD
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Make sure this points to your Next.js app root
});

const customJestConfig = {  // ✅ Ensure this variable is declared before being used
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    '^@/components/(.*)$': '<rootDir>/components/$1', // Adjust based on your project structure
  },
};

module.exports = createJestConfig(customJestConfig); // ✅ Use the correctly defined variable
=======
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',  // Alias for imports
    '\\.(css|scss|sass|less)$': 'jest-transform-stub', // Stub styles
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub', // Stub images
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }], // ✅ Transform ESM
  },
};

export default customJestConfig;
>>>>>>> f7c69cd8c6792c17fc0e04ee6f2d787f46c958a8
