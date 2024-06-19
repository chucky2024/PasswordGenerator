import generateRandomPassword from '../src/generatePassword';

/**
|--------------------------------------------------
| Helper function to test if a string contains only
| characters from a given set
|--------------------------------------------------
*/
const containsOnly = (str: string, chars: string): boolean => {
	for (let i = 0; i < str.length; i++) {
		if (!chars.includes(str[i])) {
			return false;
		}
	}
	return true;
};

const GENERATOR_CONFIG = {
	numbers: '0123456789',
	specialChars: '!@#$%^&*()_+[]{}|;:,.<>?',
	uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	lowercase: 'abcdefghijklmnopqrstuvwxyz',
};

/**
|--------------------------------------------------
| Test cases
|--------------------------------------------------
*/
describe('generateRandomPassword', () => {
	/**
	|--------------------------------------------------
	| Test with uppercase letters
	|--------------------------------------------------
	*/
	test('generates a password with only uppercase letters', () => {
		const password = generateRandomPassword(10, {
			uppercase: true,
		});
		expect(password.length).toBe(10);
		expect(containsOnly(password, GENERATOR_CONFIG.uppercase)).toBe(true);
	});
	/**
	|--------------------------------------------------
	| Test with lowercase letters
	|--------------------------------------------------
	*/
	test('generates a password with only lowercase letters', () => {
		const password = generateRandomPassword(12, {
			lowercase: true,
		});
		expect(password.length).toBe(12);
		expect(containsOnly(password, GENERATOR_CONFIG.lowercase)).toBe(true);
	});
	/**
	|--------------------------------------------------
	| Test with only numbers
	|--------------------------------------------------
	*/
	test('generates a password with only numbers', () => {
		const password = generateRandomPassword(8, {
			numbers: true,
		});
		expect(password.length).toBe(8);
		expect(containsOnly(password, '0123456789')).toBe(true);
	});
	/**
	|--------------------------------------------------
	| Test with only special characters
	|--------------------------------------------------
	*/
	test('generates a password with only special characters', () => {
		const password = generateRandomPassword(6, {
			specialChars: true,
		});
		expect(password.length).toBe(6);
		expect(containsOnly(password, GENERATOR_CONFIG.specialChars)).toBe(
			true
		);
	});
	/**
	|--------------------------------------------------
	| Test with a mix of all the characters
	|--------------------------------------------------
	*/
	test('generates a password with a mix of all character types', () => {
		const password = generateRandomPassword(16, {
			uppercase: true,
			lowercase: true,
			numbers: true,
			specialChars: true,
		});
		expect(password.length).toBe(16);
		expect(/[A-Z]/.test(password)).toBe(true);
		expect(/[a-z]/.test(password)).toBe(true);
		expect(/[0-9]/.test(password)).toBe(true);
		expect(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/.test(password)).toBe(true);
	});
	test('throws an error when no character types are selected', () => {
		expect(() => {
			generateRandomPassword(10, {});
		}).toThrow('At least one character type must be selected');
	});
});
