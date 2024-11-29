---
title: RegExp.escape()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/escape
page-type: javascript-static-method
browser-compat: javascript.builtins.RegExp.escape
---

{{JSRef}}

The **`RegExp.escape()`** static method [escapes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) any potential regex syntax characters in a string, and returns a new string that can be safely used as a [literal](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) pattern for the {{jsxref("RegExp/RegExp", "RegExp()")}} constructor.

When dynamically creating a {{jsxref("RegExp")}} with user-provided content, consider using this function to sanitize the input (unless the input is actually intended to contain regex syntax). In addition, don't try to re-implement its functionality by, for example, using {{jsxref("String.prototype.replaceAll()")}} to insert a `\` before all syntax characters. `RegExp.escape()` is designed to use escape sequences that work in many more edge cases/contexts than hand-crafted code is likely to achieve.

## Syntax

```js-nolint
RegExp.escape(string)
```

### Parameters

- `string`
  - : The string to escape.

### Return value

A new string that can be safely used as a literal pattern for the {{jsxref("RegExp/RegExp", "RegExp()")}} constructor. Namely, the following things in the input string are replaced:

- The first character of the string, if it's either a decimal digit (0–9) or ASCII letter (a–z, A–Z), is escaped using the `\x` [character escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) syntax. For example, `RegExp.escape("foo")` returns `"\\x66oo"` (here and after, the two backslashes in a string literal denote a single backslash character). This step ensures that if this escaped string is embedded into a bigger pattern where it's immediately preceded by `\1`, `\x0`, `\u000`, etc., the leading character doesn't get interpreted as part of the escape sequence.
- Regex [syntax characters](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character#description), including `^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|`, as well as the `/` delimiter, are escaped by inserting a `\` character before them. For example, `RegExp.escape("foo.bar")` returns `"\\x66oo\\.bar"`, and `RegExp.escape("(foo)")` returns `"\\(foo\\)"`.
- Other punctuators, including `,`, `-`, `=`, `<`, `>`, `#`, `&`, `!`, `%`, `:`, `;`, `@`, `~`, `'`, `` ` ``, and `"`, are escaped using the `\x` syntax. For example, `RegExp.escape("foo-bar")` returns `"\\x66oo\\x2dbar"`. These characters cannot be escaped by prefixing with `\` because, for example, `/foo\-bar/u` is a syntax error.
- The characters with their own [character escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) sequences: `\f` (U+000C FORM FEED), `\n` (U+000A LINE FEED), `\r` (U+000D CARRIAGE RETURN), `\t` (U+0009 CHARACTER TABULATION), and `\v` (U+000B LINE TABULATION), are replaced with their escape sequences. For example, `RegExp.escape("foo\nbar")` returns `"\\x66oo\\nbar"`.
- The space character is escaped as `"\\x20"`.
- Other non-ASCII [line break and white space characters](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) are replaced with one or two `\uXXXX` escape sequences representing their UTF-16 code units. For example, `RegExp.escape("foo\u2028bar")` returns `"\\x66oo\\u2028bar"`.
- [Lone surrogates](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) are replaced with their `\uXXXX` escape sequences. For example, `RegExp.escape("foo\uD800bar")` returns `"\\x66oo\\ud800bar"`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `string` is not a string.

## Examples

### Using RegExp.escape()

The following examples demonstrate various inputs and outputs for the `RegExp.escape()` method.

```js
RegExp.escape("Buy it. use it. break it. fix it.");
// "\\x42uy\\x20it\\.\\x20use\\x20it\\.\\x20break\\x20it\\.\\x20fix\\x20it\\."
RegExp.escape("foo.bar"); // "\\x66oo\\.bar"
RegExp.escape("foo-bar"); // "\\x66oo\\x2dbar"
RegExp.escape("foo\nbar"); // "\\x66oo\\nbar"
RegExp.escape("foo\uD800bar"); // "\\x66oo\\ud800bar"
RegExp.escape("foo\u2028bar"); // "\\x66oo\\u2028bar"
```

### Using RegExp.escape() with the RegExp constructor

The primary use case of `RegExp.escape()` is when you want to embed a string into a bigger regex pattern, and you want to ensure that the string is treated as a literal pattern, not as a regex syntax. Consider the following naïve example that replaces URLs:

```js
function removeDomain(text, domain) {
  return text.replace(new RegExp(`https?://${domain}(?=/)`, "g"), "");
}

const input =
  "Consider using [RegExp.escape()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// Consider using [RegExp.escape()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) to escape special characters in a string.
```

Inserting the `domain` above results in the regular expression literal `https?://developer.mozilla.org(?=/)`, where the "." character is a regex [wildcard](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) character. This means the string will match the string with any character in place of the ".", such as `developer-mozilla-org`. Therefore, it would incorrectly also change the following text:

```js
const input =
  "This is not an MDN link: https://developer-mozilla.org/, be careful!";
const domain = "developer.mozilla.org";
console.log(removeDomain(input, domain));
// This is not an MDN link: /, be careful!
```

To fix this, we can use `RegExp.escape()` to ensure that any user input is treated as a literal pattern:

```js
function removeDomain(text, domain) {
  return text.replace(
    new RegExp(`https?://${RegExp.escape(domain)}(?=/)`, "g"),
    "",
  );
}
```

Now this function will do exactly what we intend to, and will not transform `developer-mozilla.org` URLs.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `RegExp.escape` in `core-js`](https://github.com/zloirock/core-js#regexp-escaping)
- {{jsxref("RegExp")}}
