---
title: TrackDefault.language
slug: Web/API/TrackDefault/language
tags:
  - API
  - Audio
  - Experimental
  - Language
  - MSE
  - Media Source Extensions
  - Property
  - Reference
  - TrackDefault
  - Video
browser-compat: api.TrackDefault.language
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`language`** read-only property of the {{domxref("TrackDefault")}} interface returns a default language for an associated {{domxref("SourceBuffer")}} to use when an [initialization segment](https://w3c.github.io/media-source/#init-segment) does not contain language information for a new track.

This should be a valid language code, e.g. `en-US`.

## Syntax

```js
var mylanguage = TrackDefault.language;
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
