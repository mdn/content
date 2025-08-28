---
title: "RTCEncodedAudioFrame: getMetadata() method"
short-title: getMetadata()
slug: Web/API/RTCEncodedAudioFrame/getMetadata
page-type: web-api-instance-method
browser-compat: api.RTCEncodedAudioFrame.getMetadata
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`getMetadata()`** method of the {{domxref("RTCEncodedAudioFrame")}} interface returns an object containing the metadata associated with the frame.

This includes information about the frame, including the audio encoding used, the synchronization source and contributing sources, and the sequence number (for incoming frames).

## Syntax

```js-nolint
getMetadata()
```

### Parameters

None.

### Return value

An object with the following properties:

- `audioLevel`
  - : A number representing the audio level of this frame. The value is between 0 and 1 inclusive (linear), where 1.0 represents 0 dBov ([decibels relative to full scale (DBFS)](https://en.wikipedia.org/wiki/DBFS)), 0 represents silence, and 0.5 represents approximately 6 dB SPL change in the [sound pressure level](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) from 0 dBov. The value is converted from the -127 to 0 range specified in [RFC6464](https://www.rfc-editor.org/rfc/rfc6464) via the equation `10^(-rfc_level/20)`. If the RFC6464 header extension is not present in the received packets of the frame, `audioLevel` will be `undefined`.
- `synchronizationSource`
  - : A positive integer value indicating synchronization source ("ssrc") of the stream of RTP packets that are described by this frame.
    A source might be something like a microphone, or a mixer application that combines multiple sources.
    All packets from the same source share the same time source and sequence space, and so can be ordered relative to each other.
    Note that two frames with the same value refer to the same source.
- `payloadType`
  - : A positive integer value in the range from 0 to 127 that describes the format of the RTP payload.
    The mappings of values to formats is defined in RFC3550, and more specifically [Section 6: Payload Type Definitions](https://www.rfc-editor.org/rfc/rfc3551#section-6) of RFC3551.
- `contributingSources`
  - : An {{jsxref("Array")}} of sources (ssrc) that have contributed to the frame.
    Consider the case of a conferencing application that combines audio from multiple users.
    The `synchronizationSource` would include the ssrc of the application, while `contributingSources` would include the ssrc values of all the individual audio sources.
- `sequenceNumber`
  - : The sequence number of an incoming audio frame (not used for outgoing frames) that can be used for reconstructing the original send-order of frames.
    This is number between 0 and 32767.
    Note that while numbers are allocated sequentially when sent, they will overflow at 32767 and restart back at 0.
    Therefore to compare two frame sequence numbers, in order to determine whether one is assumed to be after another, you must use [serial number arithmetic](https://en.wikipedia.org/wiki/Serial_number_arithmetic). <!-- [RFC1982] -->

## Examples

This example [WebRTC encoded transform](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) implementation shows how you might get the frame metadata in a `transform()` function and log it.

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
    async transform(encodedFrame, controller) {
      // Get the metadata and log
      const frameMetaData = encodedFrame.getMetadata();
      console.log(frameMetaData);

      // Enqueue the frame without modifying
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

The resulting object from a local microphone might look like the one shown below.
Note that there are no contributing sources because there is just one source, and no `sequenceNumber` because this is an outgoing frame.

```json
{
  "payloadType": 109,
  "synchronizationSource": 1876443470
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using WebRTC Encoded Transforms](/en-US/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
