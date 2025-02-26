---
title: "HTMLObjectElement: setCustomValidity() method"
short-title: setCustomValidity()
slug: Web/API/HTMLObjectElement/setCustomValidity
page-type: web-api-instance-method
browser-compat: api.HTMLObjectElement.setCustomValidity
---

{{APIRef("HTML DOM")}}

The **`setCustomValidity()`** method of the
{{domxref("HTMLObjectElement")}} interface sets a custom validity message for the
element.

## Syntax

```js-nolint
setCustomValidity(errorMessage)
```

### Parameters

- `errorMessage`
  - : The message to use for validity errors.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

None.

## Examples

In this example, we pass the ID of an input element and set different error
messages depending on whether the value is missing, too low, or too high. Note
that the message will not be displayed immediately. Attempting to submit the
form will display the message, or you can call the
[`reportValidity()`](/en-US/docs/Web/API/HTMLInputElement/reportValidity) method
on the element.

```js
function validate(inputID) {
  const input = document.getElementById(inputID);
  const validityState = input.validity;

  if (validityState.valueMissing) {
    input.setCustomValidity("You gotta fill this out, yo!");
  } else if (validityState.rangeUnderflow) {
    input.setCustomValidity("We need a higher number!");
  } else if (validityState.rangeOverflow) {
    input.setCustomValidity("Thats too high!");
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

- {{domxref('validityState')}}
- {{domxref('validityState.valueMissing')}}
- {{domxref('validityState.typeMismatch')}}
- {{domxref('validityState.patternMismatch')}}
- {{domxref('validityState.tooLong')}}
- {{domxref('validityState.tooShort')}}
- {{domxref('validityState.rangeUnderflow')}}
- {{domxref('validityState.rangeOverflow')}}
- {{domxref('validityState.stepMismatch')}}
- {{domxref('validityState.valid')}}
- {{domxref('validityState.customError')}}
