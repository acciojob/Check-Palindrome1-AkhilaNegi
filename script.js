// complete the given function

function palindrome(str){
	let s = str.toLowerCase();
	let strr = s.split('').reverse().join('');
	// alert(strr);
	if(s === strr){ 
		return true;
	}
	return false;
}

let res = palindrome("Racecar")
console.log(res);

module.exports = palindrome