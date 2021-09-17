---
title: TrackDefault
slug: Web/API/TrackDefault
tags:
  - API
  - Audio
  - Experimental
  - Interface
  - MSE
  - MediaSourceExtensions
  - Reference
  - TrackDefault
  - Video
browser-compat: api.TrackDefault
---
{{APIRef("Media Source Extensions")}}{{deprecated_header}}

The **`TrackDefault`** interface provides a {{domxref("SourceBuffer")}} with kind, label, and language information for tracks that do not contain this information in the [initialization segments](https://w3c.github.io/media-source/#init-segment) of a media chunk.

A `TrackDefault` object is provided to a `SourceBuffer` object by setting its {{domxref("SourceBuffer.trackDefaults")}} property.

## Constructor

- {{domxref("TrackDefault.TrackDefault", "TrackDefault()")}}
  - : Constructs and returns a new `TrackDefault` object.

## Properties

- {{domxref("TrackDefault.type")}} {{readonlyInline}}
  - : Returns the type of track that this {{domxref("SourceBuffer")}}'s media segment data relates to (i.e. audio, video, or text track.)
- {{domxref("TrackDefault.byteStreamTrackID")}} {{readonlyInline}}
  - : Returns the ID of the specific track that the {{domxref("SourceBuffer")}} should apply to.
- {{domxref("TrackDefault.language")}} {{readonlyInline}}
  - : Returns the default language to use when an [initialization segment](https://w3c.github.io/media-source/#init-segment) does not contain language information for a new track.
- {{domxref("TrackDefault.label")}} {{readonlyInline}}
  - : Returns the default label to use when an [initialization segment](https://w3c.github.io/media-source/#init-segment) does not contain label information for a new track.
- {{domxref("TrackDefault.kinds")}} {{readonlyInline}}
  - : Returns the default kinds used when an [initialization segment](https://w3c.github.io/media-source/#init-segment) does not contain kind information for a new track.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
- {{domxref("TrackDefaultList")}}
