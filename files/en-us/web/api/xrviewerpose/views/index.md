---
title: "XRViewerPose: views property"
short-title: views
slug: Web/API/XRViewerPose/views
page-type: web-api-instance-property
browser-compat: api.XRViewerPose.views
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only {{domxref("XRViewerPose")}} property **`views`**
returns an array which contains every {{domxref("XRView")}} which must be rendered in
order to fully represent the scene from the viewpoint defined by the viewer pose. For
monoscopic devices, this array contains a single view.

> [!WARNING]
> There is no guarantee that the number of views will
> remain constant over the lifetime of an {{domxref("XRSession")}}. For each frame, you
> should always use the current length of this array rather than caching the value.

Stereo views require two views to render properly, with the left eye's view having its
{{domxref("XRView.eye", "eye")}} set to the string `left` and the right eye's
view a value of `right`.

## Value

An array of {{domxref("XRView")}} objects, one for each view available as part of the
scene for the current viewer pose. This array's length may potentially vary over the
lifetime of the {{domxref("XRSession")}} (for example, if the viewer enables or disables
stereo mode on their XR output device).

## Examples

See [`XRViewerPose`](/en-US/docs/Web/API/XRViewerPose#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)
- [Movement, orientation, and motion](/en-US/docs/Web/API/WebXR_Device_API/Movement_and_motion)
