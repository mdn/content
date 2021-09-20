---
title: 'TextTrackList: removeTrack event'
slug: Web/API/TextTrackList/removeTrack_event
tags:
  - API
  - Media Streams API
  - MediaStreamTrackEvent
  - Reference
  - Removing Tracks
  - events
  - removeTrack
browser-compat: api.TextTrackList.removeTrack_event
---
{{APIRef}}

The `removetrack` event is fired when a track is removed from a [`TextTrackList`](/en-US/docs/Web/API/TextTrackList).

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
      <td>{{domxref("TrackEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/VideoTrackList/onremovetrack"
            >onremovetrack</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

Using `addEventListener()`:

```js
const mediaElement = document.querySelector('video, audio');

mediaElement.textTracks.addEventListener('removetrack', (event) => {
  console.log(`Text track: ${event.track.label} removed`);
});
```

Using the `onremovetrack` event handler property:

```js
const mediaElement = document.querySelector('video, audio');

mediaElement.textTracks.onremovetrack = (event) => {
  console.log(`Text track: ${event.track.label} removed`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event), [`change`](/en-US/docs/Web/API/VideoTrackList/change_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`removetrack`](/en-US/docs/Web/API/AudioTrackList/removetrack_event)
- This event on [`MediaStream`](/en-US/docs/Web/API/MediaStream) targets: [`removetrack`](/en-US/docs/Web/API/MediaStream/removetrack_event)
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
