---
title: TrackDefault.byteStreamTrackID
slug: Web/API/TrackDefault/byteStreamTrackID
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - TrackDefault
  - Video
  - byteStreamTrackID
browser-compat: api.TrackDefault.byteStreamTrackID
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`byteStreamTrackID`** read-only property of the {{domxref("TrackDefault")}} interface returns the ID of the specific track that the {{domxref("SourceBuffer")}} should apply to.

If not specified in the constructor, this value will be an empty string and the `SourceBuffer` can contain any tracks of the specified {{domxref("TrackDefault.type")}}.

## Syntax

```js
var myID = TrackDefault.byteStreamTrackID;
```

### Value

A {{domxref("DOMString")}}.

## Example

TBD

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
