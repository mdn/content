---
title: "AudioContext: sinkchange event"
short-title: sinkchange
slug: Web/API/AudioContext/sinkchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.AudioContext.sinkchange_event
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The **`sinkchange`** event of the {{domxref("AudioContext")}} interface is fired when the output audio device (and therefore, the {{domxref("AudioContext.sinkId")}}) has changed.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("sinkchange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onsinkchange = (event) => { }
```

## Event type

{{domxref("Event")}}.

{{InheritanceDiagram("Event")}}

## Examples

A `sinkchange` event listener can be used to report a change of audio output device. Note that if {{domxref("AudioContext.sinkId", "sinkId")}} contains an {{domxref("AudioSinkInfo")}} object, it indicates that the audio has been changed to not play on any output device.

```js
audioCtx.addEventListener("sinkchange", () => {
  if (typeof audioCtx.sinkId === "object" && audioCtx.sinkId.type === "none") {
    console.log("Audio changed to not play on any device");
  } else {
    console.log(`Audio output device changed to ${audioCtx.sinkId}`);
  }
});
```

See our [SetSinkId test example](https://mdn.github.io/dom-examples/audiocontext-setsinkid/) for working code (also check out the [source code](https://github.com/mdn/dom-examples/tree/main/audiocontext-setsinkid)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Change the destination output device in Web Audio](https://developer.chrome.com/blog/audiocontext-setsinkid/)
- {{domxref("AudioContext.setSinkId()")}}
- {{domxref("AudioContext.sinkId")}}
