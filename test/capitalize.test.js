const capitalizeLetter = require("./capitalize");


    test("Name", () => {
        expect(capitalizeLetter("foo")).toBe("Foo");
    });
    test("Is Undefined", () => {
        expect(capitalizeLetter()).toBe("");
    }); 
    test("Is Null", () => {
        expect(capitalizeLetter(null)).toBe("");
    });
