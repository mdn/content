---
title: MediaStream
slug: Web/API/MediaStream
page-type: web-api-interface
browser-compat: api.MediaStream
---

{{APIRef("Media Capture and Streams")}}

The **`MediaStream`** interface of the {{domxref("Media Capture and Streams API", "", "", "nocode")}} represents a stream of media content. A stream consists of several **tracks**, such as video or audio tracks. Each track is specified as an instance of {{domxref("MediaStreamTrack")}}.

You can obtain a `MediaStream` object either by using the constructor or by calling functions such as {{domxref("MediaDevices.getUserMedia()")}}, {{domxref("MediaDevices.getDisplayMedia()")}}, or {{domxref("HTMLCanvasElement.captureStream()")}} and {{domxref("HTMLMediaElement.captureStream()")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MediaStream.MediaStream", "MediaStream()")}}
  - : Creates and returns a new `MediaStream` object. You can create an empty stream, a stream which is based upon an existing stream, or a stream that contains a specified list of tracks (specified as an array of {{domxref("MediaStreamTrack")}} objects).

## Instance properties

_This interface inherits properties from its parent, {{domxref("EventTarget")}}._

- {{domxref("MediaStream.active")}} {{ReadOnlyInline}}
  - : A Boolean value that returns `true` if the `MediaStream` is active, or `false` otherwise.
- {{domxref("MediaStream.id")}} {{ReadOnlyInline}}
  - : A string containing a 36-character universally unique identifier ({{Glossary("UUID")}}) for the object.

## Instance methods

_This interface inherits methods from its parent, {{domxref("EventTarget")}}._

- {{domxref("MediaStream.addTrack()")}}
  - : Stores a copy of the {{domxref("MediaStreamTrack")}} given as argument. If the track has already been added to the `MediaStream` object, nothing happens.
- {{domxref("MediaStream.clone()")}}
  - : Returns a clone of the `MediaStream` object. The clone will, however, have a unique value for {{domxref("MediaStream.id", "id")}}.
- {{domxref("MediaStream.getAudioTracks()")}}
  - : Returns a list of the {{domxref("MediaStreamTrack")}} objects stored in the `MediaStream` object that have their `kind` attribute set to `audio`. The order is not defined, and may not only vary from one browser to another, but also from one call to another.
- {{domxref("MediaStream.getTrackById()")}}
  - : Returns the track whose ID corresponds to the one given in parameters, `trackId`. If no parameter is given, or if no track with that ID does exist, it returns `null`. If several tracks have the same ID, it returns the first one.
- {{domxref("MediaStream.getTracks()")}}
  - : Returns a list of all {{domxref("MediaStreamTrack")}} objects stored in the `MediaStream` object, regardless of the value of the `kind` attribute. The order is not defined, and may not only vary from one browser to another, but also from one call to another.
- {{domxref("MediaStream.getVideoTracks()")}}
  - : Returns a list of the {{domxref("MediaStreamTrack")}} objects stored in the `MediaStream` object that have their `kind` attribute set to `"video"`. The order is not defined, and may not only vary from one browser to another, but also from one call to another.
- {{domxref("MediaStream.removeTrack()")}}
  - : Removes the {{domxref("MediaStreamTrack")}} given as argument. If the track is not part of the `MediaStream` object, nothing happens.

## Events

- {{domxref("MediaStream/addtrack_event", "addtrack")}}
  - : Fired when a new {{domxref("MediaStreamTrack")}} object is added.
- {{domxref("MediaStream/removetrack_event", "removetrack")}}
  - : Fired when a {{domxref("MediaStreamTrack")}} object has been removed.
- {{domxref("MediaStream/active_event", "active")}} {{Non-standard_Inline}}
  - : Fired when the MediaStream is activated.
- {{domxref("MediaStream/inactive_event", "inactive")}} {{Non-standard_Inline}}
  - : Fired when the MediaStream is inactivated.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- {{domxref("MediaStreamTrack")}}
