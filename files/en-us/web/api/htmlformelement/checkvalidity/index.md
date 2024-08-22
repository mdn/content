---
title: "HTMLFormElement: checkValidity() method"
short-title: checkValidity()
slug: Web/API/HTMLFormElement/checkValidity
page-type: web-api-instance-method
browser-compat: api.HTMLFormElement.checkValidity
---

{{APIRef("Web Components")}}

The **`checkValidity()`** method of the {{domxref("HTMLFormElement")}} interface checks if the form controls associated with the form, either nested within the or associated via the `form` attribute, meet the [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) rules applied to them.

Returns `true` if the element's child and otherwise associated controls that are subject to constraint validation satisfy those constraints; returns `false` if any associated control does not satisfy their constraints or, if subject to constaint validation, has a non-null custom validity message.

Fires an event named `invalid` at any control that does not satisfy its constraints; such controls are considered invalid if the event is not canceled. It is up to the programmer to decide how to respond to `false`.

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
let element = document.getElementById("myForm");
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
