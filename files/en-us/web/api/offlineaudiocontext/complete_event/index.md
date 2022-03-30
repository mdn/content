---
title: 'OfflineAudioContext: complete event'
slug: Web/API/OfflineAudioContext/complete_event
tags:
  - API
  - Event
  - OfflineAudioContext
  - Reference
  - Web Audio API
  - complete
browser-compat: api.OfflineAudioContext.complete_event
---
{{DefaultAPISidebar("Web Audio API")}}

The `complete` event of the {{domxref("OfflineAudioContext")}} interface is fired when the rendering of an offline audio context is complete.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('complete', event => { });

oncomplete = event => { };
```

## Event type

An {{domxref("OfflineAudioCompletionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("OfflineAudioCompletionEvent")}}

## Event properties

{{page("/en-US/docs/Web/API/OfflineAudioCompletionEvent", "Properties")}}

## Examples

When processing is complete, you might want to use the `oncomplete` handler the prompt the user that the audio can now be played, and enable the play button:

```js
let offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.addEventListener('complete', () => {
  console.log('Offline audio processing now complete');
  showModalDialog('Song processed and ready to play');
  playBtn.disabled = false;
})
```

You can also set up the event handler using the `oncomplete` property:

```js
let offlineAudioCtx = new OfflineAudioContext();

offlineAudioCtx.oncomplete = function() {
  console.log('Offline audio processing now complete');
  showModalDialog('Song processed and ready to play');
  playBtn.disabled = false;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
