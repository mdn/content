---
title: "HTMLSelectElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLSelectElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLSelectElement.checkValidity
---

{{ APIRef("HTML DOM") }}

The **`HTMLSelectElement.checkValidity()`** method checks
whether the element has any constraints and whether it satisfies them. If the element
fails its constraints, the browser fires a cancelable {{domxref("HTMLSelectElement/invalid_event", "invalid")}} event at the
element, and then returns `false`.

## Syntax

```js-nolint
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

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
