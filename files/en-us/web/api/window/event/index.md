---
title: "Window: event property"
short-title: event
slug: Web/API/Window/event
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Window.event
---

{{APIRef("DOM")}}{{Deprecated_Header}}

The read-only {{domxref("Window")}} property **`event`** returns the {{domxref("Event")}} which is currently being handled by the site's code. Outside the context of an event handler, the value is always `undefined`.

You _should_ avoid using this property in new code, and should instead use the {{domxref("Event")}} passed into the event handler function. This property is not universally supported and even when supported introduces potential fragility to your code.

> **Note:** This property can be fragile, in that there may be situations in which the returned `Event` is not the expected value. In addition, `Window.event` is not accurate for events dispatched within {{Glossary("shadow tree", "shadow trees")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Event.srcElement")}}
