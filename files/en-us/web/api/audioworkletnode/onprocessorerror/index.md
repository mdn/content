---
title: AudioWorkletNode.onprocessorerror
slug: Web/API/AudioWorkletNode/onprocessorerror
tags:
  - API
  - Audio
  - AudioWorkletNode
  - AudioWorkletProcessor
  - Event Handler
  - Property
  - Reference
  - Web Audio API
  - onprocessorerror
browser-compat: api.AudioWorkletNode.onprocessorerror
---
{{ APIRef("Web Audio API") }}

The `onprocessorerror` property of the {{ domxref("AudioWorkletNode") }}
interface defines an event handler function to be called when the
{{domxref("AudioWorkletNode.processorerror_event", "processorerror")}} event fires. This
occurs when the underlying {{domxref("AudioWorkletProcessor")}} behind the node throws
an exception in its constructor, the {{domxref("AudioWorkletProcessor.process",
  "process")}} method, or any user-defined class method.

Once an exception is thrown, the processor (and thus the node) will output silence
throughout its lifetime.

## Syntax

```js
audioWorkletNode.onprocessorerror = function() { /* ... */ };
```

## Examples

// FILL IN EXAMPLE SNIPPET

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
