---
title: "HTMLButtonElement: commandForElement property"
short-title: commandForElement
slug: Web/API/HTMLButtonElement/commandForElement
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLButtonElement.commandForElement
---

{{ APIRef("DOM") }}

The **`commandForElement`** property of the {{domxref("HTMLButtonElement")}} interface gets and sets the element to control via a button.

It is the JavaScript equivalent of the [`commandfor`](/en-US/docs/Web/HTML/Element/button#invoketarget) HTML attribute.

## Value

A reference to an element in the DOM.

## Examples

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.commandForElement = popover;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [command](/en-US/docs/Web/API/HTMLButtonElement/command)
- [CommandEvent](/en-US/docs/Web/API/CommandEvent)
