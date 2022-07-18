---
title: HTMLInputElement.checkValidity()
slug: Web/API/HTMLInputElement/checkValidity
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - NeedsExample
  - Reference
  - checkValidity
  - checkValidity()
browser-compat: api.HTMLObjectElement.checkValidity
---
{{APIRef("HTML DOM")}}

The **`HTMLInputElement.checkValidity()`** method returns a boolean value which indicates validity of the value of the element. If the value is invalid, this method also fires the {{domxref("HTMLInputElement/invalid_event", "invalid")}} event on the element.

## Syntax

```js
checkValidity()
```

### Parameters

None.

### Return value

Returns `true` if the value of the element has no validity problems; otherwise returns `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [reportValidity](/en-US/docs/Web/API/HTMLInputElement/reportValidity)
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation)
- [Constraint validation API](/en-US/docs/Web/API/Constraint_validation)
