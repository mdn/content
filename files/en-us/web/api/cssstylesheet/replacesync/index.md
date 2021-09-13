---
title: CSSStyleSheet.replaceSync()
slug: Web/API/CSSStyleSheet/replaceSync
tags:
  - API
  - Method
  - Reference
  - replaceSync
  - CSSStyleSheet
browser-compat: api.CSSStyleSheet.replaceSync
---
<div>{{APIRef("CSSOM")}}</div>

<p>The <strong><code>replaceSync()</code></strong> method of the {{domxref("CSSStyleSheet")}} interface synchronously replaces the content of the stylesheet with the content passed into it.</p>

<p>The <code>replaceSync()</code> and {{domxref("CSSStyleSheet.replace()")}} methods can only be used on a stylesheet created with the {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} constructor.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">CSSStyleSheet.replaceSync(text);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>text</code></dt>
  <dd>A {{domxref("USVString","string")}} containing the style rules to replace the content of the stylesheet. If the string does not contain a parseable list of rules, then the value will be set to an empty string.</dd>
</dl>

<div class="notecard note">
  <p><strong>Note:</strong> If any of the rules passed in <code>text</code> are an external stylesheet imported with the {{cssxref("@import")}} rule, those rules will be removed, and a warning printed to the console.</p>
</div>

<h3 id="Returns">Return value</h3>

<p>Undefined.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt>{{domxref("DOMException")}} <code>NotAllowedError</code></dt>
  <dd>Thrown if the stylesheet was not created using the {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} constructor.</dd>
  <dt>{{domxref("DOMException")}} <code>NotAllowedError</code></dt>
  <dd>If the stylesheet is flagged as unmodifiable.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In the following example a new stylesheet is created and two CSS rules are added using <code>replaceSync</code>.</p>

<pre class="brush: js">let stylesheet = new CSSStyleSheet();

stylesheet.replaceSync('body { font-size: 1.4em };p { color: red; }');</pre>


<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>


