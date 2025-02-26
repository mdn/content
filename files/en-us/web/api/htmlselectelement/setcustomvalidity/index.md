---
title: "HTMLSelectElement: setCustomValidity() method"
short-title: setCustomValidity()
slug: Web/API/HTMLSelectElement/setCustomValidity
page-type: web-api-instance-method
browser-compat: api.HTMLSelectElement.setCustomValidity
---

{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.setCustomValidity()`** method sets the
custom validity message for the selection element to the specified message. Use the
empty string to indicate that the element does _not_ have a custom validity
error.

## Syntax

```js-nolint
setCustomValidity(string)
```

### Parameters

- `string`
  - : The string containing the error message. The empty string removes any custom validity errors.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Form validation](/en-US/docs/Web/HTML/Constraint_validation).
