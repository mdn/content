---
title: "HTMLObjectElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLObjectElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLObjectElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref('HTMLObjectElement')}} interface performs the same validity checking steps as the {{domxref("HTMLObjectElement.checkValidity", "checkValidity()")}} method.

This method, part of the constraint validation API, always returns `true` as `<object>` elements are never candidates for constraint validation.

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

- {{HTMLElement("object")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLObjectElement.checkValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
