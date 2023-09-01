---
title: "MediaStreamTrack: getConstraints() method"
short-title: getConstraints()
slug: Web/API/MediaStreamTrack/getConstraints
page-type: web-api-instance-method
browser-compat: api.MediaStreamTrack.getConstraints
---

{{APIRef("Media Capture and Streams")}}

The **`getConstraints()`** method of
the {{domxref("MediaStreamTrack")}} interface returns a
{{domxref('MediaTrackConstraints')}} object containing the set of constraints most
recently established for the track using a prior call to
{{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}. These
constraints indicate values and ranges of values that the website or application has
specified are required or acceptable for the included constrainable properties.

Constraints can be used to ensure that the media meets certain guidelines you prefer.
For example, you may prefer high definition video but require that the frame rate be a
little low to help keep the data rate low enough not overtax the network. Constraints
can also specify ideal and/or acceptable sizes or ranges of sizes. See [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints) for details on how to work with constrainable properties.

## Syntax

```js-nolint
getConstraints()
```

### Parameters

None.

### Return value

A {{domxref('MediaTrackConstraints')}} object which indicates the constrainable
properties the website or app most recently set using
{{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}. The properties
in the returned object are listed in the same order as when they were set, and only
properties specifically set by the site or app are included.

> **Note:** The returned set of constraints doesn't necessarily describe
> the actual state of the media. Even if any of the constraints couldn't be met, they
> are still included in the returned object as originally set by the site's code. To get
> the currently active settings for all constrainable properties, you should instead
> call {{domxref("MediaStreamTrack.getSettings", "getSettings()")}}.

## Examples

This example obtains the current constraints for a track, sets the
{{domxref("MediaTrackConstraints.facingMode", "facingMode")}}, and applies the updated
constraints.

```js
function switchCameras(track, camera) {
  const constraints = track.getConstraints();
  constraints.facingMode = camera;
  track.applyConstraints(constraints);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
