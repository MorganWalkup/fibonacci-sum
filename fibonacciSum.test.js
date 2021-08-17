const fibonacciSum = require('./fibonacciSum');

describe('fibonnaciSum', () => {
    it('works for default arguments', () => {
        const result = fibonacciSum();
        expect(result).toBe(9227463);
    });

    it('does not include elements greater than maxElement', () => {
        const result = fibonacciSum(undefined, 5);
        const expected = 1 + 2 + 3 + 5;
        expect(result).toBe(expected);
    });

    it('applies the filter function before summing elements', () => {
        const isEven = (element) => element % 2 === 0;
        const result = fibonacciSum(isEven, 13);
        const expected = 2 + 8;
        expect(result).toBe(expected);
    });

    it('finds the sum of even elements less than 4,000,000', () => {
        const isEven = (element) => element % 2 === 0;
        const result = fibonacciSum(isEven, 4000000);
        const expected = 4613732;
        expect(result).toBe(expected);
    });
});