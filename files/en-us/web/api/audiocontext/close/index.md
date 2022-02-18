---
title: AudioContext.close()
slug: Web/API/AudioContext/close
tags:
  - API
  - AudioContext
  - Media
  - Method
  - Reference
  - Web Audio API
  - close
browser-compat: api.AudioContext.close
---
{{ APIRef("Web Audio API") }}

The `close()` method of the {{ domxref("AudioContext") }} Interface closes the audio context, releasing any system audio resources that it uses.

Closed contexts cannot have new nodes created, but can decode audio data, create buffers, etc.

This function does not automatically release all `AudioContext`-created objects, unless other references have been released as well; however, it will forcibly release any system audio resources that might prevent additional `AudioContexts` from being created and used, suspend the progression of audio time in the audio context, and stop processing audio data. The returned {{jsxref("Promise")}} resolves when all `AudioContext`-creation-blocking resources have been released. This method throws an `INVALID_STATE_ERR` exception if called on an {{domxref("OfflineAudioContext")}}.

## Syntax

```js
var audioCtx = new AudioContext();
audioCtx.close().then(function() { /* ... */ });
await audioCtx.close();
```

### Returns

A {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.

## Example

The following snippet is taken from our [AudioContext states demo](https://github.com/mdn/webaudio-examples/blob/master/audiocontext-states/index.html) ([see it running live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) When the stop button is clicked, `close()` is called. When the promise resolves, the example is reset to its beginning state.

```js
stopBtn.onclick = function() {
  audioCtx.close().then(function() {
    startBtn.removeAttribute('disabled');
    susresBtn.setAttribute('disabled', 'disabled');
    stopBtn.setAttribute('disabled', 'disabled');
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
