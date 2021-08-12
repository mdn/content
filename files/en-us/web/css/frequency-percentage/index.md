---
title: <frequency-percentage>
slug: Web/CSS/frequency-percentage
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - frequency-percentage
  - units
  - values
browser-compat: css.types.frequency-percentage
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>The <strong><code>&lt;frequency-percentage&gt;</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Types">data type</a> represents a value that can be either a {{Cssxref("frequency")}} or a {{Cssxref("percentage")}}. Frequency values, e.g. the pitch of a speaking voice, are not currently used in any CSS properties.</p>

<h2 id="Syntax">Syntax</h2>

<p>The value of a <code>&lt;frequency-percentage&gt;</code> is either a {{Cssxref("frequency")}} or a {{Cssxref("percentage")}}; see their individual reference pages for details about their syntaxes.</p>

<h2 id="Description">Description</h2>

<h3 id="Use_in_calc">Use in calc()</h3>

<p>Where a <code>&lt;frequency-percentage&gt;</code> is specified as an allowable type, this means that the percentage resolves to a frequency and therefore can be used in a <code><a href="/en-US/docs/Web/CSS/calc">calc()</a></code> expression.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Valid_percentage_values">Valid percentage values</h3>

<pre>90% Positive percentage
+90% Positive percentage with leading +
-90% Negative percentage — not valid for all properties that use percentages</pre>

<h3 id="Invalid_percentage_values">Invalid percentage values</h3>

<pre class="example-bad">90 % No space is allowed between the number and the unit</pre>

<h3 id="Valid_frequency_values">Valid frequency values</h3>

<pre>12Hz     Positive integer
4.3Hz    Non-integer
14KhZ    The unit is case-insensitive, though non-SI capitalization is not recommended.
+0Hz     Zero, with a leading + and a unit
-0kHz    Zero, with a leading - and a unit</pre>

<h3 id="Invalid_frequency_values">Invalid frequency values</h3>

<pre class="example-bad">12.0     This is a &lt;number&gt;, not an &lt;frequency&gt;, because it is missing a unit.
7 Hz     No space is allowed between the number and the unit.
0        Although unitless zero is an allowable &lt;length&gt;, it's an invalid &lt;frequency&gt;.</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Types">CSS data types</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Values_and_Units">CSS Values and Units</a></li>
 <li>Related CSS data types:
  <ul>
   <li>{{cssxref("frequency", "&lt;frequency&gt;")}}</li>
   <li>{{cssxref("percentage", "&lt;percentage&gt;")}}</li>
  </ul>
 </li>
</ul>
