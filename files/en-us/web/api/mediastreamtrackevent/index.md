---
title: MediaStreamTrackEvent
slug: Web/API/MediaStreamTrackEvent
page-type: web-api-interface
tags:
  - API
  - Event
  - Interface
  - Media
  - Media Streams API
  - MediaStreamTrackEvent
  - Reference
  - Streams
  - track
browser-compat: api.MediaStreamTrackEvent
---
{{APIRef("Media Streams API")}}

The **`MediaStreamTrackEvent`** interface represents events which indicate that a {{domxref("MediaStream")}} has had tracks added to or removed from the stream through calls to [Media Stream API](/en-US/docs/Web/API/Media_Streams_API) methods. These events are sent to the stream when these changes occur.

{{InheritanceDiagram}}

The events based on this interface are {{domxref("MediaStream/addtrack_event", "addtrack")}} and {{domxref("MediaStream/removetrack_event", "removetrack")}}.

## Properties

_Also inherits properties from its parent interface, {{domxref("Event")}}._

- `track` {{ReadOnlyInline}}
  - : A {{domxref("MediaStreamTrack")}} object representing the track which was added to the stream.

## Constructor

- {{domxref("MediaStreamTrackEvent.MediaStreamTrackEvent", "MediaStreamTrackEvent()")}}
  - : Constructs a new `MediaStreamTrackEvent` with the specified configuration.

## Methods

_Also inherits methods from its parent {{domxref("Event")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream")}}: {{domxref("MediaStream/addtrack_event", "addtrack")}} and {{domxref("MediaStream/removetrack_event", "removetrack")}} events
- {{domxref("MediaStreamTrack")}}
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
