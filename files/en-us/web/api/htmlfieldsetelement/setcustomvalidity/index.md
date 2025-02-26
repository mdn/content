---
title: "HTMLFieldSetElement: setCustomValidity() method"
short-title: setCustomValidity()
slug: Web/API/HTMLFieldSetElement/setCustomValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFieldSetElement.setCustomValidity
---

{{ APIRef("HTML DOM") }}

The **`setCustomValidity()`** method of the {{DOMxRef("HTMLFieldSetElement")}} interface sets the custom validity message for the {{htmlelement("fieldset")}} element. Use the empty string to indicate that the element does _not_ have a custom validity error.

The `<fieldset>` element is not a candidate for constraint validation. The {{DOMxRef("HTMLFieldSetElement.reportValidity()", "reportValidity()")}} method will not cause the custom error message to be displayed to the user, but does set the {{DOMxRef("ValidityState.customError", "customError")}} property of the element's {{DOMxRef("ValidityState")}} object to `true` and the {{DOMxRef("ValidityState.valid", "valid")}} property to `false`.

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
const errorFieldSet = document.getElementById("checkErrors");
const errors = issuesToReport();
if (errors) {
  errorFieldSet.setCustomValidity("There is an error");
} else {
  errorFieldSet.setCustomValidity("");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLelement("fieldset")}}
- {{domxref("HTMLFieldSetElement")}}
- {{domxref("HTMLFieldSetElement.validity")}}
- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- {{domxref("HTMLFieldSetElement.reportValidity()")}}
- [Form validation](/en-US/docs/Web/HTML/Constraint_validation).
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
