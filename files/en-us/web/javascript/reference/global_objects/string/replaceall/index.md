---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - regex
  - Polyfill
browser-compat: javascript.builtins.String.replaceAll
---
{{JSRef}}

The **`replaceAll()`** method returns
a new string with all matches of a `pattern` replaced by a
`replacement`. The `pattern` can be a string or a
{{jsxref("RegExp")}}, and the `replacement` can be a string or a function to
be called for each match.

The original string is left unchanged.

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## Syntax

```js
replaceAll(regexp, newSubstr)
replaceAll(regexp, replacerFunction)

replaceAll(substr, newSubstr)
replaceAll(substr, replacerFunction)
```

> **Note:** When using a \`_regexp_\` you have to set the global ("g") flag; otherwise, it
> will throw a `TypeError`: "replaceAll must be called with a global RegExp".

### Parameters

- `regexp` (pattern)
  - : A {{jsxref("RegExp")}} object or literal with the global flag. The matches are
    replaced with `newSubstr` or the value returned by the specified
    `replacerFunction`. A RegExp without the global ("g") flag will throw a
    `TypeError`: "replaceAll must be called with a global RegExp".
- `substr`
  - : A {{jsxref("String")}} that is to be replaced by `newSubstr`.
    It is treated as a literal string and is _not_ interpreted as a regular
    expression.
- `newSubstr` (replacement)
  - : The {{jsxref("String")}} that replaces the substring specified by the specified
    `regexp` or `substr` parameter. A number
    of special replacement patterns are supported; see the "[Specifying a string as a parameter](#specifying_a_string_as_a_parameter)"
    section below.
- `replacerFunction` (replacement)
  - : A function to be invoked to create the new substring to be used to replace the matches to the given `regexp` or `substr`.
    The arguments supplied to this function are described in the
    "[Specifying a function as a parameter](#specifying_a_function_as_a_parameter)" section below.

### Return value

A new string, with all matches of a pattern replaced by a replacement.

## Description

This method does not change the calling {{jsxref("String")}} object. It returns a new string.

### Specifying a string as a parameter

The replacement string can include the following special replacement patterns:

| Pattern  | Inserts                                                                                                                                                                                               |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`     | Inserts a `"$"`.                                                                                                                                                                                      |
| `$&`     | Inserts the matched substring.                                                                                                                                                                        |
| `` $` `` | Inserts the portion of the string that precedes the matched substring.                                                                                                                                |
| `$'`     | Inserts the portion of the string that follows the matched substring.                                                                                                                                 |
| `$n`     | Where `n` is a positive integer less than 100, inserts the `n`th parenthesized submatch string, provided the first argument was a {{jsxref("RegExp")}} object. Note that this is `1`-indexed. |

### Specifying a function as a parameter

You can specify a function as the second parameter. In this case, the function will be
invoked after the match has been performed. The function's result (return value) will be
used as the replacement string. (**Note:** The above-mentioned special
replacement patterns do _not_ apply in this case.)

Note that if the first argument of an `replaceAll()` invocation is a {{jsxref("RegExp")}} object or regular expression literal, the function will be invoked multiple times.

The arguments to the function are as follows:

| Possible name | Supplied value                                                                                                                                                                                                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `match`       | The matched substring. (Corresponds to `$&` above.)                                                                                                                                                                                                                                    |
| `p1, p2, ...` | The *n*th string found by a parenthesized capture group, provided the first argument to `replaceAll()` was a {{jsxref("RegExp")}} object. (Corresponds to `$1`, `$2`, etc. above.) For example, if `/(\a+)(\b+)/`, was given, `p1` is the match for `\a+`, and `p2` for `\b+`. |
| `offset`      | The offset of the matched substring within the whole string being examined. (For example, if the whole string was `'abcd'`, and the matched substring was `'bc'`, then this argument will be `1`.)                                                                                     |
| `string`      | The whole string being examined.                                                                                                                                                                                                                                                       |
| `namedGroups` | An object of all named capturing groups. The keys are the names of the capturing groups and each value is the substring matching the named capture group. If the regular expression doesn't contain any capturing groups, `namedGroups` is undefined.                               |

(The exact number of arguments depends on whether the first argument is a
{{jsxref("RegExp")}} object—and, if so, how many parenthesized submatches it specifies.)

## Examples

### Using replaceAll

```js
'aabbcc'.replaceAll('b', '.');
// 'aa..cc'
```

### Non-global regex throws

When using a regular expression search value, it must be global. This won't work:

```js example-bad
'aabbcc'.replaceAll(/b/, '.');
TypeError: replaceAll must be called with a global RegExp
```

This will work:

```js example-good
'aabbcc'.replaceAll(/b/g, '.');
"aa..cc"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `String.prototype.replaceAll` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replace", "String.prototype.replace()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
