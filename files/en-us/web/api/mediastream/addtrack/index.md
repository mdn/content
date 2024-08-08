---
title: "MediaStream: addTrack() method"
short-title: addTrack()
slug: Web/API/MediaStream/addTrack
page-type: web-api-instance-method
browser-compat: api.MediaStream.addTrack
---

{{APIRef("Media Capture and Streams")}}

The **`addTrack()`** method of the {{domxref("MediaStream")}} interface adds a new track to the
stream. The track is specified as a parameter of type {{domxref("MediaStreamTrack")}}.

> [!NOTE]
> If the specified track is already in the stream's track set, this method has no
> effect.

## Syntax

```js-nolint
addTrack(track)
```

### Parameters

- `track`
  - : A {{domxref("MediaStreamTrack")}} to add to the stream.

### Return value

None ({{jsxref("undefined")}}).

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaStream")}}, the interface it belongs to.
