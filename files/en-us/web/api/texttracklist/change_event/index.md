---
title: "TextTrackList: change event"
short-title: change
slug: Web/API/TextTrackList/change_event
page-type: web-api-event
browser-compat: api.TextTrackList.change_event
---

{{APIRef}}

The **`change`** event is fired when a text track is made active or inactive, or a {{domxref('TextTrackList')}} is otherwise changed.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

Using `addEventListener()`:

```js
const mediaElement = document.querySelectorAll("video, audio")[0];
mediaElement.textTracks.addEventListener("change", (event) => {
  console.log(`'${event.type}' event fired`);
});
```

Using the `onchange` event handler property:

```js
const mediaElement = document.querySelector("video, audio");
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
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
