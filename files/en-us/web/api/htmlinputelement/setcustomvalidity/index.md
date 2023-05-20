---
title: "HTMLInputElement: setCustomValidity() method"
short-title: setCustomValidity()
slug: Web/API/HTMLInputElement/setCustomValidity
page-type: web-api-instance-method
browser-compat: api.HTMLObjectElement.setCustomValidity
---

{{APIRef("HTML DOM")}}

The **`HTMLInputElement.setCustomValidity()`** method sets a custom validity message for the element.

## Syntax

```js-nolint
setCustomValidity(message)
```

### Parameters

- `message`
  - : The message to use for validity errors.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

None.

## Examples

In this example, we pass the ID of an input element, and set different error messages
depending on whether the value is missing, too low, or too high. Additionally you
_must_ call the [`reportValidity()`](/en-US/docs/Web/API/HTMLInputElement/reportValidity)
method on the same element or else nothing will happen.

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("You gotta fill this out, yo!");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("We need a higher number!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("That's too high!");
  } else {
    input.setCustomValidity("");
  }

  input.reportValidity();
}
```

It's vital to set the message to an empty string if there are no errors. As long as the
error message is not empty, the form will not pass validation and will not be
submitted.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- {{domxref('ValidityState')}}
