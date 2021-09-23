---
title: 'TextTrack: cuechange event'
slug: Web/API/TextTrack/cuechange_event
tags:
  - API
  - Event
  - Reference
  - TextTrack
  - WebVTT
  - cuechange
  - oncuechange
  - track
browser-compat: api.TextTrack.cuechange_event
---
{{APIRef("WebVTT")}}

The **`cuechange`** event fires when a {{domxref("TextTrack")}} has changed the currently displaying cues. The event is fired on both the `TextTrack` and the {{domxref("HTMLTrackElement")}} in which it's being presented, if any.

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
      <td>{{domxref("GlobalEventHandlers.oncuechange")}}</td>
    </tr>
  </tbody>
</table>

## Examples

### On the TextTrack

You can set up a listener for the `cuechange` event on a `TextTrack` using the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method:

```js
track.addEventListener('cuechange', function () {
  let cues = track.activeCues;  // array of current cues
});
```

Or you can just set the {{domxref("GlobalEventHandlers.oncuechange", "oncuechange")}} event handler property:

```js
track.oncuechange = function () {
  let cues = track.activeCues; // array of current cues
}
```

### On the track element

The underlying {{domxref("TextTrack")}}, indicated by the {{domxref("HTMLTrackElement.track", "track")}} property, receives a {{domxref("TextTrack.cuechange_event", "cuechange")}} event every time the currently-presented cue is changed. This happens even if the track isn't associated with a media element.

If the track _is_ associated with a media element, using the {{HTMLElement("track")}} element as a child of the {{HTMLElement("audio")}} or {{HTMLElement("video")}} element, the `cuechange` event is also sent to the {{domxref("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

In addition, you can use the `oncuechange` event handler:

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.oncuechange = (event) => {
  let cues = event.target.track.activeCues;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{glossary("WebVTT")}}
