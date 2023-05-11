# RegExp

Regular Expression

## Role

- search
- replace
- extract

## Test sites

https://regexr.com/

## regular expression

```js
//constructor
new RegExp('exp','option')
new RegExp('[a-z]','gi')

// Literal
/expression/option
/[a-z]/gi

```

## example

```js
const str = `
226-536-4221
fhsaksalkhs@gmail.com
https://www.omdbapi.com/?apikey=3795
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
```

## method

method | grammar | explanation
--|--|--
test | `regexp.test(string)` | Boolean match | Array
match | `str.match(regexp)` | Array 
replace | `str.replace(regex, str)` | str replace

## flag(option)

flag | explanation
--|--
g | global
i | ignore case
m | multi line