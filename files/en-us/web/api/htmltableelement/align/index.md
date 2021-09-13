---
title: HTMLTableElement.align
slug: Web/API/HTMLTableElement/align
tags:
- API
- Deprecated
- HTML DOM
- HTMLTableElement
- NeedsMarkupWork
- NeedsSpecTable
- Property
- Reference
browser-compat: api.HTMLTableElement.align
---
<p>{{APIRef("HTML DOM")}}{{Deprecated_Header}}</p>

<p>The <strong><code>HTMLTableElement.align</code></strong> property represents the
  alignment of the table.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>HTMLTableElement</em>.align = <em>alignment</em>;
var <em>alignment</em> = <em>HTMLTableElement</em>.align;</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>alignment</code></dt>
  <dd>{{DOMxRef("DOMString")}} with one of the following values:
    <ul>
      <li>left</li>
      <li>center</li>
      <li>right</li>
    </ul>
  </dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush:js">// Set the alignment of a table
var t = document.getElementById('TableA');
t.align = 'center';</pre>

<h2 id="Specifications">Specifications</h2>

<ul>
  <li>W3C DOM 2 HTML Specification <a class="external"
      href="https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-23180977"><em>HTMLTableElement</em>
      .align</a>.</li>
</ul>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
