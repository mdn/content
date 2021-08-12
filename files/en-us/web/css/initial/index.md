---
title: initial
slug: Web/CSS/initial
tags:
  - CSS
  - CSS Cascade
  - CSS Value
  - Default state
  - Initial state
  - Keyword
  - Layout
  - Reference
  - initial
browser-compat: css.types.global_keywords.initial
---
<div>{{CSSRef}}</div>

<p>The <strong><code>initial</code></strong> CSS keyword applies the <a href="/en-US/docs/Web/CSS/initial_value">initial (or default) value</a> of a property to an element. It can be applied to any CSS property. This includes the CSS shorthand {{cssxref("all")}}, with which <code>initial</code> can be used to restore all CSS properties to their initial state.</p>

<p>On <a href="/en-US/docs/Web/CSS/inheritance#Inherited_properties">inherited properties</a>, the initial value may be unexpected. You should consider using the {{cssxref("inherit")}}, {{cssxref("unset")}}, or {{cssxref("revert")}} keywords instead.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Using_initial_to_reset_color_for_an_element">Using initial to reset color for an element</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  &lt;span&gt;This text is red.&lt;/span&gt;
  &lt;em&gt;This text is in the initial color (typically black).&lt;/em&gt;
  &lt;span&gt;This is red again.&lt;/span&gt;
&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p {
  color: red;
}

em {
  color: initial;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Using_initial_to_reset_color_for_an_element')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Use {{cssxref("unset")}} to set a property to its inherited value if it inherits, or to its initial value if not.</li>
 <li>Use {{cssxref("revert")}} to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).</li>
 <li>Use {{cssxref("inherit")}} to make an element's property the same as its parent.</li>
 <li>The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.</li>
</ul>
