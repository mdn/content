---
title: UIEvent.detail
slug: Web/API/UIEvent/detail
tags:
  - API
  - DOM
  - Property
  - Read-only
  - Reference
browser-compat: api.UIEvent.detail
---
{{APIRef("DOM Events")}}

The **`UIEvent.detail`** read-only property, when non-zero, provides the current (or next, depending on the event) click count.

For {{event("click")}} or {{event("dblclick")}} events, `UIEvent.detail` is the current click count.

For {{event("mousedown")}} or {{event("mouseup")}} events, `UIEvent.detail` is _1 plus_ the current click count.

For all other {{domxref("UIEvent")}} objects, `UIEvent.detail` is always zero.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
