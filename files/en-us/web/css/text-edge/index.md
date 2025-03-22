---
title: <text-edge>
slug: Web/CSS/text-edge
page-type: css-type
browser-compat: css.types.text-edge
---

{{CSSRef}}

The **`<text-edge>`** {{glossary("enumerated")}} [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) defines keywords that specify font metrics representing specific regions on a font's block-start edge and block-end edge. Each keyword specifies a position of a font's over and/or under edge.

The `<text-edge>` values are used in the {{cssxref("text-box-edge")}} property to specify an amount of space to trim from the block-start and block-end edge of a text element's block container.

## Syntax

```css
<text-edge> =
  [ text | ideographic | ideographic-ink ] |
  [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
```

> [!NOTE]
> The `ideographic` and `ideographic-ink` keywords are intended to specify over and under edge positions specific to [CJK language characters](https://en.wikipedia.org/wiki/CJK_characters). Currently their exact behavior is being debated and they are are not supported by any browser.

## Values

The `<text-edge>` data type is composed of one or two keywords representing specific regions on a font's block-start (over) edge and/or block-end (under) edge:

- When one value is specified, the position of the font's over edge and under edge are specified using that same keyword.
- When two values are specified, the first value specifies the position of the font's over edge, and the second value specifies the position of the font's under edge.

### Single keyword values

- `text`

  - : The font's over and under edges are its text-over baseline/text-under baseline: this includes the font's ascenders and descenders but excludes the [half-leading](/en-US/docs/Glossary/Leading) set on the text.

    > [!NOTE]
    > The amount of half-leading included on a text element can be controlled using the {{cssxref("line-height")}} property.

### Two keyword values

- `alphabetic`
  - : The font's under edge is its alphabetic baseline, which is the bottom of its short lower-case letters (for example, "m", "n", and "o") or capital letters.
- `cap`
  - : The font's over edge is its cap-height baseline, which is the top of its capital letters.
- `ex`
  - : The font's over edge is its x-height baseline, which is the top of its short lower-case letters.
- `text`
  - : The font's over edge is its text-over baseline (includes the font's ascenders but excludes the over edge half-leading), or its under edge is its text-under baseline (includes the font's descenders but excludes the under edge half-leading), depending on which edge the value is set for.

## Examples

See [`text-box-edge` examples](/en-US/docs/Web/CSS/text-box-edge#examples)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS inline layout](/en-US/docs/Web/CSS/CSS_inline_layout) module
