---
title: "HTMLFieldSetElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLFieldSetElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFieldSetElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref("HTMLFieldSetElement")}} interface performs the same validity checking steps as the {{domxref("HTMLFieldSetElement.checkValidity", "checkValidity()")}} method. It always returns true because {{HTMLElement("fieldset")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation).

## Syntax

```js-nolint
reportValidity()
```

### Parameters

None.

### Return value

A boolean value, `true`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFieldSetElement.checkValidity()")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
