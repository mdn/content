---
title: BaseAudioContext.state
slug: Web/API/BaseAudioContext/state
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - AudioContext
  - BaseAudioContext
  - Property
  - Reference
  - Web Audio API
  - state
browser-compat: api.BaseAudioContext.state
---
{{ APIRef("Web Audio API") }}

The `state` read-only property of the {{ domxref("BaseAudioContext") }}
interface returns the current state of the `AudioContext`.

## Value

A string. Possible values are:

- `suspended`
  - : The audio context has been suspended (with the
    {{domxref("AudioContext.suspend()")}} method.)
- `running`
  - : The audio context is running normally.
- `closed`
  - : The audio context has been closed (with the
    {{domxref("AudioContext.close()")}} method.)

## Examples

### Handling state changes

The following snippet is taken from our [AudioContext states demo](https://github.com/mdn/webaudio-examples) ([see it running live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) The {{domxref("BaseAudioContext.statechange_event", "onstatechange")}} handler is used to log the
current state to the console every time it changes.

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
}
```

### Resuming interrupted play states in iOS Safari

In iOS Safari, when a user leaves the page (e.g. switches tabs, minimizes the browser, or
turns off the screen)
the audio context's state changes to "interrupted" and needs to be resumed. For example:

```js
function play() {
  if (audioCtx.state === 'interrupted') {
    audioCtx.resume().then(() => play());
    return;
  }
  // rest of the play() function
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
