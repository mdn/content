---
title: "HTMLInputElement: validationMessage property"
short-title: validationMessage
slug: Web/API/HTMLInputElement/validationMessage
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.validationMessage
---

{{APIRef("HTML DOM")}}

The **`validationMessage`** read-only property of the {{domxref("HTMLInputElement")}} interface returns a string representing a localized message that describes the validation constraints that the {{htmlelement("input")}} control does not satisfy (if any).

If the `<input>` element is not a candidate for constraint validation ({{domxref("HTMLInputElement.willValidate")}} is `false`), or it satisfies its constraints, the value is the empty string (`""`).

If the element is a candidate for constraint validation (`willValidate` is `true`) and the constraints are not met (the {{domxref("HTMLInputElement.validity")}} object's `valid` property is `false`), the value is the error message that would be shown to the user during validation.

## Value

A string.

## Example

```js
const input = document.getElementById("myInput");
const errorMessage = input.validationMessage;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLelement("input")}}
- {{domxref("HTMLInputElement")}}
- {{domxref("HTMLInputElement.willValidate")}}
- {{domxref("HTMLInputElement.validity")}}
- {{domxref("HTMLInputElement.checkValidity()")}}
- {{domxref("HTMLInputElement.reportValidity()")}}
- {{domxref("HTMLInputElement.setCustomValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
