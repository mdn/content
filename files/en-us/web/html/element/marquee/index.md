---
title: '<marquee>: The Marquee element'
slug: Web/HTML/Element/marquee
tags:
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
  - marquee
browser-compat: html.elements.marquee
---
<div>{{deprecated_header}}</div>

<p>The <strong><code>&lt;marquee&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{DOMxRef("HTMLMarqueeElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">Attributes</h2>

<dl>
 <dt>{{htmlattrdef("behavior")}}</dt>
 <dd>Sets how the text is scrolled within the marquee. Possible values are <code>scroll</code>, <code>slide</code> and <code>alternate</code>. If no value is specified, the default value is <code>scroll</code>.</dd>
 <dt>{{htmlattrdef("bgcolor")}}</dt>
 <dd>Sets the background color through color name or hexadecimal value.</dd>
 <dt>{{htmlattrdef("direction")}}</dt>
 <dd>Sets the direction of the scrolling within the marquee. Possible values are <code>left</code>, <code>right</code>, <code>up</code> and <code>down</code>. If no value is specified, the default value is <code>left</code>.</dd>
 <dt>{{htmlattrdef("height")}}</dt>
 <dd>Sets the height in pixels or percentage value.</dd>
 <dt>{{htmlattrdef("hspace")}}</dt>
 <dd>Sets the horizontal margin</dd>
 <dt>{{htmlattrdef("loop")}}</dt>
 <dd>Sets the number of times the marquee will scroll. If no value is specified, the default value is −1, which means the marquee will scroll continuously.</dd>
 <dt>{{htmlattrdef("scrollamount")}}</dt>
 <dd>Sets the amount of scrolling at each interval in pixels. The default value is 6.</dd>
 <dt>{{htmlattrdef("scrolldelay")}}</dt>
 <dd>Sets the interval between each scroll movement in milliseconds. The default value is 85. Note that any value smaller than 60 is ignored and the value 60 is used instead, unless<code> truespeed </code>is specified.</dd>
 <dt>{{htmlattrdef("truespeed")}}</dt>
 <dd>By default,<code> scrolldelay </code>values lower than 60 are ignored. If<code> truespeed </code>is present, those values are not ignored.</dd>
 <dt>{{htmlattrdef("vspace")}}</dt>
 <dd>Sets the vertical margin in pixels or percentage value.</dd>
 <dt>{{htmlattrdef("width")}}</dt>
 <dd>Sets the width in pixels or percentage value.</dd>
</dl>

<h2 id="Event_handlers">Event handlers</h2>

<dl>
 <dt>{{htmlattrdef("onbounce")}}</dt>
 <dd>Fires when the marquee has reached the end of its scroll position. It can only fire when the behavior attribute is set to <code>alternate</code>.</dd>
 <dt>{{htmlattrdef("onfinish")}}</dt>
 <dd>Fires when the marquee has finished the amount of scrolling that is set by the loop attribute. It can only fire when the loop attribute is set to some number that is greater than 0.</dd>
 <dt>{{htmlattrdef("onstart")}}</dt>
 <dd>Fires when the marquee starts scrolling.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt><code>start()</code></dt>
 <dd>Starts scrolling of the marquee.</dd>
 <dt><code>stop()</code></dt>
 <dd>Stops scrolling of the marquee.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: html">&lt;marquee&gt;This text will scroll from right to left&lt;/marquee&gt;

&lt;marquee direction="up"&gt;This text will scroll from bottom to top&lt;/marquee&gt;

&lt;marquee direction="down" width="250" height="200" behavior="alternate" style="border:solid"&gt;
  &lt;marquee behavior="alternate"&gt;
    This text will bounce
  &lt;/marquee&gt;
&lt;/marquee&gt;</pre>

<p>{{EmbedLiveSample("Examples", 600, 450)}}</p>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{DOMxRef("HTMLMarqueeElement")}}</li>
</ul>
