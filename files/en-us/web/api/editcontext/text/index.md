---
title: "EditContext: text property"
short-title: text
slug: Web/API/EditContext/text
page-type: web-api-instance-property
browser-compat: api.EditContext.text
---

{{APIRef("EditContext API")}}

The **`text`** read-only property of the {{domxref("EditContext")}} interface represents the editable text content of the element.

## Value

A string containing the current editable text content. Its initial value is the empty string.

This string may or may not be equal to the `textContent` value of the DOM element that's associated to the `EditContext`. The associated element might, for example, be a `<canvas>` element, which doesn't have a `textContent` property. Or, the associated element might be a `<div>` element, but which contains a different text content, for a more advanced rendering.

## Examples

...

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
