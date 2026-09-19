---
title: "HTMLButtonElement: setCustomValidity() method"
short-title: setCustomValidity()
slug: Web/API/HTMLButtonElement/setCustomValidity
page-type: web-api-instance-method
browser-compat: api.HTMLButtonElement.setCustomValidity
---

{{ APIRef("HTML DOM") }}

The **`setCustomValidity()`** method of the {{DOMxRef("HTMLButtonElement")}} interface sets the custom validity message for the {{htmlelement("button")}} element. Use the empty string to indicate that the element does _not_ have a custom validity error.

> [!NOTE]
> Per the HTML specification, only submit buttons (`type="submit"`, or buttons where the `type` attribute is omitted) are candidates for [constraint validation](/en-US/docs/Web/HTML/Guides/Constraint_validation). Non-submit buttons (`type="button"` or `type="reset"`) are barred from constraint validation (their {{domxref("HTMLButtonElement.willValidate", "willValidate")}} property is `false`), so setting a custom error on them will not trigger browser validation UI or prevent form submission.

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
