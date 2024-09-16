const p2 = require('../src/p2');

describe('Problem 02', () => {
    let originalRandom;

    // Story copy of original math.random
    beforeAll(() => {
        originalRandom = Math.random;
    });

    beforeEach(() => {
        Math.random = jest.fn();
    });

    afterAll(() => {
        Math.random = originalRandom;
    });

    it('should print "January" for random number 0.01', () => {
        Math.random.mockReturnValue(0.01);
        const result = p2();
        expect(result).toEqual('January');
    });

    it('should print "April" for random number 0.3', () => {
        Math.random.mockReturnValue(0.3);
        const result = p2();
        expect(result).toEqual('April');
    });

    it('should print "October for random number 0.8', () => {
        Math.random.mockReturnValue(0.8);
        const result = p2();
        expect(result).toEqual('October');
    })

    it('should print "December" for random number 0.99', () => {
        Math.random.mockReturnValue(0.99);
        const result = p2();
        expect(result).toEqual('December');
    });
});