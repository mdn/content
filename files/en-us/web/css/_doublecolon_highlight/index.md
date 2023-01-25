---
title: '::highlight()'
slug: Web/CSS/::highlight
page-type: css-pseudo-element
tags:
  - CSS
  - Pseudo-element
  - Reference
  - Selector
browser-compat: css.selectors.highlight
---

{{CSSRef}}

The **`::highlight()`** CSS [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) applies styles to a custom highlight.

A custom highlight is a collection of {{domxref("Range")}} objects and is registered on a webpage using the {{domxref("HighlightRegistry")}}.

## Allowable properties

Only certain CSS properties can be used with `::highlight()`:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} and its associated properties
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} and {{CSSxRef("-webkit-text-stroke-width")}}

In particular, {{CSSxRef("background-image")}} is ignored.

## Syntax

```
::highlight(custom-highlight-name)
```

## Examples

### HTML

```html
<p id="foo">This text is highlighted with the CSS Custom Highlight API.</p>
```

### JavaScript

```js
const textNode = document.getElementById("foo").childNodes[0];

const range = new Range();
range.setStart(textNode, 10);
range.setEnd(textNode, 20);

const highlight = new Highlight(range);

CSS.highlights.set('my-custom-highlight', highlight);
```

### CSS

```css
::highlight(my-custom-highlight) {
  color: black;
  background-color: #f06;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
