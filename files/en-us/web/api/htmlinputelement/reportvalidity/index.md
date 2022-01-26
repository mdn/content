---
title: HTMLInputElement.reportValidity()
slug: Web/API/HTMLInputElement/reportValidity
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - NeedsExample
  - Reference
  - reportValidity
  - reportValidity()
browser-compat: api.HTMLInputElement.reportValidity
---
{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref('HTMLInputElement')}} interface performs the same validity checking steps as the {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}} method. If the value is invalid, this method also fires the {{domxref("HTMLInputElement.invalid_event", "invalid")}} event on the element, and (if the event isn't canceled) reports the problem to the user.

## Syntax

```js
element.reportValidity();
```

### Return value

Returns `true` if the element's value has no validity problems; otherwise, returns `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation)
- [Constraint validation API](/en-US/docs/Web/API/Constraint_validation)
