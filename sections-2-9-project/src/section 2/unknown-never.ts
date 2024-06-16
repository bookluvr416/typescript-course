let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') userName = userInput;

// never means that there's never a return (the throw always trumps)
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('test error', 500);
