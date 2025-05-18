// test-typescript.ts - Testing TypeScript configuration with underscore-prefixed variables

// This variable is used and should not trigger any warnings
const usedVariable = 'This variable is used';
console.log(usedVariable);

// This variable has an underscore prefix and should be ignored by ESLint
// even though it's never used
const _unusedVariable = 'This variable is not used';

// Function with parameter that has underscore prefix (should be ignored)
function testFunction(_ignoredParam: string, usedParam: number): number {
  return usedParam * 2;
}

// Call the function with both parameters
const result = testFunction('ignored', 42);
console.log(result);

// Destructuring with underscore prefix
const user = { name: 'John', age: 30, email: 'john@example.com' };
const { name: _userName, age, email: _userEmail } = user;
console.log(`The user is ${age} years old`);

// Array destructuring with underscore prefix
const [_first, second, _third] = [1, 2, 3];
console.log(`Second item: ${second}`);

// Try/catch with error parameter with underscore prefix
try {
  throw new Error('Test error');
} catch (_error) {
  console.log("An error occurred, but we don't need the error object");
}

// Class with underscore-prefixed parameter in constructor
class TestClass {
  private name: string;

  constructor(_id: string, name: string) {
    this.name = name;
  }

  greet(_prefix: string): string {
    return `Hello, ${this.name}`;
  }
}

// Export to make it a module
export { testFunction, TestClass };
