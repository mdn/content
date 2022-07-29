---
title: 'TextTrackCue: exit event'
slug: Web/API/TextTrackCue/exit_event
page-type: web-api-event
tags:
  - API
  - Event
  - Reference
  - onexit
  - TextTrackCue
browser-compat: api.TextTrackCue.exit_event
---
{{APIRef("WebVTT")}}

The **`exit`** event fires when a cue stops being active.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('exit', (event) => { })

onexit = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Example

In the following example, `cue1` prints to the console when it stops being displayed as the active cue.

```js
cue1.addEventListener('enter', (event) => {
  console.log('Cue 1 has left the building.');
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
