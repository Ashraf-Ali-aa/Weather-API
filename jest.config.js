/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  setupFiles: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: ["ts", "js"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Weather API Test Report",
        outputPath: "./test-report.html",
        includeFailureMsg: true,
      },
    ],
  ],
};
