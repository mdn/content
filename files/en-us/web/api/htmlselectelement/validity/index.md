---
title: "HTMLSelectElement: validity property"
short-title: validity
slug: Web/API/HTMLSelectElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLSelectElement")}} interface returns a {{domxref("ValidityState")}} object that represents the validity states this element is in.

## Value

A {{domxref("ValidityState")}} object.

## Example

The following example gets the validity state of a select element and processes it if it is not valid:

```js
const select = document.getElementById("mySelect");
const validityState = select.validity;
if (!validityState.valid) {
  // Test each validity state
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
