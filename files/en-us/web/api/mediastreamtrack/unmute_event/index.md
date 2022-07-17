---
title: 'MediaStreamTrack: unmute event'
slug: Web/API/MediaStreamTrack/unmute_event
page-type: web-api-event
tags:
  - Audio
  - Event
  - Media
  - Media Capture and Streams
  - Media Streams
  - MediaStreamTrack
  - Reference
  - Video
  - unmute
browser-compat: api.MediaStreamTrack.unmute_event
---
{{APIRef("Media Capture and Streams")}}

The **`unmute`** event is sent to a {{domxref("MediaStreamTrack")}} when the track's source is once again able to provide media data after a period of not being able to do so.

This ends the {{domxref("MediaStreamTrack.muted", "muted")}} state that began with the {{domxref("MediaStreamTrack/mute_event", "mute")}} event.

> **Note:** The condition that most people think of as "muted" (that is, a user-controllable way to silence a track) is actually managed using the {{domxref("MediaStreamTrack.enabled")}} property, for which there are no events.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('unmute', (event) => { });

onunmute = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

In this example, event handlers are established for the {{domxref("MediaStreamTrack/mute_event", "mute")}} and `unmute` events in order to detect when the media is not flowing from the source for the {{domxref("MediaStreamTrack")}} stored in the variable `musicTrack`.

```js
musicTrack.addEventListener("mute", (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
}, false);

musicTrack.addEventListener("unmute", (event) => {
 document.getElementById("timeline-widget").style.backgroundColor = "#fff";
}, false);
```

With these event handlers in place, when the track `musicTrack` enters its {{domxref("MediaStreamTrack.muted", "muted")}} state, the element with the ID `timeline-widget` gets its background color changed to `#aaa`. When the track exits the muted state—detected by the arrival of an `unmuted` event—the background color is restored to white.

You can also use the `onunmute` event handler property to set up a handler for this event; similarly, the {{domxref("MediaStreamTrack.mute_event", "onmute")}} event handler is available for setting up a handler for the `mute` event. The following example shows this:

```js
musicTrack.onmute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#aaa";
}

musicTrack.mute = (event) => {
  document.getElementById("timeline-widget").style.backgroundColor = "#fff";
}
```

### Unmute tracks through receivers

The following example shows how to unmute tracks using receivers.

```js
// Peer 1 (Receiver)
audioTrack.addEventListener('unmute', (event) => {
  // Do something in UI
});

videoTrack.addEventListener('unmute', (event) => {
  // Do something in UI
});

// Peer 2 (Sender)
const transceivers = peer.getTransceivers();

const audioTrack = transceivers[0];
audioTrack.direction = 'sendrecv';

const videoTrack = transceivers[1];
videoTrack.direction = 'sendrecv';
```

`transceivers` is an array of {{domxref("RTCRtpTransceiver")}} where you can find the audio or video track sent and received. For more information, see the {{domxref("RTCRtpTransceiver.direction", "direction")}} article.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("MediaStreamTrack/mute_event", "mute")}} event
