const {capitalizeLetter} = require("./capitalize");


    test("Name", () => {
        expect(capitalizeLetter("foo")).toBe("Foo");
    });
    test("Is Undefined", () => {
        expect(capitalizeLetter()).toBe("");
    }); 
    test("Is Null", () => {
        expect(capitalizeLetter(null)).toBe("");
    });
    test("All uppercase", () => {
        expect(capitalizeLetter("FOO")).toBe("Foo")
    })
    //to-do: add test for all letters capitalized
    //add test for numbers and characters (eliminating and creating new string)
    //add test for spaces in words
    //add test for first letter already capitalized