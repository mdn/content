---
title: AudioWorkletProcessor.port
slug: Web/API/AudioWorkletProcessor/port
tags:
  - API
  - Audio
  - AudioWorkletProcessor
  - Experimental
  - Property
  - Reference
  - Web Audio API
browser-compat: api.AudioWorkletProcessor.port
---
{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The read-only **`port`** property of the
{{domxref("AudioWorkletProcessor")}} interface returns the associated
{{domxref("MessagePort")}}. It can be used to communicate between the processor and the
{{domxref("AudioWorkletNode")}} to which it belongs.

> **Note:** The port at the other end of the channel is
> available under the {{domxref("AudioWorkletNode.port", "port")}} property of the node.

## Syntax

```js
AudioWorkletProcessorInstance.port;
```

### Value

The {{domxref("MessagePort")}} object that is connecting the `AudioWorkletProcessor` and the associated `AudioWorkletNode`.

## Examples

See [`AudioWorkletNode.port`](/en-US/docs/Web/API/AudioWorkletNode/port#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio
  API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
