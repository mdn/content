---
title: Window.parent
slug: Web/API/Window/parent
tags:
- API
- HTML DOM
- NeedsSpecTable
- Property
- Reference
- Window
browser-compat: api.Window.parent
---
<div>{{APIRef}}</div>

<p>The <code><strong>Window.parent</strong></code> property is a reference to the parent
  of the current window or subframe.</p>

<p>If a window does not have a parent, its <code>parent</code> property is a reference to
  itself.</p>

<p>When a window is loaded in an {{htmlelement("iframe")}}, {{htmlelement("object")}}, or
  {{htmlelement("frame")}}, its parent is the window with the element embedding the
  window.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>parentWindow</em> = window.parent;
</pre>

<h2 id="Example">Example</h2>

<pre class="brush:js">if (window.parent != window.top) {
  // We're deeper than one down
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("window.frameElement")}} returns the specific element (such as
    <code>&lt;iframe&gt;</code>) the <code>window</code> is embedded into.</li>
  <li>{{domxref("window.top")}} returns a reference to the top-level window.</li>
</ul>
