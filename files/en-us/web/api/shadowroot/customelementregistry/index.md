---
title: "ShadowRoot: customElementRegistry property"
short-title: customElementRegistry
slug: Web/API/ShadowRoot/customElementRegistry
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.customElementRegistry
---

{{APIRef("Web Components")}}

The **`customElementRegistry`** read-only property of the {{domxref("ShadowRoot")}} interface returns the {{domxref("CustomElementRegistry")}} object associated with this shadow root, or `null` if one has not been set.

A shadow root's `customElementRegistry` determines which [custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements) definitions are used for upgrading elements within that shadow tree. It can be set when the shadow root is created via the `customElementRegistry` option of {{domxref("Element.attachShadow()")}}, or later using {{domxref("CustomElementRegistry.initialize()")}}. Once set to a `CustomElementRegistry` object, it cannot be changed.

This property is also available on {{domxref("Document")}} objects via the same `customElementRegistry` property name.

## Value

A {{domxref("CustomElementRegistry")}} object, or `null`.

## Examples

### Setting a scoped registry on a shadow root

This example creates a scoped registry with a custom element definition and passes it to {{domxref("Element.attachShadow()")}}. The `customElementRegistry` property on the resulting shadow root reflects the scoped registry.

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

console.log(shadow.customElementRegistry === myRegistry); // true
console.log(shadow.querySelector("my-element").textContent);
// "Hello from scoped registry!"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.customElementRegistry")}}
- {{domxref("Element.customElementRegistry")}}
- {{domxref("CustomElementRegistry")}}
- {{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}} constructor
- {{domxref("Element.attachShadow()")}}
- [Using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
