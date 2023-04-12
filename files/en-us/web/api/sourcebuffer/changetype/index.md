---
title: "SourceBuffer: changeType() method"
short-title: changeType()
slug: Web/API/SourceBuffer/changeType
page-type: web-api-instance-method
browser-compat: api.SourceBuffer.changeType
---

{{APIRef("Media Source Extensions")}}

The **`changeType()`** method of the
{{domxref("SourceBuffer")}} interface sets the MIME type that future calls to
{{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} should expect the new media
data to conform to. This makes it possible to change codecs or container type
mid-stream.

One scenario in which this is helpful is to support adapting the media source to
changing bandwidth availability, by transitioning from one codec to another as resource
constraints change.

## Syntax

```js-nolint
changeType(type)
```

### Parameters

- `type`
  - : A string specifying the MIME type that future buffers will conform
    to.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the specified string is empty, rather than indicating a valid MIME type.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("SourceBuffer")}} is not a member of the parent media source's
    {{domxref("MediaSource.sourceBuffers", "sourceBuffers")}} list, or the buffer's
    {{domxref("SourceBuffer.updating", "updating")}} property indicates that a previously
    queued {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}} or
    {{domxref("SourceBuffer.remove", "remove()")}} is still being processed.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified MIME type is not supported, or is not supported with the types of
    {{domxref("SourceBuffer")}} objects present in the
    {{domxref("MediaSource.sourceBuffers")}} list.

## Usage notes

If the {{domxref("MediaSource.readyState", "readyState")}} property of the parent {{domxref("MediaSource")}} is set to `"ended"`, calling `changeType()`
will set the `readyState` property to`"open"` and
fire a simple event named {{domxref("MediaSource.sourceopen_event", "sourceopen")}} at the parent media source.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
