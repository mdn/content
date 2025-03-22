---
title: "HTMLElement: offsetLeft property"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
page-type: web-api-instance-property
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

![A sentence that reads: Short span. This text is completely within a div with a blue border. A sentence that reads: Long span that wraps within this div. The words "long span that wraps" is within a box with a red border. The words "within this div" are within the div with the blue border. ](offsetleft.jpg)

```html
<div
  style="width: 300px; border-color:blue; border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="long-span">Long span that wraps within this div.</span>
</div>

<div
  id="box"
  style="position: absolute; border-color: red; border-width: 1; border-style: solid; z-index: 10"></div>

<script>
  const box = document.getElementById("box");
  const longSpan = document.getElementById("long-span");
  box.style.left = longSpan.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = longSpan.offsetTop + document.body.scrollTop + "px";
  box.style.width = longSpan.offsetWidth + "px";
  box.style.height = longSpan.offsetHeight + "px";
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.offsetParent")}}, {{domxref("HTMLElement.offsetTop")}}, {{domxref("HTMLElement.offsetWidth")}}, {{domxref("HTMLElement.offsetHeight")}}
