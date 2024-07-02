---
title: <ident>
slug: Web/CSS/ident
page-type: css-type
spec-urls: https://drafts.csswg.org/css-values/#css-identifier
---

{{CSSRef}}

The **`<ident>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) denotes an arbitrary string used as an {{glossary("identifier")}}.

## Syntax

A CSS identifier consists of one or more characters, which can be any of the following:

- any ASCII character in the ranges `A-Z` and `a-z`
- any decimal digit (`0` to `9`)
- a hyphen (`-`)
- an underscore (`_`)
- any other Unicode character `U+00A0` and higher (that is, any other non-ASCII Unicode character)
- an [escaped character](escaping_characters)

Additionally, an identifier must not start with an unescaped digit, and must not start with an unescaped hyphen followed by an unescaped digit.

Note that `id1`, `Id1`, `iD1` and `ID1` are all different identifiers because they are [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity). On the other hand, since there are several ways to escape a character, `toto\?` and `toto\3F` are the same identifiers.

### Escaping characters

You can escape a character by adding a backslash (\) in front of the character. Any character, except the hexadecimal digits `0-9`, `a-f`, and `A-F`, can be escaped in this way. For example, `&` can be escaped as `\&`.

You can also escape any character with a backslash followed by the character's Unicode {{glossary("code point")}} represented by one to six hexadecimal digits. For example, `&` can be escaped as `\26`. In this usage, if the escaped character is followed by a hexadecimal digit, do one of the following:

- a space or other whitespace character must be placed after the Unicode code point, or:
- the Unicode code point must be given in full, with all six digits.

For example, the string `&123` can be escaped as `\26 123` (with a whitespace) or `\000026123` (with the six-digit Unicode code point of `&`) to ensure that `123` is not considered as part of the escape pattern.

## Examples

### Valid identifiers

```plain example-good
nono79        A mix of alphanumeric characters and numbers
ground-level  A mix of alphanumeric characters and a dash
-test         /* A hyphen followed by alphanumeric characters */
--toto        A custom-property like identifier
_internal     An underscore followed by alphanumeric characters
\22 toto      An escaped character followed by a sequence of alphanumeric characters
\000022toto   /* Same as the previous example */
bili\.bob     A correctly escaped period
🔥123         A non-ASCII character followed by numbers
```

### Invalid identifiers

```plain example-bad
34rem     /* Must not start with a decimal digit */
-12rad    It must not start with a dash followed by a decimal digit.
bili.bob  ASCII characters apart from alphanumerics must be escaped.
'bilibob' /* Treated as a string */
"bilibob" This would be a {{CSSxRef("&lt;string&gt;")}}.
```

## Specifications

{{Specifications}}

## Browser compatibility

_As this type is not a real type but a convenience type used to simplify the definition of other CSS syntax, there is no browser compatibility information as such._

## See also

- [&lt;custom-ident&gt;](/en-US/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/en-US/docs/Web/CSS/dashed-ident)
