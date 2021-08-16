---
title: XRRigidTransform.inverse
slug: Web/API/XRRigidTransform/inverse
tags:
  - API
  - AR
  - Property
  - Read-only
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRRigidTransform
  - augmented
  - inverse
  - transform
browser-compat: api.XRRigidTransform.inverse
---
{{APIRef("WebXR Device API")}}

The read-only **`inverse`** property
of the {{domxref("XRRigidTransform")}} interface returns another
{{domxref("XRRigidTransform")}} object which is the inverse of its owning
transform. That is, you can always get the inverse of any
`XRRigidTransform` using its `inverse` property, instead of having
to explicitly generate it.

## Syntax

```js
let transformInverse = xrRigidTransform.inverse;
```

### Value

An {{domxref("XRRigidTransform")}} which contains the inverse of the
`XRRigidTransform` on which it's accessed.

Applying the inverse of a transform to any object previously transformed by the parent
`XRRigidTransform` always undoes the transformation, resulting in the object
returning to its previous pose. In other words, its position and orientation both return
to their prior configurations.

## Examples

In this example, the model view matrix for an object is computed by taking the view
matrix and multiplying it by the object's pose matrix.

```js
let modelViewMatrix = mat4.create();

for (let view of pose.view) {
  let viewport = glLayer.getViewport(view);
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  /* ... */

  mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
  gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix,
                      false, modelViewMatrix);

  /* ... */
}
```

This outline of a renderer's core code shows how the pose's view gets represented by
taking its transform's inverse's matrix as the model view matrix used to transform
objects based on the viewer's position and orientation. The inverse's matrix is
multiplied by the object's matrix to get the model view matrix, which is then passed
into the shader program by setting a uniform to contain that information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
