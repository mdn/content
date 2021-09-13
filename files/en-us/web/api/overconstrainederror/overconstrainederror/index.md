---
title: OverconstrainedError()
slug: Web/API/OverconstrainedError/OverconstrainedError
tags:
  - API
  - Audio
  - Constructor
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - OverconstrainedError
  - Reference
  - Video
browser-compat: api.OverconstrainedError.OverconstrainedError
---
{{securecontext_header}}{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

The **`OverconstrainedError`** constructor
creates a new {{domxref("OverconstrainedError")}} object which indicates that the set of
desired capabilities for the current {{domxref("MediaStreamTrack")}} cannot currently be
met. When this event is thrown on a `MediaStreamTrack`, it is muted until
either the current constraints can be established or until satisfiable constraints are
applied.

## Syntax

```js
var OverconstrainedError = new OverconstrainedError()
```

### Parameters

- constraint
  - : The constraint that was not satified.
- message
  - : Text for the error's `message` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
