// module.exports = {
//   setupFilesAfterEnv: ['./jest.setup.js'],
//   testMatch: ['**/*.test.ts', '**/*.test.tsx'],
//   verbose: true,
//   moduleNameMapper: {
//     '^~/(.*)': '<rootDir>/src/$1',
//   },
// };

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/src/spec/tsconfig.json',
    },
  },
};
