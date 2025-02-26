---
title: border-top-width
slug: Web/CSS/border-top-width
page-type: css-property
browser-compat: css.properties.border-top-width
---

{{CSSRef}}

The **`border-top-width`** [CSS](/en-US/docs/Web/CSS) property sets the width of the top border of an element.

{{EmbedInteractiveExample("pages/css/border-top-width.html")}}

## Syntax

```css
/* Keyword values */
border-top-width: thin;
border-top-width: medium;
border-top-width: thick;

/* <length> values */
border-top-width: 10em;
border-top-width: 3vmax;
border-top-width: 6px;

/* Global keywords */
border-top-width: inherit;
border-top-width: initial;
border-top-width: revert;
border-top-width: revert-layer;
border-top-width: unset;
```

### Values

- `<line-width>`

  - : Defines the width of the border, either as an explicit nonnegative {{cssxref("&lt;length&gt;")}} or a keyword. If it's a keyword, it must be one of the following values:

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> Because the specification doesn't define the exact thickness denoted by each keyword, the precise result when using one of them is implementation-specific. Nevertheless, they always follow the pattern `thin ≤ medium ≤ thick`, and the values are constant within a single document.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<div>Element 1</div>
<div>Element 2</div>
```

### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-top-width: thick;
}
div:nth-child(2) {
  border-top-width: 2em;
}
```

### Result

{{EmbedLiveSample('Examples', '100%')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The other border-width-related CSS properties: {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-bottom-width")}}, and {{Cssxref("border-width")}}.
- The other border-top-related CSS properties: {{Cssxref("border")}}, {{Cssxref("border-top")}}, {{Cssxref("border-top-style")}}, and {{Cssxref("border-top-color")}}.
