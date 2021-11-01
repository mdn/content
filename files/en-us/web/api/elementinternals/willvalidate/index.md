---
title: ElementInternals.willValidate
slug: Web/API/ElementInternals/willValidate
tags:
  - API
  - Property
  - Reference
  - willValidate
  - ElementInternals
browser-compat: api.ElementInternals.willValidate
---
{{DefaultAPISidebar("DOM")}}

The **`willValidate`** read-only property of the {{domxref("ElementInternals")}} interface returns true if the element is a submittable element that is a candidate for [constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation).

## Syntax

```js
let willValidate = ElementInternals.willValidate;
```

### Value

A boolean value, true if the element is a candidate for constraint validation.

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

    /* ... */

  }
  window.customElements.define("custom-checkbox", CustomCheckbox);
})();

let element = document.getElementById("custom-checkbox");
console.log(element.internals_.willValidate); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
