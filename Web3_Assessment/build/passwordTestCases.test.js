"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generatePassword_1 = __importDefault(require("./generatePassword"));
/**
|--------------------------------------------------
| Helper function to test if a string contains only
| characters from a given set
|--------------------------------------------------
*/
const containsOnly = (str, chars) => {
    for (let i = 0; i < str.length; i++) {
        if (!chars.includes(str[i])) {
            return false;
        }
    }
    return true;
};
/**
|--------------------------------------------------
| Test cases
|--------------------------------------------------
*/
const testCases = () => {
    console.log('Running tests...');
    const GENERATOR_CONFIG = {
        numbers: '0123456789',
        specialChars: '!@#$%^&*()_+[]{}|;:,.<>?',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
    };
    /**
    |--------------------------------------------------
    | Test 1: Generate a password with only uppercase letters
    |--------------------------------------------------
    */
    const password1 = (0, generatePassword_1.default)(10, {
        uppercase: true,
    });
    console.assert(password1.length === 10, 'Test 1 failed: Incorrect length');
    console.assert(containsOnly(password1, GENERATOR_CONFIG.uppercase), 'Test 1 failed: Contains characters outside uppercase letters');
    /**
    |--------------------------------------------------
    | Test 2: Generate a password with only lowercase
    | letters
    |--------------------------------------------------
    */
    const password2 = (0, generatePassword_1.default)(12, {
        lowercase: true,
    });
    console.assert(password2.length === 12, 'Test 2 failed: Incorrect length');
    console.assert(containsOnly(password2, GENERATOR_CONFIG.lowercase), 'Test 2 failed: Contains characters outside lowercase letters');
    /**
    |--------------------------------------------------
    | Test 3: Generate a password with only numbers
    |--------------------------------------------------
    */
    const password3 = (0, generatePassword_1.default)(8, {
        numbers: true,
    });
    console.assert(password3.length === 8, 'Test 3 failed: Incorrect length');
    console.assert(containsOnly(password3, GENERATOR_CONFIG.numbers), 'Test 3 failed: Contains characters outside numbers');
    /**
    |--------------------------------------------------
    | Test 4: Generate a password with only special
    | characters
    |--------------------------------------------------
    */
    const password4 = (0, generatePassword_1.default)(6, {
        specialChars: true,
    });
    console.assert(password4.length === 6, 'Test 4 failed: Incorrect length');
    console.assert(containsOnly(password4, GENERATOR_CONFIG.specialChars), 'Test 4 failed: Contains characters outside special characters');
    /**
    |--------------------------------------------------
    | Test 5: Generate a password with a mix of all
    | character types
    |--------------------------------------------------
    */
    const password5 = (0, generatePassword_1.default)(16, {
        uppercase: true,
        lowercase: true,
        numbers: true,
        specialChars: true,
    });
    console.assert(password5.length === 16, 'Test 5 failed: Incorrect length');
    console.assert(/[A-Z]/.test(password5), 'Test 5 failed: Missing uppercase letter');
    console.assert(/[a-z]/.test(password5), 'Test 5 failed: Missing lowercase letter');
    console.assert(/[0-9]/.test(password5), 'Test 5 failed: Missing number');
    console.assert(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password5), 'Test 5 failed: Missing special character');
    /**
    |--------------------------------------------------
    | Test 6: Error when no character types are selected
    |--------------------------------------------------
    */
    try {
        (0, generatePassword_1.default)(10, {});
        console.assert(false, 'Test 6 failed: Did not throw error when no character types selected');
    }
    catch (e) {
        console.assert(e.message === 'At least one character type must be selected', 'Test 6 failed: Incorrect error message');
    }
    console.log('All tests passed!');
};
testCases();
