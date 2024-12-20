---
title: "HTMLFieldSetElement: validationMessage property"
short-title: validationMessage
slug: Web/API/HTMLFieldSetElement/validationMessage
page-type: web-api-instance-property
browser-compat: api.HTMLFieldSetElement.validationMessage
---

{{APIRef("HTML DOM")}}

The **`validationMessage`** read-only property of the {{domxref("HTMLFieldSetElement")}} interface returns a string representing a localized message that describes the validation constraints that the {{htmlelement("fieldset")}} control does not satisfy (if any). This is the empty string as `<fieldset>` elements are not candidates for constraint validation ({{domxref("HTMLFieldSetElement.willValidate")}} is `false`).

## Value

The empty string, `""`;

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLelement("fieldset")}}
- {{domxref("HTMLFieldSetElement")}}
- {{domxref("HTMLFieldSetElement.willValidate")}}
- {{domxref("HTMLFieldSetElement.validity")}}
- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- {{domxref("HTMLFieldSetElement.reportValidity()")}}
- {{domxref("HTMLFieldSetElement.setCustomValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
