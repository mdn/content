---
title: "HTMLInputElement: required property"
short-title: required
slug: Web/API/HTMLInputElement/required
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.required
---

{{ APIRef("HTML DOM") }}

The **`required`** property of the {{DOMxRef("HTMLInputElement")}} interface specifies that the user must fill in a value before submitting a form. It reflects the {{htmlelement("input")}} element's [`required`](/en-US/docs/Web/HTML/Element/input#required) attribute.

While the HTML boolean `required` attribute is ignored if the type is `hidden`, `range`, `color`, `submit`, `reset`, `button`, and `image`, the `required` property is `true` for these input types if the attribute is present, `false` otherwise.

If a required input doesn't have a value, the {{domxref('ValidityState')}} object's read-only {{domxref('ValidityState.valueMissing','valueMissing')}} property will be true.

## Value

A boolean.

## Examples

```js
const inputElement = document.getElementById("name");
console.log(inputElement.required);
inputElement.required = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}}
- {{DOMXref("HTMLInputElement.validity")}}
- {{cssxref(":required")}} pseudo-class
