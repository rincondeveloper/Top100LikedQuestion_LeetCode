const strs = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];

let longestCommonPrefix = function (strs) {
  let res = "";

  for (let i = 0; strs[0].length > i; i++) { //This loops through the length of "flower"
    for (let s of strs) { //it takes the first element of the array = "flower"
      if (s.length === 1 || s[i] !== strs[0][i]) { 
        // we make sure s length is not 1 or if the letter at index i is not equal to the letter at first element of the array
        return res; // return empty string.
      }
    }
    res += strs[0][i]; // if the above if statement is not true, add the letter to the result on this line.
    console.log(res);
    // we can see how the first loop adds the fisrt letter, then the second loop adds the second letter.
  }
  return res;
};

console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));
