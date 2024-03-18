import { sum } from "../sum"

test("Sum Function should calculate the sum of two numbers", () => {
    const result = sum(3, 4);
    console.log(result);

    // Assertion
    expect(result).toBe(9);
});