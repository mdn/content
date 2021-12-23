---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.indexOf
---
{{JSRef}}

The **`indexOf()`** method returns the
index within the calling {{jsxref("String")}} object of the first occurrence of the
specified value, starting the search at `fromIndex`. Returns
`-1` if the value is not found.

{{EmbedInteractiveExample("pages/js/string-indexof.html")}}

> **Note:** For the Array method, see
> {{jsxref("Array.prototype.indexOf()")}}.

## Syntax

```js
indexOf(searchValue)
indexOf(searchValue, fromIndex)
```

### Parameters

- `searchValue`

  - : The string value to search for.

    If no string is explicitly provided, [_searchValue_ will be
    coerced to "`undefined`"](https://tc39.github.io/ecma262/#sec-tostring), and this value will be searched for in
    `str`.

    So, for example: `'undefined'.indexOf()` will return `0`, as
    `undefined` is found at position `0` in the string
    `undefined`. `'undefine'.indexOf()` however will return
    `-1`, as `undefined` is not found in the string
    `undefine`.

- _`fromIndex`_ {{optional_inline}}

  - : An integer representing the index at which to start the search. Defaults to
    `0`.

    For _`fromIndex`_ values lower than `0`, or greater
    than `str.length`, the search starts at index `0`
    and `str.length`, respectively.

    For example, `'hello world'.indexOf('o', -5)` will return
    `4`, as it starts at position `0`, and `o` is found
    at position `4`. On the other hand,
    `'hello world'.indexOf('o', 11)` (and with any `fromIndex`
    value greater than `11`) will return `-1`, as the search is
    started at position `11`, a position _after_ the end of the
    string.

### Return value

The index of the first occurrence of `searchValue`, or
**`-1`** if not found.

An empty string `searchValue` produces strange results. With no
`fromIndex` value, or any `fromIndex` value
lower than the string's `length`, the returned value is the same as the
`fromIndex` value:

```js
'hello world'.indexOf('') // returns 0
'hello world'.indexOf('', 0) // returns 0
'hello world'.indexOf('', 3) // returns 3
'hello world'.indexOf('', 8) // returns 8
```

However, with any `fromIndex` value equal to or greater than the
string's `length`, the returned value _is_ the string's
`length`:

```js
'hello world'.indexOf('', 11) // returns 11
'hello world'.indexOf('', 13) // returns 11
'hello world'.indexOf('', 22) // returns 11
```

In the former instance, JS seems to find an empty string just after the specified index
value. In the latter instance, JS seems to be finding an empty string at the end of the
searched string.

## Description

Characters in a string are indexed from left to right. The index of the first character
is `0`, and the index of the last character of a string called
`stringName` is `stringName.length - 1`.

```js
'Blue Whale'.indexOf('Blue')      // returns  0
'Blue Whale'.indexOf('Blute')     // returns -1
'Blue Whale'.indexOf('Whale', 0)  // returns  5
'Blue Whale'.indexOf('Whale', 5)  // returns  5
'Blue Whale'.indexOf('Whale', 7)  // returns -1
'Blue Whale'.indexOf('')          // returns  0
'Blue Whale'.indexOf('', 9)       // returns  9
'Blue Whale'.indexOf('', 10)      // returns 10
'Blue Whale'.indexOf('', 11)      // returns 10
```

The `indexOf()` method is case sensitive. For example, the following
expression returns `-1`:

```js
'Blue Whale'.indexOf('blue')  // returns -1
```

### Checking occurrences

Note that `0` doesn't evaluate to `true` and `-1`
doesn't evaluate to `false`. Therefore, when checking if a specific string
exists within another string, the correct way to check would be:

```js
'Blue Whale'.indexOf('Blue') !== -1  // true
'Blue Whale'.indexOf('Bloe') !== -1  // false
```

## Examples

### Using `indexOf()`

The following example uses `indexOf()` to locate values in the string
`"Brave new world"`.

```js
const str = 'Brave new world'

console.log('Index of first w from start is ' + str.indexOf('w'))   // logs 8
console.log('Index of "new" from start is ' + str.indexOf('new'))   // logs 6
```

### `indexOf()` and case-sensitivity

The following example defines two string variables.

The variables contain the same string, except that the second string contains uppercase
letters. The first {{domxref("console.log()")}} method displays `19`. But
because the `indexOf()` method is case sensitive, the string
"`cheddar`" is not found in `myCapString`, so the second
`console.log()` method displays `-1`.

```js
const myString    = 'brie, pepper jack, cheddar'
const myCapString = 'Brie, Pepper Jack, Cheddar'

console.log('myString.indexOf("cheddar") is ' + myString.indexOf('cheddar'))
// logs 19
console.log('myCapString.indexOf("cheddar") is ' + myCapString.indexOf('cheddar'))
// logs -1
```

### Using `indexOf()` to count occurrences of a letter in a string

The following example sets `count` to the number of occurrences of the
letter `e` in the string `str`:

```js
const str = 'To be, or not to be, that is the question.'
let count = 0
let position = str.indexOf('e')

while (position !== -1) {
  count++
  position = str.indexOf('e', position + 1)
}

console.log(count)  // displays 4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
