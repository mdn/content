---
title: "HTMLFormElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFormElement.checkValidity
---

{{APIRef("HTML DOM")}}

The **`checkValidity()`** method of the {{domxref("HTMLFormElement")}} interface returns a boolean value which indicates if all associated controls meet any [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules applied to them. The method also fires an {{domxref("HTMLElement/invalid_event", "invalid")}} event on each invalid element, but not on the form element itself. Because there's no default browser behavior for `checkValidity()`, canceling this `invalid` event has no effect.

## Syntax

```js-nolint
checkValidity()
```

### Parameters

None.

### Return value

A boolean value.

## Examples

In the following example, calling `checkValidity()` would return `true` if or `false`.

```js
const element = document.getElementById("myForm");
console.log(element.checkValidity());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFormElement.reportValidity()")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
