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
- an [escaped character](escaping_characters).

Additionally, an identifier must not start with an unescaped digit, and must not start with an unescaped hyphen followed by an unescaped digit.

Note that `id1`, `Id1`, `iD1` and `ID1` are all different identifiers as they are [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity). On the other hand, as there are several ways to escape a character, `toto\?` and `toto\3F` are the same identifiers.

### Escaping characters

Any character except a hexadecimal digit (`[0-9a-fA-F]`) can be escaped by placing a backslash in front of it. For example, `&` can be escaped as `\&`.

Any character can be escaped with a backslash followed by followed by one to six hexadecimal digits, representing the character's Unicode {{glossary("code point")}}. For example, `&` can be escaped as `\26`. In this situation, if the character following the escaped character is a hexadecimal digit, then either:

- a space or other whitespace character must be placed after the Unicode code point, or:
- the Unicode code point must be given in full, with all six digits.

For example, the string `&123` could be escaped as `\26 123` or `\000026123`.

## Examples

### Valid identifiers

```plain example-good
nono79        A mix of alphanumeric characters and numbers
ground-level  A mix of alphanumeric characters and a dash
-test         A dash followed by alphanumeric characters
--toto        A custom-property like identifier
_internal     An underscore followed by alphanumeric characters
\22 toto      An escaped character followed by a sequence of alphanumeric characters
\000022toto   The same as the previous example
bili\.bob     A correctly escaped period
🔥123         A non-ASCII character followed by numbers
```

### Invalid identifiers

```plain example-bad
34rem     It must not start with a decimal digit.
-12rad    It must not start with a dash followed by a decimal digit.
bili.bob  ASCII characters apart from alphanumerics must be escaped.
'bilibob' This would be a {{CSSxRef("&lt;string&gt;")}}.
"bilibob" This would be a {{CSSxRef("&lt;string&gt;")}}.
```

## Specifications

{{Specifications}}

## Browser compatibility

_As this type is not a real type but a convenience type used to simplify the definition of other CSS syntax, there is no browser compatibility information as such._

## See also

- [&lt;custom-ident&gt;](/en-US/docs/Web/CSS/custom-ident)
- [&lt;dashed-ident&gt;](/en-US/docs/Web/CSS/dashed-ident)
