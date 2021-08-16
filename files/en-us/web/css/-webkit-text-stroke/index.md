---
title: '-webkit-text-stroke'
slug: Web/CSS/-webkit-text-stroke
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - WebKit
  - recipe:css-shorthand-property
browser-compat: css.properties.-webkit-text-stroke
---
{{CSSRef}}{{Non-standard_header}}

The **`-webkit-text-stroke`** [CSS](/en-US/docs/Web/CSS) property specifies the [width](/en-US/docs/Web/CSS/length) and [color](/en-US/docs/Web/CSS/color_value) of strokes for text characters. This is a shorthand property for the longhand properties {{cssxref("-webkit-text-stroke-width")}} and {{cssxref("-webkit-text-stroke-color")}}.

```css
/* Width and color values */
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;

/* Global values */
-webkit-text-stroke: inherit;
-webkit-text-stroke: initial;
-webkit-text-stroke: unset;
text-stroke: inherit;
text-stroke: initial;
text-stroke: unset;
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`-webkit-stroke-color`](/en-US/docs/Web/CSS/-webkit-text-stroke-color)
- [`-webkit-stroke-width`](/en-US/docs/Web/CSS/-webkit-text-stroke-width)

## Syntax

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The width of the stroke.
- {{cssxref("&lt;color&gt;")}}
  - : The color of the stroke.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Adding a red text stroke

#### HTML

```html
<p id="example">The stroke of this text is red.</p>
```

#### CSS

```css
#example {
  font-size: 3em;
  margin: 0;
  -webkit-text-stroke: 2px red;
}
```

#### Result

{{EmbedLiveSample("Adding_a_red_text_stroke", 600, 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Surfin' Safari blog post announcing this feature](https://www.webkit.org/blog/85/introducing-text-stroke/)
- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-fill-color")}}
