// SOLVED! ALSO TRY TO DO IT YOURSELF! SOLVED!

const SearchingChallenge = (str) => {
  const K = +str.substr(0, 1); // Get constant K
  const searchString = str.substr(1); // Get the search string
  const substrings = generateSubstrings(searchString); // Generate substrings

  // Return all substrings with K number of unique characters
  const uniqueSubstrings = substrings.filter((substring) => {
    const splitSubstring = substring.split("");
    const unique = [];
    for (let i = 0; i < substring.length; i++) {
      if (
        substring[i] === splitSubstring[i] &&
        !unique.includes(substring[i])
      ) {
        unique.push(substring[i]);
      }
    }

    return unique.length === K; // True or false
  });

  return `The longest substring with ${K} unique character(s) is ${findLongestString(
    uniqueSubstrings
  )}`;
};

// Generate all possible substrings of a string
const generateSubstrings = (str) => {
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    substrings.push(str[i]);
    for (let j = i + 1; j < str.length; j++) {
      substrings.push(substrings[substrings.length - 1] + str[j]);
    }
  }

  return substrings;
};

// Find the longest string in an array
const findLongestString = (arrString) => {
  let maxLength = arrString[0].length;
  let maxString = arrString[0];
  for (let i = 0; i < arrString.length; i++) {
    let itrMax = arrString[i].length;
    if (itrMax > maxLength) {
      maxLength = itrMax;
      maxString = arrString[i];
    }
  }
  return maxString;
};

//////////////////////////////////////////

const STRING = "3aabbacbaa";

const searchResult = SearchingChallenge("3aabbacbaa");

console.log(searchResult);
