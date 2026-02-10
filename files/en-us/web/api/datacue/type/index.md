---
title: "DataCue: type property"
short-title: type
slug: Web/API/DataCue/type
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.DataCue.type
---

{{APIRef("WebVTT")}}{{SeeCompatTable}}

The **`type`** read-only property of the {{domxref("DataCue")}} interface returns a string identifying the type or schema of the data stored in the cue's {{domxref("DataCue.value", "value")}} property. This is typically a reverse-domain notation string that allows applications to interpret the cue's data payload correctly.

When a user agent automatically generates `DataCue` objects for in-band timed metadata (for example, from an HTTP Live Streaming source), it sets this property to indicate the metadata format. When application code creates a `DataCue` using the {{domxref("DataCue.DataCue", "DataCue()")}} constructor, the `type` is set from the optional fourth argument and defaults to an empty string if omitted.

## Value

A string. Common values set by user agents for in-band metadata include:

- `"org.id3"` — ID3 metadata.
- `"org.mp4ra"` — MPEG-4 metadata.
- `"com.apple.quicktime.udta"` — QuickTime User Data.
- `"com.apple.quicktime.mdta"` — QuickTime Metadata.
- `"com.apple.itunes"` — iTunes metadata.

Application-defined cues may use any string, but reverse-domain notation (e.g., `"org.example.myapp"`) is recommended to avoid collisions.

## Examples

### Reading the type of a DataCue

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Events");
track.mode = "hidden";

const cue = new DataCue(
  0,
  10,
  { latitude: 51.5043, longitude: -0.0762 },
  "org.example.geo",
);
track.addCue(cue);

console.log(cue.type);
// "org.example.geo"
```

### Dispatching on type for in-band metadata

When a user agent generates `DataCue` objects from in-band timed metadata, the `type` property can be used to determine how to handle each cue.

```js
track.addEventListener("cuechange", () => {
  for (const cue of track.activeCues) {
    switch (cue.type) {
      case "org.id3":
        handleID3Metadata(cue.value);
        break;
      case "org.mp4ra":
        handleMP4Metadata(cue.value);
        break;
      default:
        console.log(`Unknown cue type: ${cue.type}`);
    }
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DataCue")}}
- {{domxref("DataCue.value")}}
- {{domxref("DataCue.DataCue", "DataCue()")}} constructor
- {{domxref("TextTrackCue")}}
