---
title: "HTMLFieldSetElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLFieldSetElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFieldSetElement.checkValidity
---

{{APIRef("HTML DOM")}}

The **`checkValidity()`** method of the {{domxref("HTMLFieldSetElement")}} interface checks if the element is valid, but always returns true because {{HTMLElement("fieldset")}} elements are never candidates for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation).

> [!NOTE]
> The {{cssxref(":valid")}} and {{cssxref(":invalid")}} CSS pseudo-classes are applied to `<fieldset>` elements based on the validity of its descendant form controls, not the fieldset itself.

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
const element = document.getElementById("myFieldSet");
console.log(element.checkValidity());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLFieldSetElement.reportValidity()")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("form")}}
- [Learn: Client-side form validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide: Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
