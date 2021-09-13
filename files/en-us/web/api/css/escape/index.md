---
title: CSS.escape()
slug: Web/API/CSS/escape
tags:
- API
- CSS
- CSSOM
- Method
- Reference
- Static
- escape()
browser-compat: api.CSS.escape
---
<p>{{APIRef("CSSOM")}}{{SeeCompatTable}}</p>

<p>The <code><strong>CSS.escape()</strong></code> static method returns a
  {{DOMxRef("CSSOMString")}} containing the escaped string passed as parameter, mostly for
  use as part of a CSS selector.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>escapedStr</var> = CSS.escape(<var>str</var>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em>str</em></dt>
  <dd>The {{DOMxRef("CSSOMString")}} to be escaped.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_results">Basic results</h3>

<pre class="brush: js">CSS.escape(".foo#bar")        // "\.foo\#bar"
CSS.escape("()[]{}")          // "\(\)\[\]\\{\\}"
CSS.escape('--a')             // "--a"
CSS.escape(0)                 // "\30 ", the Unicode code point of '0' is 30
CSS.escape('\0')              // "\ufffd", the Unicode REPLACEMENT CHARACTER</pre>

<h3 id="In_context_uses">In context uses</h3>

<p>To escape a string for use as part of a selector, the <code>escape()</code> method can
  be used:</p>

<pre
  class="brush: js;">var element = document.querySelector('#' + CSS.escape(id) + ' &gt; img');</pre>

<p>The <code>escape()</code> method can also be used for escaping strings, although it
  escapes characters that don't strictly need to be escaped:</p>

<pre
  class="brush: js;">var element = document.querySelector('a[href="#' + CSS.escape(fragment) + '"]');</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{DOMxRef("CSS")}} interface where this static method resides.</li>
  <li><a href="https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js">A
      polyfill for the CSS.escape</a></li>
</ul>
