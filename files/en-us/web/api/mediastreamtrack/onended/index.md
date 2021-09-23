---
title: MediaStreamTrack.onended
slug: Web/API/MediaStreamTrack/onended
tags:
  - API
  - Event Handler
  - Media Streams API
  - MediaStreamTrack
  - Property
  - Reference
  - onended
browser-compat: api.MediaStreamTrack.onended
---
{{ APIRef("Media Capture and Streams") }}

The **`MediaStreamTrack.onended`** event handler is used to
specify a function which serves as an [event handler](/en-US/docs/Web/Events/Event_handlers) to be called when the
[`ended`](/en-US/docs/Web/API/MediaStreamTrack/ended_event) event
occurs on the track. This event occurs when the track will no longer provide data to the
stream for any reason, including the end of the media input being reached, the user
revoking needed permissions, the source device being removed, or the remote peer ending
a connection.

## Syntax

```js
MediaStreamTrack.onended = function;
```

### Value

A function to serve as an [event handler](/en-US/docs/Web/Events/Event_handlers) for the
[`ended`](/en-US/docs/Web/API/MediaStreamTrack/ended_event) event.
The event handler function receives a single parameter: the event object, which is a
simple {{domxref("Event")}} object.

## Examples

This example sets up an event handler for the `ended` event which changes an
on-screen icon to indicate that the track is no longer active.

```js
track.onended = function(event) {
  let statusElem = document.getElementById("status-icon");

  statusElem.src = "/images/stopped-icon.png";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The
  [`ended`](/en-US/docs/Web/API/MediaStreamTrack/ended_event)
  event and its type, {{domxref("Event")}}.
