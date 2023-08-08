import { getRandomInt, isPrime } from "../src/index";

test('getRandomInt positive', () => {
    const min = 0;
    const max = 5;
    const rand = getRandomInt(min, max);

    expect(rand).toBeLessThanOrEqual(max);
    expect(rand).toBeGreaterThanOrEqual(min);
})

test('getRandomInt negative', () => {
    const min = -5;
    const max = -2;
    const rand = getRandomInt(min, max);

    expect(rand).toBeLessThanOrEqual(max);
    expect(rand).toBeGreaterThanOrEqual(min);
})

test('getRandomInt bigger minimum than maximum', () => {
    const min = 10;
    const max = 2;

    expect(() => getRandomInt(min, max)).toThrow();
});

test('isPrime for a prime number', () => {
    expect(isPrime(1009)).toBe(true);
})

test('isPrime for a nonprime number', () => {
    expect(isPrime(2097)).toBe(false);
})