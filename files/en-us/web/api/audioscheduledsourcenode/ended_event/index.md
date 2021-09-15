---
title: 'AudioScheduledSourceNode: ended event'
slug: Web/API/AudioScheduledSourceNode/ended_event
tags:
  - Audio
  - Event
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Media Streams API
  - Reference
  - Video
  - Web Audio API
  - ended
browser-compat: api.AudioScheduledSourceNode.ended_event
---
{{DefaultAPISidebar("Web Audio API")}}

The `ended` event of the {{domxref("AudioScheduledSourceNode")}} interface is fired when the source node has stopped playing.

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
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("AudioScheduledSourceNode.onended")}}</td>
    </tr>
  </tbody>
</table>

## Usage notes

This event occurs when a {{domxref("AudioScheduledSourceNode")}} has stopped playing, either because it's reached a predetermined stop time, the full duration of the audio has been performed, or because the entire buffer has been played.

## Examples

In this simple example, an event listener for the `ended` event is set up to enable a "Start" button in the user interface when the node stops playing:

```js
node.addEventListener('ended', () => {
  document.getElementById("startButton").disabled = false;
})
```

You can also set up the event handler using the {{domxref("AudioScheduledSourceNode.onended")}} property:

```js
node.onended = function() {
  document.getElementById("startButton").disabled = false;
}
```

For an example of the ended event in use, see our [audio-buffer example on GitHub](https://mdn.github.io/webaudio-examples/audio-buffer/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related events

- [audioprocess](/en-US/docs/Web/API/ScriptProcessorNode/audioprocess_event)
- [complete](/en-US/docs/Web/API/OfflineAudioContext/complete_event)

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- {{domxref("HTMLMediaElement.ended_event", 'HTMLMediaElement: ended event')}}
- {{domxref("MediaStreamTrack.ended_event", 'MediaStreamTrack: ended event')}}
