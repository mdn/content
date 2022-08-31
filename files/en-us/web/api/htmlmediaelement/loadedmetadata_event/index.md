---
title: 'HTMLMediaElement: loadedmetadata event'
slug: Web/API/HTMLMediaElement/loadedmetadata_event
page-type: web-api-event
tags:
  - Audio
  - Event
  - HTMLMediaElement
  - Reference
  - Video
browser-compat: api.HTMLMediaElement.loadedmetadata_event
---
{{APIRef("HTMLMediaElement")}}

The `loadedmetadata` event is fired when the metadata has been loaded.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('loadedmetadata', (event) => {});

onloadedmetadata = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

These examples add an event listener for the HTMLMediaElement's `loadedmetadata` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector('video');

video.addEventListener('loadedmetadata', (event) => {
  console.log('The duration and dimensions of the media and tracks are now known.');
});
```

Using the `onloadedmetadata` event handler property:

```js
const video = document.querySelector('video');

video.onloadedmetadata = (event) => {
  console.log('The duration and dimensions of the media and tracks are now known.');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related Events

- The HTMLMediaElement {{domxref("HTMLMediaElement.playing_event", 'playing')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.waiting_event", 'waiting')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.seeking_event", 'seeking')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.seeked_event", 'seeked')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.canplay_event", 'canplay')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.play_event", 'play')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.pause_event", 'pause')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.suspend_event", 'suspend')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.emptied_event", 'emptied')}} event
- The HTMLMediaElement {{domxref("HTMLMediaElement.stalled_event", 'stalled')}} event

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- This event is part of gecko's [Audio API extension](/en-US/docs/Introducing_the_Audio_API_Extension)
