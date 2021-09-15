---
title: 'TextTrackList: change event'
slug: Web/API/TextTrackList/change_event
tags:
  - Event
  - TextTrack
  - TextTrackList
  - change event
browser-compat: api.TextTrackList.change_event
---
{{APIRef}}

The `change` event is fired when a text track is made active or inactive, or a {{domxref('textTrackList')}} is otherwise changed.

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
          ><a href="/en-US/docs/Web/API/TextTrackList/onchange"
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
const mediaElement = document.querySelectorAll('video, audio')[0];
mediaElement.textTracks.addEventListener('change', (event) => {
    console.log(`'${event.type}' event fired`);
});
```

Using the `onchange` event handler property:

```js
const mediaElement = document.querySelector('video, audio');
mediaElement.textTracks.onchange = (event) => {
    console.log(`'${event.type}' event fired`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event), [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event)
- This event on [`VideoTrackList`](/en-US/docs/Web/API/VideoTrackList) targets: [`change`](/en-US/docs/Web/API/VideoTrackList/change_event)
- This event on [`AudioTrackList`](/en-US/docs/Web/API/AudioTrackList) targets: [`change`](/en-US/docs/Web/API/AudioTrackList/change_event)
- [Media Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
