---
title: SourceBuffer.removeAsync()
slug: Web/API/SourceBuffer/removeAsync
tags:
  - API
  - Audio
  - MSE
  - Media
  - Media Source Extensions
  - Method
  - Experimental
  - Non-standard
  - Reference
  - SourceBuffer
  - Video
  - removeAsync
browser-compat: api.SourceBuffer.removeAsync
---
{{APIRef("Media Source Extensions")}}{{non-standard_header}}{{SeeCompatTable}}

The **`removeAsync()`** method of the
{{domxref("SourceBuffer")}} interface starts the process of asynchronously removing
from the `SourceBuffer` media segments found within a specific time
range. A {{jsxref("Promise")}} is returned, which is fulfilled when the buffers
in the specified time range have been removed.

This method can only be called when {{domxref("SourceBuffer.updating", "updating")}} is
`false`. If that's not the case, call {{domxref("SourceBuffer.abort",
  "abort()")}} instead.

## Syntax

```js
removePromise = sourceBuffer.removeAsync(start, end);
```

### Parameters

- `start`
  - : A double representing the start of the time range, in seconds.
- `end`
  - : A double representing the end of the time range, in seconds.

### Return value

A {{jsxref("Promise")}} whose fulfillment handler is executed once the buffers in the
specified time range have been removed from the `SourceBuffer`.

## Example

This example establishes an asynchronous function, `emptySourceBuffer()`,
which clears the contents of the specified `SourceBuffer`.

```js
async function emptySourceBuffer(msBuffer) {
  await msBuffer.removeAsync(0, Infinity).catch(function(e) {
    handleException(e);
  }
}
```

## Specifications

This feature is not part of any specification. It is not on track to become a standard.

## Browser compatibility

{{Compat}}

## See also

- [Media Source Extensions
  API](/en-US/docs/Web/API/Media_Source_Extensions_API)
- {{domxref("SourceBuffer.remove()")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
