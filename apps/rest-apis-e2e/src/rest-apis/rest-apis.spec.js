import axios from 'axios';
describe('GET /api/health', () => {
  it('should return a healthy response', async () => {
    const res = await axios.get(`/api/health`);
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('uptime');
    expect(res.data).toHaveProperty('status', 'healthy');
  });
});
