const sendMail = require('../app/services/sendMail');

describe('sendMail', () => {
    it('should return a string', async () => {
        const response = await sendMail();
        expect(typeof response).toBe('string');
    });
});