---
title: "HTMLFieldSetElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLFieldSetElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFieldSetElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref("HTMLFieldSetElement")}} interface checks if the element is valid, performing the same validity checking steps as the {{domxref("HTMLFieldSetElement.checkValidity", "checkValidity()")}} method.

Part of the constraint validation API, this method always returns `true` as `<fieldset>` objects are never candidates for constraint validation.

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
- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
