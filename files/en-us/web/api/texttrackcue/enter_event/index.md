---
title: "TextTrackCue: enter event"
short-title: enter
slug: Web/API/TextTrackCue/enter_event
page-type: web-api-event
browser-compat: api.TextTrackCue.enter_event
---

{{APIRef("WebVTT")}}

The **`enter`** event fires when a cue becomes active. In the case of subtitles or a caption this is when it displays over the media.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("enter", (event) => {});

onenter = (event) => {};
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Example

In the following example, `cue1` prints to the console when it is the active cue.

```js
cue1.addEventListener("enter", (event) => {
  console.log("Cue 1 has displayed");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
