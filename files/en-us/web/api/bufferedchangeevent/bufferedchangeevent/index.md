---
title: "BufferedChangeEvent: BufferedChangeEvent() constructor"
short-title: BufferedChangeEvent()
slug: Web/API/BufferedChangeEvent/BufferedChangeEvent
page-type: web-api-constructor
browser-compat: api.BufferedChangeEvent.BufferedChangeEvent
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`BufferedChangeEvent()`** constructor of the {{domxref("BufferedChangeEvent")}} interface creates a new `BufferedChangeEvent` object.

## Syntax

```js-nolint
new BufferedChangeEvent(type)
new BufferedChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event. It is case-sensitive and browsers set it to `bufferedchange`.
- `options` {{optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `addedRanges` {{optional_inline}}
      - : A {{domxref("TimeRanges")}} object representing the time ranges added to the buffer.
    - `removedRanges` {{optional_inline}}
      - : A {{domxref("TimeRanges")}} object representing the time ranges removed from the buffer.

### Return value

A new {{domxref("BufferedChangeEvent")}} object.

## Examples

### Inspecting a bufferedchange event

The browser creates `BufferedChangeEvent` objects when a {{domxref("ManagedSourceBuffer")}}'s buffered ranges change. The event's properties describe what changed:

```js
sourceBuffer.addEventListener("bufferedchange", (event) => {
  console.log(event instanceof BufferedChangeEvent); // true
  console.log(event.type); // "bufferedchange"
  console.log(event.addedRanges); // TimeRanges — ranges added to the buffer
  console.log(event.removedRanges); // TimeRanges — ranges removed from the buffer
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ManagedSourceBuffer")}}
- {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} event
