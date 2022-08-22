---
title: BlobEvent()
slug: Web/API/BlobEvent/BlobEvent
page-type: web-api-constructor
tags:
  - API
  - BlobEvent
  - Constructor
  - DOM
  - DOM Reference
  - Media Stream Encoding
  - Reference
browser-compat: api.BlobEvent.BlobEvent
---
{{APIRef("Media Recorder API")}}

The **`BlobEvent()`** constructor returns a newly created
{{domxref("BlobEvent")}} object with an associated {{domxref("Blob")}}.

## Syntax

```js
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
    - `timecode`
      - : A {{domxref("DOMHighResTimeStamp")}} to be used in initializing the blob event.

### Return value

A new {{domxref("BlobEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("BlobEvent")}} interface it belongs to.
