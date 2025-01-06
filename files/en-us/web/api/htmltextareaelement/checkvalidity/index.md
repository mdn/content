---
title: "HTMLTextAreaElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLTextAreaElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLTextAreaElement.checkValidity
---

{{APIRef("HTML DOM")}}

The **`checkValidity()`** method of the {{domxref("HTMLTextAreaElement")}} interface returns a boolean value which indicates if the element meets any [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules applied to it. If false, the method also fires an {{domxref("HTMLElement/invalid_event", "invalid")}} event on the element. Because there's no default browser behavior for `checkValidity()`, canceling this `invalid` event has no effect.

> [!NOTE]
> An HTML {{htmlelement("textarea")}} element with a non-null {{domxref("HTMLTextAreaElement.validationMessage", "validationMessage")}} is considered invalid, will match the CSS {{cssxref(":invalid")}} pseudo-class, and will cause `checkValidity()` to return false. Use the {{domxref("HTMLTextAreaElement.setCustomValidity()")}} method to set the {{domxref("HTMLTextAreaElement.validationMessage")}} to the empty string to set the {{domxref("HTMLTextAreaElement.validity", "validity")}} state to be valid.

## Syntax

```js-nolint
checkValidity()
```

### Parameters

None.

### Return value

Returns `true` if the element's value has no validity problems; otherwise, returns `false`.

## Examples

In the following example, calling `checkValidity()` returns either `true` or `false`.

```js
const element = document.getElementById("myTextArea");
console.log(element.checkValidity());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextAreaElement.reportValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- CSS {{cssxref(":valid")}} and {{cssxref(":invalid")}} pseudo-classes
