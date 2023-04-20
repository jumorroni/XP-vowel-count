const { jaguars_vowel_count } = require("../src/index");

test("test if the function retuns zero if the string is empty", () => {
    expect(jaguars_vowel_count("")).toBe(0);
});

test("verify if there is a vowel a", () => {
    expect(jaguars_vowel_count("a")).toBe(1);
});

test("verify if there is a vowel e", () => {
    expect(jaguars_vowel_count("e")).toBe(1);
});

test("verify if there is a vowel i", () => {
    expect(jaguars_vowel_count("i")).toBe(1);
});

test("verify if there is a vowel o", () => {
    expect(jaguars_vowel_count("o")).toBe(1);
});

test("verify if there is a vowel u", () => {
    expect(jaguars_vowel_count("u")).toBe(1);
});

test("count the number of 'a' in the string", () => {
    expect(jaguars_vowel_count("aaa")).toBe(3);
});

// test("empty string", () => {});