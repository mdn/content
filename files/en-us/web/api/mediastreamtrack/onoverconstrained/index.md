---
title: MediaStreamTrack.onoverconstrained
slug: Web/API/MediaStreamTrack/onoverconstrained
tags:
  - API
  - Deprecated
  - Event Handler
  - Property
  - Reference
  - WebRTC
browser-compat: api.MediaStreamTrack.onoverconstrained
---
{{ APIRef("Media Capture and Streams") }}{{deprecated_header}}

The **`MediaStreamTrack.onoverconstrained`** event handler is a property called when the {{event("overconstrained")}} event is received. Such an event is sent when the track is again able to send data.

## Syntax

```js
track.onoverconstrained = function;
```

### Values

- `function` is the name of a user-defined function, without the `()` suffix or any parameters, or an anonymous function declaration, such as `function(event) {...}`. An event handler always has one single parameter, containing the event, here of type {{domxref("MediaStreamErrorEvent")}}.

## Example

```js
dc.onoverconstrained = function() { alert("overconstrained event detected!"); };
```

## Browser compatibility

{{Compat}}

## See also

- The {{event("overconstrained")}} event and its type, {{domxref("MediaStreamErrorEvent")}}.
