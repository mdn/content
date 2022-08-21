---
title: AudioBuffer.copyToChannel()
slug: Web/API/AudioBuffer/copyToChannel
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - AudioBuffer
  - Method
  - Reference
  - Web Audio API
  - copyToChannel
browser-compat: api.AudioBuffer.copyToChannel
---
{{ APIRef("Web Audio API") }}

The `copyToChannel()` method of the {{ domxref("AudioBuffer") }} interface copies
the samples to the specified channel of the `AudioBuffer`, from the source array.

## Syntax

```js
copyToChannel(source, channelNumber)
copyToChannel(source, channelNumber, startInChannel)
```

### Parameters

- `source`
  - : A {{jsxref("Float32Array")}} that the channel data will be copied from.
- `channelNumber`
  - : The channel number of the current {{domxref("AudioBuffer")}} to copy the channel
    data to. If _channelNumber_ is greater than or equal to
    {{domxref("AudioBuffer.numberOfChannels")}}, an `INDEX_SIZE_ERR` will be
    thrown.
- `startInChannel` {{optional_inline}}
  - : An optional offset to copy the data to. If _startInChannel_ is greater than
    {{domxref("AudioBuffer.length")}}, an `INDEX_SIZE_ERR` will be thrown.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
const anotherArray = new Float32Array;
// Copy channel data from second channel of myArrayBuffer.
myArrayBuffer.copyFromChannel(anotherArray,1,0);
// Copy data from anotherArray to first channel of myArrayBuffer. Both channels have the same data now.
myArrayBuffer.copyToChannel (anotherArray,0,0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
