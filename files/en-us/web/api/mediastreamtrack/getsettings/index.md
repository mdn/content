---
title: MediaStreamTrack.getSettings()
slug: Web/API/MediaStreamTrack/getSettings
page-type: web-api-instance-method
tags:
  - API
  - Constraints
  - Media Capture and Streams
  - MediaStreamTrack
  - Method
  - Reference
browser-compat: api.MediaStreamTrack.getSettings
---
{{APIRef("Media Capture and Streams")}}

The **`getSettings()`** method of the
{{domxref("MediaStreamTrack")}} interface returns a {{domxref("MediaTrackSettings")}}
object containing the current values of each of the constrainable properties for the
current `MediaStreamTrack`.

See [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints) for details on how to work with constrainable properties.

## Syntax

```js
getSettings()
```

### Parameters

None.

### Return value

A {{domxref("MediaTrackSettings")}} object describing the current configuration of the
track's constrainable properties.

> **Note:** The returned object identifies the current values of every
> constrainable property, including those which are platform defaults rather than having
> been expressly set by the site's code. To instead fetch the most-recently established
> constraints for the track's properties, as specified by the site's code, use
> {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
