const p1 = require('../src/p1');

describe('Problem 01', () => {
    it('should return 2 for p1(1, 3, 1)', () => {
        const result = p1(1, 3, 1);
        expect(result).toEqual(2);
    });

    it('should return 2 for p1(2, 4, 1)', () => {
        const result = p1(2, 4, 1);
        expect(result).toEqual(2);
    });

    it('should return 1 for p1(1, 2, 1)', () => {
        const result = p1(1, 2, 1);
        expect(result).toEqual(1);
    });

    it('should return 1 for p1(2, 4, 2)', () => {
        const result = p1(2, 4, 2);
        expect(result).toEqual(1);
    });

    it('should return 0 for p1(2, 1, 2)', () => {
        const result = p1(2, 1, 2);
        expect(result).toEqual(0);
    });

    it('should return 0 for p1(4, 1, 3)', () => {
        const result = p1(4, 1, 3);
        expect(result).toEqual(0);
    });
});