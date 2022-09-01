---
title: '-moz-outline-radius-topleft'
slug: Web/CSS/-moz-outline-radius-topleft
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - recipe:css-property
  - Deprecated
browser-compat: css.properties.-moz-outline-radius-topleft
---
{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

In Mozilla applications, the **`-moz-outline-radius-topleft`** [CSS](/en-US/docs/Web/CSS) property can be used to round the top-left corner of an element's {{cssxref("outline")}}.

## Syntax

The value of `-moz-outline-radius-topleft` is either a CSS [`<length>`](/en-US/docs/Web/CSS/length) or a [percentage](/en-US/docs/Web/CSS/percentage) of the corresponding dimensions of the border box. The [`calc()`](/en-US/docs/Web/CSS/calc) function may be used as well.

### Values

- `<length>`
  - : The radius of the circle defining the curvature of the top and left edges of the element, specified as a CSS [`<length>`](/en-US/docs/Web/CSS/length).
- `<percentage>`
  - : The radius of the circle defining the rounding of the top-left corner of the element, specified as the [percentages](/en-US/docs/Web/CSS/percentage) of the top and left sides of the border box.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-moz-outline-radius-topleft =
  <outline-radius> 
```

## Examples

The example below will not display the desired effect if you are viewing this in a browser other than Firefox.

### HTML

```html
<p>Look at this paragraph's top-left corner.</p>
```

### CSS

```css
p {
  margin: 5px;
  border: solid cyan;
  outline: dotted red;
  -moz-outline-radius-topleft: 2em;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- See the {{cssxref("-moz-outline-radius")}} property for more information.
