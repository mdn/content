---
title: "HTMLOutputElement: validity property"
short-title: validity
slug: Web/API/HTMLOutputElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLOutputElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLOutputElement")}} interface returns a {{domxref("ValidityState")}} with the validity states that this element is in. Although {{HTMLElement("output")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation), the validity state may still be invalid if a custom validity message has been set.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example shows how you can have a `<output>` in an invalid state, even when {{domxref("HTMLOutputElement/checkValidity", "checkValidity()")}} returns `true`.

```js
const output = document.getElementById("myOutput");
output.setCustomValidity("This output is invalid.");
console.log(output.validity.valid); // false
console.log(output.validity.checkValidity()); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
