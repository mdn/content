---
title: CSSRuleList.length
slug: Web/API/CSSRuleList/length
tags:
  - API
  - Property
  - Reference
  - length
  - CSSRuleList
browser-compat: api.CSSRuleList.length
---
<p>{{ APIRef("CSSOM") }}</p>

<p>The <strong><code>length</code></strong> property of the {{domxref("CSSRuleList")}} interface returns the number of {{domxref("CSSRule")}} objects in the list.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">let length = CSSRuleList.length;</pre>

<h3>Value</h3>
<p>An integer.</p>

<h2 id="Examples">Examples</h2>

<p>In the following example the number of items in the {{domxref("CSSRuleList")}} named <code>myRules</code> is printed to the console.</p>

<pre class="brush: js">let myRules = document.styleSheets[0].cssRules;
console.log(myRules.length);</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

