---
title: "CustomElementRegistry: upgrade() method"
short-title: upgrade()
slug: Web/API/CustomElementRegistry/upgrade
page-type: web-api-instance-method
browser-compat: api.CustomElementRegistry.upgrade
---

{{APIRef("Web Components")}}

The **`upgrade()`** method of the
{{domxref("CustomElementRegistry")}} interface upgrades all shadow-containing custom
elements in a {{domxref("Node")}} subtree, even before they are connected to the main
document.

## Syntax

```js-nolint
upgrade(root)
```

### Parameters

- `root`
  - : A {{domxref("Node")}} instance with shadow-containing descendant elements to upgrade. If there are no descendant elements that can be upgraded, no error is
    thrown.

### Return value

None ({{jsxref("undefined")}}).

## Description

When an HTML element is parsed or created, it may use a tag name that corresponds to a [custom element](/en-US/docs/Web/API/Web_components/Using_custom_elements) (e.g., `<my-element>`). If the custom element's class has not yet been registered with the appropriate {{domxref("CustomElementRegistry")}} at the time the element is created, the element exists as an undefined, plain {{domxref("HTMLElement")}}. It looks and behaves like any unknown element — it has no special behavior, lifecycle callbacks, or custom prototype methods.

**Upgrading** is the process of retroactively promoting such an element to a full-fledged custom element once its definition becomes available. When an element is upgraded:

1. Its prototype is swapped to the custom element class that was registered with {{domxref("CustomElementRegistry.define()", "define()")}}.
2. Its {{domxref("HTMLElement/connectedCallback", "connectedCallback()")}} and any other applicable [lifecycle callbacks](/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) are invoked.
3. If the class defines {{domxref("HTMLElement/observedAttributes", "observedAttributes")}}, the {{domxref("HTMLElement/attributeChangedCallback", "attributeChangedCallback()")}} is called for each attribute that already has a value.

Normally, elements are upgraded automatically when their definition is registered via `define()`, but only if they are already connected to the document. The `upgrade()` method is useful when you need to upgrade elements that exist in a disconnected DOM subtree (for example, elements created via {{domxref("Document.createElement()")}} or parsed into a {{domxref("DocumentFragment")}}) before they are inserted into the document.

## Examples

Taken from the [HTML spec](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade):

```js
const el = document.createElement("spider-man");

class SpiderMan extends HTMLElement {}
customElements.define("spider-man", SpiderMan);

console.assert(!(el instanceof SpiderMan)); // not yet upgraded

customElements.upgrade(el);
console.assert(el instanceof SpiderMan); // upgraded!
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
