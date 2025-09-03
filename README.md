# Website Automation Tests

This project contains automated tests for [s4e.io](https://s4e.io/) using [Playwright](https://playwright.dev/).

## Setup

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```
2. Install dependencies
   ```bash
   npm install
   npx playwright install
   ```

## Running Tests

1. Run in headless mode
   ```bash
   npx playwright test
   ```
2. Run in UI mode (with Playwright’s Test Runner UI):
   ```bash
   npx playwright test --ui
   ```
