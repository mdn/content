---
title: "OfflineAudioContext: complete event"
short-title: complete
slug: Web/API/OfflineAudioContext/complete_event
page-type: web-api-event
browser-compat: api.OfflineAudioContext.complete_event
---

{{APIRef("Web Audio API")}}

The `complete` event of the {{domxref("OfflineAudioContext")}} interface is fired when the rendering of an offline audio context is complete.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("complete", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
oncomplete = (event) => { }
```

## Event type

An {{domxref("OfflineAudioCompletionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("OfflineAudioCompletionEvent")}}

## Examples

When processing is complete, you might want to use the `complete` event handler to prompt the user that the audio can now be played, and enable the play button:

```js
const offlineAudioCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

offlineAudioCtx.addEventListener("complete", () => {
  console.log("Offline audio processing now complete");
  alert("Song processed and ready to play");
  playBtn.disabled = false;
});
```

You can also set up the event handler using the `oncomplete` property (but note that this replaces other event listeners added using `oncomplete`, if any):

```js
const offlineAudioCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

offlineAudioCtx.oncomplete = () => {
  console.log("Offline audio processing now complete");
  alert("Song processed and ready to play");
  playBtn.disabled = false;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
