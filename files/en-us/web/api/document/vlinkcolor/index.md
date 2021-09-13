---
title: Document.vlinkColor
slug: Web/API/Document/vlinkColor
tags:
- API
- Deprecated
- Document
- HTML DOM
- NeedsExample
- NeedsSpecTable
- Property
- Reference
browser-compat: api.Document.vlinkColor
---
<div>{{APIRef("DOM")}} {{Deprecated_Header}}</div>

<p>The <code><strong>Document.vlinkColor</strong></code> property gets/sets the color of
  links that the user has visited in the document.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>color</em> = <em>document</em>.vlinkColor
<em>document</em>.vlinkColor = <em>color</em>
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><code>color</code> is a string representing the color as a word (e.g.,
    <code>"red"</code>) or hexadecimal value (e.g., <code>"#ff0000"</code>).</li>
</ul>

<h2 id="Notes">Notes</h2>

<ul>
  <li>The default value for this property in Mozilla Firefox is purple
    (<code>#551a8b</code> in hexadecimal).</li>
  <li><code>Document.vlinkColor</code> is <a class="external"
      href="https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268">deprecated in
      DOM Level 2 HTML</a>.</li>
  <li>The recommended alternative is to get/set the color of the CSS {{
    Cssxref(":visited") }} pseudo-class on HTML {{HtmlElement("a")}} elements (e.g.,
    <code>a:visited {color:red;}</code>).</li>
  <li>Another alternative is <code>document.body.vLink</code>, although this is <a
      class="external"
      href="https://www.w3.org/TR/html401/struct/global.html#adef-vlink">deprecated in
      HTML 4.01</a> in favor of the CSS alternative.</li>
</ul>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
