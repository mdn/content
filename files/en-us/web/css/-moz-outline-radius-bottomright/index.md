---
title: '-moz-outline-radius-bottomright'
slug: Web/CSS/-moz-outline-radius-bottomright
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - recipe:css-property
  - Deprecated
browser-compat: css.properties.-moz-outline-radius-bottomright
---
{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

In Mozilla applications, the **`-moz-outline-radius-bottomright`** [CSS](/en-US/docs/Web/CSS) property can be used to round the bottom-right corner of an element's {{cssxref("outline")}}.

## Syntax

The value of `-moz-outline-radius-bottomright` is either a CSS {{cssxref("length", "&lt;length&gt;")}} or a [percentage](/en-US/docs/Web/CSS/percentage) of the corresponding dimensions of the border box. The {{cssxref("calc", "calc()")}} function may be used as well.

### Values

- `<length>`
  - : The radius of the circle defining the curvature of the bottom and right edges of the element, specified as a CSS {{cssxref("length", "&lt;length&gt;")}}.
- `<percentage>`
  - : The radius of the circle defining the rounding of the bottom-right corner of the element, specified as the [percentages](/en-US/docs/Web/CSS/percentage) of the bottom and right sides of the border box.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-moz-outline-radius-bottomright =
  <outline-radius>
```

## Examples

### HTML

```html
<p>Look at this paragraph's bottom-right corner.</p>
```

### CSS

```css
p {
  margin: 5px;
  border: solid cyan;
  outline: dotted red;
  -moz-outline-radius-bottomright: 2em;
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
