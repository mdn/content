---
title: margin-inline
slug: Web/CSS/margin-inline
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - margin-inline
  - 'recipe:css-shorthand-property'
browser-compat: css.properties.margin-inline
---
<div>{{CSSRef}}</div>

<p>The <strong><code>margin-inline</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Shorthand_properties">shorthand property</a> is a shorthand property that defines both the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.</p>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; values */
margin-inline: 10px 20px;  /* An absolute length */
margin-inline: 1em 2em;    /* relative to the text size */
margin-inline: 5% 2%;      /* relative to the nearest block container's width */
margin-inline: 10px;       /* sets both start and end values */

/* Keyword values */
margin-inline: auto;

/* Global values */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: unset;
</pre>

<p>This property corresponds to the {{CSSxRef("margin-top")}} and {{CSSxRef("margin-bottom")}}, or the {{CSSxRef("margin-right")}} and {{CSSxRef("margin-left")}} properties, depending on the values defined for {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, and {{CSSxRef("text-orientation")}}.</p>

<h2 id="Constituent_properties">Constituent properties</h2>

<p>This property is a shorthand for the following CSS properties:</p>

<ul>
 <li><a href="/en-US/docs/Web/CSS/margin-inline-start"><code>margin-inline-start</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/margin-inline-end"><code>margin-inline-end</code></a></li>
</ul>

<p>If 2 values are specified, the first value sets the start, the second value sets the end. If 1 value is specified, it sets both properties with the same value.</p>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<p>The <code>margin-inline</code> property takes the same values as the {{CSSxRef("margin-left")}} property.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_inline_start_and_end_margins">Setting inline start and end margins</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-inline: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;p&gt;Example text&lt;/p&gt;
&lt;/div&gt;
&lt;div class="verticalExample"&gt;
  &lt;p&gt;Example text&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Setting_inline_start_and_end_margins", 140, 240)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The mapped physical properties: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, and {{CSSxRef("margin-left")}}</li>
 <li>{{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}</li>
</ul>
