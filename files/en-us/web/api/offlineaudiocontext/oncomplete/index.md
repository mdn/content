---
title: OfflineAudioContext.oncomplete
slug: Web/API/OfflineAudioContext/oncomplete
tags:
  - API
  - OfflineAudioContext
  - Property
  - Reference
  - Web Audio API
  - oncomplete
browser-compat: api.OfflineAudioContext.oncomplete
---
{{ APIRef("Web Audio API") }}

The `oncomplete` event handler of the `OfflineAudioContext` interface is called when the audio processing is terminated, that is when the {{event("complete")}} event (of type {{domxref("OfflineAudioCompletionEvent")}}) is raised.

## Syntax

```js
var offlineAudioCtx = new OfflineAudioContext();
offlineAudioCtx.oncomplete = function() { /* ... */ }
```

## Example

When processing is complete, you might want to use the `oncomplete` handler the prompt the user that the audio can now be played, and enable the play button.

```js
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

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
