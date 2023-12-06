---
title: "MediaStreamTrackEvent: MediaStreamTrackEvent() constructor"
short-title: MediaStreamTrackEvent()
slug: Web/API/MediaStreamTrackEvent/MediaStreamTrackEvent
page-type: web-api-constructor
browser-compat: api.MediaStreamTrackEvent.MediaStreamTrackEvent
---

{{APIRef("Media Capture and Streams")}}

The **`MediaStreamTrackEvent()`** constructor returns a new {{domxref("MediaStreamTrackEvent")}} object,
which represents an event signaling that a {{domxref("MediaStreamTrack")}} has been added to or removed from a {{domxref("MediaStream")}}.

## Syntax

```js-nolint
new MediaStreamTrackEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `addtrack` or `removetrack`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `track`
      - : A {{domxref("MediaStreamTrack")}} object representing the track which was added to or removed from the stream.

### Return value

A new {{domxref("MediaStreamTrackEvent")}} object, initialized based on the provided options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream/addtrack_event", "addtrack")}} and {{domxref("MediaStream/removetrack_event", "removetrack")}} events
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
