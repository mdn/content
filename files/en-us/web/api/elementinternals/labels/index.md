---
title: ElementInternals.labels
slug: Web/API/ElementInternals/labels
tags:
  - API
  - Property
  - Reference
  - labels
  - ElementInternals
browser-compat: api.ElementInternals.labels
---
{{DefaultAPISidebar("DOM")}}

The **`labels`** read-only property of the {{domxref("ElementInternals")}} interface returns the labels associated with the element.

## Syntax

```js
let labels = ElementInternals.labels;
```

### Value

A {{domxref("NodeList")}} containing all of the label elements associated with this element.

## Examples

The following example shows a custom checkbox component with a {{HTMLElement("label")}} element linked to it. Printing the value of `labels` to the console returns a {{domxref("NodeList")}} with one entry, representing this label.

```html
<form id="myForm"><custom-checkbox id="join-checkbox"></custom-checkbox>
  <label for="custom-checkbox">Join newsletter</label></form>
```

```js
let element = document.getElementById("custom-checkbox");
console.log(element.internals_.label);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
