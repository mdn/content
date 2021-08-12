---
title: unset
slug: Web/CSS/unset
tags:
  - CSS
  - CSS Cascade
  - CSS Value
  - Keyword
  - Layout
  - Reference
  - Style
  - unset
browser-compat: css.types.global_keywords.unset
---
<div>{{CSSRef}}</div>

<p>The <strong><code>unset</code></strong> CSS keyword resets a property to its inherited value if the property naturally inherits from its parent, and to its <a href="/en-US/docs/Web/CSS/initial_value">initial value</a> if not. In other words, it behaves like the {{cssxref("inherit")}} keyword in the first case, when the property is an <a href="/en-US/docs/Web/CSS/inheritance#Inherited_properties">inherited property</a>, and like the {{cssxref("initial")}} keyword in the second case, when the property is a <a href="/en-US/docs/Web/CSS/inheritance#Non-inherited_properties">non-inherited property</a>.</p>

<p><strong><code>unset</code></strong> can be applied to any CSS property, including the CSS shorthand {{cssxref("all")}}.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Color">Color</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;This text is red.&lt;/p&gt;
&lt;div class="foo"&gt;
  &lt;p&gt;This text is also red.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="bar"&gt;
  &lt;p&gt;This text is green (default inherited value).&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.foo {
  color: blue;
}
.bar {
  color: green;
}

p {
  color: red;
}
.bar p {
  color: unset;
}
</pre>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Color') }}</p>

<h3 id="Border">Border</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p&gt;This text has a red border.&lt;/p&gt;
&lt;div&gt;
  &lt;p&gt;This text has a red border.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="bar"&gt;
  &lt;p&gt;This text has a black border (initial default, not inherited).&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.bar p {
  border-color: unset;
}
</pre>

<h4 id="Result_2">Result</h4>

<p>{{ EmbedLiveSample('Border', 'auto', 200) }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Use {{cssxref("initial")}} to set a property to its initial value.</li>
 <li>Use {{cssxref("revert")}} to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).</li>
 <li>Use {{cssxref("inherit")}} to make an element's property the same as its parent.</li>
 <li>The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.</li>
</ul>
