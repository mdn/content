---
title: text-orientation
slug: Web/CSS/text-orientation
page-type: css-property
browser-compat: css.properties.text-orientation
---

{{CSSRef}}

The **`text-orientation`** [CSS](/en-US/docs/Web/CSS) property sets the orientation of the text characters in a line. It only affects text in vertical mode (when {{cssxref("writing-mode")}} is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

{{EmbedInteractiveExample("pages/css/text-orientation.html")}}

## Syntax

```css
/* Keyword values */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Global values */
text-orientation: inherit;
text-orientation: initial;
text-orientation: revert;
text-orientation: revert-layer;
text-orientation: unset;
```

The `text-orientation` property is specified as a single keyword from the list below.

### Values

- `mixed`
  - : Rotates the characters of horizontal scripts 90° clockwise. Lays out the characters of vertical scripts naturally. Default value.
- `upright`
  - : Lays out the characters of horizontal scripts naturally (upright), as well as the glyphs for vertical scripts. Note that this keyword causes all characters to be considered as left-to-right: the used value of {{cssxref("direction")}} is forced to be `ltr`.
- `sideways`
  - : Causes characters to be laid out as they would be horizontally, but with the whole line rotated 90° clockwise.
- `sideways-right`
  - : An alias to `sideways` that is kept for compatibility purposes.
- `use-glyph-orientation`
  - : On SVG elements, this keyword leads to use the value of the deprecated SVG properties `glyph-orientation-vertical` and `glyph-orientation-horizontal`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<p>Lorem ipsum dolet semper quisquam.</p>
```

### CSS

```css
p {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other vertical-script related CSS properties: {{cssxref("writing-mode")}}, {{cssxref("text-combine-upright")}}, and {{cssxref("unicode-bidi")}}.
- [CSS Logical properties](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- [Styling vertical text (Chinese, Japanese, Korean and Mongolian)](https://www.w3.org/International/articles/vertical-text/)
- Extensive browsers support test results: <https://w3c.github.io/i18n-tests/results/horizontal-in-vertical.html#text_orientation>
