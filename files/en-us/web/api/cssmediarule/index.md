---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSMediaRule
---
<div>{{ APIRef("CSSOM") }}</div>

<p>The <strong><code>CSSMediaRule</code></strong> interface represents a single CSS {{cssxref("@media")}} rule.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}.</em></p>

<dl>
 <dt>{{domxref("CSSMediaRule.media")}} {{readonlyinline}}</dt>
 <dd>Returns a {{domxref("MediaList")}} representing the intended destination medium for style information.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>No specific methods; inherits methods from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}.</em></p>

<h2 id="Examples">Examples</h2>

<p>
  The CSS includes a media query with one style rule. This will be the first CSSRule returned by <code>document.styleSheets[0].cssRules</code>.
  <code>myRules[0]</code> therefore returns a {{domxref("CSSMediaRule")}} object.
</p>

<pre class="brush: css">@media (min-width: 500px) {
  body {
    color: blue;
  }
}</pre>

<pre class="brush: js">let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSMediaRule representing the media query.</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
