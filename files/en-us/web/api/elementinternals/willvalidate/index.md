---
title: "ElementInternals: willValidate property"
short-title: willValidate
slug: Web/API/ElementInternals/willValidate
page-type: web-api-instance-property
browser-compat: api.ElementInternals.willValidate
---

{{APIRef("Web Components")}}

The **`willValidate`** read-only property of the {{domxref("ElementInternals")}} interface returns `true` if the element is a submittable element that is a candidate for [constraint validation](/en-US/docs/Web/HTML/Constraint_validation).

Elements that are barred from being candidates for constraint validation include those that have the attributes: `disabled`, `hidden` or `readonly`, input elements of `type=button` or `type=reset`, or any element that is a {{htmlelement("datalist")}} element or has a `<datalist>` element ancestor.

## Value

`true` if the element is a candidate for constraint validation, otherwise `false`.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the element does not have its `formAssociated` property set to `true`.

## Examples

The following example shows a custom checkbox component with `formAssociated` set to `true`, the value of `willValidate` is logged to the console.

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  // …
}

window.customElements.define("custom-checkbox", CustomCheckbox);

let element = document.getElementById("custom-checkbox");
console.log(element.internals_.willValidate); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
