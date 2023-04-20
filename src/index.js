function jaguars_vowel_count(string) {
    var count = 0;

    if (string.includes("a")) {
        count = 1;
    }

    if (string.includes("e")) {
        count = 1;
    }

    if (string.includes("i")) {
        count = 1;
    }

    if (string.includes("o")) {
        count = 1;
    }

    if (string.includes("u")) {
        count = 1;
    }

    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == "a") {
            count++;
        }
    }

    return count;
}

module.exports = {
    jaguars_vowel_count,
};