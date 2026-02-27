---
title: "CustomElementRegistry: CustomElementRegistry() constructor"
short-title: CustomElementRegistry()
slug: Web/API/CustomElementRegistry/CustomElementRegistry
page-type: web-api-constructor
browser-compat: api.CustomElementRegistry.CustomElementRegistry
---

{{APIRef("Web Components")}}

The **`CustomElementRegistry()`** constructor creates a new {{domxref("CustomElementRegistry")}} object for scoped usage.

The constructor is specifically used for creating scoped registries that limit [custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements) definitions to a particular scope, such as an element or {{domxref("ShadowRoot")}}.

> [!NOTE]
> The global `CustomElementRegistry` object associated with a {{domxref("Window")}} is not created using this constructor; it is automatically created when the window is set up, and is accessible via the {{domxref("window.customElements")}} property.

## Syntax

```js-nolint
new CustomElementRegistry()
```

### Parameters

None.

### Return value

A new {{domxref("CustomElementRegistry")}} object.

## Description

When you construct a `CustomElementRegistry` using `new CustomElementRegistry()`, the resulting registry is considered _scoped_. This means:

- Custom element definitions added to it using {{domxref("CustomElementRegistry.define", "define()")}} are not globally available. They only apply to nodes that have been associated with this registry.
- It does not support the `extends` option in `define()` (for creating [customized built-in elements](/en-US/docs/Web/API/Web_components/Using_custom_elements#types_of_custom_elements)). Attempting to use `extends` with a scoped registry throws a `NotSupportedError` {{domxref("DOMException")}}.

To associate a scoped registry with a DOM subtree, you can use the {{domxref("CustomElementRegistry.initialize()", "initialize()")}} method, pass it to {{domxref("Element.attachShadow()")}}, or use the {{domxref("Document.createElement()")}} method's `customElementRegistry` option.

## Examples

### Creating a scoped custom element registry

This example creates a scoped registry, defines a custom element on it, and passes the registry to {{domxref("Element.attachShadow()")}}. When HTML containing `<my-element>` is added to the shadow root, the element is upgraded using the scoped registry's definition.

```js
const myRegistry = new CustomElementRegistry();

myRegistry.define(
  "my-element",
  class extends HTMLElement {
    connectedCallback() {
      this.textContent = "Hello from scoped registry!";
    }
  },
);

const host = document.createElement("div");
document.body.appendChild(host);
const shadow = host.attachShadow({
  mode: "open",
  customElementRegistry: myRegistry,
});
shadow.innerHTML = "<my-element></my-element>";

console.log(shadow.querySelector("my-element").textContent);
// "Hello from scoped registry!"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
- {{domxref("CustomElementRegistry.initialize()")}}
- {{domxref("CustomElementRegistry.define()")}}
