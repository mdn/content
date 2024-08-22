---
title: "HTMLFieldsetElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLFieldsetElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFieldsetElement.checkValidity
---

{{APIRef("Web Components")}}

The **`checkValidity()`** method of the {{domxref("HTMLFieldsetElement")}} interface checks if the element is valid, but always returns true because {{HTMLElement("fieldset")}} objects are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) .

## Syntax

```js-nolint
checkValidity()
```

### Parameters

None.

### Return value

A boolean value, `true`.

## Examples

In the following example, calling `checkValidity()` returns `true`.

```js
let element = document.getElementById("myFieldset");
console.log(element.checkValidity());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFieldsetElement.reportValidity()")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
