---
title: CSSRule.parentRule
slug: Web/API/CSSRule/parentRule
tags:
- API
- CSSOM
- CSSRule
- Property
- Reference
browser-compat: api.CSSRule.parentRule
---
<div>{{ APIRef("CSSOM") }}</div>

<p>The <code><strong>parentRule</strong></code> property of the {{domxref("CSSRule")}}
  interface returns the containing rule of the current rule if this exists, or otherwise
  returns null.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <var>parentRule</var> = <var>cssRule</var>.parentRule</pre>

<h3 id="Values">Values</h3>

<dl>
  <dt><code>parentRule</code></dt>
  <dd>A {{domxref("CSSRule")}} which is the type of the containing rules. If the current
    rule is inside a media query, this would return {{domxref("CSSMediaRule")}}. Otherwise
    it returns null.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: css">@media (min-width: 500px) {
  .box {
    width: 100px;
    height: 200px;
    background-color: red;
  }

  body {
    color: blue;
  }
}</pre>

<pre class="brush: js">let myRules = document.styleSheets[0].cssRules;
let childRules = myRules[0].cssRules;
console.log(childRules[0].parentRule); // a CSSMediaRule</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
