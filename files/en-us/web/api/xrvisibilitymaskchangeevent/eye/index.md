---
title: "XRVisibilityMaskChangeEvent: eye property"
short-title: eye
slug: Web/API/XRVisibilityMaskChangeEvent/eye
page-type: web-api-instance-property
browser-compat: api.XRVisibilityMaskChangeEvent.eye
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only **`eye`** property of the {{domxref("XRVisibilityMaskChangeEvent")}} interface indicates the eye the mask applies to.

## Value

An emumerated value indicating which eye the mask applies to, which can be one of:

- `left`
  - : The {{domxref("XRView")}} represents the point-of-view of the viewer's left eye.
- `right`
  - : The view represents the viewer's right eye.
- `none`
  - : The `XRView` describes a monoscopic view, or the view otherwise doesn't represent a particular eye's point-of-view.

## Examples

### Basic usage

This example indicates how you might check the `eye` value when the `visibilitymaskchange` event fires and then render a suitable display update depending on the result.

```js
xrSession.addEventListener("visibilitymaskchange", (e) => {
  if (e.eye === "left") {
    // Render for left eye view
  } else if (e.eye === "right") {
    // Render for right eye view
  } else {
    // Render for neutral view
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRView.eye")}}
