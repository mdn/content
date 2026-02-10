---
title: "DataCue: value property"
short-title: value
slug: Web/API/DataCue/value
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.DataCue.value
---

{{APIRef("WebVTT")}}{{SeeCompatTable}}

The **`value`** property of the {{domxref("DataCue")}} interface represents the data payload of the cue. Unlike {{domxref("VTTCue")}}, which carries text content, `DataCue` can hold any data type — such as a {{Glossary("JSON")}} object, a string, or an {{jsxref("ArrayBuffer")}} — making it suitable for timed metadata use cases where structured data needs to be synchronized with media playback.

The property is read-write for application-created cues, allowing the data to be updated after construction. For cues generated automatically by the user agent from in-band timed metadata (e.g., ID3 tags in an HTTP Live Streaming source), the value is set by the user agent and reflects the metadata payload.

The {{domxref("DataCue.type", "type")}} property can be used alongside `value` to identify the format or schema of the data.

## Value

Any type. The value is typically a string, a plain object, or an {{jsxref("ArrayBuffer")}}, depending on the source of the cue and the kind of timed metadata it represents.

## Examples

### Reading the value of a DataCue

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Geo Track");
track.mode = "hidden";

const cue = new DataCue(
  0,
  10,
  { latitude: 51.5043, longitude: -0.0762 },
  "org.example.geo",
);
track.addCue(cue);

console.log(cue.value);
// { latitude: 51.5043, longitude: -0.0762 }
```

### Reacting to cue data during playback

This example adds several `DataCue` objects to a metadata track, then reads each cue's `value` as it becomes active during playback.

```html
<video controls src="video.mp4"></video>
```

```js
const video = document.querySelector("video");
const track = video.addTextTrack("metadata", "Events");
track.mode = "hidden";

const cue1 = new DataCue(5, 10, { action: "showBanner", text: "Welcome!" });
const cue2 = new DataCue(15, 20, { action: "highlight", playerId: 7 });

cue1.addEventListener("enter", (e) => {
  console.log(e.target.value.action);
  // "showBanner"
});

cue2.addEventListener("enter", (e) => {
  console.log(e.target.value.action);
  // "highlight"
});

track.addCue(cue1);
track.addCue(cue2);
```

### Updating the value of a DataCue

The `value` property is writable, so it can be changed after the cue is created.

```js
const cue = new DataCue(0, 5, "initial data");
cue.value = { updated: true, score: 42 };
console.log(cue.value);
// { updated: true, score: 42 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DataCue")}}
- {{domxref("DataCue.type")}}
- {{domxref("DataCue.DataCue", "DataCue()")}} constructor
- {{domxref("TextTrackCue")}}
