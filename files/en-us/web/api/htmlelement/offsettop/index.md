---
title: "HTMLElement: offsetTop property"
short-title: offsetTop
slug: Web/API/HTMLElement/offsetTop
page-type: web-api-instance-property
browser-compat: api.HTMLElement.offsetTop
---

{{ APIRef("HTML DOM") }}

The **`HTMLElement.offsetTop`** read-only property returns the
distance from the outer border of the current element (including its margin) to the top padding edge of the {{domxref("HTMLelement.offsetParent","offsetParent")}}, the _closest positioned_
ancestor element.

## Value

A number.

## Examples

```js
const d = document.getElementById("div1");
const topPos = d.offsetTop;

if (topPos > 10) {
  // object offset is more
  // than 10 pixels from its parent
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
