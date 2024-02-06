---
title: "ShadowRoot: delegatesFocus property"
short-title: delegatesFocus
slug: Web/API/ShadowRoot/delegatesFocus
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.delegatesFocus
---

{{APIRef("Shadow DOM")}}

The **`delegatesFocus`** read-only property of the {{domxref("ShadowRoot")}} interface returns `true` if the shadow root delegates focus, and `false` otherwise.

If `true`, when a non-focusable part of the shadow DOM is clicked, or `.focus()` is called on the host element, the first focusable part is given focus, and the shadow host is given any available `:focus` styling.

Focus is of particular importance for keyboard users (including those using screen readers). `delegatesFocus` default behavior is to focus the first focusable element — which may be undesirable if that element is not meant to be part of the tabbing order (for example, an element with `tabindex="-1"`), or if a more 'important' focusable element should receive initial focus (for instance, the first text field rather than the 'close' button which precedes it). In such cases, the `autofocus` attribute can be specified on the element which should receive initial focus. Use the `autofocus` attribute with caution as it can introduce accessibility issues, such as bypassing important content which may go unnoticed due to focus being set to an element later in the DOM order.

The property value is set using the `delegatesFocus` property of the object passed to {{domxref("Element.attachShadow()")}}).

## Examples

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;

// ...

// Does it delegate focus?
let hostElem = shadow.delegatesFocus;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
