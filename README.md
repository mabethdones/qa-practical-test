# QA Test Automation Project

This project demonstrates end-to-end QA automation including UI testing, API testing, performance testing, and CI/CD integration.

---

## Tools Used

- Cypress – UI Automation
- Postman – API Testing
- k6 – Performance Testing
- GitHub Actions – CI/CD

---

## UI Automation (Cypress)

### Scope:
Automated key user flows of an e-commerce application.

### Test Scenarios:
- User login
- Product sorting (lowest & highest price)
- Add items to cart
- Checkout process
- Logout

### Highlights:
- Implemented assertions for UI validation
- Covered end-to-end user journey

---

## API Testing (Postman)

### Implemented Requests
- Authenticate API client and retrieve access token  
- Retrieve list of products  
- Create order (POST /orders)  
- Retrieve order details (GET /orders/{orderId})  

### Assertions
- Status code validation  
- Response structure validation  
- Key fields verification  

---

### Issue Encountered

The **Create Order** and **Get Order** endpoints consistently returned: 401 - Missing Authorization Header

---

### Investigation Performed

- Verified Bearer Token configuration in Postman  
- Used Authorization tab with `Bearer {{token}}`  
- Manually added Authorization headers  
- Confirmed token was correctly generated from authentication  
- Tested requests using cURL format  

---

### Conclusion

This project uses a **public API (Simple Grocery Store API)**.

Despite correct request configuration, the issue persisted. Since other endpoints (e.g., Get Products) worked using the same token, the problem is likely due to **API-side behavior or limitations**, not the request setup.

This demonstrates a real-world QA scenario where:
- The test setup is valid  
- The issue is reproducible  
- The defect should be reported rather than fixed by QA  

---

## Performance Testing (k6)

### Objective:
Simulate load on the Create Order endpoint.

### Test Configuration:
- Virtual Users: Up to 10
- Stages:
  - Ramp-up
  - Sustained load
  - Ramp-down

### Validation:
- Response time thresholds
- Error rate monitoring
- Basic checks for responses

### Results:
- Response time: 95% under 2 seconds
- Error rate observed (~50%) due to API issues

---

## CI/CD (GitHub Actions)

### Pipeline Includes:
- Cypress UI tests execution
- k6 performance test execution

### Features:
- Runs automatically on push
- Ensures continuous validation of test scripts

### Status:
All workflows passing

---

## Project Structure
qa-practical-test/
├── cypress/
├── k6-order-test.js
├── .github/workflows/ci-cd.yml
├── package.json
└── README.md

---

## Key Takeaways

- Demonstrated full QA workflow from UI to performance testing
- Implemented automated CI/CD pipeline
- Investigated and documented API issues effectively
- Applied validation and assertions across all test types

---

## Submission

GitHub Repository:
https://github.com/mabethdones/qa-practical-test