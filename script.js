function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the formatted string is a palindrome
  for (let i = 0; i < formattedString.length / 2; i++) {
    if (formattedString[i] !== formattedString[formattedString.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Example usage
const input = "race a car";
console.log(isPalindrome(input)); // Output: false
