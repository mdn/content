---
title: 'MediaStreamTrack: ended event'
slug: Web/API/MediaStreamTrack/ended_event
tags:
  - Audio
  - Event
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Media Streams API
  - Reference
  - Video
  - Web Audio API
  - ended
browser-compat: api.MediaStreamTrack.ended_event
---
{{DefaultAPISidebar("Media Capture and Streams")}}

The **`ended`** event of the {{domxref("MediaStreamTrack")}} interface is fired when playback or streaming has stopped because the end of the media was reached or because no further data is available.

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
      <td>{{domxref("MediaStreamTrack.onended")}}</td>
    </tr>
  </tbody>
</table>

## Usage notes

`ended` events fire when the media stream track's source permanently stops sending data on the stream. There are various ways this can happen, including:

- There is no more data left to send.
- The user revoked the permissions needed for the data to be sent.
- The hardware generating the source data has been removed or ejected.
- A remote peer has permanently stopped sending data; pausing media _does not_ generate an `ended` event.

## Examples

This example sets up an event handler for the `ended` event, which changes an on-screen icon to indicate that the track is no longer active.

```js
track.addEventListener('ended', () => {
  let statusElem = document.getElementById("status-icon");
  statusElem.src = "/images/stopped-icon.png";
})
```

You can also set up the event handler using the {{domxref("MediaStreamTrack.onended")}} property:

```js
track.onended = function() {
  let statusElem = document.getElementById("status-icon");

  statusElem.src = "/images/stopped-icon.png";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement.playing_event", 'HTMLMediaElement: playing event')}}
- {{domxref("HTMLMediaElement.waiting_event", 'HTMLMediaElement: waiting event')}}
- {{domxref("HTMLMediaElement.seeking_event", 'HTMLMediaElement: seeking event')}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- {{domxref("HTMLMediaElement.ended_event", 'HTMLMediaElement: ended event')}}
- {{domxref("AudioScheduledSourceNode.ended_event", 'AudioScheduledSourceNode: ended event')}}
