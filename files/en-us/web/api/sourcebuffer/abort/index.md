---
title: "SourceBuffer: abort() method"
short-title: abort()
slug: Web/API/SourceBuffer/abort
page-type: web-api-instance-method
browser-compat: api.SourceBuffer.abort
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`abort()`** method of the {{domxref("SourceBuffer")}}
interface aborts the current segment and resets the segment parser.

## Syntax

```js-nolint
abort()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("MediaSource.readyState")}} property of the
    parent media source is not equal to `open`, or this
    `SourceBuffer` has been removed from the
    {{domxref("MediaSource")}}.

## Examples

The spec description of `abort()` is somewhat confusing — consider for
example step 1 of [reset parser state](https://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state). The MSE API is fully asynchronous, but this step seems to suggest a
synchronous (blocking) operation, which doesn't make sense.

Saying that, current implementations can be useful in certain situations, when you want
to stop the current append (or whatever) operation occurring on a source buffer, and then
immediately start performing operations on it again. For example, consider this code:

```js
sourceBuffer.addEventListener("updateend", (ev) => {
  // …
});

sourceBuffer.appendBuffer(buf);
```

Let's say that after the call to `appendBuffer` BUT before the
`updateend` event fires (i.e., a buffer is being appended but the operation
has not yet completed) a user "scrubs" the video seeking to a new point in time. In
this case you would want to manually call `abort()` on the source buffer to
stop the decoding of the current buffer, then fetch and append the newly requested
segment that relates to the current new position of the video.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
