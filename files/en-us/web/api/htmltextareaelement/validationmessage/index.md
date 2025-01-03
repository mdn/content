---
title: "HTMLTextAreaElement: validationMessage property"
short-title: validationMessage
slug: Web/API/HTMLTextAreaElement/validationMessage
page-type: web-api-instance-property
browser-compat: api.HTMLTextAreaElement.validationMessage
---

{{APIRef("HTML DOM")}}

The **`validationMessage`** read-only property of the {{domxref("HTMLTextAreaElement")}} interface returns a string representing a localized message that describes the validation constraints that the {{htmlelement("textarea")}} control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation ({{domxref("HTMLTextAreaElement.willValidate")}} is `false`), or it satisfies its constraints.

If the `<textarea>` element is a candidate for constraint validation (`willValidate` is `true`) and the constraints are not met (the {{domxref("HTMLTextAreaElement.validity")}} object's `valid` property is `false`), the value is the error message that would be shown to the user during validation.

## Value

A string.

## Example

```js
const textarea = document.getElementById("myTextArea");
const errorMessage = textarea.validationMessage;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLelement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.willValidate")}}
- {{domxref("HTMLTextAreaElement.validity")}}
- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{domxref("HTMLTextAreaElement.reportValidity()")}}
- {{domxref("HTMLTextAreaElement.setCustomValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
