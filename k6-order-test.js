import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 10 }, // ramp up
    { duration: '20s', target: 10 }, // steady load
    { duration: '10s', target: 0 },  // ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% of requests < 2s
    http_req_failed: ['rate<=0.6'],     // error rate < 50%
  },
};

export default function () {
  const url = 'https://simple-grocery-store-api.glitch.me/orders';

  const payload = JSON.stringify({
    productId: 1,
    quantity: 1,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      // optional: kung gumana API mo
      // 'Authorization': 'Bearer YOUR_TOKEN'
    },
  };

  const res = http.post(url, payload, params);

  // ✅ validations
  check(res, {
    'status is 201 or 400': (r) => r.status === 201 || r.status === 400,
    'response time < 2s': (r) => r.timings.duration < 2000,
  });

  sleep(1);
}