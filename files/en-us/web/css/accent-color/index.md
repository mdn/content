---
title: accent-color
slug: Web/CSS/accent-color
tags:
  - CSS
  - CSS Property
  - CSS User Interface
  - HTML Colors
  - Input
  - Reference
  - Styling HTML
  - accent-color
  - recipe:css-property
browser-compat: css.properties.accent-color
---
{{CSSRef}}

The **`accent-color`** [CSS](/en-US/docs/Web/CSS) property sets the color of the elements {{Glossary("accent")}}. An accent appears in elements such as {{HTMLElement("input")}} of [`type="checkbox"`](/en-US/docs/Web/HTML/Element/input/checkbox), or [`type="radio"`](/en-US/docs/Web/HTML/Element/input/radio).

## Syntax

```css
/* Keyword values */
accent-color: auto;

/* <color> values */
accent-color: red;
accent-color: #5729e9;
accent-color: rgb(0, 200, 0);
accent-color: hsl(228, 4%, 24%);

/* Global values */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: unset;
```

### Values

- `auto`
  - : Represents a UA-chosen color, which should match the accent color of the platform, if any.
- {{cssxref("&lt;color&gt;")}}
  - : Specifies the color to be used as the accent color.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a custom accent color

#### HTML

```html
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

#### CSS

```css
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

#### Result

{{EmbedLiveSample('Setting_a_custom_accent_color', 500, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("input")}} element
- [Applying color to HTML elements using CSS](/en-US/docs/Web/HTML/Applying_color)
- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
