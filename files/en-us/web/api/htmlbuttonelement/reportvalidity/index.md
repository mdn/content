---
title: "HTMLButtonElement: reportValidity() method"
short-title: reportValidity()
slug: Web/API/HTMLButtonElement/reportValidity
page-type: web-api-instance-method
browser-compat: api.HTMLButtonElement.reportValidity
---

{{APIRef("HTML DOM")}}

The **`reportValidity()`** method of the {{domxref('HTMLButtonElement')}} interface performs the same validity checking steps as the {{domxref("HTMLButtonElement.checkValidity", "checkValidity()")}} method. If the element fails to meet any [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules, the method returns `false`, fires the `invalid` event on the element, and (if the event isn't canceled) reports the problem to the user.

An HTML {{htmlelement("button")}} element with a non-null {{domxref("HTMLButtonElement.validationMessage", "validationMessage"}} is considered invalid, will match the CSS {{cssxref(":invalid")}} pseudo-class, and will cause `reportValidity()` to display the validation message to the user and return `false`. Use the {{domxref("HTMLButtonElement.setCustomValidity()")}} method to set the {{domxref("HTMLButtonElement.validationMessage")}} to the empty string to enable the {{domxref("HTMLButtonElement.validity", "validity")}} state to be valid.

## Syntax

```js-nolint
reportValidity()
```

### Parameters

None.

### Return value

A boolean value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLButtonElement.checkValidity()")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
- [CodePen example of an invalid `<button>`](https://codepen.io/estelle/pen/abgKeEp)
