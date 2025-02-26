---
title: "HTMLButtonElement: commandForElement property"
short-title: commandForElement
slug: Web/API/HTMLButtonElement/commandForElement
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLButtonElement.commandForElement
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

The **`commandForElement`** property of the {{domxref("HTMLButtonElement")}} interface gets and sets the element to control via a button.

It is the JavaScript equivalent of the [`commandfor`](/en-US/docs/Web/HTML/Element/button#commandfor) HTML attribute.

## Value

A reference to an existing {{domxref("Element")}} that the button controls.

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

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("CommandEvent")}}
