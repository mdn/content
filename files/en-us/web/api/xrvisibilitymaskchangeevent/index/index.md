---
title: "XRVisibilityMaskChangeEvent: index property"
short-title: index
slug: Web/API/XRVisibilityMaskChangeEvent/index
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.XRVisibilityMaskChangeEvent.index
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`index`** read-only property of the {{domxref("XRVisibilityMaskChangeEvent")}} interface indicates the index of the current {{domxref("XRView")}} in the {{domxref("XRViewerPose.views")}} array.

For a stereo view, there will be two views in the array. The `index` property allows you to identify the correct view to re-render, rather than having to re-render all views unnecessarily.

## Value

A number.

## Examples

This example indicates how you might render a display update for a particular {{domxref("XRView")}} by querying the `index` value of the event object when a `visibilitymaskchange` event is fired.

```js
xrSession.addEventListener("visibilitymaskchange", (e) => {
  renderNewView(e.index);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRViewerPose.views")}}
- {{domxref("XRFrame.getViewerPose()")}}
