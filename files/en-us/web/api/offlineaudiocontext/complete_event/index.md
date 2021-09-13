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

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Default action</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("OfflineAudioCompletionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("OfflineAudioContext.oncomplete")}}</td>
    </tr>
  </tbody>
</table>

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

You can also set up the event handler using the {{domxref("OfflineAudioContext.oncomplete")}} property:

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

- {{domxref("OfflineAudioContext.oncomplete")}}
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
