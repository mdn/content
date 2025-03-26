---
title: "DOMRectList: length property"
short-title: length
slug: Web/API/DOMRectList/length
page-type: web-api-instance-property
browser-compat: api.DOMRectList.length
---

{{APIRef("Geometry Interfaces")}}

The read-only **`length`** property of the {{domxref("DOMRectList")}} interface returns the number of {{domxref("DOMRect")}} objects in the list.

## Value

A positive integer representing the count of `DOMRect` objects in the `DOMRectList`. If there are no rectangles in the list, `length` is `0`.

## Examples

In the following example, we retrieve the list of rectangles for a {{htmlelement("div")}} element using {{domxref("Element.getClientRects()")}}. We then display the number of rectangles in the list within another `<div>` element on the page.

First, the HTML:

```html
<div id="box" style="width: 50px; height: 20px; border: 1px solid black;"></div>
<div id="output"></div>
```

Now the JavaScript:

```js
const box = document.getElementById("box");
const rects = box.getClientRects();
const output = document.getElementById("output");

output.textContent = `Number of rectangles: ${rects.length}`;
```

The output looks like this:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
