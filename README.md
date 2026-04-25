# QA Automation Project – GymLog (Playwright)

## 📌 About the project

This project contains automated end-to-end tests built with Playwright.

The tests are written for a live React SPA application:  
👉 https://gymlog-react-spa-1.vercel.app/

---

## 🧪 What is tested

- Homepage loads correctly
- Navigation between pages works
- Add page is accessible
- Full user flow (Home → Add → About → Home)
- Add page content/UI is visible
- External API response test

---

## ⚙️ Tech stack

- Playwright
- JavaScript
- Node.js
- GitHub
- VS Code

---

## 🌐 Browsers tested

- Chromium
- Firefox
- WebKit

---

## ▶️ How to run tests

bash

# Install dependencies

npm install

# Run all tests

npx playwright test

# Run tests with browser visible

npx playwright test --headed

# Open HTML test report

npx playwright show-report

# Run tests in UI mode (visual runner)

npx playwright test --ui

---

## 🎯 Purpose

I built this project to practice QA automation and understand how to test real frontend applications using Playwright.

This project demonstrates:

- End-to-end testing
- Cross-browser testing
- Real user flow testing
- API testing
