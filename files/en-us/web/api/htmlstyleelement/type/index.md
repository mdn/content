---
title: HTMLStyleElement.type
slug: Web/API/HTMLStyleElement/type
tags:
- API
- HTML DOM
- HTMLStyleElement
- NeedsMarkupWork
- NeedsSpecTable
- Property
- Read-only
- Deprecated
browser-compat: api.HTMLStyleElement.type
---
<div>
  <div>{{APIRef("HTML DOM")}} {{Deprecated_Header}}</div>
</div>

<p>The <strong><code>HTMLStyleElement.type</code></strong> read-only property returns the
  type of the current style.</p>

<p>For Gecko, the type is most often given as "text/css." From the W3C spec on CSS: "The
  expectation is that binding-specific casting methods can be used to cast down from an
  instance of the CSSRule interface to the specific derived interface implied by the
  type."</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>string</var> = style.type;
</pre>

<h2 id="Example">Example</h2>

<pre class="brush:js">if (newStyle.type != "text/css"){
   // not supported!
   warnCSS();
}</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
