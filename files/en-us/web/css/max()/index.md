---
title: max()
slug: Web/CSS/max()
tags:
  - CSS
  - CSS Function
  - Calculate
  - Compute
  - Function
  - Layout
  - Reference
  - Web
  - max
browser-compat: css.types.max
---
<div>{{CSSRef}}</div>

<p>The <strong><code>max()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Functions">function</a> lets you set the largest (most positive) value from a list of comma-separated expressions as the value of a CSS property value. The <code>max()</code> function can be used anywhere a {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, or {{CSSxRef("&lt;integer&gt;")}} is allowed.</p>

<div>{{EmbedInteractiveExample("pages/css/function-max.html")}}</div>

<p>In the first above example, the width will be at least 400px, but will be wider if the viewport is more than 2000px wide (in which case 1vw would be 20px, so 20vw would be 400px). Think of the <code>max()</code> value as providing the <em>minimum</em> value a property can have.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>max()</code> function takes one or more comma-separated expressions as its parameter, with the largest (most positive) expression value used as the value of the property to which it is assigned.</p>

<p>The expressions can be math expressions (using arithmetic operators), literal values, or other expressions, such as {{CSSxRef("attr()", "attr()")}}, that evaluate to a valid argument type (like {{CSSxRef("&lt;length&gt;")}}), or nested {{CSSxRef("min()", "min()")}} and <code>max()</code> functions.</p>

<p>You can use different units for each value in your expression. You may also use parentheses to establish computation order when needed.</p>

<h3 id="Notes">Notes</h3>

<ul>
 <li>Math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables <em>may</em> be treated as if <code>auto</code> had been specified.</li>
 <li>It is permitted to nest <code>min()</code> and other <code>max()</code> functions as expression values. The expressions are full math expressions, so you can use direct addition, subtraction, multiplication and division without using the calc() function itself.</li>
 <li>The expression can be values combining the addition ( + ), subtraction ( - ), multiplication ( * ) and division ( / ) operators, using standard operator precedence rules. Make sure to put a space on each side of the + and - operands. The operands in the expression may be any &lt;length&gt; syntax value.</li>
 <li>You can (and often need to) combine <code>min()</code> and <code>max()</code> values, or use <code>max()</code> within a <code>clamp()</code> or <code>calc()</code> function.</li>
</ul>

<h3 id="Formal_syntax">Formal syntax</h3>

{{CSSSyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_a_minimum_size_for_a_font">Setting a minimum size for a font</h3>

<p>Another use case for CSS functions is allow a font size to grow while ensuring it is at least a minimum size, enabling responsive font sizes while ensuring legibility.</p>

<p>Let's look at some CSS:</p>

<pre class="brush: css;">h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
</pre>

<p>The font-size will at minimum be 2rems, or twice the default size of font for the page. This ensure it is legible and ensures accessibility</p>

<pre class="brush: html;">&lt;h1&gt;This text is always legible, but doesn't change size&lt;/h1&gt;
&lt;h1 class="responsive"&gt;This text is always legible, and is responsive, to a point&lt;/h1&gt;
</pre>

<p>{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}</p>

<p>Think of the <code>max()</code> function as finding the minimum value allowed for a property.</p>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<p>When <code>max()</code> is used for controlling text size, make sure the text is always large enough to read. A suggestion is to use the {{CSSxRef("min()", "min()")}} function nested within a <code>max()</code> that has as its second value a <a href="/en-US/docs/Web/CSS/length#relative_length_units">relative length unit</a> that is always large enough to read. For example:</p>

<pre class="brush: css;">small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}</pre>

<p>This ensures a minimum size of <em>1rem</em>, with a text size that scales if the page is zoomed.</p>

<ul>
 <li><a href="/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html">Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSSxRef("calc()", "calc()")}}</li>
 <li>{{CSSxRef("clamp()", "clamp()")}}</li>
 <li>{{CSSxRef("min()", "min()")}}</li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Values_and_units">CSS Values</a></li>
</ul>
