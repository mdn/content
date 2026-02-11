---
title: DataCue
slug: Web/API/DataCue
page-type: web-api-interface
status:
  - experimental
browser-compat: api.DataCue
---

{{APIRef("WebVTT")}}{{SeeCompatTable}}

The **`DataCue`** interface represents a cue that associates arbitrary timed data with an audio or video media resource, or exposes timed data from a media resource to web pages. It extends the {{domxref("TextTrackCue")}} interface with a {{domxref("DataCue.value", "value")}} property that can hold any data type, and a {{domxref("DataCue.type", "type")}} property that identifies the kind of data.

Unlike {{domxref("VTTCue")}}, which is designed for displaying subtitle and caption text, `DataCue` is intended for non-rendered timed metadata. Use cases include dynamic content replacement, ad insertion, presentation of supplemental content alongside audio or video, or more generally, triggering application logic at specific points on the media timeline.

Some user agents may also automatically generate `DataCue` objects for in-band timed metadata carried within media streams, such as ID3 tags in [HTTP Live Streaming (HLS)](/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources#hls_encoding).

{{InheritanceDiagram}}

## Constructor

- {{domxref("DataCue.DataCue", "DataCue()")}} {{experimental_inline}}
  - : Creates a new `DataCue` object.

## Instance properties

_This interface also inherits properties from {{domxref("TextTrackCue")}}._

- {{domxref("DataCue.type")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string identifying the type of the cue's {{domxref("DataCue.value", "value")}}, typically using reverse-domain notation (e.g., `"org.mp4ra"`, `"org.id3"`).
- {{domxref("DataCue.value")}} {{experimental_inline}}
  - : The data payload associated with the cue. Can be any type.

## Instance methods

_This interface has no methods of its own but inherits methods from {{domxref("TextTrackCue")}}._

## Examples

### Associating timed metadata with a video

The following example creates a metadata {{domxref("TextTrack")}} on a video element and adds `DataCue` objects containing geolocation coordinates. When each cue becomes active during playback, its {{domxref("TextTrackCue/enter_event", "enter")}} event fires, allowing the page to react — for example, by updating a map view.

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Geo Track");
track.mode = "hidden";

const points = [
  { start: 0, end: 10, data: { latitude: 51.5043, longitude: -0.0762 } },
  { start: 10, end: 20, data: { latitude: 48.8566, longitude: 2.3522 } },
  { start: 20, end: 30, data: { latitude: 40.4168, longitude: -3.7038 } },
];

for (const point of points) {
  const cue = new DataCue(
    point.start,
    point.end,
    point.data,
    "org.example.geo",
  );
  cue.addEventListener("enter", (e) => {
    const { latitude, longitude } = e.target.value;
    console.log(`Map pan to: ${latitude}, ${longitude}`);
  });
  track.addCue(cue);
}

// At 0s: "Map pan to: 51.5043, -0.0762"
// At 10s: "Map pan to: 48.8566, 2.3522"
// At 20s: "Map pan to: 40.4168, -3.7038"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextTrackCue")}}
- {{domxref("VTTCue")}}
- {{domxref("TextTrack")}}
- {{domxref("TextTrackCue/enter_event", "enter")}} event
- {{domxref("TextTrackCue/exit_event", "exit")}} event
