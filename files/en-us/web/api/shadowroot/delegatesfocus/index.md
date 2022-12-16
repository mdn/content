---
title: ShadowRoot.delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ShadowRoot
  - Web Components
  - delegatesFocus
  - shadow dom
browser-compat: api.ShadowRoot.delegatesFocus
---

{{APIRef("Shadow DOM")}}

The **`delegatesFocus`** read-only property of the {{domxref("ShadowRoot")}} interface returns `true` if the shadow root delegates focus, and `false` otherwise.

If `true`, when a non-focusable part of the shadow DOM is clicked, the first focusable part is given focus, and the shadow host is given any available `:focus` styling.

Focus is of particular importance for keyboard users (which includes most screen reader users). In certain cases it may be undesirable to focus the first focusable element; for instance if that element is not part of the tabbing order (e.g. an element with `tabindex="-1"`).

Focusing the first element inside the shadow DOM makes sense but there are exceptions where it would be problematic. For instance when there are elements with tabindex="-1" it may be preferable to focus the element with tabindex="0" (not the first focusable element, but the first tabbable element). This in order to avoid confusion for keyboard users.

An example where this happens is with the roving tabindex technique 
If another element than the first one should receive focus, it should be given the `autofocus` attribute.


The property value is set using the `delegatesFocus` property of the object passed to {{domxref("Element.attachShadow()")}}).

## Examples

```js
let customElem = document.querySelector('my-shadow-dom-element');
let shadow = customElem.shadowRoot;

// ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
