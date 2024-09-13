---
title: "HTMLElement: attachInternals() method"
short-title: attachInternals()
slug: Web/API/HTMLElement/attachInternals
page-type: web-api-instance-method
browser-compat: api.HTMLElement.attachInternals
---

{{APIRef("Web Components")}}

The **`HTMLElement.attachInternals()`** method returns an {{domxref("ElementInternals")}} object.
This method allows a [custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements) to participate in HTML forms. The `ElementInternals` interface provides utilities for working with these elements in the same way you would work with any standard HTML form element, and also exposes the [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) to the element.

## Syntax

```js-nolint
attachInternals()
```

### Parameters

None.

### Return value

An {{domxref("ElementInternals")}} object.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the element is not a custom element.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the "internals" feature was disabled as part of the element definition.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if this method is called twice on the same element.

## Examples

The following example demonstrates how to create a custom form-associated element with `HTMLElement.attachInternals`. The {{domxref("ElementInternals.form")}} property is then printed to the console to demonstrate that we have an {{domxref("ElementInternals")}} object.

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
console.log(element.internals_.form);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [More capable form controls](https://web.dev/articles/more-capable-form-controls)
- [Creating custom form controls with ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
