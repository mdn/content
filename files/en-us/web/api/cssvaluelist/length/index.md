---
title: CSSValueList.length
slug: Web/API/CSSValueList/length
tags:
- API
- CSSValueList
- NeedsExample
- Property
- Read-only
- Reference
- length
- Deprecated
browser-compat: api.CSSValueList.length
---
<div>{{APIRef("CSSOM")}}{{Deprecated_header}}</div>

<p>The <code><strong>length</strong></code> read-only property of the
  {{domxref("CSSValueList")}} interface represents the number of {{domxref("CSSValue")}}s
  in the list. The range of valid values of the indices is <code>0</code> to
  <code>length-1</code> inclusive.</p>

<div class="notecard note">
  <p><strong>Note:</strong> This property was part of an attempt to create a typed CSS Object Model. This attempt has been abandoned, and most browsers do
  not implement it.</p>
  <p>To achieve your purpose, you can use:</p>
  <ul>
    <li>the untyped <a href="CSS_Object_Model">CSS Object Model</a>, widely supported, or</li>
    <li>the modern <a href="CSS_Typed_OM_API">CSS Typed Object Model API</a>, less supported and considered experimental.</li>
  </ul>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <var>length</var> = <var>cssValueList</var>.length;
</pre>

<h3 id="Value">Value</h3>

<p>An <code>unsigned long</code> representing the number of {{domxref("CSSValue")}}s.</p>

<h2 id="Specifications">Specifications</h2>

<p>This feature was originally defined in the <a href="https://www.w3.org/TR/DOM-Level-2-Style">DOM Style Level 2</a> specification, but has been dropped from any
  standardization effort since then.</p>

<p>It has been superseded by a modern, but incompatible, <a href="/en-US/docs/Web/API/CSS_Typed_OM_API">CSS Typed Object Model API</a> that is now on the standard track.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
