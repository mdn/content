---
title: -webkit-text-stroke-width
slug: Web/CSS/-webkit-text-stroke-width
page-type: css-property
browser-compat: css.properties.-webkit-text-stroke-width
---

{{CSSRef}}

The **`-webkit-text-stroke-width`** [CSS](/en-US/docs/Web/CSS) property specifies the width of the stroke for text.

## Syntax

```css
/* Keyword values */
-webkit-text-stroke-width: thin;
-webkit-text-stroke-width: medium;
-webkit-text-stroke-width: thick;

/* <length> values */
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-width: 0.1em;
-webkit-text-stroke-width: 1mm;
-webkit-text-stroke-width: 5pt;

/* Global values */
-webkit-text-stroke-width: inherit;
-webkit-text-stroke-width: initial;
-webkit-text-stroke-width: revert;
-webkit-text-stroke-width: revert-layer;
-webkit-text-stroke-width: unset;
```

### Values

- `<line-width>`
  - : The width of the stroke.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Varying stroke widths

#### CSS

```css
p {
  margin: 0;
  font-size: 4em;
  -webkit-text-stroke-color: red;
}

#thin {
  -webkit-text-stroke-width: thin;
}

#medium {
  -webkit-text-stroke-width: 3px;
}

#thick {
  -webkit-text-stroke-width: 1.5mm;
}
```

#### HTML

```html
<p id="thin">Thin stroke</p>
<p id="medium">Medium stroke</p>
<p id="thick">Thick stroke</p>
```

#### Results

{{EmbedLiveSample("Varying_stroke_widths", "450px", "230px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introducing Text-Stroke](https://webkit.org/blog/85/introducing-text-stroke/) on webkit.org (2006)
- [CSS-Tricks article explaining this feature](https://css-tricks.com/adding-stroke-to-web-text/)
- {{cssxref("-webkit-text-stroke-color")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-text-fill-color")}}
