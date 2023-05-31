---
title: "MediaStreamTrackEvent: track property"
short-title: track
slug: Web/API/MediaStreamTrackEvent/track
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrackEvent.track
---

{{APIRef("Media Capture and Streams")}}

The **`track`** read-only property of the {{domxref("MediaStreamTrackEvent")}} interface returns the {{domxref("MediaStreamTrack")}} associated with this event

## Value

A {{domxref("MediaStreamTrack")}} object.

## Examples

```js
const stream = new MediaStream();

stream.addEventListener("removetrack", (event) => {
  console.log(`${event.track.kind} track removed`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream/addtrack_event", "addtrack")}} and {{domxref("MediaStream/removetrack_event", "removetrack")}} events
- {{domxref("MediaStreamTrack")}}
