---
title: validityState.badInput
slug: Web/API/ValidityState/badInput
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

## Example

```html
<input type="number" id="age">
```

```js
var input = document.getElementById("age");
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

- [Guide: Constraint validation](/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Tutorial: Form data validation](/en-US/docs/Learn/Forms/Form_validation)
