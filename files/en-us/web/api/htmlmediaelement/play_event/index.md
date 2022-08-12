---
title: 'HTMLMediaElement: play event'
slug: Web/API/HTMLMediaElement/play_event
page-type: web-api-event
tags:
  - Audio
  - Event
  - HTMLMediaElement
  - Reference
  - Video
browser-compat: api.HTMLMediaElement.play_event
---
{{APIRef("HTMLMediaElement")}}

The `play` event is fired when the `paused` property is changed from `true` to `false`, as a result of the `play` method, or the `autoplay` attribute.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('play', (event) => {});

onplay = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

These examples add an event listener for the HTMLMediaElement's `play` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector('video');

video.addEventListener('play', (event) => {
  console.log('The Boolean paused property is now false. Either the ' +
  'play() method was called or the autoplay attribute was toggled.');
});
```

Using the `onplay` event handler property:

```js
const video = document.querySelector('video');

video.onplay = (event) => {
  console.log('The Boolean paused property is now false. Either the ' +
  'play() method was called or the autoplay attribute was toggled.');
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
