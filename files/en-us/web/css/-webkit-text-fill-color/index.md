---
title: -webkit-text-fill-color
slug: Web/CSS/-webkit-text-fill-color
page-type: css-property
browser-compat: css.properties.-webkit-text-fill-color
---

{{CSSRef}}

The **`-webkit-text-fill-color`** [CSS](/en-US/docs/Web/CSS) property specifies the fill [color](/en-US/docs/Web/CSS/color_value) of characters of text. If this property is not set, the value of the {{cssxref("color")}} property is used.

## Syntax

```css
/* <color> values */
-webkit-text-fill-color: red;
-webkit-text-fill-color: #000000;
-webkit-text-fill-color: rgb(100 200 0);

/* Global values */
-webkit-text-fill-color: inherit;
-webkit-text-fill-color: initial;
-webkit-text-fill-color: revert;
-webkit-text-fill-color: revert-layer;
-webkit-text-fill-color: unset;
```

### Values

- `<color>`
  - : The foreground fill color of the element's text content.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Changing the fill color

#### CSS

```css
p {
  margin: 0;
  font-size: 3em;
  -webkit-text-fill-color: green;
}
```

#### HTML

```html
<p>This text is green.</p>
```

#### Results

{{EmbedLiveSample("Changing_the_fill_color", "380px", "60px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introducing Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) on webkit.org (2006)
- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke-width")}}
- {{cssxref("-webkit-text-stroke")}}
