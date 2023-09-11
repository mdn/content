---
title: "Event: cancelBubble property"
short-title: cancelBubble
slug: Web/API/Event/cancelBubble
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Event.cancelBubble
---

{{APIRef("DOM")}} {{Deprecated_Header}}

The **`cancelBubble`** property of the {{domxref("Event")}}
interface is deprecated. Use {{domxref("Event.stopPropagation()")}} instead.
Setting its value to `true` before returning from an event handler prevents propagation
of the event. In later implementations, setting this to `false` does nothing.
See [Browser compatibility](#browser_compatibility) for details.

## Value

A boolean value. The value `true` means that the event must not be propagated further.

## Example

```js
elem.onclick = (event) => {
  // Do cool things here
  event.cancelBubble = true;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
