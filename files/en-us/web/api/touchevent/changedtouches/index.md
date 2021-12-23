---
title: TouchEvent.changedTouches
slug: Web/API/TouchEvent/changedTouches
tags:
  - API
  - DOM
  - DOM Reference
  - Mobile
  - Property
  - Read-only
  - Reference
  - TouchEvent
  - touch
browser-compat: api.TouchEvent.changedTouches
---
{{ APIRef("Touch Events") }}

The **`changedTouches`** read-only property is a {{ domxref("TouchList") }} whose touch points ({{domxref("Touch")}} objects) varies depending on the event type, as follows:

- For the {{event("touchstart")}} event, it is a list of the touch points that became active with the current event.
- For the {{event("touchmove")}} event, it is a list of the touch points that have changed since the last event.
- For the {{event("touchend")}} event, it is a list of the touch points that have been removed from the surface (that is, the set of touch points corresponding to fingers no longer touching the surface).

## Syntax

```js
var changes = touchEvent.changedTouches;
```

### Return value

- `changes`
  - : A {{ domxref("TouchList") }} whose {{ domxref("Touch") }} objects include all the touch points that contributed to this touch event.

## Example

This example illustrates the {{domxref("TouchEvent")}} object's {{domxref("TouchEvent.changedTouches")}} property. The {{domxref("TouchEvent.changedTouches")}} property is a {{domxref("TouchList")}} object that contains one {{domxref("Touch")}} object for each touch point which contributed to the event.

In following code snippet, the {{event("touchmove")}} event handler iterates through the `changedTouches` list and prints the identifier of each touch point that changed since the last event.

```js
someElement.addEventListener('touchmove', function(e) {
   // Iterate through the list of touch points that changed
   // since the last event and print each touch point's identifier.
   for (var i=0; i < e.changedTouches.length; i++) {
     console.log("changedTouches[" + i + "].identifier = " + e.changedTouches[i].identifier);
   }
}, false);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
