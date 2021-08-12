---
title: <time-percentage>
slug: Web/CSS/time-percentage
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - time-percentage
  - units
  - values
browser-compat: css.types.time-percentage
---
<div>{{CSSRef}}</div>

<p>The <strong><code>&lt;time-percentage&gt;</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Types">data type</a> represents a value that can be either a {{Cssxref("time")}} or a {{Cssxref("percentage")}}.</p>

<h2 id="Syntax">Syntax</h2>

<p>Refer to the documentation for {{Cssxref("time")}} and {{Cssxref("percentage")}} for details of the individual syntaxes allowed by this type.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Use_in_calc">Use in calc()</h3>

<p>Where a <code>&lt;time-percentage&gt;</code> is specified as an allowable type, this means that the percentage resolves to a time and therefore can be used in a {{Cssxref("calc()")}} expression.</p>

<h3 id="Valid_percentages">Valid percentages</h3>

<pre>50%
+50%        Optional plus sign
-50%        Negative percentages are not valid for all properties that accept percentages</pre>

<h3 id="Invalid_percentages">Invalid percentages</h3>

<pre class="example-bad">50 %        Space not allowed between the space and the percentage sign</pre>

<h3 id="Valid_times">Valid times</h3>

<pre>12s         Positive integer
-456ms      Negative integer
4.3ms       Non-integer
14mS        The unit is case-insensitive, although capital letters are not recommended.
+0s         Zero with a leading + and a unit
-0ms        Zero with a leading - and a unit
</pre>

<h3 id="Invalid_times">Invalid times</h3>

<pre class="example-bad">0           Although unitless zero is allowed for &lt;length&gt;s, it's invalid for &lt;time&gt;s.
12.0        This is a &lt;number&gt;, not a &lt;time&gt;, because it's missing a unit.
7 ms        No space is allowed between the number and the unit.
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("&lt;percentage&gt;")}}</li>
 <li>{{cssxref("&lt;time&gt;")}}</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Values_and_Units">CSS Values and Units</a></li>
</ul>
