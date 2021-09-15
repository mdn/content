---
title: TrackDefault()
slug: Web/API/TrackDefault/TrackDefault
tags:
  - API
  - Audio
  - Constructor
  - Experimental
  - MSE
  - Media Source Extensions
  - Reference
  - TrackDefault
  - Video
browser-compat: api.TrackDefault.TrackDefault
---
{{draft}}{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`TrackDefault()`** constructor of the {{domxref("TrackDefault")}} interface constructs and returns a new `TrackDefault` object.

## Syntax

```js
var trackDefault = new TrackDefault(type, language, label, kinds, byteStreamTrackID);
```

### Parameters

- type
  - : A {{domxref("DOMString")}} specifying a media segment data type for the {{domxref("SourceBuffer")}} to contain. Can be `audio`, `video`, or `text`.
- language
  - : A {{domxref("DOMString")}} specifying a default language for the {{domxref("SourceBuffer")}} to use when an [initialization segment](https://w3c.github.io/media-source/#init-segment) does not contain language information for a new track.
- label
  - : A {{domxref("DOMString")}} specifying a default label for the {{domxref("SourceBuffer")}} to use when an [initialization segment](https://w3c.github.io/media-source/#init-segment) does not contain label information for a new track.
- kinds
  - : An array (sequence) of {{domxref("DOMString")}}s specifying default kinds for the {{domxref("SourceBuffer")}} to use when an [initialization segment](https://w3c.github.io/media-source/#init-segment) does not contain kind information for a new track.
- byteStreamTrackID {{optional_inline}}
  - : A {{domxref("DOMString")}} specifying the ID of the specific track that the {{domxref("SourceBuffer")}} should apply to. If not specified, this value will be an empty string and the `SourceBuffer` can contain any tracks of the specified `type`.

### Errors

when this constructor is invoked, the following errors can occur:

| Error                | Explanation                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------ |
| `InvalidAccessError` | The supplied `language` is not a valid language code, e.g. `en-US`.                        |
| `TypeError`          | there are values specified in the `kinds` array that do not apply to the specified `type`. |

## Example

TBD

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
