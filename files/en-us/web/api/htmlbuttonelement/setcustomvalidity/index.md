---
title: "HTMLButtonElement: setCustomValidity() method"
short-title: setCustomValidity()
slug: Web/API/HTMLButtonElement/setCustomValidity
page-type: web-api-instance-method
browser-compat: api.HTMLButtonElement.setCustomValidity
---

{{ APIRef("HTML DOM") }}

The **`setCustomValidity()`** method of the {{DOMxRef("HTMLButtonElement")}} interface sets the custom validity message for the {{htmlelement("button")}} element. Use the empty string to indicate that the element does _not_ have a custom validity error.

> **Note:** Although the `HTMLButtonElement` interface implements
> `setCustomValidity()`, `<button>` elements are **not candidates for constraint
> validation**. As a result, calling this method on a button (including
> `type="button"` or `type="submit"`) does **not affect form validation** and
> does **not prevent form submission**.


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

> This example sets a validity message on the button element only.
> Button elements do not participate in constraint validation.


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
