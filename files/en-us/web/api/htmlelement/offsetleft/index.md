---
title: HTMLElement.offsetLeft
slug: Web/API/HTMLElement/offsetLeft
page-type: web-api-instance-property
tags:
  - API
  - CSSOM View
  - NeedsMarkupWork
  - Property
  - Read-only
  - Reference
browser-compat: api.HTMLElement.offsetLeft
---
{{ APIRef("HTML DOM") }}

The **`HTMLElement.offsetLeft`** read-only property returns the number of pixels that the _upper left corner_ of the current element is offset to the left within the {{domxref("HTMLElement.offsetParent")}} node.

For block-level elements, `offsetTop`, `offsetLeft`, `offsetWidth`, and `offsetHeight` describe the border box of an element relative to the `offsetParent`.

However, for inline-level elements (such as **span**) that can wrap from one line to the next, `offsetTop` and `offsetLeft` describe the positions of the _first_ border box (use {{domxref("Element.getClientRects()")}} to get its width and height), while `offsetWidth` and `offsetHeight` describe the dimensions of the _bounding_ border box (use {{domxref("Element.getBoundingClientRect()")}} to get its position). Therefore, a box with the left, top, width and height of `offsetLeft`, `offsetTop`, `offsetWidth` and `offsetHeight` will not be a bounding box for a span with wrapped text.

## Value

An integer.

## Examples

```js
const colorTable = document.getElementById("t1");
const tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // large left offset: do something here
}
```

This example shows a 'long' sentence that wraps within a div with a blue border, and a red box that one might think should describe the boundaries of the span.

![](offsetleft.jpg)

```html
<div style="width: 300px; border-color:blue; border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="longspan">Long span that wraps within this div.</span>
</div>

<div id="box" style="position: absolute; border-color: red; border-width: 1; border-style: solid; z-index: 10">
</div>

<script>
  const box = document.getElementById("box");
  const longspan = document.getElementById("longspan");
  box.style.left = longspan.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = longspan.offsetTop + document.body.scrollTop + "px";
  box.style.width = longspan.offsetWidth + "px";
  box.style.height = longspan.offsetHeight + "px";
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.offsetParent")}}, {{domxref("HTMLElement.offsetTop")}}, {{domxref("HTMLElement.offsetWidth")}}, {{domxref("HTMLElement.offsetHeight")}}
