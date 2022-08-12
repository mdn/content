---
title: HTMLSelectElement.checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
page-type: web-api-instance-method
tags:
  - API
  - Constraint Validation API
  - HTML DOM
  - HTMLSelectElement
  - Method
  - Reference
browser-compat: api.HTMLSelectElement.checkValidity
---
{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.checkValidity()`** method checks
whether the element has any constraints and whether it satisfies them. If the element
fails its constraints, the browser fires a cancelable {{domxref("HTMLSelectElement/invalid_event", "invalid")}} event at the
element, and then returns `false`.

## Syntax

```js
checkValidity()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Form validation](/en-US/docs/Web/Guide/HTML/Constraint_validation)
