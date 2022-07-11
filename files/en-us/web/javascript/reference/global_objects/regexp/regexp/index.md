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

For an introduction to regular expressions,
read the [Regular Expressions chapter](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide).

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
    two RegExp constructor notations only). Patterns may include
    [special characters](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#using_special_characters)
    to match a wider range of values than would a literal string.

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
      - : Treat `pattern` as a sequence of Unicode code points..
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

- The _literal notation_ takes a pattern between two slashes, followed by optional flags, after the second slash.
- The _constructor function_ takes either a string or a `RegExp` object as its first parameter and a string of optional flags as its second parameter.

The following three expressions create the same regular expression:

```js
/ab+c/i
new RegExp(/ab+c/, 'i') // literal notation
new RegExp('ab+c', 'i') // constructor
```

Before regular expressions can be used, they have to be compiled. This process allows them to perform matches more efficiently. There are two ways to compile and get a `RegExp` object.

The literal notation results in compilation of the regular expression when the expression is evaluated. On the other hand, the constructor of the `RegExp` object, `new RegExp('ab+c')`, results in runtime compilation of the regular expression.

Use a string as the first argument to the `RegExp()` constructor when you want to [build the regular expression from dynamic input](#Building_a_regular_expression_from_dynamic_inputs).

### Building a regular expression from dynamic inputs

```js
const breakfasts = ['bacon', 'eggs', 'oatmeal', 'toast', 'cereal'];
const order = 'Let me get some bacon and eggs, please';

order.match(new RegExp(`\\b(${breakfasts.join('|')})\\b`, 'g')); 
// Returns ['bacon', 'eggs']
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of many modern `RegExp` features (`dotAll`, `sticky` flags, named capture groups, etc.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Regular Expressions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) chapter
  in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
