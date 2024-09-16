const p4 = require('../src/p4');

describe('Problem 04', () => {
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

    it('should print "Player wins" for Rock > Scissors', () => {
        Math.random.mockReturnValue(0.99);
        const result = p4(0);
        expect(result).toEqual('Player wins');
    });

    it('should print "Computer wins" for Rock < Paper', () => {
        Math.random.mockReturnValue(0.4);
        const result = p4(0);
        expect(result).toEqual('Computer wins');
    });

    it('should print "It\'s a draw" for Rock == Rock', () => {
        Math.random.mockReturnValue(0.01);
        const result = p4(0);
        expect(result).toEqual('It\'s a draw');
    });

    it('should print "Computer wins" for Paper < Scissors', () => {
        Math.random.mockReturnValue(0.8);
        const result = p4(1);
        expect(result).toEqual('Computer wins');
    });

    it('should print "It\'s a draw" for Paper == Paper', () => {
        Math.random.mockReturnValue(0.39);
        const result = p4(1);
        expect(result).toEqual('It\'s a draw');
    });

    it('should print "Player wins" for Paper > Rock', () => {
        Math.random.mockReturnValue(0.3);
        const result = p4(1);
        expect(result).toEqual('Player wins');
    });

    it('should print "It\'s a draw" for Scissors == Scissors', () => {
        Math.random.mockReturnValue(0.75);
        const result = p4(2);
        expect(result).toEqual('It\'s a draw');
    });

    it('should print "Player wins" for Scissors > Paper', () => {
        Math.random.mockReturnValue(0.6);
        const result = p4(2);
        expect(result).toEqual('Player wins');
    });

    it('should print "Computer wins" for Scissors < Rock', () => {
        Math.random.mockReturnValue(0.2);
        const result = p4(2);
        expect(result).toEqual('Computer wins');
    });
});