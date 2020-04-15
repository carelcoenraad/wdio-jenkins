# WebdriverIO/Jenkins

Demonstrate the usage of WebdriverIO in a Jenkins pipeline.

## Getting Started

### Prerequisites

- Docker
- Node.js (LTS or newer)
- NPM

### Installing

Install dependencies

```bash
npm install
```

### Testing

Run tests with `chromedriver`

```bash
npm test
```

Run tests with Selenium

```bash
# Start Selenium Grid Hub detached
docker-compose up -d

# Run tests
npm run test:selenium
```

Run reporting

```bash
npm run test:report
```

## TODO

- [ ] Setup Jenkins with Selenium Grid Hub
- [ ] Setup multiple environments (dev/tst/acc/prd)
- [ ] Setup parameterized tests
- [ ] Setup secrets usage (e.g. login page)
- [ ] Setup test suites
