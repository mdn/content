---
title: 'TextTrackList: addtrack event'
slug: Web/API/TextTrackList/addtrack_event
tags:
  - API
  - Reference
  - TextTrack
  - TextTrackList
  - addTrack
  - addTrack Event
  - events
browser-compat: api.TextTrackList.addTrack_event
---
{{APIRef}}

The `addtrack` event is fired when a track is added to a [`TextTrackList`](/en-US/docs/Web/API/TextTrackList).

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
          ><a href="/en-US/docs/Web/API/TextTrackList/onaddtrack"
            >onaddtrack</a
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

mediaElement.textTracks.addEventListener('addtrack', (event) => {
  console.log(`Text track: ${event.track.label} added`);
});
```

Using the `onaddtrack` event handler property:

```js
const mediaElement = document.querySelector('video, audio');

mediaElement.textTracks.onaddtrack = (event) => {
  console.log(`Text track: ${event.track.label} added`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event), [`change`](/en-US/docs/Web/API/VideoTrackList/change_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`addtrack`](/en-US/docs/Web/API/AudioTrackList/addtrack_event)
- This event on [`MediaStream`](/en-US/docs/Web/API/MediaStream) targets: [`addtrack`](/en-US/docs/Web/API/MediaStream/addtrack_event)
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
