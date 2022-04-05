---
title: border-left-width
slug: Web/CSS/border-left-width
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.border-left-width
---
{{CSSRef}}

The **`border-left-width`** [CSS](/en-US/docs/Web/CSS) property sets the width of the left border of an element.

{{EmbedInteractiveExample("pages/css/border-left-width.html")}}

## Syntax

```css
/* Keyword values */
border-left-width: thin;
border-left-width: medium;
border-left-width: thick;

/* <length> values */
border-left-width: 10em;
border-left-width: 3vmax;
border-left-width: 6px;

/* Global keywords */
border-left-width: inherit;
border-left-width: initial;
border-left-width: revert;
border-left-width: revert-layer;
border-left-width: unset;
```

### Values

- `<line-width>`

  - : Defines the width of the border, either as an explicit nonnegative {{cssxref("&lt;length&gt;")}} or a keyword. If it's a keyword, it must be one of the following values:

    - `thin`
    - `medium`
    - `thick`

> **Note:** Because the specification doesn't define the exact thickness denoted by each keyword, the precise result when using one of them is implementation-specific. Nevertheless, they always follow the pattern `thin ≤ medium ≤ thick`, and the values are constant within a single document.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Comparing border widths

#### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

#### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-left-width: thick;
}
div:nth-child(2) {
  border-left-width: 2em;
}
```

#### Result

{{EmbedLiveSample('Comparing_border_widths', '100%')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other border-width-related CSS properties: {{Cssxref("border-top-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, and {{Cssxref("border-width")}}.
- The other border-left-related CSS properties: {{Cssxref("border")}}, {{Cssxref("border-left")}}, {{Cssxref("border-left-style")}}, and {{Cssxref("border-left-color")}}.
