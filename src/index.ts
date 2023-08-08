/**
 * Generates an integer between two values, inclusive.
 * @param min The minimum value
 * @param max The maximum value
 * @returns An integer between the min and max, inclusive.
 */
const getRandomInt = (min: number, max: number): number => {
    if (min > max) {
        throw new Error("min must be less than or equal to max");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Check whether a number is prime.
 * @param num The number to check if its prime.
 * @returns true if the number is prime, false otherwise.
 */
const isPrime = (num: number): boolean => {
    if (num <= 1) {
        return false;
    }

    if (num == 2 || num == 3) {
        return true;
    }

    if (num % 2 == 0 || num % 3 == 0) {
        return false;
    }

    for (let i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
    }

    return true;
}

export { getRandomInt, isPrime };