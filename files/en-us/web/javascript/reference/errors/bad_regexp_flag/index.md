---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
tags:
  - Error
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "invalid regular expression flag" occurs when the flags,
defined after the second slash in regular expression literal, are not one of
`g`, `i`, `m`, `s`, `u`, or
`y`.

## Message

```js
SyntaxError: Syntax error in regular expression (Edge)
SyntaxError: invalid regular expression flag "x" (Firefox)
SyntaxError: Invalid regular expression flags (Chrome)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There are invalid regular expression flags in the code. In a regular expression
literal, which consists of a pattern enclosed between slashes, the flags are defined
after the second slash. They can also be defined in the constructor function of the
{{jsxref("RegExp")}} object (second parameter). Regular expression flags can be used
separately or together in any order, but there are only six of them in ECMAScript.

To include a flag with the regular expression, use this syntax:

```js
var re = /pattern/flags;
```

or

```js
var re = new RegExp('pattern', 'flags');
```

| Flag | Description                                                                                                                                        |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `g`  | Global search.                                                                                                                                     |
| i    | Case-insensitive search.                                                                                                                           |
| m    | Multi-line search.                                                                                                                                 |
| s    | Allow `.` to match newlines (added in ECMAScript 2018)                                                                                             |
| u    | Unicode; treat pattern as a sequence of Unicode code points                                                                                        |
| y    | Perform a "sticky" search that matches starting at the current position in the target string. See {{jsxref("RegExp.sticky", "sticky")}} |

## Examples

There are only six valid regular expression flags.

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"
```

Did you intend to create a regular expression? An expression containing two slashes is
interpreted as a regular expression literal.

```js example-bad
let obj = {
  url: /docs/Web
};

// SyntaxError: invalid regular expression flag "W"
```

Or did you mean to create a string instead? Add single or double quotes to create a
string literal.

```js example-good
let obj = {
  url: '/docs/Web'
};
```

### Valid regular expression flags

See the table above for the six valid regular expression flags that are allowed in
JavaScript.

```js example-good
/foo/g;
/foo/gims;
/foo/uy;
```

## See also

- [Regular
  expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [XRegEx flags](https://xregexp.com/flags/) – regular expression library
  that provides four new flags (`n`, `s`, `x`,
  `A`)
