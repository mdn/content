---
title: Using device orientation with 3D transforms
slug: Web/Events/Using_device_orientation_with_3D_transforms
tags:
  - Advanced
  - CSS
  - DOM
  - NeedsUpdate
  - Orientation
  - Transforms
---
<p>This article provides tips on how to use device orientation information in tandem with CSS 3D transforms.</p>

<h2 id="Using_orientation_to_rotate_an_element">Using orientation to rotate an element</h2>

<p>The easiest way to convert <a href="/en-US/docs/Web/API/Window/deviceorientation_event">orientation data</a> to a <a href="/en-US/docs/Web/CSS/transform" title="CSS Reference Project">3D transform</a> is basically to use the alpha, gamma, and beta values as <code>rotateZ</code>, <code>rotateX</code> and <code>rotateY</code> values.</p>

<p>It is important to keep in mind, however, that the <a href="/en-US/docs/Web/Events/Orientation_and_motion_data_explained">Device Orientation coordinate system</a> is different from the <a href="/en-US/docs/Web/CSS/CSSOM_View/Coordinate_systems">CSS coordinate system</a>. Namely, the former is {{interwiki("wikipedia", "Right-hand_rule", "right-handed")}} and its Y axis is positive upwards, while the latter is a left-handed coordinate system whose Y axis is positive to the bottom. Furthermore, the Device Orientation angle rotations should always be done in a Z - X' - Y'' order that does not match the order of some <a href="/en-US/docs/Web/CSS/CSS_Transforms">CSS Transforms</a>. These are some of the practical consequences of these differences:</p>

<ul>
	<li>The order of angle rotations matters, so make sure the alpha, beta and gamma rotations are applied in this order.</li>
	<li>The <a href="/en-US/docs/Web/CSS/transform-function/rotate3d()">rotate3d()</a> CSS transformation, and the <a href="/en-US/docs/Web/API/DOMMatrixReadOnly/rotate">DOMMatrixReadOnly.rotate()</a> and <a href="/en-US/docs/Web/API/DOMMatrix/rotateSelf">DOMMatrix.rotateSelf()</a> functions apply angle rotations in a Z - Y' - X'' order, so it is not possible to apply the alpha, beta and gamma rotations in the right order with a single call to any of them. Instead, you should rotate each axis individually in the correct order.</li>
	<li>Due to the differences in coordinate systems outlined above, when looking towards the origin rotations are applied clockwise around in CSS and counter-clockwise in the Device Orientation spec. This means alpha and beta need to be inverted (the rotations around Z and X), but gamma (the rotation around Y) does not because they point to different directions in the two coordinate systems.</li>
</ul>

<p>Here's a simple code snippet to sum it up:</p>

<pre class="brush: js">const elem = document.getElementById("view3d");

window.addEventListener("deviceorientation", function(e) {
  elem.style.transform =
    `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${e.gamma}deg)`;
});
</pre>

<h2 id="rotate3d_to_orientation">rotate3d to orientation</h2>

<p>Should you ever need to convert a rotate3d axis-angle to orientation Euler angles, you can use the following algorithm:</p>

<pre class="brush: js">// convert a rotate3d axis-angle to deviceorientation angles
function orient( aa ) {
    var x = aa.x, y = aa.y, z = aa.z, a = aa.a,
        c = Math.cos( aa.a ),
        s = Math.sin( aa.a ),
        t = 1 - c,
        // axis-angle to rotation matrix
        rm00 =    c + x*x * t,
        rm10 =  z*s + y*x * t,
        rm20 = -y*s + z*x * t,
        rm01 = -z*s + x*y * t,
        rm11 =    c + y*y * t,
        rm21 =  x*s + z*y * t,
        rm02 =  y*s + x*z * t,
        rm12 = -x*s + y*z * t,
        rm22 =    c + z*z * t,

        TO_DEG = 180 / Math.PI,
        ea = [],
        n = Math.sqrt( rm22 * rm22 + rm20 * rm20 );

    // rotation matrix to Euler angles
    ea[1] = Math.atan2( -rm21, n );

    if ( n &gt; 0.001 ) {
        ea[0] = Math.atan2( rm01, rm11 );
        ea[2] = Math.atan2( rm20, rm22 );

    } else {
        ea[0] = 0;
        ea[2] = ( rm21 &gt; 0 ? 1 : -1 ) * Math.atan2( -rm10, rm00 );
    }

    return {
        alpha: -ea[0] * TO_DEG - 180,
        beta:  -ea[1] * TO_DEG,
        gamma:  ea[2] * TO_DEG
    };
}
</pre>

<h2 id="See_also">See also</h2>

<ul>
	<li><a href="/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms">Using CSS transforms</a></li>
	<li><a href="/en-US/docs/Web/Events/Detecting_device_orientation">Detecting device orientation</a></li>
</ul>


<section id="Quick_links">
    <ul>
      <li><a href="/en-US/docs/Web/Events/Detecting_device_orientation">Detecting device orientation</a></li>
      <li><a href="/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms">Using CSS transforms</a></li>
      <li>{{domxref("DeviceOrientationEvent")}}</li>
      <li><a href="/en-US/docs/Learn/JavaScript/Building_blocks/Events">Introduction to events</a></li>
    </ul>
</section>
