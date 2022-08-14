---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
tags:
  - Error
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "invalid regular expression flag" occurs when the flags in a regular expression contain any flag that is not one of: `g`, `i`, `m`, `s`, `u`, `y` or `d`.

It may also be raised if the expression contains more than one instance of a valid flag.

## Message

```
SyntaxError: Invalid regular expression flags (V8-based)
SyntaxError: invalid regular expression flag x (Firefox)
SyntaxError: Invalid regular expression: invalid flags (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

The regular expression contains invalid flags, or valid flags have been used more than once in the expression.

The valid (allowed) flags are listed in [Regular expressions > Advanced searching with flags](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags), and reproduced below:

| Flag | Description                                                                                                                             |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------|
| `g`  | Global search. See {{jsxref("RegExp.global", "global")}}                                                                                |
| `i`  | Case-insensitive search. See {{jsxref("RegExp.sticky", "ignoreCase")}}.                                                                 |
| `m`  | Multi-line search. See {{jsxref("RegExp.multiline", "multiline")}}.                                                                     |
| `s`  | Allow `.` to match newlines. See {{jsxref("RegExp.dotAll", "dotAll")}}.                                                                 |
| `u`  | Unicode; treat pattern as a sequence of Unicode code points. See {{jsxref("RegExp.unicode", "unicode")}}.                               |
| `y`  | Perform a "sticky" search that matches starting at the current position in the target string. See {{jsxref("RegExp.sticky", "sticky")}} |
| `d`  | Indices. Generate indices for substring matches. See {{jsxref("RegExp.hasIndices", "hasIndices")}}                                      |

## Examples

In a regular expression literal, which consists of a pattern enclosed between slashes, the flags are defined after the second slash.
Regular expression flags can be used separately or together in any order.
This syntax shows how to declare the flags using the regular expression literal:

```js
const re = /pattern/flags;
```

They can also be defined in the constructor function of the {{jsxref("RegExp")}} object (second parameter):

```js
const re = new RegExp('pattern', 'flags');
```

Here is an example showing use of only correct flags.

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

Below is an example showing the use of some invalid flags `b`, `a` and `r`:

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"
```

The code below is incorrect, because `W`, `e` and `b` are not valid flags.

```js example-bad
const obj = {
  url: /docs/Web,
};

// SyntaxError: invalid regular expression flag "W"
```

An expression containing two slashes is interpreted as a regular expression literal.
Most likely the intent was to create a string literal, using single or double quotes as shown below:

```js example-good
const obj = {
  url: '/docs/Web',
};
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [XRegEx flags](https://xregexp.com/flags/) – regular expression library that provides four new flags (`n`, `s`, `x`, `A`)
