---
title: "HTMLOutputElement: validity property"
short-title: validity
slug: Web/API/HTMLOutputElement/validity
page-type: web-api-instance-property
browser-compat: api.HTMLOutputElement.validity
---

{{APIRef("HTML DOM")}}

The **`validity`** read-only property of the {{domxref("HTMLOutputElement")}} interface returns a {{domxref("ValidityState")}} object that represents the validity states this element is in. Although {{HTMLElement("output")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation), the validity state may still be invalid if a custom validity message has been set.

## Value

A {{domxref("ValidityState")}} object.

## Examples

The following example demonstrates that an `<output>` is in an invalid state when a {{domxref("ValidityState/customError", "customError")}} is set; in this state, {{domxref("HTMLOutputElement/checkValidity", "checkValidity()")}} returns `true` while the `validityState`'s `validity` property is `false`.

```js
const output = document.getElementById("myOutput");
output.setCustomValidity("This object element is invalid.");
const validityState = output.validity;
console.log(validityState.valid); // false
console.log(validityState.customError); // true
console.log(output.checkValidity()); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
