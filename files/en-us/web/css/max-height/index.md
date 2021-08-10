---
title: max-height
slug: Web/CSS/max-height
tags:
  - CSS
  - CSS Property
  - Layout
  - Maximum
  - Reference
  - dimensions
  - height
  - limit
  - max-height
  - 'recipe:css-property'
  - size
browser-compat: css.properties.max-height
---
<div>{{CSSRef}}</div>

<p>The <strong><code>max-height</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the maximum height of an element. It prevents the <a href="/en-US/docs/Web/CSS/used_value">used value</a> of the {{cssxref("height")}} property from becoming larger than the value specified for <code>max-height</code>.</p>

<div>{{EmbedInteractiveExample("pages/css/max-height.html")}}</div>


<p><code>max-height</code> overrides {{cssxref("height")}}, but {{cssxref("min-height")}} overrides <code>max-height</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; value */
max-height: 3.5em;

/* &lt;percentage&gt; value */
max-height: 75%;

/* Keyword values */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content(20em);

/* Global values */
max-height: inherit;
max-height: initial;
max-height: revert;
max-height: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>Defines the <code>max-height</code> as an absolute value.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>Defines the <code>max-height</code> as a percentage of the containing block's height.</dd>
 <dt><code>none</code></dt>
 <dd>No limit on the size of the box.</dd>
 <dt><code>max-content</code></dt>
 <dd>The intrinsic preferred <code>max-height</code>.</dd>
 <dt><code>min-content</code></dt>
 <dd>The intrinsic minimum <code>max-height</code>.</dd>
 <dt><code>fit-content({{cssxref("&lt;length-percentage&gt;")}})</code></dt>
 <dd>Uses the <code>fit-content</code> formula with the available space replaced by the specified argument, i.e. <code>min(max-content, max(min-content, <var>argument</var>))</code>.</dd>
</dl>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<p>Ensure that elements set with a <code>max-height</code> are not truncated and/or do not obscure other content when the page is zoomed to increase text size.</p>

<ul>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html" rel="noopener">Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_max-height_using_percentage_and_keyword_values">Setting max-height using percentage and keyword values</h3>

<pre class="brush: css">table { max-height: 75%; }

form { max-height: none; }
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">The box model</a>, {{cssxref("box-sizing")}}</li>
 <li>{{Cssxref("height")}}, {{Cssxref("min-height")}}</li>
 <li>The mapped logical properties: {{cssxref("max-inline-size")}}, {{cssxref("max-block-size")}}</li>
</ul>
