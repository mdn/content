---
title: "ElementInternals: checkValidity() method"
short-title: checkValidity()
slug: Web/API/ElementInternals/checkValidity
page-type: web-api-instance-method
browser-compat: api.ElementInternals.checkValidity
---

{{APIRef("Web Components")}}

The **`checkValidity()`** method of the {{domxref("ElementInternals")}} interface checks if the element meets any [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules applied to it.

If `checkValidity` returns `false` then a cancelable [invalid event](/en-US/docs/Web/API/HTMLInputElement/invalid_event) is fired on the element.

## Syntax

```js-nolint
checkValidity()
```

### Parameters

None.

### Return value

A boolean value, `true` if the element meets all validation constraints.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the element does not have its `formAssociated` property set to `true`.

## Examples

In the following example {{domxref("ElementInternals.setValidity()")}} is used to indicate that the element does not meet validation rules. Calling `checkValidity()` returns `false`. After calling `setValidity` again, this time indicating that all rules are marked false, `checkValidity()` returns `true`.

```js
let element = document.getElementById("join-checkbox");
element.internals_.setValidity({ valueMissing: true }, "my message");
console.log(element.internals_.checkValidity()); // false
element.internals_.setValidity({});
console.log(element.internals_.checkValidity()); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
