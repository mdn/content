---
title: 'MediaStreamTrack: overconstrained event'
slug: Web/API/MediaStreamTrack/overconstrained_event
page-type: web-api-event
tags:
  - API
  - Deprecated
  - Event Handler
  - Event
  - Reference
  - WebRTC
browser-compat: api.MediaStreamTrack.overconstrained_event
---
{{ APIRef("Media Capture and Streams") }}{{deprecated_header}}

The **`overconstrained`** event fires when the track has too many conflicting constraints.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('overconstrained', (event) => { });

onoverconstrained = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Example

```js
dc.onoverconstrained = function() { alert("overconstrained event detected!"); };
```

## Browser compatibility

{{Compat}}
