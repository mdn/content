---
title: "AudioContext: close() method"
short-title: close()
slug: Web/API/AudioContext/close
page-type: web-api-instance-method
browser-compat: api.AudioContext.close
---

{{ APIRef("Web Audio API") }}

The `close()` method of the {{ domxref("AudioContext") }} Interface closes the audio context, releasing any system audio resources that it uses.

This function does not automatically release all `AudioContext`-created objects, unless other references have been released as well; however, it will forcibly release any system audio resources that might prevent additional `AudioContexts` from being created and used, suspend the progression of audio time in the audio context, and stop processing audio data. The returned {{jsxref("Promise")}} resolves when all `AudioContext`-creation-blocking resources have been released. This method throws an `INVALID_STATE_ERR` exception if called on an {{domxref("OfflineAudioContext")}}.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.

## Examples

The following snippet is taken from our [AudioContext states demo](https://github.com/mdn/webaudio-examples/blob/main/audiocontext-states/index.html) ([see it running live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) When the stop button is clicked, `close()` is called. When the promise resolves, the example is reset to its beginning state.

```js
stopBtn.onclick = () => {
  audioCtx.close().then(() => {
    startBtn.removeAttribute("disabled");
    susResBtn.setAttribute("disabled", "disabled");
    stopBtn.setAttribute("disabled", "disabled");
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
