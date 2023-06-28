---
title: ":first"
slug: Web/CSS/:first
page-type: css-pseudo-class
browser-compat: css.selectors.first
---

{{CSSRef}}

The **`:first`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes), used with the {{cssxref("@page")}} [at-rule](/en-US/docs/Web/CSS/At-rule), represents the first page of a printed document. (See {{cssxref(":first-child")}} for general first element of a node.)

```css
/* Selects the first page when printing */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> **Note:** You can't change all CSS properties with this pseudo-class. You can only change the margins, {{cssxref("orphans")}}, {{cssxref("widows")}}, and page breaks of the document. Furthermore, you may only use [absolute-length](/en-US/docs/Web/CSS/length#absolute_length_units) units when defining the margins. All other properties will be ignored.

## Syntax

```css
:first {
  /* ... */
}
```

## Examples

### HTML

```html
<p>First Page.</p>
<p>Second Page.</p>
<button>Print!</button>
```

### CSS

```css
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", () => {
  window.print();
});
```

### Result

Press the "Print!" button to print the example. The words on the first page should be somewhere around the center, while other pages will have their contents at the default position.

{{ EmbedLiveSample('Examples', '80%', '150px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("@page")}}
- Other page-related pseudo-classes: {{Cssxref(":left")}}, {{Cssxref(":right")}}
