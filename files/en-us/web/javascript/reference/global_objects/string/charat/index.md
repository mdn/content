---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
browser-compat: javascript.builtins.String.charAt
---
{{JSRef}}

The {{jsxref("String")}} object's
**`charAt()`** method returns a new string consisting of the
single UTF-16 code unit located at the specified offset into the string.

{{EmbedInteractiveExample("pages/js/string-charat.html", "shorter")}}

## Syntax

```js
charAt(index)
```

### Parameters

- `index`
  - : An integer between `0` and `str.length - 1`. If the
    `index` cannot be converted to the integer or no
    `index` is provided, the default is `0`, so the first
    character of `str` is returned.

### Return value

A string representing the character (exactly one UTF-16 code unit) at the specified
`index`. If `index` is out of range,
`charAt()` returns an empty string.

## Description

Characters in a string are indexed from left to right. The index of the first character
is `0`, and the index of the last character—in a string called
`stringName`—is `stringName.length - 1`. If
the `index` you supply is out of this range, JavaScript returns an
empty string.

If no `index` is provided to `charAt()`, the default
is `0`.

## Examples

### Displaying characters at different locations in a string

The following example displays characters at different locations in the string
"`Brave new world`":

```js
const anyString = 'Brave new world';
console.log(`The character at index 0   is '${anyString.charAt()}'`);
// No index was provided, used 0 as default

console.log(`The character at index 0   is '${anyString.charAt(0)}'`);
console.log(`The character at index 1   is '${anyString.charAt(1)}'`);
console.log(`The character at index 2   is '${anyString.charAt(2)}'`);
console.log(`The character at index 3   is '${anyString.charAt(3)}'`);
console.log(`The character at index 4   is '${anyString.charAt(4)}'`);
console.log(`The character at index 999 is '${anyString.charAt(999)}'`);
```

These lines display the following:

```
The character at index 0   is 'B'

The character at index 0   is 'B'
The character at index 1   is 'r'
The character at index 2   is 'a'
The character at index 3   is 'v'
The character at index 4   is 'e'
The character at index 999 is ''
```

### Getting whole characters

The following provides a means of ensuring that going through a string loop always
provides a whole character, even if the string contains characters that are not in the
Basic Multi-lingual Plane.

```js
const str = 'A\uD87E\uDC04Z';  // We could also use a non-BMP character directly
for (let i = 0; i < str.length; i++) {
  let chr;
  [chr, i] = getWholeCharAndI(str, i);

  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning an array with the individual character
  // and 'i' value (only changed if a surrogate pair)

  console.log(chr);
}

function getWholeCharAndI(str, i) {
  const code = str.charCodeAt(i);

  if (Number.isNaN(code)) {
    return '';  // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return [str.charAt(i), i];  // Normal character, keeping 'i' the same
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= (i + 1)) {
      throw new Error('High surrogate without following low surrogate');
    }
    const next = str.charCodeAt(i + 1)
    if (next < 0xDC00 || next > 0xDFFF) {
      throw new Error('High surrogate without following low surrogate');
    }
    return [str.charAt(i) + str.charAt(i + 1), i + 1];
  }

  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw new Error('Low surrogate without preceding high surrogate');
  }

  const prev = str.charCodeAt(i - 1);

  // (could change last hex to 0xDB7F to treat high private surrogates
  // as single characters)
  if (prev < 0xD800 || prev > 0xDBFF) {
    throw new Error('Low surrogate without preceding high surrogate');
  }

  // Return the next character instead (and increment)
  return [str.charAt(i + 1), i + 1];
}
```

### Fixing charAt() to support non-Basic-Multilingual-Plane (BMP) characters

While the previous example may be more useful for programs that must support non-BMP
characters (since it does not require the caller to know where any non-BMP character
might appear), in the event that one _does_ wish, in choosing a character by
index, to treat the surrogate pairs within a string as the single characters they
represent, one can use the following:

```js
function fixedCharAt(str, idx) {
  str = String(str);

  const surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while (surrogatePairs.exec(str) !== null) {
    const lastIdx = surrogatePairs.lastIndex;
    if (lastIdx - 2 < idx) {
      idx++;
    } else {
      break;
    }
  }

  if (idx >= str.length || idx < 0) {
    return '';
  }

  let ret = str.charAt(idx);

  if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))) {
    // Go one further, since one of the "characters" is part of a surrogate pair
    ret += str.charAt(idx + 1);
  }
  return ret;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript has a Unicode problem – Mathias Bynens](https://mathiasbynens.be/notes/javascript-unicode)
