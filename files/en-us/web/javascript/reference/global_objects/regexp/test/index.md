---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
page-type: javascript-instance-method
browser-compat: javascript.builtins.RegExp.test
---

{{JSRef}}

The **`test()`** method of {{jsxref("RegExp")}} instances executes a search with this regular expression for a match between a regular expression and a specified string. Returns `true` if there is a match; `false` otherwise.

JavaScript {{jsxref("RegExp")}} objects are **stateful** when they have
the {{jsxref("RegExp/global", "global")}} or {{jsxref("RegExp/sticky", "sticky")}} flags
set (e.g., `/foo/g` or `/foo/y`). They store a
{{jsxref("RegExp/lastIndex", "lastIndex")}} from the previous match. Using this
internally, `test()` can be used to iterate over multiple matches in a string
of text (with capture groups).

{{InteractiveExample("JavaScript Demo: RegExp.prototype.test", "taller")}}

```js interactive-example
const str = "table football";

const regex = new RegExp("foo*");
const globalRegex = new RegExp("foo*", "g");

console.log(regex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 0

console.log(globalRegex.test(str));
// Expected output: true

console.log(globalRegex.lastIndex);
// Expected output: 9

console.log(globalRegex.test(str));
// Expected output: false
```

## Syntax

```js-nolint
test(str)
```

### Parameters

- `str`
  - : The string against which to match the regular expression. All values are [coerced to strings](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), so omitting it or passing `undefined` causes `test()` to search for the string `"undefined"`, which is rarely what you want.

### Return value

`true` if there is a match between the regular expression and the string
`str`. Otherwise, `false`.

## Description

Use `test()` whenever you want to know whether a pattern is found in a
string. `test()` returns a boolean, unlike the
{{jsxref("String.prototype.search()")}} method (which returns the index of a match, or
`-1` if not found).

To get more information (but with slower execution), use the
{{jsxref("RegExp/exec", "exec()")}} method. (This is similar to the
{{jsxref("String.prototype.match()")}} method.)

As with `exec()` (or in combination with it), `test()` called
multiple times on the same global regular expression instance will advance past the
previous match.

## Examples

### Using test()

This example tests if `"hello"` is contained at the very beginning of
a string, returning a boolean result.

```js
const str = "hello world!";
const result = /^hello/.test(str);

console.log(result); // true
```

The following example logs a message which depends on the success of the test:

```js
function testInput(re, str) {
  const midString = re.test(str) ? "contains" : "does not contain";
  console.log(`${str} ${midString} ${re.source}`);
}
```

### Using test() on a regex with the "global" flag

When a regex has the [global flag](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) set,
`test()` will advance the {{jsxref("RegExp/lastIndex", "lastIndex")}} of the regex.
({{jsxref("RegExp.prototype.exec()")}} also advances the `lastIndex` property.)

Further calls to `test(str)` will resume searching
`str` starting from `lastIndex`. The
`lastIndex` property will continue to increase each time `test()`
returns `true`.

> [!NOTE]
> As long as `test()` returns `true`,
> `lastIndex` will _not_ reset—even when testing a different string!

When `test()` returns `false`, the calling regex's
`lastIndex` property will reset to `0`.

The following example demonstrates this behavior:

```js
const regex = /foo/g; // the "global" flag is set

// regex.lastIndex is at 0
regex.test("foo"); // true

// regex.lastIndex is now at 3
regex.test("foo"); // false

// regex.lastIndex is at 0
regex.test("barfoo"); // true

// regex.lastIndex is at 6
regex.test("foobar"); // false

// regex.lastIndex is at 0
regex.test("foobarfoo"); // true

// regex.lastIndex is at 3
regex.test("foobarfoo"); // true

// regex.lastIndex is at 9
regex.test("foobarfoo"); // false

// regex.lastIndex is at 0
// (...and so on)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) guide
- {{jsxref("RegExp")}}
