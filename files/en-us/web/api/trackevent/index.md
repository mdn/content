---
title: TrackEvent
slug: Web/API/TrackEvent
page-type: web-api-interface
browser-compat: api.TrackEvent
---

{{APIRef("HTML DOM")}}

The **`TrackEvent`** interface, which is part of the HTML DOM specification, is used for events which represent changes to a set of available tracks on an HTML media element; these events are `addtrack` and `removetrack`.

It's important not to confuse `TrackEvent` with the {{domxref("RTCTrackEvent")}} interface, which is used for tracks which are part of an {{domxref("RTCPeerConnection")}}.

Events based on `TrackEvent` are always sent to one of the media track list types:

- Events involving video tracks are always sent to the {{domxref("VideoTrackList")}} found in {{domxref("HTMLMediaElement.videoTracks")}}
- Events involving audio tracks are always sent to the {{domxref("AudioTrackList")}} specified in {{domxref("HTMLMediaElement.audioTracks")}}
- Events affecting text tracks are sent to the {{domxref("TextTrackList")}} object indicated by {{domxref("HTMLMediaElement.textTracks")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("TrackEvent.TrackEvent", "TrackEvent()")}}
  - : Creates and initializes a new `TrackEvent` object with the event type specified, as well as optional additional properties.

## Instance properties

_`TrackEvent` is based on {{domxref("Event")}}, so properties of `Event` are also available on `TrackEvent` objects._

- {{domxref("TrackEvent.track", "track")}} {{ReadOnlyInline}}
  - : The DOM track object the event is in reference to. If not `null`, this is always an object of one of the media track types: {{domxref("AudioTrack")}}, {{domxref("VideoTrack")}}, or {{domxref("TextTrack")}}).

## Instance methods

_`TrackEvent` has no methods of its own; however, it is based on {{domxref("Event")}}, so it provides the methods available on `Event` objects._

## Example

This example sets up a function, `handleTrackEvent()`, which is called for any `addtrack` or `removetrack` event on the first {{HTMLElement("video")}} element found in the document.

```js
const videoElem = document.querySelector("video");

videoElem.videoTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.videoTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("removetrack", handleTrackEvent, false);

function handleTrackEvent(event) {
  let trackKind;

  if (event.target instanceof VideoTrackList) {
    trackKind = "video";
  } else if (event.target instanceof AudioTrackList) {
    trackKind = "audio";
  } else if (event.target instanceof TextTrackList) {
    trackKind = "text";
  } else {
    trackKind = "unknown";
  }

  switch (event.type) {
    case "addtrack":
      console.log(`Added a ${trackKind} track`);
      break;
    case "removetrack":
      console.log(`Removed a ${trackKind} track`);
      break;
  }
}
```

The event handler uses the JavaScript [`instanceof`](/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) operator to determine which type of track the event occurred on, then outputs to console a message indicating what kind of track it is and whether it's being added to or removed from the element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
