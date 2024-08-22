---
title: "HTMLTextareaElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLTextareaElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLTextareaElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref('HTMLTextareaElement')}} interface performs the same validity checking steps as the {{domxref("HTMLTextareaElement.checkValidity", "checkValidity()")}} method. If the value is invalid, this method also fires the {{domxref("HTMLTextareaElement.invalid_event", "invalid")}} event on the element, and (if the event isn't canceled) reports the problem to the user.

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

- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLTextareaElement.checkValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
