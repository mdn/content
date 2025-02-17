---
title: "HTMLOutputElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLOutputElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLOutputElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref("HTMLOutputElement")}} interface performs the same validity checking steps as the {{domxref("HTMLOutputElement.checkValidity", "checkValidity()")}} method. It always returns true because {{HTMLElement("output")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation).

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

- {{domxref("HTMLOutputElement.checkValidity()")}}
- {{HTMLElement("output")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
