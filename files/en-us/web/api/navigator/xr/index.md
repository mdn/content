---
title: "Navigator: xr property"
short-title: xr
slug: Web/API/Navigator/xr
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.xr
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The read-only **`xr`** property
provided by the {{domxref("Navigator")}} interface returns an {{domxref("XRSystem")}} object
which can be used to access the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API).

## Value

The {{domxref("XRSystem")}} object used to interface with the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) in the current
context. This can be used to present augmented and/or virtual reality imagery to the
user.

## Examples

Each {{domxref("Window")}} has its own instance of {{domxref("Navigator")}}, which can
be accessed as {{domxref("Window.navigator","window.navigator")}} or as
{{domxref("Window.navigator", "navigator")}}. At the same time, a new
{{domxref("XRSystem")}} instance is also created and attached to
the `navigator` instance as `navigator.xr`. If
the `xr` property exists, you can use it to access the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API).

To determine if WebXR is available, you can do something like this:

```js
if ("xr" in window.navigator) {
  /* WebXR can be used! */
} else {
  /* WebXR isn't available */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebGL API](/en-US/docs/Web/API/WebGL_API): 2D and 3D accelerated
  graphics for the web
- [Canvas API](/en-US/docs/Web/API/Canvas_API): 2D graphics API
