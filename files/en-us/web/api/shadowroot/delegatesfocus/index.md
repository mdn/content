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

If `true`, when a non-focusable part of the shadow DOM is clicked, or `.focus()` is called on the host element, the first focusable part is given focus, and the shadow host is given any available `:focus` styling.

Focus is of particular importance for keyboard users (including most screen reader users). `delegatesFocus` default behavior to focus the first focusable element may be undesirable if that element is not part of the tabbing order (e.g. an element with `tabindex="-1"`). In that case, the `autofocus` attribute should be set on the element to focus. This should be done with caution as it may create accessibility issues. The tabbing order should always follow the DOM order.

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
