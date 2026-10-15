---
title: "BufferedChangeEvent: BufferedChangeEvent() constructor"
short-title: BufferedChangeEvent()
slug: Web/API/BufferedChangeEvent/BufferedChangeEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.BufferedChangeEvent.BufferedChangeEvent
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

The **`BufferedChangeEvent()`** constructor of the {{domxref("BufferedChangeEvent")}} interface creates a new `BufferedChangeEvent` object instance.

## Syntax

```js-nolint
new BufferedChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string representing the type of event. In the case of `BufferedChangeEvent` this is always `bufferedchange`.
- `options` {{optional_inline}}
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:

    > [!NOTE]
    > Although the spec marks `options` as optional, Safari (currently the only implementation) throws a `TypeError` if the argument is omitted entirely. Passing an empty object (`{}`) works correctly.
    - `addedRanges` {{optional_inline}}
      - : A {{domxref("TimeRanges")}} object representing the time ranges added to the buffer.
    - `removedRanges` {{optional_inline}}
      - : A {{domxref("TimeRanges")}} object representing the time ranges removed from the buffer.

### Return value

A new {{domxref("BufferedChangeEvent")}} object instance.

## Examples

### Inspecting a bufferedchange event

The `BufferedChangeEvent()` constructor isn't generally called manually. When a {{domxref("ManagedSourceBuffer")}}'s `bufferedchange` event fires (meaning its buffered ranges change), the browser will construct a `BufferedChangeEvent` object to use as the event object.

The event's properties describe what changed:

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
