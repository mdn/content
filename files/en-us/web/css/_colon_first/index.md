---
title: :first
slug: Web/CSS/:first
page-type: css-pseudo-class
browser-compat: css.selectors.first
---

{{CSSRef}}

The **`:first`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes), used with the {{cssxref("@page")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule), represents the first page of a printed document. (See {{cssxref(":first-child")}} for general first element of a node.)

```css
/* Selects the first page when printing */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> [!NOTE]
> You can't change all CSS properties with this pseudo-class. You can only change the margins, {{cssxref("orphans")}}, {{cssxref("widows")}}, and page breaks of the document. Furthermore, you may only use [absolute-length](/en-US/docs/Web/CSS/length#absolute_length_units) units when defining the margins. All other properties will be ignored.

## Syntax

```css
:first {
  /* ... */
}
```

## Examples

### Using `:first` for page print styles

Press the "Print!" button to print the example. The words on the first page should be somewhere around the center, while other pages will have their contents at the default position:

```html live-sample___colon-first
<p>First Page.</p>
<p>Second Page.</p>
<button>Print!</button>
```

```css live-sample___colon-first
@page :first {
  size: 8.5in 11in;
  margin-left: 3in;
  margin-top: 5in;
}

p {
  page-break-after: always;
  font: 1.2em sans-serif;
}
```

```js live-sample___colon-first
document.querySelector("button").addEventListener("click", () => {
  window.print();
});
```

{{EmbedLiveSample('colon-first', '100%', , , , , , "allow-modals")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("@page")}}
- Other page-related pseudo-classes: {{Cssxref(":left")}}, {{Cssxref(":right")}}
