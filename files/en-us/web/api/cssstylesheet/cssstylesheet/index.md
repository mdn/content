---
title: CSSStyleSheet.CSSStyleSheet()
slug: Web/API/CSSStyleSheet/CSSStyleSheet
tags:
  - API
  - Constructor
  - Reference
  - CSSStyleSheet
browser-compat: api.CSSStyleSheet.CSSStyleSheet
---
<div>{{APIRef("CSSOM")}}</div>

<p>The <strong><code>CSSStyleSheet()</code></strong> constructor creates a new {{domxref("CSSStyleSheet")}} object which represents a single <a href="/en-US/docs/Glossary/Stylesheet">Stylesheet</a>.</p>

<p>After constructing a stylesheet the {{domxref("CSSStyleSheet.replace()")}} or {{domxref("CSSStyleSheet.replaceSync()")}} methods can be used to add rules to the new stylesheet.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">new CSSStyleSheet();
new CSSStyleSheet(options);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>options</code>{{optional_inline}}</dt>
  <dd>An object containing the following:
    <dl>
      <dt><code>baseURL</code>{{optional_inline}}</dt>
      <dd>A {{domxref("DOMString","string")}} containing the <code>baseURL</code> used to resolve relative URLs in the stylesheet.</dd>
      <dt><code>media</code>{{optional_inline}}</dt>
      <dd>A {{domxref("MediaList")}} containing a list of media rules, or a {{domxref("DOMString","string")}} containing a single rule.</dd>
      <dt><code>disabled</code>{{optional_inline}}</dt>
      <dd>A {{jsxref("Boolean")}} indicating whether the stylesheet is disabled. False by default.</dd>
    </dl>
  </dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In the following example a new {{domxref("CSSStyleSheet")}} is constructed, with a media rule of <code>"print"</code>. Printing {{domxref("StyleSheet.media")}} to the console returns a {{domxref("MediaList")}} with a single entry for this print rule.</p>

<pre class="brush: css">let stylesheet = new CSSStyleSheet({media: 'print'});
console.log(stylesheet.media);</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2>Polyfill</h2>

<ul>
  <li><a href="https://www.npmjs.com/package/construct-style-sheets-polyfill">construct-style-sheets-polyfill</a></li>
</ul>


