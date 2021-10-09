---
title: <mfenced>
slug: Web/MathML/Element/mfenced
tags:
  - Deprecated
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.mfenced
---
<div>{{MathMLRef}}</div>

<p><span class="seoSummary">The deprecated MathML <code>&lt;mfenced&gt;</code> element used to provide the possibility to add custom opening and closing parentheses (such as brackets) and separators (such as commas or semicolons) to an expression. It has been removed from the latest MathML standard and modern browsers no longer support it.</span> Use the {{MathMLElement("mrow")}} and {{MathMLElement("mo")}} elements instead.</p>

<h2 id="Attributes">Attributes</h2>

<dl>
 <dt id="attr-class-id-style"><code>class</code>, <code>id</code>, <code>style</code></dt>
 <dd>Provided for use with <a href="/en-US/docs/Web/CSS">stylesheets</a>.</dd>
 <dt id="attr-close"><code>close</code></dt>
 <dd>A string for the closing delimiter. The default value is <code>")</code>" and any white space is trimmed.</dd>
 <dt id="attr-href"><code>href</code></dt>
 <dd>Used to set a hyperlink to a specified URI.</dd>
 <dt id="attr-mathbackground"><code>mathbackground</code></dt>
 <dd>The background color. You can use <code>#rgb</code>, <code>#rrggbb</code> and <a href="/en-US/docs/Web/CSS/color_value#color_keywords">HTML color names</a>.</dd>
 <dt id="attr-mathcolor"><code>mathcolor</code></dt>
 <dd>The text color and also the fraction line color. You can use <code>#rgb</code>, <code>#rrggbb</code> and <a href="/en-US/docs/Web/CSS/color_value#color_keywords">HTML color names</a>.</dd>
 <dt id="attr-open"><code>open</code></dt>
 <dd>A string for the opening delimiter. The default value is <code>"("</code> and any white space is trimmed.</dd>
 <dt id="attr-separators"><code>separators</code></dt>
 <dd>A sequence of zero or more characters to be used for different separators, optionally divided by white space, which is ignored. The default value is ",". By specifying more than one character, it is possible to set different separators for each argument in the expression. If there are too many separators, all excess is ignored. If there are too few separators in the expression, the last specified separator is repeated.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="The_last_separator_is_repeated">The last separator is repeated (<code>,</code>)</h3>

<p>Sample rendering: <img alt="{a;b;c,d,e}" src="mfenced01.png"></p>

<p>Rendering in your browser: <math> <mfenced close="}" open="{" separators=";;,"> <mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi> </mfenced> </math></p>

<pre class="brush: html">&lt;math&gt;
  &lt;mfenced open="{" close="}" separators=";;,"&gt;
    &lt;mi&gt;a&lt;/mi&gt;
    &lt;mi&gt;b&lt;/mi&gt;
    &lt;mi&gt;c&lt;/mi&gt;
    &lt;mi&gt;d&lt;/mi&gt;
    &lt;mi&gt;e&lt;/mi&gt;
  &lt;/mfenced&gt;
&lt;/math&gt;
</pre>

<h3 id="All_excess_is_ignored">All excess is ignored (<code>,</code>)</h3>

<p>Sample rendering: <img alt="[a|b|c|d|e]" src="mfenced02.png"></p>

<p>Rendering in your browser: <math> <mfenced close="]" open="[" separators="||||,"> <mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi> </mfenced> </math></p>

<pre class="brush: html">&lt;math&gt;
  &lt;mfenced open="[" close="]" separators="||||,"&gt;
    &lt;mi&gt;a&lt;/mi&gt;
    &lt;mi&gt;b&lt;/mi&gt;
    &lt;mi&gt;c&lt;/mi&gt;
    &lt;mi&gt;d&lt;/mi&gt;
    &lt;mi&gt;e&lt;/mi&gt;
  &lt;/mfenced&gt;
&lt;/math&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>The &lt;mfenced&gt; element is no longer part of the <a href="https://github.com/mathml-refresh/mathml/issues/2">latest MathML standard</a>. Use the {{MathMLElement("mrow")}} and {{MathMLElement("mo")}} elements instead, or, for backwards compatibility, see <a href="https://github.com/mathml-refresh/mathml-polyfills/tree/master/mfenced">mathml-polyfills/mfenced.</a></p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
