---
title: XRVisibilityMaskChangeEvent
slug: Web/API/XRVisibilityMaskChangeEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.XRVisibilityMaskChangeEvent
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`XRVisibilityMaskChangeEvent`** of the [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API) describes the portion of an {{domxref("XRView")}} visible to the user after the view has changed, for example by specifying the eye that the view is relevant to, and the vertices of a visibility mask that defines the visible part of the view. This enables performance improvements by allowing the browser to draw only the visible part of the updated view.

An `XRVisibilityMaskChangeEvent` object is made available as the event object of a {{domxref("XRSession.visibilitymaskchange_event", "visibilitymaskchange")}} event, fired each time the portion of the view displayed to the user changes to provide new information to update the view.

{{InheritanceDiagram}}

## Constructor

- {{domxref("XRVisibilityMaskChangeEvent.XRVisibilityMaskChangeEvent", "XRVisibilityMaskChangeEvent()")}} {{experimental_inline}}
  - : Creates and returns a new `XRVisibilityMaskChangeEvent` object.

## Instance properties

_In addition to properties inherited from its parent interface, {{domxref("Event")}}, `XRVisibilityMaskChangeEvent` provides the following:_

- {{domxref("XRVisibilityMaskChangeEvent.eye", "eye")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : The eye the mask applies to.
- {{domxref("XRVisibilityMaskChangeEvent.index", "index")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : The index of the current {{domxref("XRView")}} in the {{domxref("XRViewerPose.views")}} array.
- {{domxref("XRVisibilityMaskChangeEvent.indices", "indices")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Specifies the index position of each coordinate pair (not individual array index) inside the [`vertices`](#vertices) array that define the triangles used to draw the currently visible part of the scene displayed in the {{domxref("XRView")}}.
- {{domxref("XRVisibilityMaskChangeEvent.session", "session")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : The {{domxref("XRSession")}} to which the event belongs.
- {{domxref("XRVisibilityMaskChangeEvent.vertices", "vertices")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : An array representing the set of possible coordinate values that may be used in a visibility mask. If this array is empty, the whole region of the `XRView` will be drawn.

## Instance methods

_While `XRSessionEvent` defines no methods, it inherits methods from its parent interface, {{domxref("Event")}}._

## Examples

### Three.js example

This snippet shows how `visibilitymaskchange` might be used to draw only the visible portion of the `XRView` in a Three.js application. The new view must be drawn using the {{domxref("XRView.projectionMatrix")}} of the relevant `XRView` and a default {{domxref("XRRigidTransform")}}.

```js
session.addEventListener("visibilitymaskchange", onVisibilityMaskChange);

function onVisibilityMaskChange(event) {
  const geometry = new BufferGeometry();
  geometry.setIndex(new BufferAttribute(event.indices, 1));
  const vertices = new Float32Array((event.vertices.length / 2) * 3);
  let x = 0,
    y = 0;
  while (x < event.vertices.length) {
    vertices[y++] = event.vertices[x++];
    vertices[y++] = event.vertices[x++];
    vertices[y++] = -1;
  }

  geometry.setAttribute("position", new BufferAttribute(vertices, 3));

  const mask = event.eye === "left" ? leftEyeMask : rightEyeMask;
  const matrix = cameras[event.eye === "left" ? 0 : 1].projectionMatrix;
  mask.geometry = geometry;
  mask.material = new ShaderMaterial({
    vertexShader: _visibility_mask_vertex,
    fragmentShader: _visibility_mask_fragment,
    uniforms: {
      clipMatrix: { value: matrix },
    },
  });

  maskScene = new Scene();
  maskScene.add(leftEyeMask);
  maskScene.add(rightEyeMask);
}
```

The code snippet is taken from [this fork of WebXRManager.js](https://github.com/cabanier/three.js/blob/78a3227d95fc29e001d8cd139504c643987430c5/src/renderers/webxr/WebXRManager.js).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
