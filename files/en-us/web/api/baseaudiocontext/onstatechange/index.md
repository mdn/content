---
title: BaseAudioContext.onstatechange
slug: Web/API/BaseAudioContext/onstatechange
tags:
  - API
  - Audio
  - AudioContext
  - BaseAudioContext
  - Event Handler
  - Reference
  - Web Audio API
  - onstatechange
browser-compat: api.BaseAudioContext.onstatechange
---
{{ APIRef("Web Audio API") }}

The `onstatechange` property of the {{ domxref("BaseAudioContext") }}
interface defines an event handler function to be called when the
{{Event("statechange")}} event fires: this occurs when the audio context's state
changes.

## Syntax

```js
baseAudioContext.onstatechange = function() { /* ... */ };
```

## Example

The following snippet is taken from our [AudioContext states demo](https://github.com/mdn/webaudio-examples) ([see it running
live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) The `onstatechange` handler is used to log the current
{{domxref("BaseAudioContext.state", "state")}} to the console every time it changes.

```js
audioCtx.onstatechange = function() {
  console.log(audioCtx.state);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
