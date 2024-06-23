// jest.config.js
module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^expo-router$": "<rootDir>/__mocks__/expo-router.(js|jsx|ts|tsx)",
  },
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
};
