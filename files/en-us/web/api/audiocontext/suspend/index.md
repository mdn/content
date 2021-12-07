---
title: AudioContext.suspend()
slug: Web/API/AudioContext/suspend
tags:
  - API
  - Audio
  - AudioContext
  - Method
  - Reference
  - Web Audio API
  - suspend
browser-compat: api.AudioContext.suspend
---
{{ APIRef("Web Audio API") }}

The `suspend()` method of the {{ domxref("AudioContext") }} Interface suspends the progression of time in the audio context, temporarily halting audio hardware access and reducing CPU/battery usage in the process — this is useful if you want an application to power down the audio hardware when it will not be using an audio context for a while.

This method will cause an `INVALID_STATE_ERR` exception to be thrown if called on an {{domxref("OfflineAudioContext")}}.

## Syntax

```js
var audioCtx = new AudioContext();
audioCtx.suspend().then(function() { /* ... */ });
```

### Returns

A {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}. The promise is rejected if the context has already been closed.

## Example

The following snippet is taken from our [AudioContext states demo](https://github.com/mdn/webaudio-examples/blob/master/audiocontext-states/index.html) ([see it running live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) When the suspend/resume button is clicked, the {{domxref("BaseAudioContext/state", "AudioContext.state")}} is queried — if it is `running`, `suspend()` is called; if it is `suspended`, {{domxref("AudioContext/resume", "resume()")}} is called. In each case, the text label of the button is updated as appropriate once the promise resolves.

```js
susresBtn.onclick = function() {
  if(audioCtx.state === 'running') {
    audioCtx.suspend().then(function() {
      susresBtn.textContent = 'Resume context';
    });
  } else if(audioCtx.state === 'suspended') {
    audioCtx.resume().then(function() {
      susresBtn.textContent = 'Suspend context';
    });
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
