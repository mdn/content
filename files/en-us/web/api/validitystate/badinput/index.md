---
title: ValidityState.badInput
slug: Web/API/ValidityState/badInput
page-type: web-api-instance-property
tags:
  - API
  - Constraints API
  - HTML DOM
  - Property
  - Read-only
  - ValidityState
browser-compat: api.ValidityState.badInput
---
{{APIRef("HTML DOM")}}

The read-only **`badInput`** property of a [ValidityState](/en-US/docs/Web/API/ValidityState) object indicates if the user has provided input that the browser is unable to convert. For example, if you have a number input element whose content is a string.

## Value

A boolean.

## Examples

```html
<input type="number" id="age">
```

```js
const input = document.getElementById("age");
if (input.validity.badInput) {
  console.log("Bad input detected…");
} else {
  console.log("Content of input OK.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Guide: Constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation)
- [Tutorial: Form data validation](/en-US/docs/Learn/Forms/Form_validation)
