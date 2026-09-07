---
title: "Window: customElements property"
short-title: customElements
slug: Web/API/Window/customElements
page-type: web-api-instance-property
browser-compat: api.Window.customElements
---

{{APIRef("Web Components")}}

The **`customElements`** read-only property of the {{domxref("Window")}} interface returns a reference to the global {{domxref("CustomElementRegistry")}} object, which can be used to register new [custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements) and get information about previously registered custom elements.

The global registry is used for registering custom elements by default, but a shadow root can choose to use a [scoped custom element registry](/en-US/docs/Web/API/Web_components/Using_custom_elements#scoped_custom_element_registries) in order to avoid potential clashes in defined element names.

## Value

A {{domxref("CustomElementRegistry")}}.

## Examples

### Basic usage

The most common example you'll see of this property being used is to get access to the {{domxref("CustomElementRegistry.define()")}} method to define and register a new custom element.

For example:

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

Note that the custom element class is commonly defined directly inside the `define()` call, as shown:

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("element-details-template");
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        document.importNode(template.content, true),
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
