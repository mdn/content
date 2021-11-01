---
title: DelayNode.delayTime
slug: Web/API/DelayNode/delayTime
tags:
  - API
  - DelayNode
  - Property
  - Reference
  - Web Audio API
  - delayTime
browser-compat: api.DelayNode.delayTime
---
{{ APIRef("Web Audio API") }}

The `delayTime` property of the {{ domxref("DelayNode") }} interface is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing the amount of delay to apply.

`delayTime` is expressed in seconds, its minimal value is `0`, and its maximum value is defined by the `maxDelayTime` argument of the {{domxref("BaseAudioContext.createDelay")}} method that created it.

## Syntax

```js
var audioCtx = new AudioContext();
var myDelay = audioCtx.createDelay(5.0);
myDelay.delayTime.value = 3.0;
```

> **Note:** Though the {{domxref("AudioParam")}} returned is read-only, the value it represents is not.

### Value

An {{domxref("AudioParam")}}.

## Example

See [`BaseAudioContext.createDelay()`](/en-US/docs/Web/API/BaseAudioContext/createDelay#example) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
