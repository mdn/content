---
title: XRBoundedReferenceSpace
slug: Web/API/XRBoundedReferenceSpace
tags:
  - API
  - AR
  - Boundary
  - Interface
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRBoundedReferenceSpace
  - augmented
browser-compat: api.XRBoundedReferenceSpace
---
<p>{{APIRef("WebXR Device API")}}{{secureContext_header}}</p>

<p><span class="seoSummary">The <a href="/en-US/docs/Web/API/WebXR_Device_API">WebXR Device API</a>'s <code><strong>XRBoundedReferenceSpace</strong></code> interface describes a virtual world <a href="/en-US/docs/Web/API/WebXR_Device_API/Geometry">reference space</a> which has preset boundaries. This extends {{domxref("XRReferenceSpace")}}, which describes an essentially unrestricted space around the viewer's position.</span> These bounds are defined using an array of points, each of which defines a vertex in a polygon inside which the user is allowed to move.</p>

<p>This is typically used when the XR system is capable of tracking the user's physical movement within a limited distance of their starting position. The specified bounds may, in fact, describe the shape and size of the room the user is located in, in order to let the WebXR site or application prevent the user from colliding with the walls or other obstacles in the real world.  At a minimum, the boundaries indicate the area in which the XR device is capable of tracking the user's movement. See the article <a href="/en-US/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces">Using bounded reference spaces</a> for details on how bounded spaces work and why they're useful.</p>

<h2 id="Properties">Properties</h2>

<p><em>In addition to the properties of {{domxref("XRReferenceSpace")}}, <code>XRBoundedReferenceSpace</code> includes the following:</em></p>

<dl>
 <dt>{{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} {{ReadOnlyInline}}</dt>
 <dd>An array of {{domxref("DOMPointReadOnly")}} objects, each of which defines a vertex in the polygon defining the boundaries within which the user will be required to remain. These vertices <em>must</em> be sorted such that they move <em>clockwise</em> around the viewer's position.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em><code>XRBoundedReferenceSpace</code> inherits the methods of its parent interface, {{domxref("XRReferenceSpace")}}. It has no further methods.</em></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>
<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebXR_Device_API">WebXR Device API</a></li>
 <li><a href="/en-US/docs/Web/API/WebXR_Device_API/Geometry">Geometry and reference spaces in WebXR</a></li>
 <li><a href="/en-US/docs/Web/API/WebXR_Device_API/Cameras">Viewpoints and viewers: simulating cameras in WebXR</a></li>
</ul>
