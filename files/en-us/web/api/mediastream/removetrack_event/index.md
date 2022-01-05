---
title: 'MediaStream: removetrack event'
slug: Web/API/MediaStream/removetrack_event
tags:
  - Event
browser-compat: api.MediaStream.removetrack_event
---
{{APIRef}}

The `removetrack` event is fired when a new [`MediaStreamTrack`](/en-US/docs/Web/API/MediaStreamTrack) object has been removed from a [`MediaStream`](/en-US/docs/Web/API/MediaStream).

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
      <td>{{domxref("MediaStreamTrackEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/MediaStream/onremovetrack"
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
let stream = new MediaStream();

stream.addEventListener('removetrack', (event) => {
  console.log(`${event.track.kind} track removed`);
});
```

Using the `onremovetrack` event handler property:

```js
let stream = new MediaStream();

stream.onremovetrack = (event) => {
  console.log(`${event.track.kind} track removed`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`addtrack`](/en-US/docs/Web/API/MediaStream/addtrack_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`removetrack`](/en-US/docs/Web/API/AudioTrackList/removetrack_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event)
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
