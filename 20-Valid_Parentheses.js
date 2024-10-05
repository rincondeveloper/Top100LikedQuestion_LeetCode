var isValid = function (s) {
  const stack = [];
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) { // loop through the string
    if (bracketMap[char]) { // if the char is an opening bracket
      stack.push(char); // push it to the stack '(', '[', '{'
    } else {  // if the char is a closing bracket
      if (stack.length === 0) { // if the stack is empty, return false
        return false;
      }
      const lastOpenChar = stack.pop();
      if (bracketMap[lastOpenChar] !== char) {// if the lastOpenChar and the char don't match, return false
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
