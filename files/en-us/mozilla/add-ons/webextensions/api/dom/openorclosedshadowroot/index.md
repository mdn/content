---
title: dom.openOrClosedShadowRoot()
slug: Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot
page-type: webextension-api-function
browser-compat: webextensions.api.dom.openOrClosedShadowRoot
---

{{AddonSidebar}}

Gets the open shadow root or the closed shadow root hosted by the specified element. If the shadow root isn't attached to the element, it will return `null`.

> [!NOTE]
> In Firefox, the equivalent property is `element.openOrClosedShadowRoot`. This read-only property represents the shadow root hosted by the element, regardless of whether its {{DOMxRef("ShadowRoot.mode", "mode")}} is `open` or `closed`.
>
> Use {{DOMxRef("Element.attachShadow()")}} to add a shadow root to an element.

## Syntax

```js-nolint
let shadowRoot = browser.dom.openOrClosedShadowRoot(
  element,    // HTMLElement
)
```

### Parameters

- `element`
  - : `HTMLElement`. The host element.

### Return value

A {{DOMxRef("ShadowRoot")}} object instance, regardless of whether its
{{DOMxRef("ShadowRoot.mode", "mode")}} is set to `open` or
`closed`, or `null` if no shadow root is present.

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element.shadowRoot")}}
- [`chrome.dom.openOrClosedShadowRoot`](https://developer.chrome.com/docs/extensions/reference/api/dom#method-openOrClosedShadowRoot)
