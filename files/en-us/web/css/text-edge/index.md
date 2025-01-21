---
title: <text-edge>
slug: Web/CSS/text-edge
page-type: css-type
browser-compat: css.types.text-edge
---

{{CSSRef}}

The **`<text-edge>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) specifies font metrics representing specific regions on a font's start block edge and end block edge that are to be manipulated in some way. It effectively does this by specifying a position for the font's over and/or under edge.

`text-edge` values are used in various CSS properties. For example, in the {{cssxref("text-box-edge")}} property it is used to define regions of the font {{glossary("leading")}} to trim.

## Syntax

The `<text-edge>` data type is composed of one or two keywords representing specific regions on a font's start block edge and end block edge. The available keywords are as follows:

- `alphabetic`
  - : The font's under edge is its alphabetic baseline, which is the bottom of its short lower-case letters (for example, "m", "n", and "o") or capital letters.
- `cap`
  - : The font's over edge is its cap-height baseline, which is the top of its capital letters.
- `ex`
  - : The font's over edge is its x-height baseline, which is the top of its short lower-case letters.
- `text`
  - : The font's over and under edges are its start and end boundaries. This can be considered the default, as this is where the boundaries are normally without any manipulation.

If two values are specified, the first value specifies the position of the font's over edge, and the second value specifies the position of the font's under edge.

- Valid over edge values: `text` (the default), `cap`, and `ex`.
- Valid under edge values: `text` (the default) and `alphabetic`.

If one value is specified, it specifies the over _and_ under edge position. At the time of writing, the only valid single value is `text`.

The specification also defines the `ideographic` and `ideographic-ink` keywords, which are intended to represent over and under edge positions specific to [CJK language characters](https://en.wikipedia.org/wiki/CJK_characters). Currently their exact behavior is being debated and they are are not supported by any browser.

## Examples

### Valid text-edge values

```css
/* Single keyword */
text-box-edge: text;

/* Two keywords */
text-box-edge: text text;
text-box-edge: text alphabetic;
text-box-edge: cap alphabetic;
text-box-edge: ex text;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}, {{cssxref("text-box-trim")}}
- [CSS inline layout](/en-US/docs/Web/CSS/CSS_inline_layout) module
