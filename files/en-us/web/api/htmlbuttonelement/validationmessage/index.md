---
title: "HTMLButtonElement: validationMessage property"
short-title: validationMessage
slug: Web/API/HTMLButtonElement/validationMessage
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.validationMessage
---

{{APIRef("HTML DOM")}}

The **`validationMessage`** read-only property of the {{domxref("HTMLButtonElement")}} interface returns a string representing a localized message that describes the validation constraints that the {{htmlelement("button")}} control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (the `<button>`'s [`type`](/en-US/docs/Web/HTML/Element/button#type) is `button` or `reset`), or it satisfies its constraints.

If the `<button>` is a candidate for constraint validation (the `type` is set or defaults to `submit` and {{domxref("HTMLButtonElement.willValidate")}} is `true`) and the constraints are not met (there is a non-null {{domxref("ValidityState.customError")}}), the value is the error message that would be shown to the user during element validation.

## Value

A string.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLelement("button")}}
- {{domxref("HTMLButtonElement")}}
- {{domxref("HTMLButtonElement.willValidate")}}
- {{domxref("HTMLButtonElement.validity")}}
- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{domxref("HTMLButtonElement.reportValidity()")}}
- {{domxref("HTMLButtonElement.setCustomValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
