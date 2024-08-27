---
title: "HTMLFormElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFormElement.checkValidity
---

{{APIRef("Web Components")}}

The **`checkValidity()`** method of the {{domxref("HTMLFormElement")}} interface checks if the form, including all the controls associated with it, meet applied [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules.

When invoked, the user agent must constraints of the form element are validated. The method returns `true` if the constraint validation returns a positive result, `false` otherwise. It is up to the programmer to decide how to respond to `false`. To alert the user to errors within the form, use {{domxref("HTMLFormElement.reportValidity()")}} instead.

> [!NOTE]
> When the form is checked, the {{domxref("HTMLInputElement.invalid_event", "invalid")}} event is fired on every associated form control that does not satisfy their constraints, but not on the form element itself.

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
