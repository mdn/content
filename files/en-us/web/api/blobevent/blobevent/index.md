---
title: "BlobEvent: BlobEvent() constructor"
short-title: BlobEvent()
slug: Web/API/BlobEvent/BlobEvent
page-type: web-api-constructor
browser-compat: api.BlobEvent.BlobEvent
---

{{APIRef("MediaStream Recording")}}

The **`BlobEvent()`** constructor returns a newly created
{{domxref("BlobEvent")}} object with an associated {{domxref("Blob")}}.

## Syntax

```js-nolint
new BlobEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `dataavailable`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `data`
      - : The {{domxref("Blob")}} associated with the event.
    - `timecode` {{optional_inline}}
      - : A {{domxref("DOMHighResTimeStamp")}} to be used in initializing the blob event.

### Return value

A new {{domxref("BlobEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("BlobEvent")}} interface it belongs to.
