const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should resturn 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should resturn 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})