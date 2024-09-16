const p3 = require('../src/p3');

describe('Problem 03', () => {
    it('should return "31 days" for p3(1, 1995)', () => {
        const result = p3(1, 1995);
        expect(result).toEqual('31 days');
    });

    it('should print "31 days" for (7, 2000)', () => {
        const result = p3(7, 2000);
        expect(result).toEqual('31 days');
    });

    it('should print "30 days" for (9, 2019)', () => {
        const result = p3(9, 2019);
        expect(result).toEqual('30 days');
    });

    it('should print "30 days" for (4, 2004)', () => {
        const result = p3(4, 2004);
        expect(result).toEqual('30 days');
    });

    it('should print "28 days" for (2, 2007)', () => {
        const result = p3(2, 2007);
        expect(result).toEqual('28 days');
    });

    it('should print "29 days" for (2, 2016)', () => {
        const result = p3(2, 2016);
        expect(result).toEqual('29 days');
    });
});