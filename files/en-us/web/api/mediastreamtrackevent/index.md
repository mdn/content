---
title: MediaStreamTrackEvent
slug: Web/API/MediaStreamTrackEvent
page-type: web-api-interface
browser-compat: api.MediaStreamTrackEvent
---

{{APIRef("Media Capture and Streams")}}

The **`MediaStreamTrackEvent`** interface represents events which indicate that a {{domxref("MediaStream")}} has had tracks added to or removed from the stream through calls to [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API) methods. These events are sent to the stream when these changes occur.

{{InheritanceDiagram}}

The events based on this interface are {{domxref("MediaStream/addtrack_event", "addtrack")}} and {{domxref("MediaStream/removetrack_event", "removetrack")}}.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("MediaStreamTrackEvent.track")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MediaStreamTrack")}} object representing the track associated with the event.

## Constructor

- {{domxref("MediaStreamTrackEvent.MediaStreamTrackEvent", "MediaStreamTrackEvent()")}}
  - : Constructs a new `MediaStreamTrackEvent` with the specified configuration.

## Instance methods

_Also inherits methods from its parent {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream")}}: {{domxref("MediaStream/addtrack_event", "addtrack")}} and {{domxref("MediaStream/removetrack_event", "removetrack")}} events
- {{domxref("MediaStreamTrack")}}
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
