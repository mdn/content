---
title: GlobalEventHandlers.oncuechange
slug: Web/API/GlobalEventHandlers/oncuechange
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
  - TextTrack
  - WebVTT
  - text track
  - track
  - vtt
browser-compat: api.GlobalEventHandlers.oncuechange
---
{{ ApiRef("HTML DOM") }}

The **`oncuechange`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("cuechange")}} events.

The `cuechange` event fires when a {{domxref("TextTrack")}} has changed the
currently displaying cues. The event is sent to both the `TextTrack` and to
the {{HTMLElement("track")}} element the track is being presented by, if any; in the
latter case, its handler is on an {{domxref("HTMLTrackElement")}} object.

## Syntax

```js
element.oncuechange = handlerFunction;
var handlerFunction = element.oncuechange;
```

`handlerFunction` is either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Video Tracks Format (VTT)](/en-US/docs/Web/API/WebVTT_API)
- {{event("cuechange")}}
- {{HTMLElement("track")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)
