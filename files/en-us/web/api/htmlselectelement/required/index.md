---
title: "HTMLSelectElement: required property"
short-title: required
slug: Web/API/HTMLSelectElement/required
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.required
---

{{ APIRef("HTML DOM") }}

The **`required`** property of the {{DOMxRef("HTMLSelectElement")}} interface specifies that the user must select an option with a non-empty string value before submitting a form. It reflects the {{htmlelement("select")}} element's [`required`](/en-US/docs/Web/HTML/Element/select#required) attribute.

## Value

A boolean.

## Examples

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.required);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("select")}}
- {{DOMXref("HTMLSelectElement.validity")}}
- {{cssxref(":required")}} pseudo-class
