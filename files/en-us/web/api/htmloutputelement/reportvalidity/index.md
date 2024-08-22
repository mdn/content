---
title: "HTMLOutputElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLOutputElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLOutputElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref('HTMLOutputElement')}} interface performs the same validity checking steps as the {{domxref("HTMLOutputElement.checkValidity", "checkValidity()")}} method.

This method, part of the constraint validation API, always returns `true` as `<output>` objects are never candidates for constraint validation.

## Syntax

```js-nolint
reportValidity()
```

### Parameters

None.

### Return value

Returns `true`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLOutputElement.checkValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
