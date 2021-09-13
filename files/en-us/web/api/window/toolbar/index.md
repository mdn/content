---
title: Window.toolbar
slug: Web/API/Window/toolbar
tags:
- API
- HTML DOM
- NeedsExample
- NeedsMarkupWork
- Property
- Reference
- Window
browser-compat: api.Window.toolbar
---
<div>{{APIRef}}</div>

<p>The <code><strong>Window.toolbar</strong></code> property returns the toolbar object,
  which can be used to check the browser toolbar visibility.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>objRef</em> = <em>window</em>.toolbar</pre>

<h2 id="Example">Example</h2>

<p>The following complete HTML example demonstrates how the <code>visible</code> property
  of the <code>toolbar</code> object is used.</p>

<pre class="brush:html">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Various DOM Tests&lt;/title&gt;
  &lt;script&gt;
    var visible = window.toolbar.visible;
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
