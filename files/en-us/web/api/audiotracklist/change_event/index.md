---
title: 'AudioTrackList: change event'
slug: Web/API/AudioTrackList/change_event
page-type: web-api-event
tags:
  - API
  - Audio Tracks
  - Audio
  - AudioTrackList
  - Change
  - Event
  - Reference
  - HTML API
  - Media
browser-compat: api.AudioTrackList.change_event
---

{{APIRef}}

The `change` event is fired when an audio track is enabled or disabled, for example by changing the track's [`enabled`](/en-US/docs/Web/API/AudioTrack/enabled) property.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('change', (event) => { })

onchange = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

Using `addEventListener()`:

```js
const videoElement = document.querySelector('video');
videoElement.audioTracks.addEventListener('change', (event) => {
    console.log(`'${event.type}' event fired`);
});

// changing the value of `enabled` will trigger the `change` event
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.audioTracks[0];
  track.enabled = !track.enabled;
});
```

Using the `onchange` event handler property:

```js
const videoElement = document.querySelector('video');
videoElement.audioTracks.onchange = (event) => {
    console.log(`'${event.type}' event fired`);
};

// changing the value of `enabled` will trigger the `change` event
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.audioTracks[0];
  track.enabled = !track.enabled;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`addtrack`](/en-US/docs/Web/API/AudioTrackList/addtrack_event), [`removetrack`](/en-US/docs/Web/API/AudioTrackList/removetrack_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`change`](/en-US/docs/Web/API/VideoTrackList/change_event)
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
