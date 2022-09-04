---
title: '-moz-outline-radius-topright'
slug: Web/CSS/-moz-outline-radius-topright
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - recipe:css-property
  - Deprecated
browser-compat: css.properties.-moz-outline-radius-topright
---
{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

In Mozilla applications, the **`-moz-outline-radius-topright`** [CSS](/en-US/docs/Web/CSS) property can be used to round the top-right corner of an element's {{cssxref("outline")}}.

## Syntax

The value of `-moz-outline-radius-topright` is either a CSS [`<length>`](/en-US/docs/Web/CSS/length) or a [percentage](/en-US/docs/Web/CSS/percentage) of the corresponding dimensions of the border box. The [`calc()`](/en-US/docs/Web/CSS/calc) function may be used as well.

### Values

- `<length>`
  - : The radius of the circle defining the curvature of the top and right edges of the element, specified as a CSS [`<length>`](/en-US/docs/Web/CSS/length).
- `<percentage>`
  - : The radius of the circle defining the rounding of the top-right corner of the element, specified as the [percentages](/en-US/docs/Web/CSS/percentage) of the top and right sides of the border box.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-moz-outline-radius-topright =
  <outline-radius>
```

## Examples

### HTML

```html
<p>Look at this paragraph's top-right corner.</p>
```

### CSS

```css
p {
  margin: 5px;
  border: solid cyan;
  outline: dotted red;
  -moz-outline-radius-topright: 2em;
}
```

### Result

{{EmbedLiveSample("Examples")}}

> **Note:** The example above will not display the desired effect if you are viewing this in a browser other than Firefox.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- See the {{cssxref("-moz-outline-radius")}} property for more information.
