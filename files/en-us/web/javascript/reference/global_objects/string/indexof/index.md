---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.indexOf
---

{{JSRef}}

The **`indexOf()`** method of {{jsxref("String")}} values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

{{InteractiveExample("JavaScript Demo: String.indexOf()", "taller")}}

```js interactive-example
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
// Expected output: "The index of the second "dog" is 38"
```

## Syntax

```js-nolint
indexOf(searchString)
indexOf(searchString, position)
```

### Parameters

- `searchString`

  - : Substring to search for. All values are [coerced to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), so omitting it or passing `undefined` causes `indexOf()` to search for the string `"undefined"`, which is rarely what you want.

- `position` {{optional_inline}}

  - : The method returns the index of the first occurrence of the specified substring at a position greater than or equal to `position`, which defaults to `0`. If `position` is greater than the length of the calling string, the method doesn't search the calling string at all. If `position` is less than zero, the method behaves as it would if `position` were `0`.

    - `'hello world hello'.indexOf('o', -5)` returns `4` — because it causes the method to behave as if the second argument were `0`, and the first occurrence of `o` at a position greater or equal to `0` is at position `4`.

    - `'hello world hello'.indexOf('world', 12)` returns `-1` — because, while it's true the substring `world` occurs at index `6`, that position is not greater than or equal to `12`.

    - `'hello world hello'.indexOf('o', 99)` returns `-1` — because `99` is greater than the length of `hello world hello`, which causes the method to not search the string at all.

### Return value

The index of the first occurrence of `searchString` found, or `-1` if not found.

#### Return value when using an empty search string

Searching for an empty search string produces strange results. With no second argument, or with a second argument whose value is less than the calling string's length, the return value is the same as the value of the second argument:

```js
"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8
```

However, with a second argument whose value is greater than or equal to the string's length, the return value is the string's length:

```js
"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 13); // returns 11
"hello world".indexOf("", 22); // returns 11
```

In the former instance, the method behaves as if it found an empty string just after the position specified in the second argument. In the latter instance, the method behaves as if it found an empty string at the end of the calling string.

## Description

Strings are zero-indexed: The index of a string's first character is `0`, and the index of a string's last character is the length of the string minus 1.

```js
"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Wale"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10
```

The `indexOf()` method is case sensitive. For example, the following
expression returns `-1`:

```js
"Blue Whale".indexOf("blue"); // returns -1
```

### Checking occurrences

When checking if a specific substring occurs within a string, the correct way to check is test whether the return value is `-1`:

```js
"Blue Whale".indexOf("Blue") !== -1; // true; found 'Blue' in 'Blue Whale'
"Blue Whale".indexOf("Wale") !== -1; // false; no 'Wale' in 'Blue Whale'
```

## Examples

### Using indexOf()

The following example uses `indexOf()` to locate substrings in the string
`"Brave new world"`.

```js
const str = "Brave new world";

console.log(str.indexOf("w")); // 8
console.log(str.indexOf("new")); // 6
```

### indexOf() and case-sensitivity

The following example defines two string variables.

The variables contain the same string, except that the second string contains uppercase
letters. The first {{domxref("console/log_static", "console.log()")}} method displays `19`. But
because the `indexOf()` method is case sensitive, the string
`"cheddar"` is not found in `myCapString`, so the second
`console.log()` method displays `-1`.

```js
const myString = "brie, pepper jack, cheddar";
const myCapString = "Brie, Pepper Jack, Cheddar";

console.log(myString.indexOf("cheddar")); // 19
console.log(myCapString.indexOf("cheddar")); // -1
```

### Using indexOf() to count occurrences of a letter in a string

The following example sets `count` to the number of occurrences of the
letter `e` in the string `str`:

```js
const str = "To be, or not to be, that is the question.";
let count = 0;
let position = str.indexOf("e");

while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}

console.log(count); // 4
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
