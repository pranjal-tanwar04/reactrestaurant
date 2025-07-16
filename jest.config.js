/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",

  // ✅ Important: Link to the setup file
  setupFiles: ["<rootDir>/jest.setup.js"],
};

module.exports = config;

