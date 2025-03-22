---
title: "HTMLOutputElement: setCustomValidity() method"
short-title: setCustomValidity()
slug: Web/API/HTMLOutputElement/setCustomValidity
page-type: web-api-instance-method
browser-compat: api.HTMLOutputElement.setCustomValidity
---

{{ APIRef("HTML DOM") }}

The **`setCustomValidity()`** method of the {{DOMxRef("HTMLOutputElement")}} interface sets the custom validity message for the {{htmlelement("output")}} element. Use the empty string to indicate that the element does _not_ have a custom validity error.

The `<output>` element is not a candidate for constraint validation. The {{DOMxRef("HTMLOutputElement.reportValidity()", "reportValidity()")}} method will not cause the custom error message to be displayed to the user, but does set the {{DOMxRef("ValidityState.customError", "customError")}} property of the element's {{DOMxRef("ValidityState")}} object to `true` and the {{DOMxRef("ValidityState.valid", "valid")}} property to `false`.

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

In this example, if the `<output>`'s {{domxref("HTMLOutputElement.value", "value")}} is not a non-zero number, we set a custom error message. If it is a number, we set the custom error to an empty string:

```js
const cart = document.getElementById("cart-form");
const total = cart.elements("total");
if (parseFloat(total.value)) {
  errorOutput.setCustomValidity("");
} else {
  errorOutput.setCustomValidity("There is an error");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLelement("output")}}
- {{domxref("HTMLOutputElement")}}
- {{domxref("HTMLOutputElement.validity")}}
- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{domxref("HTMLOutputElement.reportValidity()")}}
- [Form validation](/en-US/docs/Web/HTML/Constraint_validation).
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
