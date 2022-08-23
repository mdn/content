---
title: MediaStreamEvent()
slug: Web/API/MediaStreamEvent/MediaStreamEvent
page-type: web-api-constructor
tags:
  - Constructor
  - Deprecated
  - Non-standard
  - MediaStreamEvent
  - Reference
  - WebRTC
browser-compat: api.MediaStreamEvent.MediaStreamEvent
---
{{APIRef("WebRTC")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`MediaStreamEvent()`** constructor creates a new {{domxref("MediaStreamEvent")}} object.

## Syntax

```js
 new MediaStreamEvent(type, options)
```

### Values

- `type`
  - : A string with the name of the event, like `addstream` or `removestream`.
- `options`
  - : An object that, in addition of the properties defined in {{domxref("Event/Event", "Event()")}}, can have the following properties:
    - `stream`
      - : A {{domxref("MediaStream")}} representing the stream being concerned by the event.

### Return value

A new {{domxref("MediaStreamEvent")}} object.

## Example

```js
// s is a MediaStream
const event = new MediaStreamEvent("addstream", {"stream": s});
```

## Specifications

_This feature is no more part of any specification._

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
