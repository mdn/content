---
title: "HTMLMediaElement: canplaythrough event"
short-title: canplaythrough
slug: Web/API/HTMLMediaElement/canplaythrough_event
page-type: web-api-event
browser-compat: api.HTMLMediaElement.canplaythrough_event
---

{{APIRef("HTMLMediaElement")}}

The `canplaythrough` event is fired when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("canplaythrough", (event) => {});

oncanplaythrough = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

These examples add an event listener for the HTMLMediaElement's `canplaythrough` event, then post a message when that event handler has reacted to the event firing.

Using `addEventListener()`:

```js
const video = document.querySelector("video");

video.addEventListener("canplaythrough", (event) => {
  console.log(
    "I think I can play through the entire video without having to stop to buffer.",
  );
});
```

Using the `oncanplaythrough` event handler property:

```js
const video = document.querySelector("video");

video.oncanplaythrough = (event) => {
  console.log(
    "I think I can play through the entire video without having to stop to buffer.",
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
