---
title: OVR_multiview2.framebufferTextureMultiviewOVR()
slug: Web/API/OVR_multiview2/framebufferTextureMultiviewOVR
tags:
  - API
  - Method
  - Multiview
  - VR
  - WebGL
  - WebGL extensions
  - WebVR
  - WebXR
browser-compat: api.OVR_multiview2.framebufferTextureMultiviewOVR
---
<div>{{APIRef("WebGL")}}</div>

<p>The <strong><code>OVR_multiview2.framebufferTextureMultiviewOVR()</code></strong>
  method of the <a href="/en-US/docs/Web/API/WebGL_API">WebGL API</a> attaches a multiview
  texture to a {{domxref("WebGLFramebuffer")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">void <var>ext</var>.framebufferTextureMultiviewOVR(<var>target</var>, <var>attachment</var>, <var>texture</var>, <var>level</var>, <var>baseViewIndex</var>, <var>numViews</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>target</dt>
  <dd>A {{domxref("WebGL_API.Types")}} specifying the binding point (target). Possible values:
    <ul>
      <li><code>gl.FRAMEBUFFER</code>: Collection buffer data storage of color, alpha,
        depth and stencil buffers used to render an image.</li>
      <li><code>gl.DRAW_FRAMEBUFFER</code>: Equivalent to <code>gl.FRAMEBUFFER</code>.
        Used as a destination for drawing, rendering, clearing, and writing operations.
      </li>
      <li><code>gl.READ_FRAMEBUFFER</code>: Used as a source for reading operations.</li>
    </ul>
  </dd>
  <dt>attachment</dt>
  <dd>A {{domxref("WebGL_API.Types")}} specifying the attachment point for the
    <code>texture</code>. Possible values:
    <ul>
      <li><code>gl.COLOR_ATTACHMENT0</code>: Attaches the texture to the framebuffer's
        color buffer.</li>
      <li><code>gl.DEPTH_ATTACHMENT</code>: Attaches the texture to the framebuffer's
        depth buffer.</li>
      <li><code>gl.STENCIL_ATTACHMENT</code>: Attaches the texture to the framebuffer's
        stencil buffer.</li>
      <li><code>gl.DEPTH_STENCIL_ATTACHMENT</code>: depth and stencil buffer.</li>
      <li><code>gl.COLOR_ATTACHMENT1<br>
   gl.COLOR_ATTACHMENT2<br>
   gl.COLOR_ATTACHMENT3<br>
   gl.COLOR_ATTACHMENT4<br>
   gl.COLOR_ATTACHMENT5<br>
   gl.COLOR_ATTACHMENT6<br>
   gl.COLOR_ATTACHMENT7<br>
   gl.COLOR_ATTACHMENT8<br>
   gl.COLOR_ATTACHMENT9<br>
   gl.COLOR_ATTACHMENT10<br>
   gl.COLOR_ATTACHMENT11<br>
   gl.COLOR_ATTACHMENT12<br>
   gl.COLOR_ATTACHMENT13<br>
   gl.COLOR_ATTACHMENT14<br>
   gl.COLOR_ATTACHMENT15</code></li>
      <li>When using the {{domxref("WEBGL_draw_buffers")}} extension:
        <ul>
          <li><code>ext.COLOR_ATTACHMENT0_WEBGL</code> (same as
            <code>gl.COLOR_ATTACHMENT0</code>)<br>
            <code>ext.COLOR_ATTACHMENT1_WEBGL<br>
     ext.COLOR_ATTACHMENT2_WEBGL<br>
     ext.COLOR_ATTACHMENT3_WEBGL<br>
     ext.COLOR_ATTACHMENT4_WEBGL<br>
     ext.COLOR_ATTACHMENT5_WEBGL<br>
     ext.COLOR_ATTACHMENT6_WEBGL<br>
     ext.COLOR_ATTACHMENT7_WEBGL<br>
     ext.COLOR_ATTACHMENT8_WEBGL<br>
     ext.COLOR_ATTACHMENT9_WEBGL<br>
     ext.COLOR_ATTACHMENT10_WEBGL<br>
     ext.COLOR_ATTACHMENT11_WEBGL<br>
     ext.COLOR_ATTACHMENT12_WEBGL<br>
     ext.COLOR_ATTACHMENT13_WEBGL<br>
     ext.COLOR_ATTACHMENT14_WEBGL<br>
     ext.COLOR_ATTACHMENT15_WEBGL</code>
          </li>
        </ul>
      </li>
      <li>When using the {{domxref("WEBGL_depth_texture")}} extension:
        <ul>
          <li><code>ext.DEPTH_STENCIL_ATTACHMENT</code>: Depth and stencil buffer data
            storage.</li>
        </ul>
      </li>
    </ul>
  </dd>
  <dt>texture</dt>
  <dd>A {{domxref("WebGLTexture")}} object whose image to attach.</dd>
  <dt>level</dt>
  <dd>A {{domxref("WebGL_API.Types")}} specifying the mipmap level of the texture image to be
    attached. Must be 0.</dd>
  <dt>baseViewIndex</dt>
  <dd>A {{domxref("WebGL_API.Types")}} specifying the base view index of the framebuffer object
    attachment.</dd>
  <dt>numViews</dt>
  <dd>A {{domxref("WebGL_API.Types")}} specifying the number of views of the framebuffer object
    attachment.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>A <code>gl.INVALID_ENUM</code> error is thrown if

    <ul>
      <li><code>target</code> is not <code>gl.FRAMEBUFFER</code>.</li>
      <li><code>attachment</code> is not one of the accepted attachment points.</li>
    </ul>
  </li>
  <li>A <code>gl.INVALID_VALUE</code> error is thrown if
    <ul>
      <li><code>level</code> is not 0.</li>
      <li>if <code>numViews</code> is less than one or  more than
        <code>MAX_VIEWS_OVR</code>.</li>
    </ul>
  </li>
  <li>A <code>gl.INVALID_OPERATION</code> error is thrown if <code>texture</code> isn't 0
    or the name of an existing texture object.</li>
</ul>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">ext.framebufferTextureMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, colorTex, 0, 0, 2);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("OVR_multiview2")}}</li>
  <li>{{domxref("WEBGL_depth_texture")}}</li>
  <li>{{domxref("WEBGL_draw_buffers")}}</li>
</ul>
