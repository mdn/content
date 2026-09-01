---
title: "DataCue: DataCue() constructor"
short-title: DataCue()
slug: Web/API/DataCue/DataCue
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.DataCue.DataCue
---

{{APIRef("WebVTT")}}{{SeeCompatTable}}

The **`DataCue()`** constructor creates and returns a new {{domxref("DataCue")}} object that represents a timed metadata cue over a given time range. The resulting cue can be added to a metadata {{domxref("TextTrack")}} using {{domxref("TextTrack.addCue()")}}, allowing arbitrary data to be synchronized with audio or video playback.

## Syntax

```js-nolint
new DataCue(startTime, endTime, value)
new DataCue(startTime, endTime, value, type)
```

### Parameters

- `startTime`
  - : A number representing the start time, in seconds, for the cue's time range. This corresponds to the point on the media timeline at which the cue becomes active and its {{domxref("TextTrackCue/enter_event", "enter")}} event fires.
- `endTime`
  - : A number representing the end time, in seconds, for the cue's time range. When the media playback reaches this time, the cue's {{domxref("TextTrackCue/exit_event", "exit")}} event fires. Use `Infinity` for a cue that remains active until the end of the media.
- `value`
  - : The data payload associated with the cue. This can be any type, such as a string, a JavaScript object, or an {{jsxref("ArrayBuffer")}}. The value is stored in the cue's {{domxref("DataCue.value", "value")}} property.
- `type` {{optional_inline}}
  - : A string identifying the type or schema of the data in `value`. This is typically a reverse-domain notation string (e.g., `"org.id3"`, `"org.mp4ra"`). The value is stored in the cue's {{domxref("DataCue.type", "type")}} property and defaults to an empty string if not provided.

### Return value

A new {{domxref("DataCue")}} object.

## Examples

### Creating a DataCue with geolocation data

This example creates a `DataCue` that carries geolocation coordinates, using a reverse-domain string as the `type` to identify the data format.

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Geo Track");
track.mode = "hidden";

// Create a cue from 5 seconds to the end of the media
const data = { latitude: 51.5043, longitude: -0.0762 };
const cue = new DataCue(5.0, Infinity, data, "org.example.geo");

cue.addEventListener("enter", (e) => {
  const { latitude, longitude } = e.target.value;
  console.log(`Pan map to: ${latitude}, ${longitude}`);
});

track.addCue(cue);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DataCue")}}
- {{domxref("TextTrack")}}
- {{domxref("TextTrack.addCue()")}}
- {{domxref("TextTrackCue/enter_event", "enter")}} event
- {{domxref("TextTrackCue/exit_event", "exit")}} event
