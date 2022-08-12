---
title: MediaStream.addTrack()
slug: Web/API/MediaStream/addTrack
page-type: web-api-instance-method
tags:
  - API
  - Media Streams API
  - Method
  - NeedsExample
  - Reference
  - addTrack
browser-compat: api.MediaStream.addTrack
---
{{APIRef("Media Capture and Streams")}}

The **`MediaStream.addTrack()`** method adds a new track to the
stream. The track is specified as a parameter of type {{domxref("MediaStreamTrack")}}.

> **Note:** If the specified track is already in the stream's track set, this method has no
> effect.

## Syntax

```js
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
