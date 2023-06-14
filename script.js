function checkPalindrome() {
  const inputString = document.getElementById('inputString').value;
  const formattedString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const result = document.getElementById('result');

  if (isPalindrome(formattedString)) {
    result.textContent = 'The string is a palindrome.';
  } else {
    result.textContent = 'The string is not a palindrome.';
  }
}

function isPalindrome(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
