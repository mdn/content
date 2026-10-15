---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
page-type: web-api-interface
browser-compat: api.CustomElementRegistry
---

{{APIRef("Web Components")}}

The **`CustomElementRegistry`** interface provides methods for registering custom elements and querying registered elements. To get an instance of it, use the {{domxref("window.customElements")}} property. To create a scoped registry, use the {{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}} constructor.

## Constructor

- {{domxref("CustomElementRegistry.CustomElementRegistry()", "CustomElementRegistry()")}}
  - : Creates a new `CustomElementRegistry` object, for scoped usage.

## Instance methods

- {{domxref("CustomElementRegistry.define()")}}
  - : Defines a new [custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements).
- {{domxref("CustomElementRegistry.get()")}}
  - : Returns the constructor for the named custom element, or {{jsxref("undefined")}} if the custom element is not defined.
- {{domxref("CustomElementRegistry.getName()")}}
  - : Returns the name for the already-defined custom element, or `null` if the custom element is not defined.
- {{domxref("CustomElementRegistry.upgrade()")}}
  - : Upgrades a custom element directly, even before it is connected to its shadow root.
- {{domxref("CustomElementRegistry.initialize()")}}
  - : Associates a scoped registry with a DOM subtree, setting the custom element registry on each inclusive descendant and upgrading any custom elements.
- {{domxref("CustomElementRegistry.whenDefined()")}}
  - : Returns an empty {{jsxref("Promise")}} that resolves when a custom element becomes defined with the given name. If such a custom element is already defined, the returned promise is immediately fulfilled.

## Examples

See the [Examples](/en-US/docs/Web/API/Web_components/Using_custom_elements#examples) section in our [guide to using custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
