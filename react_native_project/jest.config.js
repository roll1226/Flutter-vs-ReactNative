// jest.config.js
module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testMatch: ["**/__tests__/**/*.(js|jsx|ts|tsx)"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^expo-router$": "<rootDir>/__mocks__/expo-router.ts",
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
