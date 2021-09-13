---
title: 'VideoTrackList: change event'
slug: Web/API/VideoTrackList/change_event
tags:
  - Event
browser-compat: api.VideoTrackList.change_event
---
{{APIRef}}

The `change` event is fired when a video track is made active or inactive, for example by changing the track's [`selected`](/en-US/docs/Web/API/VideoTrack/selected) property.

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
      <td>
        <code
          ><a href="/en-US/docs/Web/API/VideoTrackList/onchange"
            >onchange</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

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
