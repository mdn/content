---
title: 'BaseAudioContext: statechange event'
slug: Web/API/BaseAudioContext/statechange_event
page-type: web-api-event
tags:
  - API
  - Audio
  - AudioContext
  - BaseAudioContext
  - Event Handler
  - Reference
  - Web Audio API
  - statechange
browser-compat: api.BaseAudioContext.statechange_event
---
{{APIRef("Web Audio API")}}

A `statechange` event is fired at a {{DOMxRef("BaseAudioContext")}} object when its {{domxref("BaseAudioContext.state", "state")}} member changes.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('statechange', (event) => { })

onstatechange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

The following snippet is taken from our [AudioContext states demo](https://github.com/mdn/webaudio-examples) ([see it running live](https://mdn.github.io/webaudio-examples/audiocontext-states/).) The `onstatechange` handler is used to log the current
{{domxref("BaseAudioContext.state", "state")}} to the console every time it changes.

```js
audioCtx.onstatechange = () => {
  console.log(audioCtx.state);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
