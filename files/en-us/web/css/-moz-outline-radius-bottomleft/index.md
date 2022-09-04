---
title: '-moz-outline-radius-bottomleft'
slug: Web/CSS/-moz-outline-radius-bottomleft
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - recipe:css-property
  - Deprecated
browser-compat: css.properties.-moz-outline-radius-bottomleft
---
{{CSSRef}}{{deprecated_header}}{{Non-standard_header}}

In Mozilla applications, the **`-moz-outline-radius-bottomleft`** [CSS](/en-US/docs/Web/CSS) property can be used to round the bottom-left corner of an element's {{cssxref("outline")}}.

## Syntax

The value of `-moz-outline-radius-bottomleft` is either a CSS {{cssxref("length", "&lt;length&gt;")}} or a [percentage](/en-US/docs/Web/CSS/percentage) of the corresponding dimensions of the border box. The {{cssxref("calc", "calc()")}} function may be used as well.

### Values

- `<length>`
  - : The radius of the circle defining the curvature of the bottom and left edges of the element, specified as a CSS {{cssxref("length", "&lt;length&gt;")}}.
- `<percentage>`
  - : The radius of the circle defining the rounding of the bottom-left corner of the element, specified as the [percentages](/en-US/docs/Web/CSS/percentage) of the bottom and left sides of the border box.

## Formal definition

{{cssinfo}}

## Formal syntax

```plain
 -moz-outline-radius-bottomleft =
  <outline-radius>
```

## Examples

### Rounding a outline

Since this is a Firefox-only property, this example will not display the desired effect if you are viewing this in a browser other than Firefox.

#### HTML

```html
<p>Look at this paragraph's bottom-left corner.</p>
```

#### CSS

```css
p {
  margin: 10px;
  border: solid cyan;
  outline: dotted green;
  -moz-outline-radius-bottomleft: 2em;
}
```

#### Result

{{EmbedLiveSample("Rounding_a_outline")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- See the {{cssxref("-moz-outline-radius")}} property for more information.
