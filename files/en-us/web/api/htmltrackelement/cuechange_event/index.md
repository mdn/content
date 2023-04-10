---
title: "HTMLTrackElement: cuechange event"
short-title: cuechange
slug: Web/API/HTMLTrackElement/cuechange_event
page-type: web-api-event
browser-compat: api.HTMLTrackElement.cuechange_event
---

{{APIRef("WebVTT")}}

The **`cuechange`** event fires when a {{domxref("TextTrack")}} has changed the currently displaying cues. The event is fired on both the `TextTrack` and the {{domxref("HTMLTrackElement")}} in which it's being presented, if any.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("cuechange", (event) => {});

oncuechange = (event) => {};
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

The underlying {{domxref("TextTrack")}}, indicated by the {{domxref("HTMLTrackElement.track", "track")}} property, receives a `cuechange` event every time the currently-presented cue is changed. This happens even if the track isn't associated with a media element.

If the track _is_ associated with a media element, using the {{HTMLElement("track")}} element as a child of the {{HTMLElement("audio")}} or {{HTMLElement("video")}} element, the `cuechange` event is also sent to the {{domxref("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

Alternatively, you can use the `oncuechange` event handler:

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.oncuechange = (event) => {
  let cues = event.target.track.activeCues;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{glossary("WebVTT")}}
- The same event on {{domxref("TextTrack")}}: {{domxref("TextTrack.cuechange_event", "cuechange")}}
