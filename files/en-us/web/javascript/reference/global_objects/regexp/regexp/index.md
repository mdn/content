---
title: RegExp() constructor
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
tags:
  - Constructor
  - JavaScript
  - Reference
  - RegExp
  - Polyfill
browser-compat: javascript.builtins.RegExp.RegExp
---
{{JSRef}}

The **`RegExp`** constructor creates a regular expression
object for matching text with a pattern.

For an introduction to regular expressions, read the [Regular Expressions
chapter](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide).

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

## Syntax

Literal, constructor, and factory notations are possible:

```js
/pattern/flags
new RegExp(pattern[, flags])
RegExp(pattern[, flags])
```

### Parameters

- `pattern`

  - : The text of the regular expression.

    As of ES5, this can also be another `RegExp` object or literal (for the
    two RegExp constructor notations only). Patterns may include [special
    characters](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters) to match a wider range of values than would a literal string.

- `flags`

  - : If specified, `flags` is a string that contains the flags to
    add.

    Alternatively, if an object is supplied for the pattern, the
    `flags` string will replace any of that object's flags (and
    `lastIndex` will be reset to `0`) (as of ES2015).

    If `flags` is not specified and a regular expressions object
    is supplied, that object's flags (and `lastIndex` value) will be copied
    over.

    `flags` may contain any combination of the following
    characters:

    - `d` (indices)
      - : Generate indices for substring matches.
    - `g` (global match)
      - : Find all matches rather than stopping after the first match.
    - `i` (ignore case)
      - : If `u` flag is also enabled, use Unicode case folding.
    - `m` (multiline)
      - : Treat beginning and end characters (`^` and `$`) as
        working over multiple lines. In other words, match the beginning or end of
        _each_ line (delimited by `\n` or `\r`), not only the
        very beginning or end of the whole input string.
    - `s` ("dotAll")
      - : Allows `.` to match newlines.
    - `u` (unicode)
      - : Treat `pattern` as a sequence of Unicode code points. (See
        also [Binary strings](/en-US/docs/Web/API/DOMString/Binary)).
    - `y` (sticky)
      - : Matches only from the index indicated by the `lastIndex` property of
        this regular expression in the target string. Does not attempt to match from any
        later indexes.
        
### Exceptions

- If `pattern` cannot be parsed as a valid regular expression, a {{jsxref("SyntaxError")}} is thrown.
- If `flags` contains repeated characters or any character outside of those allowed, a 
  {{jsxref("SyntaxError")}} is thrown.

## Examples

### Literal notation and constructor

There are two ways to create a `RegExp` object: a _literal notation_
and a _constructor_.

- **The literal notation's** parameters are enclosed between slashes and
  do not use quotation marks.
- **The constructor function's** parameters are not enclosed between
  slashes but do use quotation marks.

The following three expressions create the same regular expression:

```js
/ab+c/i
new RegExp(/ab+c/, 'i') // literal notation
new RegExp('ab+c', 'i') // constructor
```

The literal notation results in compilation of the regular expression when the
expression is evaluated. Use literal notation when the regular expression will remain
constant. For example, if you use literal notation to construct a regular expression
used in a loop, the regular expression won't be recompiled on each iteration.

The constructor of the regular expression object—for example,
`new RegExp('ab+c')`—results in runtime compilation of the regular
expression. Use the constructor function when you know the regular expression pattern
will be changing, or you don't know the pattern and are getting it from another source,
such as user input.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of many modern `RegExp` features (`dotAll`, `sticky` flags, named capture groups, etc.) is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Regular
  Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) chapter in the [JavaScript
  Guide](/en-US/docs/Web/JavaScript/Guide)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
