---
title: ElementInternals.form
slug: Web/API/ElementInternals/form
page-type: web-api-instance-property
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
<form id="myForm">
  <custom-checkbox id="custom-checkbox"></custom-checkbox>
  <custom-label for="custom-checkbox">Join newsletter</custom-label>
</form>
```

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;
  #internals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  connectedCallback() {
    console.log(this.#internals.form.length)
  }
}

window.customElements.define("custom-checkbox", CustomCheckbox);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
