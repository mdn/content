---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
page-type: javascript-instance-method
browser-compat: javascript.builtins.String.split
---

{{JSRef}}

The **`split()`** method of {{jsxref("String")}} values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}

## Syntax

```js-nolint
split(separator)
split(separator, limit)
```

### Parameters

- `separator`
  - : The pattern describing where each split should occur. Can be `undefined`, a string, or an object with a [`Symbol.split`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) method — the typical example being a {{jsxref("Global_Objects/RegExp", "regular expression", "", 1)}}. Omitting `separator` or passing `undefined` causes `split()` to return an array with the calling string as a single element. All values that are not `undefined` or objects with a `@@split` method are [coerced to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion).
- `limit` {{optional_inline}}
  - : A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified `separator`, but stops when `limit` entries have been placed in the array. Any leftover text is not included in the array at all.
    - The array may contain fewer entries than `limit` if the end of the string is reached before the limit is reached.
    - If `limit` is `0`, `[]` is returned.

### Return value

An {{jsxref("Array")}} of strings, split at each point where the `separator` occurs in the given string.

## Description

If `separator` is a non-empty string, the target string is split by all matches of the `separator` without including `separator` in the results. For example, a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like `myString.split("\t")`. If `separator` contains multiple characters, that entire character sequence must be found in order to split. If `separator` appears at the beginning (or end) of the string, it still has the effect of splitting, resulting in an empty (i.e. zero length) string appearing at the first (or last) position of the returned array. If `separator` does not occur in `str`, the returned array contains one element consisting of the entire string.

If `separator` is an empty string (`""`), `str` is converted to an array of each of its UTF-16 "characters", without empty strings on either ends of the resulting string.

> **Note:** `"".split("")` is therefore the only way to produce an empty array when a string is passed as `separator`.

> **Warning:** When the empty string (`""`) is used as a separator, the string is **not** split by _user-perceived characters_ ([grapheme clusters](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) or unicode characters (code points), but by UTF-16 code units. This destroys [surrogate pairs](https://unicode.org/faq/utf_bom.html#utf16-2). See ["How do you get a string to a character array in JavaScript?" on StackOverflow](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402).

If `separator` is a regexp that matches empty strings, whether the match is split by UTF-16 code units or Unicode code points depends on if the regex is [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode).

```js
"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]
```

If `separator` is a regular expression with capturing groups, then each time `separator` matches, the captured groups (including any `undefined` results) are spliced into the output array. This behavior is specified by the regexp's [`Symbol.split`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) method.

If `separator` is an object with a [`Symbol.split`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) method, that method is called with the target string and `limit` as arguments, and `this` set to the object. Its return value becomes the return value of `split`.

Any other value will be coerced to a string before being used as separator.

## Examples

### Using split()

When the string is empty and a non-empty separator is specified, `split()` returns `[""]`. If the string and separator are both empty strings, an empty array is returned.

```js
const emptyString = "";

// string is empty and separator is non-empty
console.log(emptyString.split("a"));
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []
```

The following example defines a function that splits a string into an array of strings
using `separator`. After splitting the string, the function logs
messages indicating the original string (before the split), the separator used, the
number of elements in the array, and the individual array elements.

```js
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);

  console.log("The original string is:", stringToSplit);
  console.log("The separator is:", separator);
  console.log(
    "The array has",
    arrayOfStrings.length,
    "elements:",
    arrayOfStrings.join(" / "),
  );
}

const tempestString = "Oh brave new world that has such people in it.";
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const space = " ";
const comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
```

This example produces the following output:

```plain
The original string is: "Oh brave new world that has such people in it."
The separator is: " "
The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it.

The original string is: "Oh brave new world that has such people in it."
The separator is: "undefined"
The array has 1 elements: Oh brave new world that has such people in it.

The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
The separator is: ","
The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec
```

### Removing spaces from a string

In the following example, `split()` looks for zero or more spaces, followed
by a semicolon, followed by zero or more spaces—and, when found, removes the spaces and
the semicolon from the string. `nameList` is the array returned as a result
of `split()`.

```js
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);
```

This logs two lines; the first line logs the original string, and the second line logs
the resulting array.

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

### Returning a limited number of splits

In the following example, `split()` looks for spaces in a string and returns
the first 3 splits that it finds.

```js
const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]
```

### Splitting with a `RegExp` to include parts of the separator in the result

If `separator` is a regular expression that contains capturing
parentheses `( )`, matched results are included in the array.

```js
const myString = "Hello 1 word. Sentence number 2.";
const splits = myString.split(/(\d)/);

console.log(splits);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]
```

> **Note:** `\d` matches the [character class](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) for digits between 0 and 9.

### Using a custom splitter

An object with a `Symbol.split` method can be used as a splitter with custom behavior.

The following example splits a string using an internal state consisting of an incrementing number:

```js
const splitByNumber = {
  [Symbol.split](str) {
    let num = 1;
    let pos = 0;
    const result = [];
    while (pos < str.length) {
      const matchPos = str.indexOf(num, pos);
      if (matchPos === -1) {
        result.push(str.substring(pos));
        break;
      }
      result.push(str.substring(pos, matchPos));
      pos = matchPos + String(num).length;
      num++;
    }
    return result;
  },
};

const myString = "a1bc2c5d3e4f";
console.log(myString.split(splitByNumber)); // [ "a", "bc", "c5d", "e", "f" ]
```

The following example uses an internal state to enforce certain behavior, and to ensure a "valid" result is produced.

```js
const DELIMITER = ";";

// Split the commands, but remove any invalid or unnecessary values.
const splitCommands = {
  [Symbol.split](str, lim) {
    const results = [];
    const state = {
      on: false,
      brightness: {
        current: 2,
        min: 1,
        max: 3,
      },
    };
    let pos = 0;
    let matchPos = str.indexOf(DELIMITER, pos);

    while (matchPos !== -1) {
      const subString = str.slice(pos, matchPos).trim();

      switch (subString) {
        case "light on":
          // If the `on` state is already true, do nothing.
          if (!state.on) {
            state.on = true;
            results.push(subString);
          }
          break;

        case "light off":
          // If the `on` state is already false, do nothing.
          if (state.on) {
            state.on = false;
            results.push(subString);
          }
          break;

        case "brightness up":
          // Enforce a brightness maximum.
          if (state.brightness.current < state.brightness.max) {
            state.brightness.current += 1;
            results.push(subString);
          }
          break;

        case "brightness down":
          // Enforce a brightness minimum.
          if (state.brightness.current > state.brightness.min) {
            state.brightness.current -= 1;
            results.push(subString);
          }
          break;
      }

      if (results.length === lim) {
        break;
      }

      pos = matchPos + DELIMITER.length;
      matchPos = str.indexOf(DELIMITER, pos);
    }

    // If we broke early due to reaching the split `lim`, don't add the remaining commands.
    if (results.length < lim) {
      results.push(str.slice(pos).trim());
    }

    return results;
  },
};

const commands =
  "light on; brightness up; brightness up; brightness up; light on; brightness down; brightness down; light off";
console.log(commands.split(splitCommands, 3)); // ["light on", "brightness up", "brightness down"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `String.prototype.split` in `core-js` with fixes and implementation of modern behavior like `Symbol.split` support](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.join()")}}
- [Using regular expressions in JavaScript](/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
