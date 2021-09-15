---
title: TrackDefault.type
slug: Web/API/TrackDefault/type
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - TrackDefault
  - Type
  - Video
browser-compat: api.TrackDefault.type
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`type`** read-only property of the {{domxref("TrackDefault")}} interface returns the type of track that this {{domxref("SourceBuffer")}}'s media segment data relates to (i.e. audio, video, or text track.)

## Syntax

```js
var myType = TrackDefault.type;
```

### Value

A {{domxref("DOMString")}} — one of `audio`, `video` or `text`.

## Example

TBD

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
