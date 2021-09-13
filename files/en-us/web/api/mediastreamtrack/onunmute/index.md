---
title: MediaStreamTrack.onunmute
slug: Web/API/MediaStreamTrack/onunmute
tags:
  - API
  - Event Handler
  - Media Capture
  - Media Capture and Streams
  - MediaStreamTrack
  - Property
  - Reference
  - WebRTC
  - onunmute
  - unmute
browser-compat: api.MediaStreamTrack.onunmute
---
{{ APIRef("Media Capture and Streams") }}

{{domxref("MediaStreamTrack")}}'s
**`onunmute`** event handler is called when the
{{event("unmute")}} event is received. Such an event is sent when the track is again
able to send data.

When the `onunmute` event handler is called, the track's
{{domxref("MediaStreamTrack.muted", "muted")}} flag is `false`.

## Syntax

```js
track.onunmute = unmuteHandler;
```

### Value

`unmuteHandler` is a function which is called when the
`MediaStreamTrack` receives the {{event("unmute")}} event. The event handler
receives as input a single parameter: an {{domxref("Event")}} whose
{{domxref("Event.kind", "kind")}} is `"unmute"`.

## Example

This example creates an `unmute` event handler which changes the state of a
visual indicator to display the Emoji character representing a "speaker" icon.

```js
myTrack.onunmute = function(evt) {
  playStateIcon.innerHTML = "&#x1F508;";
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{event("unmute")}} event and its type, {{domxref("Event")}}.
- {{domxref("MediaStreamTrack.muted")}} to determine if a track is currently muted
- {{domxref("MediaStreamTrack.onmute")}}, the event handler for the
  {{domxref("MediaStreamTrack.mute_event")}} event.
