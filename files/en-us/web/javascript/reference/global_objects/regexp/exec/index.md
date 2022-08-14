---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.exec
---
{{JSRef}}

The **`exec()`** method executes a search for a match in a specified string and returns a result array, or [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## Syntax

```js
exec(str)
```

### Parameters

- `str`
  - : The string against which to match the regular expression.

### Return value

If the match fails, the `exec()` method returns [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null), and sets the regex's [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) to `0`.

If the match succeeds, the `exec()` method returns an array and updates the [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) property of the regular expression object. The returned array has the matched text as the first item, and then one item for each capturing group of the matched text. The array also has the following additional properties:

- `index`
  - : The 0-based index of the match in the string.
- `input`
  - : The original string that was matched against.
- `groups`
  - : An object of named capturing groups whose keys are the names and values are the capturing groups or {{jsxref("undefined")}} if no named capturing groups were defined. See [capturing groups](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences) for more information.
- `indices` {{optional_inline}}
  - : This property is only present when the [`d`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) flag is set. It is an array where each entry represents the bounds of a substring match. Each substring match itself is an array where the first entry represents its start index and the second entry its end index.

    It additionally has a `groups` property which holds an object of all named capturing groups. The keys are the names of the capturing groups and each value is an array with the first item being the start entry and the second entry being the end index of the capturing group. If the regular expression doesn't contain any named capturing groups, `groups` is `undefined`.

## Description

JavaScript {{jsxref("RegExp")}} objects are _stateful_ when they have the [global](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) or [sticky](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) flags set (e.g. `/foo/g` or `/foo/y`). They store a [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) from the previous match. Using this internally, `exec()` can be used to iterate over multiple matches in a string of text (with capture groups), as opposed to getting just the matching strings with {{jsxref("String.prototype.match()")}}.

When using `exec()`, the global flag has no effect when the sticky flag is set — the match is always sticky.

`exec()` is the primitive method of regexps. Many other regexp methods call `exec()` internally — including those called by string methods, like [`@@replace`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace). While `exec()` itself is powerful (and is the most efficient), it often does not convey the intent most clearly.

- If you only care whether the regex matches a string, but not what is actually being matched, use {{jsxref("RegExp.prototype.test()")}} instead.
- If you are finding all occurrences of a global regex and you don't care about information like capturing groups, use {{jsxref("String.prototype.match()")}} instead. In addition, {{jsxref("String.prototype.matchAll()")}} helps to simplify matching multiple parts of a string (with capture groups) by allowing you to iterate over the matches.
- If you are executing a match to find its index position in the string, use the {{jsxref("String.prototype.search()")}} method instead.

## Examples

### Using exec()

Consider the following example:

```js
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
const re = /quick\s(?<color>brown).+?(jumps)/igd;
const result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
```

The following table shows the state of `result` after running this script:

| Property  | Value                                                              |
|-----------|--------------------------------------------------------------------|
| `[0]`     | `"Quick Brown Fox Jumps"`                                          |
| `[1]`     | `"Brown"`                                                          |
| `[2]`     | `"Jumps"`                                                          |
| `index`   | `4`                                                                |
| `indices` | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`   | `4`                                                                |
| `groups`  | `{ color: "brown" }`                                               |

In addition, `re.lastIndex` will be set to `25`, due to this regex being global.

### Finding successive matches

If your regular expression uses the [`g`](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) flag, you can use the `exec()` method multiple times to find successive matches in the same string. When you do so, the search starts at the substring of `str` specified by the regular expression's {{jsxref("RegExp.lastIndex", "lastIndex")}} property ({{jsxref("RegExp.prototype.test()", "test()")}} will also advance the {{jsxref("RegExp.lastIndex", "lastIndex")}} property). Note that the {{jsxref("RegExp.lastIndex", "lastIndex")}} property will not be reset when searching a different string, it will start its search at its existing {{jsxref("RegExp.lastIndex", "lastIndex")}}.

For example, assume you have this script:

```js
const myRe = /ab*/g;
const str = 'abbcdefabh';
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = `Found ${myArray[0]}. `;
  msg += `Next match starts at ${myRe.lastIndex}`;
  console.log(msg);
}
```

This script displays the following text:

```
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

> **Warning:** There are many pitfalls that can lead to this becoming an infinite loop!
>
> - Do _not_ place the regular expression literal (or {{jsxref("RegExp")}} constructor) within the `while` condition —  it will recreate the regex for every iteration and reset {{jsxref("RegExp.lastIndex", "lastIndex")}}.
> - Be sure that the [global (`g`) flag](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) is set, or `lastIndex` will never be advanced.
> - If the regex may match zero-length characters (e.g. `/^/gm`), increase its {{jsxref("RegExp.lastIndex", "lastIndex")}} manually each time to avoid being stuck in the same place.

You can usually replace this kind of code with {{jsxref("String.prototype.matchAll()")}} to make it less error-prone.

### Using exec() with RegExp literals

You can also use `exec()` without creating a {{jsxref("RegExp")}} object
explicitly:

```js
const matches = /(hello \S+)/.exec('This is a hello world!');
console.log(matches[1]);
```

This will log a message containing `'hello world!'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
