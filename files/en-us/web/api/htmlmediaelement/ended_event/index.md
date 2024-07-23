---
title: "HTMLMediaElement: ended event"
short-title: ended
slug: Web/API/HTMLMediaElement/ended_event
page-type: web-api-event
browser-compat: api.HTMLMediaElement.ended_event
---

{{APIRef("HTMLMediaElement")}}

The `ended` event is fired when playback or streaming has stopped because the end of the media was reached or because no further data is available.

This event occurs based upon {{domxref("HTMLMediaElement")}} ({{HTMLElement("audio")}} and {{HTMLElement("video")}}) fire `ended` when playback reaches the end of the media.

This event is not cancelable and does not bubble.

> **Note:** The `ended` event doesn't fire if the [`loop`](/en-US/docs/Web/API/HTMLMediaElement/loop) property is `true` and [`playbackRate`](/en-US/docs/Web/API/HTMLMediaElement/playbackRate) is non-negative.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("ended", (event) => {});

onended = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

These examples add an event listener for the HTMLMediaElement's `ended` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("ended", (event) => {
  console.log(
    "Video stopped either because it has finished playing or no further data is available.",
  );
});
```

Using the `onended` event handler property:

```js
const video = document.querySelector("video");

video.onended = (event) => {
  console.log(
    "Video stopped either because it has finished playing or no further data is available.",
  );
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
- [Media Capture and Streams](/en-US/docs/Web/API/Media_Capture_and_Streams_API)

  - [Media Capture and Streams](/en-US/docs/Web/API/Media_Capture_and_Streams_API)[: ended event](/en-US/docs/Web/API/MediaStreamTrack/ended_event)

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)

  - [Web audio API: ended event](/en-US/docs/Web/API/AudioScheduledSourceNode/ended_event)
