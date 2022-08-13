---
title: 'VideoTrackList: change event'
slug: Web/API/VideoTrackList/change_event
page-type: web-api-event
tags:
  - Event
browser-compat: api.VideoTrackList.change_event
---
{{APIRef}}

The `change` event is fired when a video track is made active or inactive, for example by changing the track's [`selected`](/en-US/docs/Web/API/VideoTrack/selected) property.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('change', (event) => { })

onchange = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

Using `addEventListener()`:

```js
const videoElement = document.querySelector('video');
videoElement.videoTracks.addEventListener('change', (event) => {
    console.log(`'${event.type}' event fired`);
});

// changing the value of `selected` will trigger the `change` event
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});
```

Using the `onchange` event handler property:

```js
const videoElement = document.querySelector('video');
videoElement.videoTracks.onchange = (event) => {
    console.log(`'${event.type}' event fired`);
};

// changing the value of `selected` will trigger the `change` event
const toggleTrackButton = document.querySelector('.toggle-track');
toggleTrackButton.addEventListener('click', () => {
  const track = videoElement.videoTracks[0];
  track.selected = !track.selected;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event), [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`change`](/en-US/docs/Web/API/AudioTrackList/change_event)
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
