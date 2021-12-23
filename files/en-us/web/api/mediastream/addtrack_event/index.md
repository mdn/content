---
title: 'MediaStream: addtrack event'
slug: Web/API/MediaStream/addtrack_event
tags:
  - Event
browser-compat: api.MediaStream.addtrack_event
---
{{APIRef}}

The `addtrack` event is fired when a new [`MediaStreamTrack`](/en-US/docs/Web/API/MediaStreamTrack) object has been added to a [`MediaStream`](/en-US/docs/Web/API/MediaStream).

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
          ><a href="/en-US/docs/Web/API/MediaStream/onaddtrack"
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
let stream = new MediaStream();

stream.addEventListener('addtrack', (event) => {
  console.log(`New ${event.track.kind} track added`);
});
```

Using the `onaddtrack` event handler property:

```js
let stream = new MediaStream();

stream.onaddtrack = (event) => {
  console.log(`New ${event.track.kind} track added`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`removetrack`](/en-US/docs/Web/API/MediaStream/removetrack_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`addtrack`](/en-US/docs/Web/API/AudioTrackList/addtrack_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event)
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
