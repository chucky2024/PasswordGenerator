"use strict";
/**
 * Question
 * Project Title: Random Password Generator Script with tests
 *
 * Description:
 * A Random Password Generator script to generate random passwords of a specified length and strength, containing a mix of uppercase,
 * letters, lowercase letters, numbers, and special characters. This project includes writing at least six (6) test cases
 *
 * Requirement:
 * A script that generates random passwords of variable length and strength.
 * At least 6 passing test cases testing the script logic
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
|--------------------------------------------------
| Password generator configuration
|--------------------------------------------------
*/
const GENERATOR_CONFIG = {
    numbers: '0123456789',
    specialChars: '!@#$%^&*()_+[]{}|;:,.<>?',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
};
const randomPasswordGenerator = (length, options) => {
    /**
    |--------------------------------------------------
    | initiating all the characters for the password
    |--------------------------------------------------
    */
    let allChars = '';
    /**
    |--------------------------------------------------
    | Checking the options for the password to include
    | the chosen characters
    |--------------------------------------------------
    */
    const chosen_options = Object.keys(options);
    for (const key of chosen_options) {
        allChars += GENERATOR_CONFIG[key];
    }
    /**
    |--------------------------------------------------
    | Throws an error if the user did not pass in any
    | option for the password generator
    |--------------------------------------------------
    */
    if (allChars.length === 0) {
        throw new Error('At least one character type must be selected');
    }
    let password = '';
    /**
    |--------------------------------------------------
    | Running a loop to generate the password based on
    | the options passed
    |--------------------------------------------------
    */
    for (let i = 0; i < length; i++) {
        /**
        |--------------------------------------------------
        | Choosing a random character from the list of all
        | available characters (allChars)
        |--------------------------------------------------
        */
        const randomIndex = Math.floor(Math.random() * allChars.length);
        /**
        |--------------------------------------------------
        | Adds the random character at the random index to
        | the password
        |--------------------------------------------------
        */
        password += allChars[randomIndex];
    }
    /**
    |--------------------------------------------------
    | Returns the generated password
    |--------------------------------------------------
    */
    return password;
};
exports.default = randomPasswordGenerator;
