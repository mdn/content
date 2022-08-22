---
title: RegExp.prototype.test()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/test
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
browser-compat: javascript.builtins.RegExp.test
---
{{JSRef}}

The **`test()`** method executes a search for a match between a
regular expression and a specified string. Returns `true` or
`false`.

JavaScript {{jsxref("RegExp")}} objects are **stateful** when they have
the {{jsxref("RegExp.global", "global")}} or {{jsxref("RegExp.sticky", "sticky")}} flags
set (e.g., `/foo/g` or `/foo/y`). They store a
{{jsxref("RegExp.lastIndex", "lastIndex")}} from the previous match. Using this
internally, `test()` can be used to iterate over multiple matches in a string
of text (with capture groups).

{{EmbedInteractiveExample("pages/js/regexp-prototype-test.html", "taller")}}

## Syntax

```js
test(str)
```

### Parameters

- `str`
  - : The string against which to match the regular expression.

### Returns

`true` if there is a match between the regular expression and the string
`str`. Otherwise, `false`.

## Description

Use `test()` whenever you want to know whether a pattern is found in a
string. `test()` returns a boolean, unlike the
{{jsxref("String.prototype.search()")}} method (which returns the index of a match, or
`-1` if not found).

To get more information (but with slower execution), use the
{{jsxref("RegExp.prototype.exec()", "exec()")}} method. (This is similar to the
{{jsxref("String.prototype.match()")}} method.)

As with `exec()` (or in combination with it), `test()` called
multiple times on the same global regular expression instance will advance past the
previous match.

## Examples

### Using test()

Simple example that tests if `"hello"` is contained at the very beginning of
a string, returning a boolean result.

```js
const str = 'hello world!';
const result = /^hello/.test(str);

console.log(result); // true
```

The following example logs a message which depends on the success of the test:

```js
function testInput(re, str) {
  const midstring  = re.test(str) ? 'contains' : 'does not contain';
  console.log(`${str} ${midstring} ${re.source}`);
}
```

### Using test() on a regex with the "global" flag

When a regex has the [global flag](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2) set,
`test()` will advance the {{jsxref("RegExp.lastIndex", "lastIndex")}} of the regex.
({{jsxref("RegExp.prototype.exec()")}} also advances the `lastIndex` property.)

Further calls to `test(str)` will resume searching
`str` starting from `lastIndex`. The
`lastIndex` property will continue to increase each time `test()`
returns `true`.

> **Note:** As long as `test()` returns `true`,
> `lastIndex` will _not_ reset—even when testing a different string!

When `test()` returns `false`, the calling regex's
`lastIndex` property will reset to `0`.

The following example demonstrates this behavior:

```js
const regex = /foo/g; // the "global" flag is set

// regex.lastIndex is at 0
regex.test('foo')     // true

// regex.lastIndex is now at 3
regex.test('foo')     // false

// regex.lastIndex is at 0
regex.test('barfoo')  // true

// regex.lastIndex is at 6
regex.test('foobar')  //false

// regex.lastIndex is at 0
// (...and so on)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the
  [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
