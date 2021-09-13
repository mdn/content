---
title: CSSStyleSheet.replace()
slug: Web/API/CSSStyleSheet/replace
tags:
  - API
  - Method
  - Reference
  - replace
  - CSSStyleSheet
browser-compat: api.CSSStyleSheet.replace
---
<div>{{APIRef("CSSOM")}}</div>

<p>The <strong><code>replace()</code></strong> method of the {{domxref("CSSStyleSheet")}} interface asynchronously replaces the content of the stylesheet with the content passed into it. The method returns a promise that resolves with a <code>CSSStyleSheet</code> object.</p>

<p>The <code>replace()</code> and {{domxref("CSSStyleSheet.replaceSync()")}} methods can only be used on a stylesheet created with the {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} constructor.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">CSSStyleSheet.replace(text);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>text</code></dt>
  <dd>A {{domxref("USVString","string")}} containing the style rules to replace the content of the stylesheet. If the string does not contain a parseable list of rules, then the value will be set to an empty string.</dd>
</dl>

<div class="notecard note">
  <p><strong>Note:</strong> If any of the rules passed in <code>text</code> are an external stylesheet imported with the {{cssxref("@import")}} rule, those rules will be removed, and a warning printed to the console.</p>
</div>

<h3 id="Returns">Return value</h3>

<p>A {{jsxref("Promise")}} that resolves with a {{domxref("CSSStyleSheet")}}.</p>


<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt>{{domxref("DOMException")}} <code>NotAllowedError</code></dt>
  <dd>Thrown if the stylesheet was not created using the {{domxref("CSSStyleSheet.CSSStyleSheet()","CSSStyleSheet()")}} constructor.</dd>
  <dt>{{domxref("DOMException")}} <code>NotAllowedError</code></dt>
  <dd>If the stylesheet is flagged as unmodifiable.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In the following example a new stylesheet is created and two CSS rules are added using <code>replace()</code>. The first rule is then printed to the console, which will return: <code>body { font-size: 1.4em };</code></p>

<pre class="brush: js">let stylesheet = new CSSStyleSheet();

stylesheet.replace('body { font-size: 1.4em };p { color: red; }')
  .then(() => {   console.log(stylesheet.cssRules[0].cssText);
})
.catch(err => {
  console.error('Failed to replace styles:', err);
});</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

