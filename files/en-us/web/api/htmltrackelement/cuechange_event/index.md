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

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("cuechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
oncuechange = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

The underlying {{domxref("TextTrack")}}, indicated by the {{domxref("HTMLTrackElement.track", "track")}} property, receives a `cuechange` event every time the currently-presented cue is changed. This happens even if the track isn't associated with a media element.

If the track _is_ associated with a media element, using the {{HTMLElement("track")}} element as a child of the {{HTMLElement("audio")}} or {{HTMLElement("video")}} element, the `cuechange` event is also sent to the {{domxref("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

Alternatively, you can use the `oncuechange` event handler (but note that this replaces other event listeners added using `oncuechange`, if any):

```js
let textTrackElem = document.getElementById("text-track");

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
