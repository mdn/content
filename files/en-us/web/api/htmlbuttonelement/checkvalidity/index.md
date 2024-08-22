---
title: "HTMLButtonElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLButtonElement.checkValidity
---

{{APIRef("Web Components")}}

The **`checkValidity()`** method of the {{domxref("HTMLButtonElement")}} interface checks if the element meets any [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules applied to it.

## Syntax

```js-nolint
checkValidity()
```

### Parameters

None.

### Return value

A boolean value, `true` if the element meets all validation constraints.

## Examples

In the following example, calling `checkValidity()` returns either `true` or `false`.

```js
let element = document.getElementById("myButton");
console.log(element.checkValidity());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.reportValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
