---
title: ElementInternals.form
slug: Web/API/ElementInternals/form
tags:
  - API
  - Property
  - Reference
  - form
  - ElementInternals
browser-compat: api.ElementInternals.form
---
{{DefaultAPISidebar("DOM")}}

The **`form`** read-only property of the {{domxref("ElementInternals")}} interface returns the {{domxref("HTMLFormElement")}} associated with this element.

## Value

An {{domxref("HTMLFormElement")}}.

## Examples

The following example shows a custom checkbox component inside a form with an ID of `myForm`.
Printing `form.length` to the console, gives us the value of {{domxref("HTMLFormElement.length")}}.

```html
<form id="myForm"><custom-checkbox id="join-checkbox"></custom-checkbox>
  <custom-label for="custom-checkbox">Join newsletter</custom-label></form>
```

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  /* ... */

  window.customElements.define("custom-checkbox", CustomCheckbox);
})();

let element = document.getElementById("custom-checkbox");
console.log(element.internals_.form.length);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
