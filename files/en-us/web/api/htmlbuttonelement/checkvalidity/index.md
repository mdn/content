---
title: "HTMLButtonElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLButtonElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLButtonElement.checkValidity
---

{{APIRef("Web Components")}}

The **`checkValidity()`** method of the {{domxref("HTMLButtonElement")}} interface returns a boolean value which indicates if the element meets any [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules applied to it. If false, the method also fires the `invalid` event on the element.

> [!NOTE]
> An HTML {{htmlelement("button")}} element with a non-null {{domxref("HTMLButtonElement.validationMessage", "validationMessage")}} is considered invalid, will match the CSS {{cssxref(":invalid")}} pseudo-class, and will cause `checkValidity()` to return false. Use the {{domxref("HTMLButtonElement.setCustomValidity()")}} method to set the {{domxref("HTMLButtonElement.validationMessage")}} to the empty string to enable the {{domxref("HTMLButtonElement.validity", "validity")}} state to be valid.

## Syntax

```js-nolint
checkValidity()
```

### Parameters

None.

### Return value

A boolean value.

## Examples

In the following example, calling `checkValidity()` returns either `true` or `false`.

```js
const element = document.getElementById("myButton");
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
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
