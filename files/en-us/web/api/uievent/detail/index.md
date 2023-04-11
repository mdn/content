---
title: "UIEvent: detail property"
short-title: detail
slug: Web/API/UIEvent/detail
page-type: web-api-instance-property
browser-compat: api.UIEvent.detail
---

{{APIRef("UI Events")}}

The **`UIEvent.detail`** read-only property, when non-zero, provides the current (or next, depending on the event) click count.

For {{domxref("Element/click_event", "click")}} or {{domxref("Element/dblclick_event", "dblclick")}} events, `UIEvent.detail` is the current click count.

For {{domxref("Element/mousedown_event", "mousedown")}} or {{domxref("Element/mouseup_event", "mouseup")}} events, `UIEvent.detail` is _1 plus_ the current click count.

For all other {{domxref("UIEvent")}} objects, `UIEvent.detail` is always zero.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
