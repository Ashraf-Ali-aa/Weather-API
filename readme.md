# Open Weather API Testing
This project implements API tests for the Open Weather using TypeScript, Fets and Jest.

## Features

- TypeScript implementation with full type safety via Fets
- Jest test framework with HTML reporting
- Docker support
- GitHub Actions CI/CD integration

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Running Tests
    ```
    npm test 
    ```

### Using Docker:
```
docker build -t api-tests .
docker run api-tests
```

## CI/CD Integration
- The project includes GitHub Actions configuration for automated testing on pull requests.
- Test results are uploaded as artifacts after each test run.
- To view the test results, you can navigate to the relevant GitHub Actions run and select the `Upload test report`.
- The artifact URL will contain a zip file with the full test report.