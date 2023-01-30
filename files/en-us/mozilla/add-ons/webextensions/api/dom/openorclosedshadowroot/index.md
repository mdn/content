---
title: dom.openOrClosedShadowRoot()
slug: Mozilla/Add-ons/WebExtensions/API/dom/openOrClosedShadowRoot
page-type: web-api-instance-property
tags:
  - API
  - Add-ons
  - Extensions
  - Mozilla
  - Needs Privileges
  - Non-standard
  - Property
  - Reference
  - WebExtensions
  - openOrClosedShadowRoot
  - shadow DOM
browser-compat: webextensions.api.dom.openOrClosedShadowRoot
---

{{AddonSidebar()}}

{{APIRef("Shadow DOM")}}{{non-standard_header}}

> **Note:** This API is available only to [WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions).

Gets the open shadow root or the closed shadow root hosted by the specified element. If the element doesn't attach the shadow root, it will return `null`.

> **Note:** In FireFox, the equivalent `dom.openOrClosedShadowRoot` read-only
> property represents the shadow root hosted by the element, regardless if its
> {{DOMxRef("ShadowRoot.mode", "mode")}} is `open` or
> `closed`.
>
> Use {{DOMxRef("Element.attachShadow()")}} to add a shadow
> root to an existing element.

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

A {{DOMxRef("ShadowRoot")}} object instance, regardless if its
{{DOMxRef("ShadowRoot.mode", "mode")}} is set to `open` or
`closed`, or `null` if no shadow root is present.

## Specifications

_This property is not part of any specification._

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element.shadowRoot")}}
- [`chrome.dom.openOrClosedShadowRoot`](https://developer.chrome.com/docs/extensions/reference/dom/#method-openOrClosedShadowRoot)
