---
title: "AudioContext: resume() method"
short-title: resume()
slug: Web/API/AudioContext/resume
page-type: web-api-instance-method
browser-compat: api.AudioContext.resume
---

{{ APIRef("Web Audio API") }}

The **`resume()`** method of the {{ domxref("AudioContext") }}
interface resumes the progression of time in an audio context that has previously been
suspended.

This method will cause an `INVALID_STATE_ERR` exception to be thrown if
called on an {{domxref("OfflineAudioContext")}}.

## Syntax

```js-nolint
resume()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves when the context has resumed. The promise is
rejected if the context has already been closed.

## Examples

The following snippet is taken from our [AudioContext states demo](https://github.com/mdn/webaudio-examples/tree/master/audiocontext-states) ([see it running live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) When the suspend/resume button is clicked, the
{{domxref("BaseAudioContext/state", "AudioContext.state")}} is queried — if it is `running`,
{{domxref("AudioContext.suspend()", "suspend()")}} is called; if it is
`suspended`, `resume()` is called. In each case, the text label of
the button is updated as appropriate once the promise resolves.

```js
susresBtn.onclick = () => {
  if (audioCtx.state === "running") {
    audioCtx.suspend().then(() => {
      susresBtn.textContent = "Resume context";
    });
  } else if (audioCtx.state === "suspended") {
    audioCtx.resume().then(() => {
      susresBtn.textContent = "Suspend context";
    });
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
