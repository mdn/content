---
title: MediaStreamTrack.onmute
slug: Web/API/MediaStreamTrack/onmute
tags:
  - Event Handler
  - Media Capture
  - Media Capture and Streams
  - MediaStreamTrack
  - Property
  - Reference
  - WebRTC
  - mute
  - onmute
browser-compat: api.MediaStreamTrack.onmute
---
{{ APIRef("Media Capture and Streams") }}

{{domxref("MediaStreamTrack")}}'s
**`onmute`** event handler is called when the
{{event("mute")}} event is received.

Such an event is sent when the track is
temporarily not able to send data.

## Syntax

```js
track.onmute = muteHandler;
```

### Value

A function to serve as an [event handler](/en-US/docs/Web/Events/Event_handlers) for the {{event("mute")}} event.
The event handler function receives a single parameter: the event object, which is a
simple {{domxref("Event")}} object.

## Example

In this example, an `onmute` handler is established to set the content HTML
of an element to display the "muted speaker" Emoji.

```js
myTrack.onmute = function(evt) {
  playStateIcon.innerHTML = "&#1F507;";
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("mute")}} event and its type, {{domxref("Event")}}.
- {{domxref("MediaStreamTrack.muted")}} to determine if a track is currently muted
- {{domxref("MediaStreamTrack.onunmute")}}, the event handler for the
  {{domxref("unmute")}} event.
