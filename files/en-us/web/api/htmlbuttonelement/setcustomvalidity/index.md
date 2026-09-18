---
title: "HTMLButtonElement: setCustomValidity() method"
short-title: setCustomValidity()
slug: Web/API/HTMLButtonElement/setCustomValidity
page-type: web-api-instance-method
browser-compat: api.HTMLButtonElement.setCustomValidity
---

{{ APIRef("HTML DOM") }}

The **`setCustomValidity()`** method of the {{DOMxRef("HTMLButtonElement")}} interface sets the custom validity message for the {{htmlelement("button")}} element. Use the empty string to indicate that the element does _not_ have a custom validity error.

Some {{HTMLElement("button")}} elements are not candidates for constraint validation (see {{domxref("HTMLButtonElement.willValidate")}}). For these buttons, the {{DOMxRef("HTMLButtonElement.reportValidity()", "reportValidity()")}} method will not cause the custom error message to be displayed to the user, but does set the {{DOMxRef("ValidityState.customError", "customError")}} property of the element's {{DOMxRef("ValidityState")}} object to `true` and the {{DOMxRef("ValidityState.valid", "valid")}} property to `false`. Use {{domxref("HTMLButtonElement.willValidate")}} to check whether a button participates in constraint validation.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameters

- `string`
  - : The string containing the error message. The empty string removes any custom validity errors.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const errorButton = document.getElementById("checkErrors");
const errors = issuesToReport();
if (errors) {
  errorButton.setCustomValidity("There is an error");
} else {
  errorButton.setCustomValidity("");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLelement("button")}}
- {{domxref("HTMLButtonElement")}}
- {{domxref("HTMLButtonElement.validity")}}
- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{domxref("HTMLButtonElement.reportValidity()")}}
- [Form validation](/en-US/docs/Web/HTML/Guides/Constraint_validation).
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Guides/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
