---
title: "HTMLButtonElement: validity property"
short-title: validity
slug: Web/API/HTMLButtonElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLButtonElement")}} interface returns a {{domxref("ValidityState")}} object that represents the validity states this element is in.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example gets the validity state of a button element and processes it if it is not valid:

```js
const button = document.getElementById("myButton");
if (!button.validity.valid) {
  // Test each validity state
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
