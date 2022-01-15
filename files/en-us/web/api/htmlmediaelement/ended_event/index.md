---
title: 'HTMLMediaElement: ended event'
slug: Web/API/HTMLMediaElement/ended_event
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
browser-compat: api.HTMLMediaElement.ended_event
---
{{APIRef("HTMLMediaElement")}}

The `ended` event is fired when playback or streaming has stopped because the end of the media was reached or because no further data is available.

This event occurs based upon {{domxref("HTMLMediaElement")}} ({{HTMLElement("audio")}} and {{HTMLElement("video")}}) fire `ended` when playback of the media reaches the end of the media.

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
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Target</th>
      <td>Element</td>
    </tr>
    <tr>
      <th scope="row">Default Action</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("GlobalEventHandlers.onended")}}</td>
    </tr>
  </tbody>
</table>

> **Note:** This event is also defined in [Media Capture and Streams](/en-US/docs/Web/API/Media_Streams_API) and [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)

## Examples

These examples add an event listener for the HTMLMediaElement's `ended` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector('video');

video.addEventListener('ended', (event) => {
  console.log('Video stopped either because 1) it was over, ' +
      'or 2) no further data is available.');
});
```

Using the `onended` event handler property:

```js
const video = document.querySelector('video');

video.onended = (event) => {
  console.log('Video stopped either because 1) it was over, ' +
      'or 2) no further data is available.');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related Events

- {{domxref("HTMLMediaElement.playing_event", 'HTMLMediaElement: playing event')}}
- {{domxref("HTMLMediaElement.waiting_event", 'HTMLMediaElement: waiting event')}}
- {{domxref("HTMLMediaElement.seeking_event", 'HTMLMediaElement: seeking event')}}
- {{domxref("HTMLMediaElement.seeked_event", 'HTMLMediaElement: seeked event')}}
- {{domxref("HTMLMediaElement.ended_event", 'HTMLMediaElement: ended event')}}
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'HTMLMediaElement: loadedmetadata event')}}
- {{domxref("HTMLMediaElement.loadeddata_event", 'HTMLMediaElement: loadeddata event')}}
- {{domxref("HTMLMediaElement.canplay_event", 'HTMLMediaElement: canplay event')}}
- {{domxref("HTMLMediaElement.canplaythrough_event", 'HTMLMediaElement: canplaythrough event')}}
- {{domxref("HTMLMediaElement.durationchange_event", 'HTMLMediaElement: durationchange event')}}
- {{domxref("HTMLMediaElement.timeupdate_event", 'HTMLMediaElement: timeupdate event')}}
- {{domxref("HTMLMediaElement.play_event", 'HTMLMediaElement: play event')}}
- {{domxref("HTMLMediaElement.pause_event", 'HTMLMediaElement: pause event')}}
- {{domxref("HTMLMediaElement.ratechange_event", 'HTMLMediaElement: ratechange event')}}
- {{domxref("HTMLMediaElement.volumechange_event", 'HTMLMediaElement: volumechange event')}}
- {{domxref("HTMLMediaElement.suspend_event", 'HTMLMediaElement: suspend event')}}
- {{domxref("HTMLMediaElement.emptied_event", 'HTMLMediaElement: emptied event')}}
- {{domxref("HTMLMediaElement.stalled_event", 'HTMLMediaElement: stalled event')}}

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- [Media Capture and Streams](/en-US/docs/Web/API/Media_Streams_API)

  - [Media Capture and Streams: ended event](/en-US/docs/Web/API/Media_Streams_API)[: ended event](/en-US/docs/Web/API/MediaStreamTrack/ended_event)

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)

  - [Web audio API: ended event](/en-US/docs/Web/API/AudioScheduledSourceNode/ended_event)
