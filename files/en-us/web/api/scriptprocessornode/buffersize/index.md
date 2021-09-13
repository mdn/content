---
title: ScriptProcessorNode.bufferSize
slug: Web/API/ScriptProcessorNode/bufferSize
tags:
  - API
  - Property
  - Reference
  - ScriptProcessorNode
  - Web Audio API
  - bufferSize
browser-compat: api.ScriptProcessorNode.bufferSize
---
{{APIRef("Web Audio API")}}{{deprecated_header}}

The `bufferSize` property of the {{domxref("ScriptProcessorNode")}} interface returns an integer representing both the input and output buffer size, in sample-frames. Its value can be a power of 2 value in the range `256`–`16384`.

> **Note:** This feature was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

## Syntax

```js
var audioCtx = new AudioContext();
var scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);
console.log(scriptNode.bufferSize);
```

### Value

An integer.

## Example

See [`BaseAudioContext.createScriptProcessor()`](/en-US/docs/Web/API/BaseAudioContext/createScriptProcessor#example) for example code.

## Specifications

Since the August 29 2014 [Web Audio API specification](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) publication, this feature has been deprecated. It is no longer on track to become a standard.

It was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
