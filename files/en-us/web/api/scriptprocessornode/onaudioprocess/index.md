---
title: ScriptProcessorNode.onaudioprocess
slug: Web/API/ScriptProcessorNode/onaudioprocess
tags:
  - API
  - Property
  - Reference
  - ScriptProcessorNode
  - Web Audio API
  - onaudioprocess
browser-compat: api.ScriptProcessorNode.onaudioprocess
---
{{APIRef("Web Audio API")}}{{deprecated_header}}

The `onaudioprocess` event handler of the {{domxref("ScriptProcessorNode")}} interface represents the [event handler](/en-US/docs/Web/Events/Event_handlers) to be called for the `audioprocess` event that is dispatched to `ScriptProcessorNode` node types. An event of type {{domxref("AudioProcessingEvent")}} will be dispatched to the event handler.

> **Note:** This feature was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

## Syntax

```js
var audioCtx = new AudioContext();
var scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);
scriptNode.onaudioprocess = function() { /* ... */ }
```

## Example

See [`BaseAudioContext.createScriptProcessor()`](/en-US/docs/Web/API/BaseAudioContext/createScriptProcessor#example) for example code.

## Specifications

Since the August 29 2014 [Web Audio API specification](https://www.w3.org/TR/webaudio/#ScriptProcessorNode) publication, this feature has been deprecated. It is no longer on track to become a standard.

It was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
