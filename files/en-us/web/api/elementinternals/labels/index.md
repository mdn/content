---
title: "ElementInternals: labels property"
short-title: labels
slug: Web/API/ElementInternals/labels
page-type: web-api-instance-property
browser-compat: api.ElementInternals.labels
---

{{APIRef("Web Components")}}

The **`labels`** read-only property of the {{domxref("ElementInternals")}} interface returns the labels associated with the element.

## Value

A {{domxref("NodeList")}} containing all of the label elements associated with this element.

## Examples

The following example shows a custom checkbox component with a {{HTMLElement("label")}} element linked to it.
Printing the value of `labels` to the console returns a {{domxref("NodeList")}} with one entry, representing this label.

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox"></custom-checkbox>
  <label for="custom-checkbox">Join newsletter</label>
</form>
```

```js
let element = document.getElementById("custom-checkbox");
console.log(element.internals_.label);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
