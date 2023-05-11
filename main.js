const str = `
226-536-4221
fhsaksalkhs@gmail.com
https://www.omdbapi.com/?apikey=3795
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const regexp = new RegExp('the', 'gi')

const regexplit = /fox/gi
// console.log(regexplit.test(str))

console.log(str.replace(regexplit, 'AAA'))

console.log(str.match(/\.$/gim))