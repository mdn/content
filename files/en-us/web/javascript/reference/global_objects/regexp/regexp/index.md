---
title: RegExp() constructor
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
page-type: javascript-constructor
browser-compat: javascript.builtins.RegExp.RegExp
---

{{JSRef}}

The **`RegExp()`** constructor creates {{jsxref("RegExp")}} objects.

For an introduction to regular expressions, read the [Regular Expressions chapter](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) in the [JavaScript Guide](/en-US/docs/Web/JavaScript/Guide).

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

## Syntax

```js-nolint
new RegExp(pattern)
new RegExp(pattern, flags)
RegExp(pattern)
RegExp(pattern, flags)
```

> **Note:** `RegExp()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), but sometimes with different effects. See [Return value](#return_value).

### Parameters

- `pattern`

  - : The text of the regular expression. This can also be another `RegExp` object.

- `flags` {{optional_inline}}

  - : If specified, `flags` is a string that contains the flags to add. Alternatively, if a `RegExp` object is supplied for the `pattern`, the `flags` string will replace any of that object's flags (and `lastIndex` will be reset to `0`).

    `flags` may contain any combination of the following characters:

    - [`d` (indices)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Generate indices for substring matches.
    - [`g` (global)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Find all matches rather than stopping after the first match.
    - [`i` (ignore case)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : When matching, casing differences are ignored.
    - [`m` (multiline)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Treat beginning and end assertions (`^` and `$`) as working over multiple lines. In other words, match the beginning or end of _each_ line (delimited by `\n` or `\r`), not only the very beginning or end of the whole input string.
    - [`s` (dotAll)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Allows `.` to match newlines.
    - [`u` (unicode)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Treat `pattern` as a sequence of Unicode code points.
    - [`v` (unicodeSets)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : An upgrade to the `u` flag that enables set notation in character classes as well as properties of strings.
    - [`y` (sticky)](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Matches only from the index indicated by the `lastIndex` property of this regular expression in the target string. Does not attempt to match from any later indexes.

### Return value

`RegExp(pattern)` returns `pattern` directly if all of the following are true:

- `RegExp()` is called without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new);
- [`pattern` is a regex](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes);
- `pattern.constructor === RegExp` (usually meaning it's not a subclass);
- `flags` is `undefined`.

In all other cases, calling `RegExp()` with or without `new` both create a new `RegExp` object. If `pattern` is a regex, the new object's [source](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) is `pattern.source`; otherwise, its source is `pattern` [coerced to a string](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). If the `flags` parameter is not `undefined`, the new object's [`flags`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) is the parameter's value; otherwise, its `flags` is `pattern.flags` (if `pattern` is a regex).

### Exceptions

- {{jsxref("SyntaxError")}}
  - : Thrown in one of the following cases:
    - `pattern` cannot be parsed as a valid regular expression.
    - `flags` contains repeated characters or any character outside of those allowed.

## Examples

### Literal notation and constructor

There are two ways to create a `RegExp` object: a _literal notation_ and a _constructor_.

- The _literal notation_ takes a pattern between two slashes, followed by optional flags, after the second slash.
- The _constructor function_ takes either a string or a `RegExp` object as its first parameter and a string of optional flags as its second parameter.

The following three expressions create the same regular expression:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // literal notation
new RegExp("ab+c", "i"); // constructor
```

Before regular expressions can be used, they have to be compiled. This process allows them to perform matches more efficiently. There are two ways to compile and get a `RegExp` object.

The literal notation results in compilation of the regular expression when the expression is evaluated. On the other hand, the constructor of the `RegExp` object, `new RegExp('ab+c')`, results in runtime compilation of the regular expression.

Use a string as the first argument to the `RegExp()` constructor when you want to [build the regular expression from dynamic input](#building_a_regular_expression_from_dynamic_inputs).

### Building a regular expression from dynamic inputs

```js
const breakfasts = ["bacon", "eggs", "oatmeal", "toast", "cereal"];
const order = "Let me get some bacon and eggs, please";

order.match(new RegExp(`\\b(${breakfasts.join("|")})\\b`, "g"));
// Returns ['bacon', 'eggs']
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of many modern `RegExp` features (`dotAll`, `sticky` flags, named capture groups, etc.) in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
