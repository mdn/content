---
title: "XRSession: visibilitymaskchange event"
short-title: visibilitymaskchange
slug: Web/API/XRSession/visibilitymaskchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRSession.visibilitymaskchange_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`visibilitymaskchange`** event is sent to an {{domxref("XRSession")}} when the portion of an {{domxref("XRView")}} visible to the user changes.

Note that the view is associated with a particular eye, and the part that is visible to the user is defined by a visibility mask. For more information see the {{domxref("XRVisibilityMaskChangeEvent")}} interface.

This enables performance improvements by allowing the browser to draw only the visible part of the updated view.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("visibilitymaskchange", (event) => { })

onvisibilitymaskchange = (event) => { }
```

## Event type

An {{domxref("XRVisibilityMaskChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("XRVisibilityMaskChangeEvent")}}

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
