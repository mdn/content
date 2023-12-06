---
title: "HTMLInputElement: invokeTargetElement property"
short-title: invokeTargetElement
slug: Web/API/HTMLInputElement/invokeTargetElement
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.invokeTargetElement
---

{{ APIRef("DOM") }}

The **`invokeTargetElement`** property of the {{domxref("HTMLInputElement")}} interface gets and sets the element to control via a button.

It is the JavaScript equivalent of the [`invoketarget`](/en-US/docs/Web/HTML/Element/button#invoketarget) HTML attribute.

## Value

A reference to an element in the DOM.

## Examples

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.invokeTargetElement = popover;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Invokers API](/en-US/docs/Web/API/Invokers_API)
