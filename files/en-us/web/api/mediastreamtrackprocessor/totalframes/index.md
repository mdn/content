---
title: "MediaStreamTrackProcessor: totalFrames property"
short-title: totalFrames
slug: Web/API/MediaStreamTrackProcessor/totalFrames
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrackProcessor.totalFrames
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}

The **`totalFrames`** property of the {{domxref("MediaStreamTrackProcessor")}} interface returns a number indicating the total number of frames recieved by the processor.

## Value

A number.

## Examples

```js
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const [track] = stream.getVideoTracks();

    const processor = new MediaStreamTrackProcessor({
      track,
      maxBufferSize: 1,
    });
    const reader = processor.readable.getReader();

    while (true) {
      const { value: frame, done } = await reader.read();
      if (done) break;

      // do something with frame...
      frame.close();

      console.log(
        `total: ${processor.totalFrames}, discarded: ${processor.discardedFrames}`,
      );
    }
  } catch (e) {
    console.error(e.name, e.message);
  }
}

document.querySelector("button").addEventListener("click", init);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("MediaStreamTrackProcessor.discardedframes")}}
