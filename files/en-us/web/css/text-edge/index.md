---
title: <text-edge>
slug: Web/CSS/text-edge
page-type: css-type
browser-compat: css.types.text-edge
---

{{CSSRef}}

The **`<text-edge>`** {{glossary("enumerated")}} [data type](/en-US/docs/Web/CSS/CSS_Types) defines keywords that specify font metrics representing specific regions on a font's block-start edge and block-end edge that are to be manipulated in some way. It effectively does this by specifying a position for the font's over and/or under edge.

The `text-edge` values are used in the {{cssxref("text-box-edge")}} property to define regions of spacing to trim from the block-start edge and block-end edge of specified text content.

## Syntax

```css
<text-edge> =
  [ text | ideographic | ideographic-ink ] |
  [ text | ideographic | ideographic-ink | cap | ex ] [ text | ideographic | ideographic-ink | alphabetic ]
```

## Values

The `<text-edge>` data type is composed of one or two keywords representing specific regions on a font's block-start (over) edge and/or block-end (under) edge:

- When two values are specified, the first value specifies the position of the font's over edge, and the second value specifies the position of the font's under edge
- When only one value is specified, both edges are assigned that same keyword.

### Two keyword values

- `alphabetic`
  - : The font's under edge is its alphabetic baseline, which is the bottom of its short lower-case letters (for example, "m", "n", and "o") or capital letters.
- `cap`
  - : The font's over edge is its cap-height baseline, which is the top of its capital letters.
- `ex`
  - : The font's over edge is its x-height baseline, which is the top of its short lower-case letters.
- `text`
  - : The font's over or under edge is its start and end boundaries. This can be considered the default, as this is where the boundaries are normally without any manipulation.

### Single keyword values

- `text`
  - : The font's over and under edges are its start and end boundaries. This can be considered the default, as this is where the boundaries are normally without any manipulation.

> [!NOTE]
> The specification also defines the `ideographic` and `ideographic-ink` keywords, which are intended to represent over and under edge positions specific to [CJK language characters](https://en.wikipedia.org/wiki/CJK_characters). Currently their exact behavior is being debated and they are are not supported by any browser.

## Examples

### Valid text-edge values

See [`text-box-edge` examples](/en-US/docs/Web/CSS/text-box-edge#examples)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS inline layout](/en-US/docs/Web/CSS/CSS_inline_layout) module
