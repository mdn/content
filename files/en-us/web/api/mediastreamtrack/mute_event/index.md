---
title: "MediaStreamTrack: mute event"
short-title: mute
slug: Web/API/MediaStreamTrack/mute_event
page-type: web-api-event
browser-compat: api.MediaStreamTrack.mute_event
---

{{APIRef("Media Capture and Streams")}}

The **`mute`** event is sent to a {{domxref("MediaStreamTrack")}} when the track's source is temporarily unable to provide media data.

When the track is once again able to produce media output, an {{domxref("MediaStreamTrack/unmute_event", "unmute")}} event is sent.

During the time between the `mute` event and the `unmute` event, the value of the track's {{domxref("MediaStreamTrack.muted", "muted")}} property is `true`.

> **Note:** The condition that most people think of as "muted" (that is, a user-toggled state of silencing a track) is actually managed using the {{domxref("MediaStreamTrack.enabled")}} property, for which there are no events.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("mute", (event) => {});

onmute = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

In this example, event handlers are established for the `mute` and {{domxref("MediaStreamTrack.unmute_event", "unmute")}} events in order to detect when the media is not flowing from the source for the {{domxref("MediaStreamTrack")}} referenced by `musicTrack`.

```js
musicTrack.addEventListener(
  "mute",
  (event) => {
    document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
  },
  false,
);

musicTrack.addEventListener(
  "unmute",
  (event) => {
    document.getElementById("timeline-widget").style.backgroundColor = "#fff";
  },
  false,
);
```

With these event handlers in place, when the track `musicTrack` enters its {{domxref("MediaStreamTrack.muted", "muted")}} state, the element with the ID `timeline-widget` gets its background color changed to `#aaa`. When the track exits the muted state—detected by the arrival of an `unmute` event—the background color is restored to white.

You can also use the `onmute` event handler property to set up a handler for this event; similarly, the {{domxref("MediaStreamTrack.unmute_event", "onunmute")}} event handler is available for setting up a handler for the `unmute` event. The following example shows this:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
};

musicTrack.onunmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
};
```

### Mute tracks through receivers

The following example shows how to mute tracks using receivers.

```js
// Peer 1 (Receiver)
audioTrack.addEventListener("mute", (event) => {
  // Do something in UI
});

videoTrack.addEventListener("mute", (event) => {
  // Do something in UI
});

// Peer 2 (Sender)
const transceivers = peer.getTransceivers();

const audioTrack = transceivers[0];
audioTrack.direction = "recvonly";

const videoTrack = transceivers[1];
videoTrack.direction = "recvonly";
```

`transceivers` is an array of {{domxref("RTCRtpTransceiver")}} where you can find the audio or video track sent and received. For more information, see the {{domxref("RTCRtpTransceiver.direction", "direction")}} article.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStreamTrack/unmute_event", "unmute")}} event
- {{domxref("RTCRtpTransceiver.direction", "direction")}}
