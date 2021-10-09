---
title: <mspace>
slug: Web/MathML/Element/mspace
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.mspace
---
<div>{{MathMLRef}}</div>

<p class="summary">The MathML <code>&lt;mspace&gt;</code> element is used to display a blank space, whose size is set by its attributes.</p>

<h2 id="Attributes">Attributes</h2>

<dl>
 <dt id="attr-class-id-style">class, id, style</dt>
 <dd>Provided for use with <a href="/en-US/docs/Web/CSS">stylesheets</a>.</dd>
 <dt id="attr-depth">depth</dt>
 <dd>The desired depth (below the baseline) of the space (see <a href="/en-US/docs/Web/MathML/Attribute/Values#lengths">length</a> for values and units).</dd>
 <dt id="attr-displaystyle"><code>displaystyle</code></dt>
 <dd>A Boolean value specifying whether more vertical space is used for displayed equations or, if set to <code>false</code>, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when <code>displaystyle</code> is set to <code>true</code>. See also <code>movablelimits</code> on {{ MathMLElement("mo") }}.</dd>
 <dt id="attr-height">height</dt>
 <dd>The desired height (above the baseline) of the space (see <a href="/en-US/docs/Web/MathML/Attribute/Values#lengths">length</a> for values and units).</dd>
 <dt id="attr-mathbackground">mathbackground</dt>
 <dd>The background color. You can use <code>#rgb</code>, <code>#rrggbb</code> and <a href="/en-US/docs/Web/CSS/color_value#color_keywords">HTML color names</a>.</dd>
 <dt id="attr-width">width</dt>
 <dd>The desired width of the space (see <a href="/en-US/docs/Web/MathML/Attribute/Values#lengths">length</a> for values and units).</dd>
</dl>

<p>Note that some common attributes like <code>mathcolor</code>, <code>mathvariant</code> or <code>dir</code> have no effect on <code>&lt;mspace&gt;</code>.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: html">&lt;math&gt;

  &lt;mspace depth="40px" height="20px" /&gt;

  &lt;mspace width="100px" /&gt;

&lt;/math&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Gecko-specific_notes">Gecko-specific notes</h2>

<ul>
 <li><a href="https://www.w3.org/TR/MathML3/chapter3.html#presm.lbindent.attrs">Indentation attributes</a> are not implemented yet (for Gecko see {{ bug("534962") }}).</li>
 <li>Support for negative values for the <code>width</code> attribute has been implemented in Gecko 23.0 {{geckoRelease("23.0")}}.</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{ MathMLElement("mpadded") }}</li>
 <li>{{ MathMLElement("mphantom") }}</li>
</ul>
