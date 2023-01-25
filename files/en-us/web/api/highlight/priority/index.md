---
title: Highlight.priority
slug: Web/API/Highlight/priority
page-type: web-api-instance-property
tags:
  - API
  - Property
  - CSS Custom Highlight API
  - Reference
  - priority
browser-compat: api.Highlight.priority
---

{{APIRef("CSS Custom Highlight API")}}

It is possible to create {{domxref("Range")}} objects that overlap in a document.

When overlapping ranges are used by multiple different {{domxref("Highlight")}} objects, and styled using the {{cssxref("::highlight")}} pseudo-element, the browser needs to decide the order in which to apply these styles.

The `priority` property of the {{domxref("Highlight")}} interface is a {{jsxref("Number")}} used to determine which highlight should be used to style multiple highlights' overlapping parts.

By default, highlights have a priority of `0`, and the browser chooses the most recently registered highlight.

## Value

An integer.

## Examples

```js
const r1 = new Range();
r1.setStart(textNode, 10);
r1.setEnd(textNode, 20);

const h1 = new Highlight(r1);

// Set the first highlight's priority to 1 so
// it is painted above the second highlight, in
// the places where the two highlights overlap.
h1.priority = 1;

const r1 = new Range();
r1.setStart(textNode, 15);
r1.setEnd(textNode, 25);

const h2 = new Highlight(r2);

CSS.highlights.set("custom-highlight-1", h1);
CSS.highlights.set("custom-highlight-2", h2);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("css_custom_highlight_api", "The CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
