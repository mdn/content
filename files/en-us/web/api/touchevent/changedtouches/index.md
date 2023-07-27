---
title: "TouchEvent: changedTouches property"
short-title: changedTouches
slug: Web/API/TouchEvent/changedTouches
page-type: web-api-instance-property
browser-compat: api.TouchEvent.changedTouches
---

{{ APIRef("Touch Events") }}

The **`changedTouches`** read-only property is a {{ domxref("TouchList") }} whose touch points ({{domxref("Touch")}} objects) varies depending on the event type, as follows:

- For the {{domxref("Element/touchstart_event", "touchstart")}} event, it is a list of the touch points that became active with the current event.
- For the {{domxref("Element/touchmove_event", "touchmove")}} event, it is a list of the touch points that have changed since the last event.
- For the {{domxref("Element/touchend_event", "touchend")}} event, it is a list of the touch points that have been removed from the surface (that is, the set of touch points corresponding to fingers no longer touching the surface).

## Value

A {{ domxref("TouchList") }} whose {{ domxref("Touch") }} objects include all the touch points that contributed to this touch event.

## Examples

This example illustrates the {{domxref("TouchEvent")}} object's {{domxref("TouchEvent.changedTouches")}} property. The {{domxref("TouchEvent.changedTouches")}} property is a {{domxref("TouchList")}} object that contains one {{domxref("Touch")}} object for each touch point which contributed to the event.

In following code snippet, the {{domxref("Element/touchmove_event", "touchmove")}} event handler iterates through the `changedTouches` list and prints the identifier of each touch point that changed since the last event.

```js
someElement.addEventListener(
  "touchmove",
  (e) => {
    // Iterate through the list of touch points that changed
    // since the last event and print each touch point's identifier.
    for (let i = 0; i < e.changedTouches.length; i++) {
      console.log(
        `changedTouches[${i}].identifier = ${e.changedTouches[i].identifier}`,
      );
    }
  },
  false,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
