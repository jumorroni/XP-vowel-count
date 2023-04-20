const { jaguars_vowel_count } = require("../src/index");

test("test if the function return true if the string is empty", () => {
    expect(jaguars_vowel_count("")).toBe(true);
});

test("verify if there is a vowel a", () => {
    expect(jaguars_vowel_count("a")).toBe(true);
});

test("verify if there is a vowel e", () => {
    expect(jaguars_vowel_count("e")).toBe(true);
});

test("verify if there is a vowel i", () => {
    expect(jaguars_vowel_count("i")).toBe(true);
});

test("verify if there is a vowel o", () => {
    expect(jaguars_vowel_count("o")).toBe(true);
});

test("verify if there is a vowel u", () => {
    expect(jaguars_vowel_count("u")).toBe(true);
});

test("count the number of 'a' in the string", () => {
    expect(jaguars_vowel_count("aaa")).toBe(3);
});

// test("empty string", () => {});