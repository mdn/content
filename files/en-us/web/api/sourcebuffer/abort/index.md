---
title: SourceBuffer.abort()
slug: Web/API/SourceBuffer/abort
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Method
  - Reference
  - SourceBuffer
  - Video
  - abort
browser-compat: api.SourceBuffer.abort
---
{{draft}}{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`abort()`** method of the {{domxref("SourceBuffer")}}
interface aborts the current segment and resets the segment parser.

## Syntax

```js
sourceBuffer.abort();
```

### Parameters

None.

### Return value

{{jsxref('undefined')}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("MediaSource.readyState")}} property of the
        parent media source is not equal to `open`, or this
        `SourceBuffer` has been removed from the
        {{domxref("MediaSource")}}.

## Example

The spec description of `abort()` is somewhat confusing — consider for
example step 1 of [reset
parser state](https://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state). The MSE API is fully asynchronous, but this step seems to suggest a
synchronous (blocking) operation, which doesn't make sense.

Saying that, current implementations can be useful in certain situations, when you want
to stop the current append (or whatever) operation occurring on a sourcebuffer, and then
immediately start performing operations on it again. For example, consider this code:

```js
sourceBuffer.addEventListener('updateend', function (_) {
  ...
});

sourceBuffer.appendBuffer(buf);
```

Let's say that after the call to `appendBuffer` BUT before the
`updateend` event fires (i.e. a buffer is being appended but the operation
has not yet completed) a user "scrubs" the video seeking to a new point in time.  In
this case you would want to manually call `abort()` on the source buffer to
stop the decoding of the current buffer, then fetch and append the newly requested
segment that relates to the current new position of the video.

You can see something similar in action in Nick Desaulnier's [bufferWhenNeeded
demo](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html) — in [line
48, an event listener is added to the playing video](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L48) so a function called
`seek()` is run when the `seeking` event fires. In [lines
92-101, the seek() function is defined](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L92-L101) — note that `abort()` is called
if {{domxref("MediaSource.readyState")}} is set to `open`, which means that
it is ready to receive new source buffers — at this point it is worth aborting the
current segment and just getting the one for the new seek position (see
[`checkBuffer()`](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L78-L90)
and
[`getCurrentSegment()`](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L103-L105).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
