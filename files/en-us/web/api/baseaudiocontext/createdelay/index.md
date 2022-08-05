---
title: BaseAudioContext.createDelay()
slug: Web/API/BaseAudioContext/createDelay
page-type: web-api-instance-method
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createDelay
browser-compat: api.BaseAudioContext.createDelay
---
{{APIRef("Web Audio API")}}

The `createDelay()` method of the
{{domxref("BaseAudioContext")}} Interface is used to create a {{domxref("DelayNode")}},
which is used to delay the incoming audio signal by a certain amount of time.

> **Note:** The {{domxref("DelayNode.DelayNode", "DelayNode()")}}
> constructor is the recommended way to create a {{domxref("DelayNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js
createDelay(maxDelayTime)
```

### Parameters

- `maxDelayTime` {{optional_inline}}
  - : The maximum amount of time, in seconds, that the audio signal can be delayed by.
    Must be less than 180 seconds, and defaults to 1 second if not specified.

### Return value

A {{domxref("DelayNode")}}. The default {{domxref("DelayNode.delayTime")}} is 0
seconds.

## Examples

We have created a simple example that allows you to play three different samples on a
constant loop — see [create-delay](https://chrisdavidmills.github.io/create-delay/) (you can also
[view the source code](https://github.com/chrisdavidmills/create-delay)). If
you just press the play buttons, the loops will start immediately; if you slide the
sliders up to the right, then press the play buttons, a delay will be introduced, so the
looping sounds don't start playing for a short amount of time.

```js
const audioCtx = new AudioContext();

const synthDelay = audioCtx.createDelay(5.0);

// …

let synthSource;

playSynth.onclick = () => {
  synthSource = audioCtx.createBufferSource();
  synthSource.buffer = buffers[2];
  synthSource.loop = true;
  synthSource.start();
  synthSource.connect(synthDelay);
  synthDelay.connect(destination);
  this.setAttribute('disabled', 'disabled');
}

stopSynth.onclick = () => {
  synthSource.disconnect(synthDelay);
  synthDelay.disconnect(destination);
  synthSource.stop();
  playSynth.removeAttribute('disabled');
}

// …

let delay1;
rangeSynth.oninput = () => {
  delay1 = rangeSynth.value;
  synthDelay.delayTime.setValueAtTime(delay1, audioCtx.currentTime);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
