---
title: 'HTMLMediaElement: pause event'
slug: Web/API/HTMLMediaElement/pause_event
tags:
  - Audio
  - Event
  - HTML
  - HTMLMediaElement
  - Media
  - Media Events
  - Pausing
  - Pausing Media
  - Pausing Speech
  - Speech Events
  - Video
  - Web Speech API
  - Web Speech Events
  - pause
  - speech
browser-compat: api.HTMLMediaElement.pause_event
---
{{APIRef("HTMLMediaElement")}}

The `pause` event is sent when a request to pause an activity is handled and the activity has entered its paused state, most commonly after the media has been paused through a call to the element's {{domxref("HTMLMediaElement.pause", "pause()")}} method.

The event is sent once the `pause()` method returns and after the media element's {{domxref("HTMLMediaElement.paused", "paused")}} property has been changed to `true`.

## General info

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
      <td>{{domxref("GlobalEventHandlers.onpause")}}</td>
    </tr>
  </tbody>
</table>

## Examples

These examples add an event listener for the HTMLMediaElement's `pause` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector('video');

video.addEventListener('pause', (event) => {
  console.log('The Boolean paused property is now true. Either the ' +
  'pause() method was called or the autoplay attribute was toggled.');
});
```

Using the `onpause` event handler property:

```js
const video = document.querySelector('video');

video.onpause = (event) => {
  console.log('The Boolean paused property is now true. Either the ' +
  'pause() method was called or the autoplay attribute was toggled.');
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
- {{domxref("SpeechSynthesisUtterance")}}
