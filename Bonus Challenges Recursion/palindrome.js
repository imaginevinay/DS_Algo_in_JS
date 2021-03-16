// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome. Otherwise it returns false

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str[0] !== str[str.length-1]) return false
    return isPalindrome(str.slice(1, -1))
}

console.log(isPalindrome('awesome'))
