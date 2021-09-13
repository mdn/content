---
title: MediaStreamEvent()
slug: Web/API/MediaStreamEvent/MediaStreamEvent
tags:
  - Constructor
  - Experimental
  - MediaStreamEvent
  - Reference
  - WebRTC
browser-compat: api.MediaStreamEvent.MediaStreamEvent
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The **`MediaStreamEvent()`** constructor creates a new
{{domxref("MediaStreamEvent")}}.

## Syntax

```js
 var event = new MediaStreamEvent(type, mediaStreamEventInit);
```

### Values

- _type_
  - : Is a {{domxref("DOMString")}} containing the name of the event, like
    `addstream` or `removestream`.
- _mediaStreamEventInit_

  - : Is a `MediaStreamEventInit` dictionary, having the following fields:

    - `"stream"` of type {{domxref("MediaStream")}} representing the stream
      being concerned by the event.
    - `"bubbles"`, optional and defaulting to `false`, inherited
      from `EventInit`, and indicating if the event must bubble or not.
    - `"cancelable"`, optional and defaulting to `false`,
      inherited from `EventInit`, and indicating if the event can be canceled
      or not.

## Example

```js
// s is a MediaStream
var event = new MediaStreamEvent("addstream", {"stream": s});
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
