---
title: Implementing image sprites in CSS
slug: Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS
tags:
  - Advanced
  - CSS
  - CSS Images
  - Graphics
  - Guide
  - NeedsContent
  - Sprites
  - Web
---
<p>{{CSSRef}}</p>

<p><strong>Image sprites</strong> are used in numerous web apps where multiple images are used. Rather than include each image as a separate image file, it is much more memory- and bandwidth-friendly to send them as a single image; using background position as a way to distinguish between individual images in the same image file, so the number of HTTP requests is reduced.</p>

<div class="note">
<p><strong>Note:</strong> When using HTTP/2, it may in fact be more bandwidth-friendly to use multiple small requests.</p>
</div>

<h2 id="Implementation">Implementation</h2>

<p>Suppose an image is given to every item with class <code>toolbtn</code>:</p>

<pre class="brush:css">.toolbtn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}</pre>

<p>A background position can be added either as two x, y values after the {{cssxref("url()")}} in the background, or as {{cssxref("background-position")}}. For example:</p>

<pre class="brush:css">#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}</pre>

<p>This would move the element with the ID 'btn1' 20 pixels to the left and the element with the ID 'btn2' 40 pixels to the left (assuming they have the class <code>toolbtn</code> assigned and are affected by the image rule above).</p>

<p>Similarly, you can also make hover states with:</p>

<pre class="brush:css">#btn:hover {
  background-position: <var>&lt;pixels shifted right&gt;</var>px <var>&lt;pixels shifted down&gt;</var>px;
}</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="http://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/">Full working demo at CSS Tricks</a></li>
</ul>
