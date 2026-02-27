---
title: "ManagedSourceBuffer: bufferedchange event"
short-title: bufferedchange
slug: Web/API/ManagedSourceBuffer/bufferedchange_event
page-type: web-api-event
browser-compat: api.ManagedSourceBuffer.bufferedchange_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`bufferedchange`** event of the {{domxref("ManagedSourceBuffer")}} interface is fired when the `ManagedSourceBuffer`'s buffered range changes. This can occur following a call to {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}}, {{domxref("SourceBuffer.remove", "remove()")}}, {{domxref("MediaSource.endOfStream", "endOfStream()")}}, or as a consequence of the user agent running the memory cleanup algorithm.

This event is important for applications using a {{domxref("ManagedMediaSource")}}, because the user agent can evict buffered content at any time. By listening for this event, applications can detect when buffered data has been removed and respond by fetching replacement segments to avoid playback stalls.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("bufferedchange", (event) => {});

onbufferedchange = (event) => {};
```

## Event type

A {{domxref("BufferedChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("BufferedChangeEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("BufferedChangeEvent.addedRanges", "addedRanges")}} {{ReadOnlyInline}}
  - : A {{domxref("TimeRanges")}} object representing the time ranges that were added to the buffer.
- {{domxref("BufferedChangeEvent.removedRanges", "removedRanges")}} {{ReadOnlyInline}}
  - : A {{domxref("TimeRanges")}} object representing the time ranges that were removed from the buffer.

## Examples

### Tracking buffered range changes

This example sets up a {{domxref("ManagedMediaSource")}}, adds a source buffer, fetches a fragmented MP4 file, and listens for the `bufferedchange` event to log any changes to the buffered ranges.

```js
const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';

if (ManagedMediaSource.isTypeSupported(mediaType)) {
  const source = new ManagedMediaSource();
  const video = document.createElement("video");

  video.controls = true;
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);
  document.body.appendChild(video);

  source.addEventListener("sourceopen", async () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      for (let i = 0; i < event.addedRanges.length; i++) {
        console.log(
          `Added: ${event.addedRanges.start(i)}s - ${event.addedRanges.end(i)}s`,
        );
      }
      for (let i = 0; i < event.removedRanges.length; i++) {
        console.log(
          `Removed: ${event.removedRanges.start(i)}s - ${event.removedRanges.end(i)}s`,
        );
      }
    });

    const response = await fetch(videoUrl);
    const data = await response.arrayBuffer();
    sourceBuffer.appendBuffer(data);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BufferedChangeEvent")}}
- {{domxref("ManagedMediaSource")}}
- {{domxref("ManagedSourceBuffer")}}
- {{domxref("SourceBuffer")}}
