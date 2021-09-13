---
title: ElementInternals.validity
slug: Web/API/ElementInternals/validity
tags:
  - API
  - Property
  - Reference
  - validity
  - ElementInternals
browser-compat: api.ElementInternals.validity
---
{{DefaultAPISidebar("DOM")}}

The **`validity`** read-only property of the {{domxref("ElementInternals")}} interface returns a {{domxref("ValidityState")}} object which represents the different validity states the element can be in, with respect to constraint validation.

## Syntax

```js
let validity = ElementInternals.validity;
```

### Value

A {{domxref("ValidityState")}} object.

### Exceptions

- {{domxref("DOMException")}} `NotSupportedError`
  - : Thrown if the element does not have its `formAssociated` property set to `true`.

## Examples

The following example shows a custom checkbox component with `formAssociated` set to `true`, the value of `validity.valid` is logged to the console.

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
console.log(element.internals_.validity.valid);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
