---
title: MediaStreamTrackEvent()
slug: Web/API/MediaStreamTrackEvent/MediaStreamTrackEvent
tags:
  - API
  - Constructor
  - Media Streams API
  - MediaStreamTrackEvent
  - Reference
browser-compat: api.MediaStreamTrackEvent.MediaStreamTrackEvent
---
{{APIRef("Media Streams API")}}

The **`MediaStreamTrackEvent()`** constructor returns a newly
created {{domxref("MediaStreamTrackEvent")}} object, which represents an event
announcing that a {{domxref("MediaStreamTrack")}} has been added to or removed from a
{{domxref("MediaStream")}}.

## Syntax

```js
var trackEvent = new MediaStreamTrackEvent(type, {track: aMediaStreamTrack});
```

### Parameters

_The `MediaStreamTrackEvent()` constructor also inherits arguments from
{{domxref("Event.Event", "Event()")}}._

- `type`
  - : A {{domxref("DOMString")}} representing the name of the type of the
    `MediaStreamTrackEvent`. It is case-sensitive and can be
    `"{{event("addtrack")}}"` or `"{{event("removetrack")}}"`.
- `track`
  - : A {{domxref("MediaStreamTrack")}} object representing the track which was added to
    or removed from the stream.

### Return value

A new {{domxref("MediaStreamTrackEvent")}}, initialized based on the provided options.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("addtrack")}} and {{event("removetrack")}} events
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
