---
title: "XRVisibilityMaskChangeEvent: index property"
short-title: index
slug: Web/API/XRVisibilityMaskChangeEvent/index
page-type: web-api-instance-property
browser-compat: api.XRVisibilityMaskChangeEvent.index
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only **`index`** property of the {{domxref("XRVisibilityMaskChangeEvent")}} interface indicates the index of the current {{domxref("XRView")}} in the {{domxref("XRViewerPose.views")}} array.

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
