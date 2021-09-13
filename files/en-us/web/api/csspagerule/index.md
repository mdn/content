---
title: CSSPageRule
slug: Web/API/CSSPageRule
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSPageRule
---
<div>{{APIRef("CSSOM")}}</div>


<p><strong><code>CSSPageRule</code></strong> represents a single CSS {{cssxref("@page")}} rule. </p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its ancestor {{domxref("CSSRule")}}.</em></p>

<dl>
	<dt>{{domxref("CSSPageRule.selectorText")}}</dt>
	<dd>Represents the text of the page selector associated with the at-rule.</dd>
	<dt>{{domxref("CSSPageRule.style")}} {{readonlyinline}}</dt>
	<dd>Returns the <a href="/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block">declaration block</a> associated with the at-rule.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>Inherits methods from its ancestor {{domxref("CSSRule")}}.</em></p>

<h2 id="Examples">Examples</h2>

<p>The stylesheet includes a single {{cssxref("@page")}} rule, therefore the first (and only) rule returned will be a <code>CSSPageRule</code>.</p>

<pre class="brush: css">@page {
  margin: 1cm;
}</pre>

<pre class="brush: js">let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSPageRule
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
