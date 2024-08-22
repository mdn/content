---
title: "HTMLFieldsetElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLFieldsetElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFieldsetElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref('HTMLFieldsetElement')}} interface performs the same validity checking steps as the {{domxref("HTMLFieldsetElement.checkValidity", "checkValidity()")}} method.

This method, part of the constraint validation API, always returns `true` as `<fieldset>` objects are never candidates for constraint validation.

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

- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFieldsetElement.checkValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
