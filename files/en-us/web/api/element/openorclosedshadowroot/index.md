---
title: Element.openOrClosedShadowRoot
slug: Web/API/Element/openOrClosedShadowRoot
tags:
  - API
  - Add-ons
  - Element
  - Extensions
  - Mozilla
  - Needs Privileges
  - Non-standard
  - Property
  - Reference
  - WebExtensions
  - openOrClosedShadowRoot
  - shadow dom
browser-compat: api.Element.openOrClosedShadowRoot
---
{{APIRef("Shadow DOM")}}{{non-standard_header}}

> **Note:** This API is available only to [WebExtensions](/en-US/docs/Mozilla/Add-ons/WebExtensions).

The `Element.openOrCloseShadowRoot` read-only
property represents the shadow root hosted by the element, regardless if its
{{DOMxRef("ShadowRoot.mode", "mode")}} is `open` or
`closed`.

Use {{DOMxRef("Element.attachShadow()")}} to add a shadow
root to an existing element.

## Syntax

```js
var shadowroot = element.openOrCloseShadowRoot;
```

### Value

A {{DOMxRef("ShadowRoot")}} object instance, regardless if its
{{DOMxRef("ShadowRoot.mode", "mode")}} is set to `open` or
`closed`, or `null` if no shadow root is present.
(See {{DOMxRef("Element.attachShadow()")}} for further details).

## Specifications

_This property is not part of any specification._

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Element.shadowRoot")}}
