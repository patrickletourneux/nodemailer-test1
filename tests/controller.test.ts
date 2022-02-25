const controller = require('../app/controllers/controller');

describe('Random number', () => {
    it('should return a number', () => {
        expect(typeof randomIndex(25)).toBe('number');
    });