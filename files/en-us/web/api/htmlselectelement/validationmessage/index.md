---
title: "HTMLSelectElement: validationMessage property"
short-title: validationMessage
slug: Web/API/HTMLSelectElement/validationMessage
page-type: web-api-instance-property
browser-compat: api.HTMLSelectElement.validationMessage
---

{{APIRef("HTML DOM")}}

The **`validationMessage`** read-only property of the {{domxref("HTMLSelectElement")}} interface returns a string representing a localized message that describes the validation constraints that the {{htmlelement("select")}} control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation ({{domxref("HTMLSelectElement.willValidate")}} is `false`), or it satisfies its constraints.

If the `<select>` element is a candidate for constraint validation (`willValidate` is `true`) and the constraints are not met (the {{domxref("HTMLSelectElement.validity")}} object's `valid` property is `false`), the value is the error message that would be shown to the user during validation.

## Value

A string.

## Example

```js
const select = document.getElementById("mySelect");
const errorMessage = select.validationMessage;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLelement("select")}}
- {{domxref("HTMLSelectElement")}}
- {{domxref("HTMLSelectElement.willValidate")}}
- {{domxref("HTMLSelectElement.validity")}}
- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{domxref("HTMLSelectElement.reportValidity()")}}
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
