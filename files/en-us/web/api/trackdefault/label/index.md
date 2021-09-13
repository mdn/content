---
title: TrackDefault.label
slug: Web/API/TrackDefault/label
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
  - label
browser-compat: api.TrackDefault.label
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`label`** read-only property of the {{domxref("TrackDefault")}} interface returns the default label for an associated {{domxref("SourceBuffer")}} to use when an [initialization segment](https://w3c.github.io/media-source/#init-segment) does not contain label information for a new track.

## Syntax

```js
var mylabel = TrackDefault.label;
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
