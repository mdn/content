---
title: "HTMLTextareaElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLTextareaElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLTextareaElement.checkValidity
---

{{APIRef("Web Components")}}

The **`checkValidity()`** method of the {{domxref("HTMLTextareaElement")}} interface checks if the {{HTMLElement("textarea")}} element meets all of the [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules applied to it.

The method returns `false` if the `<textarea>` value does not meet all the validation constraints applied to it or if the element has a custom validation message set, and `true` if if the element does meet all of the constraints applied and no custom validity message is set or it is set to the empty string.

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
let element = document.getElementById("myTextarea");
console.log(element.checkValidity());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTextareaElement.reportValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
