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
    test("Including Symbols", () => {
        expect(capitalizeLetter("$foo")).toBe("Foo")
    })
    test("1st Letter only Capitalized", () => {
        expect(capitalizeLetter("FooF")).toBe("Foof")
    })
