---
title: 'TextTrack: cuechange event'
slug: Web/API/TextTrack/cuechange_event
page-type: web-api-event
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

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('cuechange', (event) => { })

oncuechange = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can set up a listener for the `cuechange` event on a `TextTrack` using the {{domxref("EventTarget.addEventListener", "addEventListener()")}} method:

```js
track.addEventListener('cuechange', () => {
  const cues = track.activeCues;  // array of current cues
  // …
});
```

Or you can set the `oncuechange` event handler property:

```js
track.oncuechange = (event) => {
  let cues = track.activeCues; // array of current cues
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{glossary("WebVTT")}}
- The same event on {{domxref("HTMLTrackElement")}}: {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}}
