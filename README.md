# QA Test Automation Project

This project covers UI automation, API testing, and performance testing as part of the assessment.

---

## 🧪 Tools Used
- Cypress (UI Automation)
- Postman (API Testing)
- k6 (Performance Testing)

---

## 🌐 API Testing (Postman)

### Completed Tasks:
- Authenticate and retrieve access token
- Get list of products
- Attempt to create order
- Retrieve order details
- Added test assertions (status codes and response validation)

### Notes:
- Create Order endpoint returned "Missing Authorization header" despite valid setup.
- Multiple approaches were tested (Bearer Token, headers, cURL).
- Other endpoints are working as expected.

---

## ⚡ Performance Testing (k6)

### Test Details:
- Endpoint: POST /orders
- Simulated multiple virtual users
- Load pattern includes:
  - Ramp-up
  - Sustained load
  - Ramp-down

### Results:
- Response time is within acceptable range (95% under 2 seconds)
- Some requests failed due to API issues (authentication/instability)

### Command to Run:
```bash
& "C:\Program Files\k6\k6.exe" run k6-order-test.js