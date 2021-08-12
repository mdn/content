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
<p>{{APIRef("WebXR Device API")}}</p>

<p><span class="seoSummary">The read-only <code><strong>inverse</strong></code> property
    of the {{domxref("XRRigidTransform")}} interface returns another
    {{domxref("XRRigidTransform")}} object which is the inverse of its owning
    transform.</span> That is, you can always get the inverse of any
  <code>XRRigidTransform</code> using its <code>inverse</code> property, instead of having
  to explicitly generate it.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">let <em>transformInverse</em> = <em>xrRigidTransform</em>.inverse;</pre>

<h3 id="Value">Value</h3>

<p>An {{domxref("XRRigidTransform")}} which contains the inverse of the
  <code>XRRigidTransform</code> on which it's accessed.</p>

<p>Applying the inverse of a transform to any object previously transformed by the parent
  <code>XRRigidTransform</code> always undoes the transformation, resulting in the object
  returning to its previous pose. In other words, its position and orientation both return
  to their prior configurations.</p>

<h2 id="Examples">Examples</h2>

<p>In this example, the model view matrix for an object is computed by taking the view
  matrix and multiplying it by the object's pose matrix.</p>

<pre class="brush: js">let modelViewMatrix = mat4.create();

for (let view of pose.view) {
  let viewport = glLayer.getViewport(view);
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  /* ... */

  mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
  gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix,
                      false, modelViewMatrix);

  /* ... */
}
</pre>

<p>This outline of a renderer's core code shows how the pose's view gets represented by
  taking its transform's inverse's matrix as the model view matrix used to transform
  objects based on the viewer's position and orientation. The inverse's matrix is
  multiplied by the object's matrix to get the model view matrix, which is then passed
  into the shader program by setting a uniform to contain that information.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>
