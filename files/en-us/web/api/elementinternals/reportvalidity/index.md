---
title: "ElementInternals: reportValidity() method"
short-title: reportValidity()
slug: Web/API/ElementInternals/reportValidity
page-type: web-api-instance-method
browser-compat: api.ElementInternals.reportValidity
---

{{APIRef("DOM")}}

The **`reportValidity()`** method of the {{domxref("ElementInternals")}} interface checks if the element meets any [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules applied to it.

If `reportValidity` returns `false` then a cancelable [invalid event](/en-US/docs/Web/API/HTMLInputElement/invalid_event) is fired on the element.

This method behaves in a similar way to {{domxref("ElementInternals.checkValidity()")}}, however it additionally sends the value of {{domxref("ElementInternals.validationMessage")}} to the user agent for display.

## Syntax

```js-nolint
reportValidity()
```

### Parameters

None.

### Return value

A boolean value, `true` if the element meets all validation constraints.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the element does not have its `formAssociated` property set to `true`.

## Examples

In the following example {{domxref("ElementInternals.setValidity()")}} is used to indicate that the element does not meet validation rules. Calling `reportValidity()` returns `false`, and the value "my message" is sent to the user agent for display.

After calling `setValidity` again, this time indicating that all rules are marked false, `reportValidity()` returns `true`.

```js
let element = document.getElementById("join-checkbox");
element.internals_.setValidity({ valueMissing: true }, "my message");
console.log(element.internals_.reportValidity()); // false
element.internals_.setValidity({});
console.log(element.internals_.reportValidity()); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
