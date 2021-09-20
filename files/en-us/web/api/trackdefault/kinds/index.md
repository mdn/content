---
title: TrackDefault.kinds
slug: Web/API/TrackDefault/kinds
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
  - kinds
browser-compat: api.TrackDefault.kinds
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`kinds`** read-only property of the {{domxref("TrackDefault")}} interface returns default kinds for an associated {{domxref("SourceBuffer")}} to use when an [initialization segment](https://w3c.github.io/media-source/#init-segment) does not contain label information for a new track.

## Syntax

```js
var mykinds = TrackDefault.kinds;
```

### Value

An array of {{domxref("DOMString")}}s.

## Example

TBD

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
