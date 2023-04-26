---
title: "ValidityState: valid property"
short-title: valid
slug: Web/API/ValidityState/valid
page-type: web-api-instance-property
browser-compat: api.ValidityState.valid
---

{{APIRef("HTML DOM")}}

The read-only **`valid`** property of the [`ValidityState`](/en-US/docs/Web/API/ValidityState) interface indicates if the value of an {{HTMLElement("input")}}, after having been edited by the user, conforms to all the constraints set on the element.

If true, the element matches the {{cssxref(":valid")}} CSS pseudo-class; the {{cssxref(":invalid")}} CSS pseudo-class otherwise.

## Value

A boolean that is `true` if the `ValidityState` does conform to all the constraints.

## Examples

```html
<input type="number" id="age" />
```

```js
const input = document.getElementById("age");
if (input.validity.valid) {
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

- [Constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Forms: Data form validation](/en-US/docs/Learn/Forms/Form_validation)
