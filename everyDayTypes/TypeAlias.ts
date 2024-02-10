type something = {
    something1: string,
    something2: number,
}

type union = string | number

// Note that aliases are only aliases - 
// you cannot use type aliases to create different/distinct “versions” of the same type. 
// When you use the alias, it’s exactly as if you had written the aliased type. 
// In other words, this code might look illegal, but is OK according to TypeScript because both types are aliases for the same type



type UserInputSanitizedString = string;

function sanitize(str: string) {
    return str
}
function sanitizeInput(str: string): UserInputSanitizedString {
    return sanitize(str);
}

// Create a sanitized input
let userInput = <string>sanitizeInput("test"); //angle bracket is type assertion 

// Can still be re-assigned with a string though
userInput = "new input";
