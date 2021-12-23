---
title: CustomElementRegistry.upgrade()
slug: Web/API/CustomElementRegistry/upgrade
tags:
  - API
  - CustomElementRegistry
  - Method
  - Reference
  - Upgrade
  - Web Components
  - custom elements
browser-compat: api.CustomElementRegistry.upgrade
---
{{APIRef("CustomElementRegistry")}}

The **`upgrade()`** method of the
{{domxref("CustomElementRegistry")}} interface upgrades all shadow-containing custom
elements in a {{domxref("Node")}} subtree, even before they are connected to the main
document.

## Syntax

```js
customElements.upgrade(root);
```

### Parameters

- `root`
  - : A {{domxref("Node")}} instance with shadow-containing descendant elements that are
    to be upgraded. If there are no descendant elements that can be upgraded, no error is
    thrown.

### Return value

Void.

## Examples

Taken from the [HTML
spec](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-customelementregistry-upgrade):

```js
const el = document.createElement("spider-man");

class SpiderMan extends HTMLElement {}
customElements.define("spider-man", SpiderMan);

console.assert(!(el instanceof SpiderMan)); // not yet upgraded

customElements.upgrade(el);
console.assert(el instanceof SpiderMan);    // upgraded!
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
