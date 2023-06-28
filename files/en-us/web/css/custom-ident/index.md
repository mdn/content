---
title: <custom-ident>
slug: Web/CSS/custom-ident
page-type: css-type
spec-urls:
  - https://drafts.csswg.org/css-values/#custom-idents
  - https://drafts.csswg.org/css-will-change/#valdef-will-change-custom-ident
  - https://drafts.csswg.org/css-counter-styles/#typedef-counter-style-name
  - https://drafts.csswg.org/css-lists/#counter-properties
---

{{CSSRef}}

The **`<custom-ident>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) denotes an arbitrary user-defined string used as an {{glossary("identifier")}}. It is case-sensitive, and certain values are forbidden in various contexts to prevent ambiguity.

## Syntax

The syntax of `<custom-ident>` is similar to CSS identifiers (such as property names), except that it is [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity). It consists of one or more characters, where characters can be any of the following:

- any alphabetical character (`A` to `Z`, or `a` to `z`),
- any decimal digit (`0` to `9`),
- a hyphen (`-`),
- an underscore (`_`),
- an escaped character (preceded by a backslash, `\`),
- a [Unicode](https://en.wikipedia.org/wiki/Unicode) character (in the format of a backslash, `\`, followed by one to six hexadecimal digits, representing its Unicode code point)

Note that `id1`, `Id1`, `iD1` and `ID1` are all different identifiers as they are [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity). On the other hand, as there are several ways to escape a character, `toto\?` and `toto\3F` are the same identifiers.

### Forbidden values

A `<custom-ident>` must not be placed between single or double quotes as this would be identical to a {{CSSxRef("&lt;string&gt;")}}. Moreover, the first character must not be a decimal digit, nor a hyphen (`-`) followed by a decimal digit or another hyphen.

To prevent ambiguity, each property that uses `<custom-ident>` forbids the use of specific values:

- {{CSSxRef("animation-name")}}
  - : Forbids the global CSS values (`unset`, `initial`, and `inherit`), as well as `none`.
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : Forbids the global CSS values (`unset`, `initial`, and `inherit`), as well as `none`.
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}

  - : Forbids the global CSS values (`unset`, `initial`, and `inherit`), as well as the values:

    - `none`
    - `inline`
    - `outside`

    Also, quite a few predefined values are implemented by the different browsers:

    - `disc`
    - `circle`
    - `square`
    - `decimal`
    - `cjk-decimal`
    - `decimal-leading-zero`
    - `lower-roman`
    - `upper-roman`
    - `lower-greek`
    - `lower-alpha`
    - `lower-latin`
    - `upper-alpha`
    - `upper-latin`
    - `arabic-indic`
    - `armenian`
    - `bengali`
    - `cambodian`
    - `cjk-earthly-branch`
    - `cjk-heavenly-stem`
    - `cjk-ideographic`
    - `devanagari`
    - `ethiopic-numeric`
    - `georgian`
    - `gujarati`
    - `gurmukhi`
    - `hebrew`
    - `hiragana`
    - `hiragana-iroha`
    - `japanese-formal`
    - `japanese-informal`
    - `kannada`
    - `katakana`
    - `katakana-iroha`
    - `khmer`
    - `korean-hangul-formal`
    - `korean-hanja-formal`
    - `korean-hanja-informal`
    - `lao`
    - `lower-armenian`
    - `malayalam`
    - `mongolian`
    - `myanmar`
    - `oriya`
    - `persian`
    - `simp-chinese-formal`
    - `simp-chinese-informal`
    - `tamil`
    - `telugu`
    - `thai`
    - `tibetan`
    - `trad-chinese-formal`
    - `trad-chinese-informal`
    - `upper-armenian`
    - `disclosure-open`
    - `disclosure-close`

- {{CSSxRef("grid-row-start")}}, {{CSSxRef("grid-row-end")}}, {{CSSxRef("grid-column-start")}}, {{CSSxRef("grid-column-end")}}
  - : Forbids the `span` value.
- {{CSSxRef("view-transition-name")}}
  - : Forbids the global CSS values (`unset`, `initial`, and `inherit`), as well as `none`.
- {{CSSxRef("will-change")}}
  - : Forbids the global CSS values (`unset`, `initial`, and `inherit`), as well as the values `will-change`, `auto`, `scroll-position`, and `contents`.

## Examples

### Valid identifiers

```plain example-good
nono79            A mix of alphanumeric characters and numbers
ground-level      A mix of alphanumeric characters and a dash
-test             A dash followed by alphanumeric characters
_internal         An underscore followed by alphanumeric characters
\22 toto          A Unicode character followed by a sequence of alphanumeric characters
bili\.bob         A correctly escaped period
```

### Invalid identifiers

```plain example-bad
34rem             It must not start with a decimal digit.
-12rad            It must not start with a dash followed by a decimal digit.
bili.bob          Only alphanumeric characters, _, and - needn't be escaped.
--toto            It must not start with two dashes. This would be a custom property.
'bilibob'         This would be a <string>.
"bilibob"         This would be a <string>.
```

## Specifications

{{Specifications}}

## Browser compatibility

_As this type is not a real type but a convenience type used to simplify the description of allowed values, there is no browser compatibility information as such._

## See also

- [&lt;ident&gt;](/en-US/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/en-US/docs/Web/CSS/dashed-ident)
