/** Sums the elements of the fibonacci sequence matching the given filter.
 * @param {func} filterFunc Test function applied to each element.
 *   Return true to include the element in the sum
 * @param {number} maxElement The largest element value that should be
 *   included in the sum.
 * @return {number} The sum of all elements matching the filter
 */
function fibonacciSum(
    filterFunc = () => true,
    maxElement = 4000000,
) {
    let sum = 0;
    let nMinus2 = 1;
    let nMinus1 = 2;

    if (nMinus2 <= maxElement && filterFunc(nMinus2)) sum += nMinus2;
    if (nMinus1 <= maxElement && filterFunc(nMinus1)) sum += nMinus1;

    let n = nMinus2 + nMinus1;
    while (n <= maxElement) {
        if (filterFunc(n)) sum += n;
        nMinus2 = nMinus1;
        nMinus1 = n;
        n = nMinus2 + nMinus1;
    }

    return sum;
}

module.exports = fibonacciSum;