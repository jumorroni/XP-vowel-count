function jaguars_vowel_count(string) {
    var count = 0;

    if (string.includes("")) {
        return true;
    }

    if (string.includes("a")) {
        count = 1;
        return true;
    }

    if (string.includes("e")) {
        count = 1;
        return true;
    }

    if (string.includes("i")) {
        count = 1;
        return true;
    }

    if (string.includes("o")) {
        count = 1;
        return true;
    }

    if (string.includes("u")) {
        count = 1;
        return true;
    }

    for (var i = 0; i < string.length; i++) {
        if (string.includes(i) == "a") {
            count++;
        }
    }

    // return count;
}

module.exports = {
    jaguars_vowel_count,
};