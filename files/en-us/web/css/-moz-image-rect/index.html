---
title: '-moz-image-rect'
slug: Web/CSS/-moz-image-rect
tags:
  - CSS
  - CSS Function
  - CSS Images
  - CSS:Mozilla Extensions
  - Function
  - Non-standard
  - Reference
browser-compat: css.types.-moz-image-rect
---
<div>{{CSSRef}}{{Non-standard_Header}}</div>

<p>The <strong><code>-moz-image-rect</code></strong> value for <a href="/en-US/docs/Web/CSS">CSS</a> {{CSSxRef("background-image")}} lets you use a portion of a larger image as a background.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">-moz-image-rect({{CSSxRef("url()")}}, <em>top</em>, <em>right</em>, <em>bottom</em>, <em>left</em>);</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{CSSxRef("url()")}}</dt>
 <dd>The URI of the image from which to take the sub-image.</dd>
 <dt><code>top</code></dt>
 <dd>The top edge, specified as an {{CSSxRef("&lt;integer&gt;")}} or {{CSSxRef("&lt;percentage&gt;")}}, of the sub-image within the specified image.</dd>
 <dt><code>right</code></dt>
 <dd>The right edge, specified as an {{CSSxRef("&lt;integer&gt;")}} or {{CSSxRef("&lt;percentage&gt;")}}, of the sub-image within the specified image.</dd>
 <dt><code>bottom</code></dt>
 <dd>The bottom edge, specified as an {{CSSxRef("&lt;integer&gt;")}} or {{CSSxRef("&lt;percentage&gt;")}}, of the sub-image within the specified image.</dd>
 <dt><code>left</code></dt>
 <dd>The left edge, specified as an {{CSSxRef("&lt;integer&gt;")}} or {{CSSxRef("&lt;percentage&gt;")}}, of the sub-image within the specified image.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>This property allows you to, for example, use different parts of one larger image as backgrounds in different parts of your content.</p>

<p>This works very similarly to the {{CSSxRef("-moz-image-region")}} property, which is used with the {{CSSxRef("list-style-image")}} property to use parts of an image as the bullets in lists. However, this can be used for any CSS background.</p>

<p>The syntax for the rectangle is similar to the <a href="/en-US/docs/Web/CSS/shape#syntax"><code>rect()</code></a> function generating a {{CSSxRef("&lt;shape&gt;")}} CSS type. All four values are relative to the upper left corner of the image.</p>

<h2 id="Examples">Examples</h2>

<p>This example loads an image and uses it in four segments to draw the Firefox logo in four {{HTMLElement("div")}} blocks. Clicking on their container causes the four segments to rotate around by swapping the {{CSSxRef("background-image")}} property values among the four {{HTMLElement("div")}} blocks.</p>

<h3 id="CSS">CSS</h3>

<p>The CSS defines one container style, then the styles for the four boxes that comprise the complete image.</p>

<p>The container looks like this:</p>

<pre class="brush: css">#container {
  width:267px;
  height:272px;
  top:100px;
  left:100px;
  position:absolute;
  font-size:16px;
  text-shadow:white 0px 0px 6px;
  text-align:center;
}</pre>

<p>Then the four boxes defining the segments of the image are defined. Let's look at them one at a time.</p>

<pre class="brush: css">#box1 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 50%, 50%, 0%);
  width:133px;
  height:136px;
  position:absolute;
}
</pre>

<p>This is the top-left corner of the image. It defines a rectangle containing the top-left quarter of the image in the file <code>firefox.jpg</code>.</p>

<pre class="brush: css">#box2 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 100%, 50%, 50%);
  width:133px;
  height:136px;
  position:absolute;
}
</pre>

<p>This defines the top-right corner of the image.</p>

<p>The other corners follow a similar pattern:</p>

<pre class="brush: css">#box3 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 50%, 100%, 0%);
  width:133px;
  height:136px;
  position:absolute;
}
#box4 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 100%, 100%, 50%);
  width:133px;
  height:136px;
  position:absolute;
}
</pre>

<h3 id="HTML">HTML</h3>

<p>The HTML is quite simple:</p>

<pre class="brush: html">&lt;div id="container" onclick="rotate()"&gt;
  &lt;div id="box1" style="left:0px;top:0px;"&gt;Top left&lt;/div&gt;
  &lt;div id="box2" style="left:133px;top:0px;"&gt;Top right&lt;/div&gt;
  &lt;div id="box3" style="left:0px;top:136px;"&gt;Bottom left&lt;/div&gt;
  &lt;div id="box4" style="left:133px;top:136px;"&gt;Bottom right&lt;/div&gt;
&lt;/div&gt;
</pre>

<p>This places the four segments of our image in a two-by-two box grid. These four segments are all contained within a larger {{HTMLElement("div")}} block whose primary purpose is to receive click events and dispatch them to our JavaScript code.</p>

<h3 id="The_JavaScript_code">The JavaScript code</h3>

<p>This code handles the click event when the container receives a mouse click.</p>

<pre class="brush:js">function rotate() {
  var prevStyle = window.getComputedStyle(document.getElementById("box4"), null).getPropertyValue("background-image");

  // Now that we've saved the last one, start rotating

  for (var i=1; i&lt;=4; i++) {
    var curId = "box" + i;

    // Shift the background images

    var curStyle = window.getComputedStyle(document.getElementById(curId), null).getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}</pre>

<p>This uses {{DOMxRef("window.getComputedStyle()")}} to fetch the style of each element, shifting it to the following element. Notice that before it begins doing so it saves a copy of the last box's style since it will be overwritten by the third element's style. By copying the values of the {{CSSxRef("background-image")}} property from one element to the next with each mouse click, we achieve the desired effect.</p>

<h3 id="What_it_looks_like">What it looks like</h3>

<p>{{EmbedLiveSample("Examples","400","400")}}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Mozilla_Extensions">Mozilla CSS extensions</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders">CSS Backgrounds and Borders module</a></li>
</ul>
