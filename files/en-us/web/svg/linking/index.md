---
title: Linking
slug: Web/SVG/Linking
tags:
  - Guide
  - SVG
---
<div>{{SVGRef}}</div>

<p>The {{SVGAttr("target")}} attribute on the SVG {{SVGElement("a")}} element doesn't work in Mozilla Firefox 1.5. When SVG documents are embedded within a parent HTML document using the tag:</p>

<p>page1.html:</p>

<pre class="brush: html;">&lt;html&gt;
  &lt;body&gt;
    &lt;p&gt;This is a SVG button:&lt;/p&gt;
    &lt;object width="100" height="50" type="image/svg+xml" data="button.svg"/&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>button.svg:</p>

<pre class="brush: xml">&lt;?xml version="1.1" encoding="UTF-8"?&gt;
&lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;a xlink:href="page2.html" target="_top"&gt;
    &lt;g&gt;
      &lt;!-- button graphical elements here --&gt;
    &lt;/g&gt;
  &lt;/a&gt;
&lt;/svg&gt;
</pre>

<p>The specification says that the browser should navigate to the HTML document page2.html when the button graphics are clicked. However, <code>target</code> does not work with Mozilla's implementation of the SVG <code>&lt;a&gt;</code> element in Firefox 1.5. (The problem will be fixed in Firefox 2.0.)</p>

<p>Anyway, the resultant behavior in Moz SVG is that page2.html will be loaded into the frame where the SVG button was (i.e. you would now have page2.html embedded inside a 100x50 pixel frame inside page1.html).</p>

<p>To get around this, requires a little ugly JavaScript hacking:</p>

<p>button.svg:</p>

<pre class="brush: xml;">&lt;?xml version="1.1" encoding="UTF-8"?&gt;
&lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;g onclick="top.document.href='page2.html'" cursor="pointer"&gt;
    &lt;!-- button graphical elements here --&gt;
  &lt;/g&gt;
&lt;/svg&gt;
</pre>

<h2 id="Example">Example</h2>

<p>For an example of this solution at work see <a href="http://www.codedread.com/">www.codedread.com</a>.</p>
