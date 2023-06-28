---
title: <ident>
slug: Web/CSS/ident
page-type: css-type
spec-urls: https://drafts.csswg.org/css-values/#css-identifier
---

{{CSSRef}}

The **`<ident>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) denotes an arbitrary string used as an {{glossary("identifier")}}.

## Syntax

The syntax of `<custom-ident>` is similar to CSS identifiers (such as property names), except that it is [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity). It consists of one or more characters, where characters can be any of the following:

- any alphabetical character (`A` to `Z`, or `a` to `z`),
- any decimal digit (`0` to `9`),
- a hyphen (`-`),
- an underscore (`_`),
- an escaped character (preceded by a backslash, `\`),
- a [Unicode](https://en.wikipedia.org/wiki/Unicode) character (in the format of a backslash, `\`, followed by one to six hexadecimal digits, representing its Unicode code point)

Note that `id1`, `Id1`, `iD1` and `ID1` are all different identifiers as they are [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity). On the other hand, as there are several ways to escape a character, `toto\?` and `toto\3F` are the same identifiers.

## Examples

### Valid identifiers

```plain example-good
nono79        A mix of alphanumeric characters and numbers
ground-level  A mix of alphanumeric characters and a dash
-test         A dash followed by alphanumeric characters
--toto        A custom-property like identifier
_internal     An underscore followed by alphanumeric characters
\22 toto      A Unicode character followed by a sequence of alphanumeric characters
bili\.bob     A correctly escaped period
```

### Invalid identifiers

```plain example-bad
34rem     It must not start with a decimal digit.
-12rad    It must not start with a dash followed by a decimal digit.
bili.bob  Only alphanumeric characters, _, and - needn't be escaped.
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
