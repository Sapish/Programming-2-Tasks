import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------

function formatName(name) {
    if(typeof name !== 'string') {
        return null;
    }

    const trimmedName = name.trim();
    
    if (trimmedName === "") {
        return "";
    }

    const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 '";

    for (let i = 0; i < trimmedName.length; i++) {
        const char = trimmedName[i];
        if (!allowedChars.includes(char)) {
            return null;
        }
    }
    const lowerCaseName = trimmedName.toLowerCase();
    const words = lowerCaseName.split(' ');
    const capitalizeWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizeWords.push(capitalizeWord);
    }
    const formattedName = capitalizeWords.join(' ');
    return formattedName;
}


//#endregion





//#region Tests --------------------------------------------------------------------
const tests = test("Test for formatName function")

tests.isEqual(formatName(1337), null, "The input should return null");
tests.isEqual(formatName([]), null, "An array should return null");
tests.isEqual(formatName(false), null, "Boolean should return null");

tests.isEqual(formatName("   john doe   "), "John Doe", "leading or trailing spaces should be removed");
tests.isEqual(formatName("john doe  "), "John Doe", "trailing spaces should be removed");
tests.isEqual(formatName("   john doe"), "John Doe", "leading spaces should be removed");

tests.isEqual(formatName("john@doe"), null, "if @ is included then return null");
tests.isEqual(formatName("john!doe"), null, "if ! is included then return null");
tests.isEqual(formatName("john-doe"), null, "if - is included then return null");
tests.isEqual(formatName("|johndoe|"), null, "if | is included then return null");
tests.isEqual(formatName("?????johndoe"), null, "if ? is included then return null");
tests.isEqual(formatName("john { doe ]"), null, "if { or ] is included then return null");
tests.isEqual(formatName("john doe1337"), "John Doe1337", "if 1337 is included then it will be formatted and allowed");

tests.isEqual(formatName(""), "", "An empty string should return an empty string");

tests.isEqual(formatName("john doe"), "John Doe", "The first letter in first and last name should be uppercase");
tests.isEqual(formatName("JOHN DOE"), "John Doe", "The first letter in first and last name should be uppercase");
tests.isEqual(formatName("joHn DOE"), "John Doe", "The first letter in first and last name should be uppercase");
tests.isEqual(formatName("john doe"), "John Doe", "The first letter in first and last name should be uppercase");

//#endregion