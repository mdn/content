---
title: Window.locationbar
slug: Web/API/Window/locationbar
tags:
- API
- HTML DOM
- NeedsExample
- NeedsMarkupWork
- Property
- Reference
- Window
browser-compat: api.Window.locationbar
---
<div>{{APIRef}}</div>

<p>Returns the <code>locationbar</code> object, whose visibility can be checked.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>objRef</var> = window.locationbar
</pre>

<h2 id="Example">Example</h2>

<p>The following complete HTML example shows how the <code>visible</code> property of the
  <code>locationbar</code> object is used.</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;Various DOM Tests&lt;/title&gt;

&lt;script&gt;
var visible = window.locationbar.visible;
&lt;/script&gt;

&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Various DOM Tests&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("window.locationbar")}}, {{domxref("window.menubar")}},
    {{domxref("window.personalbar")}}, {{domxref("window.scrollbars")}},
    {{domxref("window.statusbar")}}, {{domxref("window.toolbar")}}</li>
</ul>
