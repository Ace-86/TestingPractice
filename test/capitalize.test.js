const capitalizeLetter = require("./capitalize");
// const sum = require('./sum');

// describe("Capitalize", () => {
    test("Name", () => {
        expect(capitalizeLetter("foo")).toBe("Foo");
    });
    // test("Is Undefined", () => {
    //     expect(capitalizeLetter()).toBe("");
    // });
    // test("Is Null", () => {
    //     expect(capitalizeLetter(null)).toBe("");
    // });
// });