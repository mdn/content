---
title: "OverconstrainedError: OverconstrainedError() constructor"
short-title: OverconstrainedError()
slug: Web/API/OverconstrainedError/OverconstrainedError
page-type: web-api-constructor
browser-compat: api.OverconstrainedError.OverconstrainedError
---

{{securecontext_header}}{{APIRef("Media Capture and Streams")}}

The **`OverconstrainedError`** constructor
creates a new {{domxref("OverconstrainedError")}} object which indicates that the set of
desired capabilities for the current {{domxref("MediaStreamTrack")}} cannot currently be
met. When this event is thrown on a `MediaStreamTrack`, it is muted until
either the current constraints can be established or until satisfiable constraints are
applied.

## Syntax

```js-nolint
new OverconstrainedError()
```

### Parameters

- `constraint`
  - : The constraint that was not satisfied.
- `message`
  - : Text for the error's `message` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
