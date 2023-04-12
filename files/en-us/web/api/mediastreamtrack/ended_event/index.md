---
title: "MediaStreamTrack: ended event"
short-title: ended
slug: Web/API/MediaStreamTrack/ended_event
page-type: web-api-event
browser-compat: api.MediaStreamTrack.ended_event
---

{{APIRef("Media Capture and Streams")}}

The **`ended`** event of the {{domxref("MediaStreamTrack")}} interface is fired when playback or streaming has stopped because the end of the media was reached or because no further data is available.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("ended", (event) => {});

onended = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Usage notes

`ended` events fire when the media stream track's source permanently stops sending data on the stream. There are various ways this can happen, including:

- There is no more data left to send.
- The user revoked the permissions needed for the data to be sent.
- The hardware generating the source data has been removed or ejected.
- A remote peer has permanently stopped sending data; pausing media _does not_ generate an `ended` event.

## Examples

This example sets up an event handler for the `ended` event, which changes an on-screen icon to indicate that the track is no longer active.

```js
track.addEventListener("ended", () => {
  let statusElem = document.getElementById("status-icon");
  statusElem.src = "/images/stopped-icon.png";
});
```

You can also set up the event handler using the `onended` property:

```js
track.onended = () => {
  let statusElem = document.getElementById("status-icon");

  statusElem.src = "/images/stopped-icon.png";
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} event
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- The HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} event
- The AudioScheduledSourceNode {{domxref("AudioScheduledSourceNode.ended_event", 'ended')}} event
