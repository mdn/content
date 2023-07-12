---
title: "Window: customElements property"
short-title: customElements
slug: Web/API/Window/customElements
page-type: web-api-instance-property
browser-compat: api.Window.customElements
---

{{APIRef}}

The **`customElements`** read-only property of the {{domxref("Window")}} interface returns a reference to the {{domxref("CustomElementRegistry")}} object, which can be used to register new [custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements) and get information about previously registered custom elements.

## Examples

The most common example you'll see of this property being used is to get access to the {{domxref("CustomElementRegistry.define()")}} method to define and register a new custom element, e.g.:

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

However, it is usually shortened to something like the following:

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
```

See our [web-components-examples](https://github.com/mdn/web-components-examples/) repo for more usage examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
