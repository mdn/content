---
title: DOMPointReadOnly.fromPoint()
slug: Web/API/DOMPointReadOnly/fromPoint
tags:
- API
- Coordinates
- DOM
- DOMPointReadOnly
- Geometry
- Geometry Interfaces
- Method
- Point
- Reference
- Static Method
- fromPoint
browser-compat: api.DOMPointReadOnly.fromPoint
---
<div>{{APIRef("DOM")}}</div>

<p>The static <strong>{{domxref("DOMPointReadOnly")}}</strong>
    method <code>fromPoint()</code> creates and returns a new
    <code>DOMPointReadOnly</code> object given a source point.</p>

<p>You can also create a new <code>DOMPointReadOnly</code> object using the
  {{domxref("DOMPointReadOnly.DOMPointReadOnly", "new DOMPointReadOnly()")}} constructor.
</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">const <var>point</var> = DOMPointReadOnly.fromPoint(<var>sourcePoint</var>)</pre>

<h3 id="Properties">Properties</h3>

<dl>
  <dt><code>sourcePoint</code></dt>
  <dd>A {{domxref("DOMPoint")}} or {{domxref("DOMPointReadOnly")}} instance, or an object containing the following properties, from which to take the
    values of the new point's properties:
    <dl>
      <dt><code>x</code></dt>
      <dd>An unrestricted floating-point value indicating the <code>x</code>-coordinate of the point in space. This is generally the horizontal coordinate, with positive values being to the right and negative values to the left. The default value is <code>0</code>.</dd>
      <dt><code>y</code></dt>
      <dd>An unrestricted floating-point number providing the point's <code>y</code>-coordinate. This is the vertical coordinate, and barring any transforms applied to the coordinate system, positive values are downward and negative values upward toward the top of the screen. The default is <code>0</code>.</dd>
      <dt><code>z</code></dt>
      <dd>An unrestricted floating-point value which gives the point's <code>z</code>-coordinate, which is (assuming no transformations that alter the situation) the depth coordinate; positive values are closer to the user and negative values retreat back into the screen. The default value is <code>0</code>.</dd>
      <dt><code>w</code></dt>
      <dd>The point's <code>w</code> perspective value, given as an unrestricted floating-point number. The default is <code>1</code>.</dd>
    </dl>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new {{domxref("DOMPointReadOnly")}} object (which is identical to the source point).
</p>

<h2 id="Examples">Examples</h2>

<h3 id="Creating_a_2D_point">Creating a 2D point</h3>

<p>This sample creates a 2D point, specifying an inline object that includes the values to
  use for {{domxref("DOMPointReadOnly.x", "x")}} and {{domxref("DOMPointReadOnly.y",
  "y")}}. The <code>z</code> and <code>w</code> properties are allowed to keep their
  default values (<code>0</code> and <code>1</code> respectively).</p>

<pre class="brush: js">const point2D = DOMPointReadOnly.fromPoint({x: 25, y: 25})</pre>

<h3 id="Creating_a_3D_point_using_an_existing_point">Creating a 3D point using an existing
  point</h3>

<p>This example creates a point, <code><var>origPoint</var></code>, of type
  {{domxref("DOMPoint")}}, using {{domxref("DOMPoint.DOMPoint", "new DOMPoint()")}}. That
  point is then used as the input for <code>fromPoint()</code> to create a new point,
  <code><var>newPoint</var></code>.</p>

<pre class="brush: js">const origPoint = new DOMPoint(25, 25, 100, 0.5)

const newPoint = DOMPointReadOnly.fromPoint(origPoint)</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
