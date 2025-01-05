---
title: "HTMLObjectElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLObjectElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLObjectElement.checkValidity
---

{{APIRef("HTML DOM")}}

The **`checkValidity()`** method of the {{domxref("HTMLObjectElement")}} interface checks if the element is valid, but always returns true because {{HTMLElement("object")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation).

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
const element = document.getElementById("myObjectElement");
console.log(element.checkValidity());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLObjectElement.reportValidity()")}}
- {{HTMLElement("object")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
