/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  automock: false,
  moduleFileExtensions: [
    'js',
    'ts',
    'json'
  ],
  preset: 'ts-jest',
  setupFiles: ['./setupJest.js'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};