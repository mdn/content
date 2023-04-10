---
title: "AudioBuffer: copyFromChannel() method"
short-title: copyFromChannel()
slug: Web/API/AudioBuffer/copyFromChannel
page-type: web-api-instance-method
browser-compat: api.AudioBuffer.copyFromChannel
---

{{APIRef("Web Audio API")}}

The
**`copyFromChannel()`** method of the
{{domxref("AudioBuffer")}} interface copies the audio sample data from the specified
channel of the `AudioBuffer` to a specified
{{jsxref("Float32Array")}}.

## Syntax

```js-nolint
copyFromChannel(destination, channelNumber, startInChannel)
```

### Parameters

- `destination`
  - : A {{jsxref("Float32Array")}} to copy the channel's samples to.
- `channelNumber`
  - : The channel number of the current `AudioBuffer` to copy the channel data
    from.
- `startInChannel` {{optional_inline}}
  - : An optional offset into the source channel's buffer from which to begin copying
    samples. If not specified, a value of 0 (the beginning of the buffer) is assumed by
    default.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `indexSizeError`

  - : One of the input parameters has a value that is outside the accepted range:

    - The value of `channelNumber` specifies a channel number
      which doesn't exist (that is, it's greater than or equal to the value of
      {{domxref("AudioBuffer.numberOfChannels", "numberOfChannels")}} on the channel).
    - The value of `startInChannel` is outside the current range
      of samples that already exist in the source buffer; that is, it's greater than its
      current {{domxref("AudioBuffer.length", "length")}}.

## Examples

This example creates a new audio buffer, then copies the samples from another channel
into it.

```js
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
const anotherArray = new Float32Array(length);
myArrayBuffer.copyFromChannel(anotherArray, 1, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
