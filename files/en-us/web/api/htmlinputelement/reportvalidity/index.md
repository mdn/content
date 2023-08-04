---
title: "HTMLInputElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLInputElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref('HTMLInputElement')}} interface performs the same validity checking steps as the {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}} method. If the value is invalid, this method also fires the {{domxref("HTMLInputElement.invalid_event", "invalid")}} event on the element, and (if the event isn't canceled) reports the problem to the user.

## Syntax

```js-nolint
reportValidity()
```

### Parameters

None.

### Return value

Returns `true` if the element's value has no validity problems; otherwise, returns `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [checkValidity](/en-US/docs/Web/API/HTMLInputElement/checkValidity)
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
