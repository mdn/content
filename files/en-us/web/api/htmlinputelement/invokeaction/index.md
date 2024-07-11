---
title: "HTMLInputElement: invokeAction property"
short-title: invokeAction
slug: Web/API/HTMLInputElement/invokeAction
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.invokeAction
---

{{ APIRef("DOM") }}

The **`invokeAction`** property of the {{domxref("HTMLInputElement")}} interface gets and sets the action to be performed on an element being controlled by a button. For this to have an effect, [`invoketarget`](/en-US/docs/Web/HTML/Element/button#invoketarget) must be set.

It reflects the [`invokeaction`](/en-US/docs/Web/HTML/Element/button#invokeaction) HTML attribute.

## Value

A string.

## Examples

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.invokeAction = "showPopover";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Invokers API](/en-US/docs/Web/API/Invokers_API)
