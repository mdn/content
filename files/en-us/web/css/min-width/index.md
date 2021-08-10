---
title: min-width
slug: Web/CSS/min-width
tags:
  - CSS
  - CSS Property
  - Horizontal
  - Layout
  - Minimum
  - Reference
  - dimensions
  - min-width
  - 'recipe:css-property'
  - size
  - width
browser-compat: css.properties.min-width
---
<div>{{CSSRef}}</div>

<p>The <strong><code>min-width</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the minimum width of an element. It prevents the <a href="/en-US/docs/Web/CSS/used_value">used value</a> of the {{cssxref("width")}} property from becoming smaller than the value specified for <code>min-width</code>.</p>

<div>{{EmbedInteractiveExample("pages/css/min-width.html")}}</div>


<p>The element's width is set to the value of <code>min-width</code> whenever <code>min-width</code> is larger than {{Cssxref("max-width")}} or {{Cssxref("width")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; value */
min-width: 3.5em;

/* &lt;percentage&gt; value */
min-width: 10%;

/* Keyword values */
min-width: max-content;
min-width: min-content;
min-width: fit-content(20em);

/* Global values */
min-width: inherit;
min-width: initial;
min-width: revert;
min-width: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>Defines the <code>min-width</code> as an absolute value.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>Defines the <code>min-width</code> as a percentage of the containing block's width.</dd>
 <dt><code>auto</code></dt>
 <dd>The browser will calculate and select a <code>min-width</code> for the specified element.</dd>
 <dt><code>max-content</code></dt>
 <dd>The intrinsic preferred <code>min-width</code>.</dd>
 <dt><code>min-content</code></dt>
 <dd>The intrinsic minimum <code>min-width</code>.</dd>
 <dt><code>fit-content({{cssxref("&lt;length-percentage&gt;")}})</code></dt>
 <dd>Uses the <code>fit-content</code> formula with the available space replaced by the specified argument, i.e. <code>min(max-content, max(min-content, <var>argument</var>))</code>.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_minimum_element_width">Setting minimum element width</h3>

<pre class="brush:css;">table { min-width: 75%; }

form { min-width: 0; }
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{Cssxref("width")}}, {{Cssxref("max-width")}}</li>
 <li>The <a href="/en-US/docs/Web/CSS/box_model">box model</a>, {{Cssxref("box-sizing")}}</li>
</ul>
