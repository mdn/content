---
title: "BaseAudioContext: state property"
short-title: state
slug: Web/API/BaseAudioContext/state
page-type: web-api-instance-property
browser-compat: api.BaseAudioContext.state
---

{{ APIRef("Web Audio API") }}

The `state` read-only property of the {{ domxref("BaseAudioContext") }}
interface returns the current state of the `AudioContext`.

## Value

A string. Possible values are:

- `closed`
  - : The audio context has been closed (with the
    {{domxref("AudioContext.close()")}} method.)
- `interrupted` {{experimental_inline}}
  - : The audio context has been interrupted by an occurence outside the control of the web app.
- `running`
  - : The audio context is running normally.
- `suspended`
  - : The audio context has been suspended (with the
    {{domxref("AudioContext.suspend()")}} method.)

## Description

The `state` property of an audio context is used to expose its current operational state. This is normally done by querying the `state` inside a {{domxref("BaseAudioContext.statechange_event", "statechange")}} event handler so that changes in state can be responded to appropriately.

The `running` and `closed` values are self-explanatory — they indicate that the audio context is either running normally (created and connected to an output destination), or closed (via the {{domxref("AudioContext.close()")}} method).

The `interrupted` and `suspended` states both represent a "paused" state that can later be resumed, but they differ in terms of what they signify:

- The `suspended` state indicates that the audio context was paused in response to a user action inside the web app, by running the {{domxref("AudioContext.suspend()")}} method inside a `click` (or similar) event handler. In this case, the context would be unpaused by running the {{domxref("AudioContext.resume()")}} method.
- The `interrupted` state indicates that the audio context was paused in response to an interruption outside the control of the web app. In this case, the browser decides when to pause and unpause the app. The web app can then handle the `interrupted` state appropriately, for example by pausing an audio stream to avoid wasting resources while an app is not being used.

Interruptions that may trigger the `interrupted` state can include:

- A conferencing or phone app on the same system requiring exclusive access to the device's audio hardware.
- The user closing their laptop.

Note also the potential for transitions between the `interrupted` and `suspended` states:

- If `suspend()` is called on an audio context during an interruption (`state = "interrupted"`), the state will transition to `suspended` once the interruption ends.
- If `resume()` is called on a suspended audio context (`state = "suspended"`) during an interruption, the state will transition to `interrupted` immediately.

## Examples

### Handling state changes

The following snippet is taken from our [AudioContext states demo](https://github.com/mdn/webaudio-examples) ([see it running live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) The {{domxref("BaseAudioContext.statechange_event", "onstatechange")}} handler is used to log the
current state to the console every time it changes.

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
};
```

### Resuming interrupted play states in iOS Safari

In iOS Safari, when a user leaves the page (e.g., switches tabs, minimizes the browser, or
turns off the screen)
the audio context's state changes to "interrupted" and needs to be resumed. For example:

```js
function play() {
  if (audioCtx.state === "interrupted") {
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
