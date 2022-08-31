---
title: XRRay
slug: Web/API/XRRay
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - WebXR
  - XR
  - AR
  - VR
  - Experimental
browser-compat: api.XRRay
---
{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

The **`XRRay`** interface of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) is a geometric ray described by an origin point and a direction vector.

`XRRay` objects can be passed to {{domxref("XRSession.requestHitTestSource()")}} or {{domxref("XRSession.requestHitTestSourceForTransientInput()")}} to perform hit testing.

## Constructor

- {{domxref("XRRay.XRRay", "XRRay()")}} {{Experimental_Inline}}
  - : Creates a new `XRRay` object.

## Properties

- {{domxref("XRRay.direction")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("DOMPointReadOnly")}} representing the ray's 3-dimensional directional vector.
- {{domxref("XRRay.matrix")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A transform that can be used to position objects along the `XRRay`. This is a 4 by 4 matrix given as a 16 element {{jsxref("Float32Array")}} in column major order.
- {{domxref("XRRay.origin")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("DOMPointReadOnly")}} representing the 3-dimensional point in space that the ray originates from, in meters.

## Methods

None.

## Examples

### Using `XRRay` to request a hit test source

The {{domxref("XRSession.requestHitTestSource()")}} method takes an `XRRay` object for its `offsetRay` option. In this example, the hit test source is positioned slightly above the viewer as the application has some UI elements at the bottom while wanting to maintain the perception of a centered cursor.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
   requiredFeatures: ["local", "hit-test"]
});

let hitTestSource = null;

xrSession.requestHitTestSource({
  space: viewerSpace, // obtained from xrSession.requestReferenceSpace("viewer");
  offsetRay: new XRRay({y: 0.5})
}).then((viewerHitTestSource) => {
  hitTestSource = viewerHitTestSource;
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XRSession.requestHitTestSource()")}}
- {{domxref("XRHitTestResult")}}
