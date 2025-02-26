---
title: "HTMLOutputElement: validationMessage property"
short-title: validationMessage
slug: Web/API/HTMLOutputElement/validationMessage
page-type: web-api-instance-property
browser-compat: api.HTMLOutputElement.validationMessage
---

{{APIRef("HTML DOM")}}

The **`validationMessage`** read-only property of the {{domxref("HTMLOutputElement")}} interface returns a string representing a localized message that describes the validation constraints that the {{htmlelement("output")}} control does not satisfy (if any). This is the empty string as `<output>` elements are not candidates for constraint validation ({{domxref("HTMLOutputElement.willValidate")}} is `false`).

## Value

The empty string, `""`;

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLelement("output")}}
- {{domxref("HTMLOutputElement")}}
- {{domxref("HTMLOutputElement.willValidate")}}
- {{domxref("HTMLOutputElement.validity")}}
- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{domxref("HTMLOutputElement.reportValidity()")}}
- {{domxref("HTMLOutputElement.setCustomValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
