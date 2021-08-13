---
title: XRViewport
slug: Web/API/XRViewport
tags:
  - API
  - AR
  - Graphics
  - Interface
  - Reality
  - Reference
  - VR
  - Virtual
  - WebGL
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRViewport
  - augmented
  - render
  - viewport
browser-compat: api.XRViewport
---
<p>{{APIRef("WebXR Device API")}}{{SecureContext_Header}}</p>

<p>The WebXR Device API's <code><strong>XRViewport</strong></code> interface provides properties used to describe the size and position of the current viewport within the {{domxref("XRWebGLLayer")}} being used to render the 3D scene.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt>{{domxref("XRViewport.height", "height")}} {{ReadOnlyInline}}</dt>
 <dd>The height, in pixels, of the viewport.</dd>
 <dt>{{domxref("XRViewport.width", "width")}} {{ReadOnlyInline}}</dt>
 <dd>The width, in pixels, of the viewport.</dd>
 <dt>{{domxref("XRViewport.x", "x")}} {{ReadOnlyInline}}</dt>
 <dd>The offset from the origin of the destination graphics surface (typically a {{domxref("XRWebGLLayer")}}) to the left edge of the viewport, in pixels.</dd>
 <dt>{{domxref("XRViewport.y", "y")}} {{ReadOnlyInline}}</dt>
 <dd>The offset from the origin of the viewport to the bottom edge of the viewport; WebGL's coordinate system places (0, 0) at the bottom left corner of the surface.</dd>
</dl>

<h2 id="Usage_notes">Usage notes</h2>

<p>Currently, the only type of surface available is the {{domxref("XRWebGLLayer")}}. The precise orientation of the coordinate system may vary with other surface types, but in WebGL, the origin (0, 0) is located at the bottom-left corner of the surface. Thus the values specified in an <code>XRViewport</code> define a rectangle whose bottom-left corner is at (<code>x</code>, <code>y</code>) and which extends <code>width</code> pixels toward the left and <code>height</code> pixels upward.</p>

<p>These values may be passed directly into the {{domxref("WebGLRenderingContext.viewport()")}} method:</p>

<pre class="brush: js">let xrViewport = xrWebGLLayer.getViewport(xrView);
gl.viewport(xrViewport.x, xrViewport.y, xrViewport.width, xrViewport.height);</pre>

<h2 id="Example">Example</h2>

<p>This example sets up an animation frame callback using {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}. After initial setup, it iterates over each of the views within the viewer's pose, configuring the viewport as dictated by the {{domxref("XRWebGLLayer")}}.</p>

<pre class="brush: js">xrSession.requestAnimationFrame((time, xrFrame) =&gt; {
  let viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

  gl.bindFramebuffer(xrWebGLLayer.framebuffer);

  for (xrView of viewerPose.views) {
    let xrViewport = xrWebGLLayer.getViewport(xrView);
    gl.viewport(xrViewport.x, xrViewport.y, xrViewport.width, xrViewport.height);

   // Now we can use WebGL to draw into a viewport matching
   // the viewer's needs
  }
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>
