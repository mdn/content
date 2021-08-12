---
title: A perspective retrospective for WebXR developers
slug: Web/API/WebXR_Device_API/Perspective
tags:
  - 3D
  - API
  - AR
  - Graphics
  - Guide
  - Mixed
  - Reality
  - VR
  - Virtual
  - WebXR
  - WebXR Device API
  - XR
  - augmented
  - perspective
---
<p>{{DefaultAPISidebar("WebXR Device API")}}{{Draft}}</p>

<p>Because <a href="/en-US/docs/Web/API/WebXR_Device_API">WebXR</a> uses <a href="/en-US/docs/Web/API/WebGL_API">WebGL</a> to render the views that form the 3D environment displayed using the XR hardware, it's easy to think that the perspective-related matters are identical to those found in any WebGL project. This is largely true, but there are a few specific topics that need to be revisited and some minor additional guidelines considered in order to ensure that your app looks right and, more importantly, that your 3D world doesn't cause people to become ill from vertigo or other effects that can be caused when what's being seen doesn't match what the brain expects from reality.</p>

<p><span class="seoSummary">In this article, we examine scenarios in which the way your project calculates, applies, and thinks about perspective may differ from code written for non-XR applications.</span></p>

<h2 id="Viewing_frustum_frustrations">Viewing frustum frustrations</h2>

<p>Every WebXR session, represented by an {{domxref("XRSession")}} object, offers a set of options that can be configured by creating a new {{domxref("XRRenderState")}} object and activating the updated state by calling the session's {{domxref("XRSession.updateRenderState", "updateRenderState()")}} method to replace the current configuration.</p>

<p>The majority of these values define the XR device's <a href="/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum">viewing frustum</a>; that is, the subset of the device's visual field that should be rendered. The viewing frustum can be represented using four key data points: the field of view angle, the aspect ratio of the rendered image, and the distances to the near and far clipping planes.</p>

<h3 id="Welcome_to_the_projection_matrix">Welcome to the projection matrix</h3>

<p>Most of the time, the projection model you'll use is the perspective projection model, so its projection matrix is called the <strong><a href="/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix">perspective projection matrix</a></strong>. This matrix is used to map each pixel from the 3D virtual world to a point in the 2D backbuffer for the view being rendered.</p>

<p>Under typical circumstances, you can and should get the perspective projection matrix directly from the view you're rendering. The {{domxref("XRView")}} object's {{domxref("XRView.projectionMatrix", "projectionMatrix")}} property holds the projection matrix representing the view's perspective, and should almost always be used without alteration. Changes made to the projection matrix provided by the <code>XRView</code> are likely to result in distortion or poor alignment of the rendered content relative to the real-world scenery; this could be significant enough to cause {{interwiki("wikipedia", "virtual reality sickness")}} in at least some of your users.</p>

<p>For example, if your app uses a WebGL uniform named <code>uProjectionMatrix</code> to pass the projection matrix to your shaders, you might use code like this to pass the projection matrix for the <code>view</code> currently being rendered:</p>

<pre class="brush: js">gl.uniformMatrix4fv(uProjectionMatrix, false, view.projectionMatrix);</pre>

<h3 id="Customizing_the_projection_matrix">Customizing the projection matrix</h3>

<p>Although normally you should avoid manually building or altering the projection matrix provided by the view, you can do so in some situations. The most common reason it may make sense to do this is to alter the near and far clipping plane distances to increase or reduce the number of polygons to be rendered, for performance reasons. When games offer preferences to adjust the viewing distance, that is done by changing these plane distance values.</p>

<p>In immersive mode, the WebXR system obtains the default <a href="/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#the_viewing_frustum">viewing frustum</a> from the software provided by the hardware vendor. This viewing frustum is based on some combination of the device's lenses, display hardware, and cameras. Everything from the size of the imaging sensor to the focal length of the lens is involved in this calculation.</p>

<p>Immersive experiences use hardware-defined fields of view, focal lengths, and so forth, so when using an immersive session, you can only change the near and far clipping distances. This is done by setting the values of the <code>XRRenderState</code> properties {{domxref("XRRenderState.depthNear", "depthNear")}} and {{domxref("XRRenderState.depthFar", "depthFar")}}.</p>

<p>In inline mode, you can also change the field of view directly by setting the value of the {{domxref("XRSession.renderState", "renderState")}}'s {{domxref("XRRenderState.inlineVerticalFieldOfView", "inlineVerticalFieldOfView")}} property. This property needs to be set to <code>null</code> for any immersive session.</p>

<p>Once you have the viewing frustum, you can compute the perspective projection matrix that WebGL uses when rendering the scene using a function like this:</p>

<pre class="brush: js">function makePerspectiveMatrix(fieldOfViewInRadians, aspectRatio, near, far) {
  var f = 1.0 / Math.tan(fieldOfViewInRadians / 2);
  var rangeInv = 1 / (near - far);

  return [
    f / aspectRatio, 0,                          0,   0,
    0,               f,                          0,   0,
    0,               0,    (near + far) * rangeInv,  -1,
    0,               0,  near * far * rangeInv * 2,   0
  ];
}</pre>

<p>The values of <code>near</code> and <code>far</code> are obtained directly from the frustum; they're the distance from the origin to the closest point on the near clipping plane and the far clipping plane, respectively. The aspect ratio is the value obtained by dividing the width of the field of view by its height. If the target display uses a 16:9 aspect ratio, the value used for <code>aspectRatio</code> should be <code>16/9</code>, or 1.7777777778.</p>

<p>If you're using a library or framework that provides matrix math functions, it will almost certainly have a similar function include. For example, in the popular <a href="http://glmatrix.net/">glMatrix</a> library, you'll find this in the function <code><a href="http://glmatrix.net/docs/module-mat4.html#.perspective">mat4.perspective()</a></code>.</p>

<p>Regardless of where it comes from, once you have the projection matrix, you can use it when calling WebGL to render your scene.</p>

<h2 id="Aligning_with_reality">Aligning with reality</h2>

<p>In augmented reality (AR) applications, the contents you render are overlaid atop the real world. To do this well, your perspective calculations need to match the viewer's perspective of the world around them. If you don't, your objects won't correctly align with reality.</p>

<p>If your virtual camera's perspective projection matrix doesn't result in virtual objects having the same apparent perspective as the real world, the disjunction between the virtual and physical worlds could be jarring or, even worse, induce vertigo, motion sickness, or other forms of discomfort in your app's users.</p>

<p>A related issue is that if you use your perspective matrix to determine where to place objects, a mismatch between your perspective projection matrix and the user's physical perspective on the world could result in the objects not being positioned accurately. If your app lets the user hang virtual paintings on their walls, for example, but the perspective matrix doesn't match up, the placed paintings could wind up not actually up against the wall, partially intersecting the wall, or with one end closer to the wall than the other instead of being properly parallel to the wall.</p>

<p><strong>&lt;&lt;&lt;--- once AR module is done, add some more details here about getting this right ---&gt;&gt;&gt;</strong></p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection">WebGL model view projection </a></li>
 <li><a href="/en-US/docs/Web/API/WebXR_Device_API/Cameras">Viewpoints and viewers: Simulating cameras in WebXR</a></li>
</ul>
