---
title: "RTCEncodedVideoFrame: getMetadata() method"
short-title: getMetadata()
slug: Web/API/RTCEncodedVideoFrame/getMetadata
page-type: web-api-instance-method
browser-compat: api.RTCEncodedVideoFrame.getMetadata
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`getMetadata()`** method of the {{domxref("RTCEncodedVideoFrame")}} interface returns an object containing the metadata associated with the frame.

This includes information about the frame, including its size, video encoding, other frames needed to construct a full image, timestamp, and other information.

## Syntax

```js-nolint
getMetadata()
```

### Parameters

None.

### Return value

An object with the following properties:

- `frameId`
  - : A positive integer value indicating the id of this frame.
- `dependencies`
  - : An {{jsxref("Array")}} of positive integers indicating the frameIds of frames on which this frame depends.
    For a key frame this will be empty, as a key frame contains all the information it needs to construct the image.
    For a delta frame this will list all the frames needed to render this frame.
    The type of frame can be determined using {{domxref("RTCEncodedVideoFrame.type")}}.
- `width`
  - : A positive integer indicating the width of the frame.
    The maximum value is 65535.
- `height`
  - : A positive integer indicating the height of the frame.
    The maximum value is 65535.
- `spatialIndex`
  - : A positive integer indicating the spatial index of the frame.
    Some codecs allow generation of layers of frames with different layers of resolutions.
    Frames in higher layers can be selectively dropped in order to reduce bit rate when needed, while maintaining acceptable video quality.
- `temporalIndex`
  - : A positive integer indicating the temporal index of the frame.
    Some codecs group frames in layers, based on whether dropping the a frame will prevent others from being decoded.
    Frames in higher layers can be selectively dropped in order to reduce bit rate when needed, while maintaining acceptable video quality.
- `synchronizationSource`
  - : A positive integer value indicating synchronization source ("ssrc") of the stream of RTP packets that are described by this encoded video frame.
    A source might be something like a camera or microphone, or some kind of mixer app that combines multiple sources.
    All packets from the same source share the same time source and sequence space, and so can be ordered relative to each other.
    Note two frames with the same value refer to the same source (for more information see [`RTCInboundRtpStreamStats.ssrc`](/en-US/docs/Web/API/RTCInboundRtpStreamStats#ssrc)).
- `payloadType`
  - : A positive integer value in the range from 0 to 127 that describes the format of the RTP payload.
    The mappings of values to formats is defined in RFC3550.
- `contributingSources`
  - : An {{jsxref("Array")}} of sources (ssrc) that have contributed to the frame.
    Consider the case of a conferencing application that combines the audio and video from multiple users.
    The `synchronizationSource` would include the ssrc of the application, while `contributingSources` would include the ssrc values of all the individual video and audio sources.
- `timestamp`
  - : The [media presentation timestamp (PTS)](https://en.wikipedia.org/wiki/Presentation_timestamp) in microseconds of raw frame, matching the timestamp for raw frames which correspond to this frame.
    This is used to synchronize separate video, audio, subtitle and other streams belonging to the same presentation.

## Examples

This example [WebRTC encoded transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) implementation shows how you might get the frame metadata in a `transform()` function and log it.

```js
addEventListener("rtctransform", (event) => {
  const async transform = new TransformStream({
    async transform(encodedFrame, controller) {

      // Get the metadata and log
      const frameMetaData = encodedFrame.getMetadata();
      console.log(frameMetaData)

      // Enqueue the frame without modifying
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

The resulting object from a local webcam might look like the one shown below.
Note that there are no contributing sources because there is just one source.

```js
{
  "contributingSources": [],
  "dependencies": [
    405
  ],
  "frameId": 406,
  "height": 480,
  "payloadType": 120,
  "spatialIndex": 0,
  "synchronizationSource": 3956716931,
  "temporalIndex": 0,
  "width": 640
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
