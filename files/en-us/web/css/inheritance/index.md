---
title: Inheritance
slug: Web/CSS/inheritance
tags:
  - CSS
  - Guide
  - Inheritance
  - Layout
  - Web
---
<div>{{CSSRef}}</div>

<p>In CSS, <strong>inheritance</strong> controls what happens when no value is specified for a property on an element.</p>

<p>CSS properties can be categorized in two types:</p>

<ul>
 <li><strong>inherited properties</strong>, which by default are set to the <a href="/en-US/docs/Web/CSS/computed_value">computed value</a> of the parent element</li>
 <li><strong>non-inherited properties</strong>, which by default are set to <a href="/en-US/docs/Web/CSS/Initial_value">initial value</a> of the property</li>
</ul>

<p>Refer to <a href="/en-US/docs/Web/CSS/Reference#Keyword_index">any CSS property</a> definition to see whether a specific property inherits by default ("Inherited: yes") or not ("Inherited: no").</p>

<h2 id="Inherited_properties">Inherited properties</h2>

<p>When no value for an <strong>inherited property</strong> has been specified on an element, the element gets the <a href="/en-US/docs/Web/CSS/computed_value">computed value</a> of that property on its parent element. Only the root element of the document gets the <a href="/en-US/docs/Web/CSS/initial_value">initial value</a> given in the property's summary.</p>

<p>A typical example of an inherited property is the {{ Cssxref("color") }} property. Given the style rules:</p>

<pre class="brush: css">p { color: green; }</pre>

<p>... and the markup:</p>

<pre class="brush: html">&lt;p&gt;This paragraph has &lt;em&gt;emphasized text&lt;/em&gt; in it.&lt;/p&gt;</pre>

<p>... the words "emphasized text" will appear green, since the <code>em</code> element has inherited the value of the {{ Cssxref("color") }} property from the <code>p</code> element. It does <em>not</em> get the initial value of the property (which is the color that is used for the root element when the page specifies no color).</p>

<h2 id="Non-inherited_properties">Non-inherited properties</h2>

<p>When no value for a <strong>non-inherited property</strong> has been specified on an element, the element gets the <a href="/en-US/docs/Web/CSS/initial_value">initial value</a> of that property (as specified in the property's summary).</p>

<p>A typical example of a non-inherited property is the {{ Cssxref("border") }} property. Given the style rules:</p>

<pre class="brush: css"> p { border: medium solid; }</pre>

<p>... and the markup:</p>

<pre class="brush: html">  &lt;p&gt;This paragraph has &lt;em&gt;emphasized text&lt;/em&gt; in it.&lt;/p&gt;</pre>

<p>... the words "emphasized text" will not have a border (since the initial value of {{ Cssxref("border-style") }} is <code>none</code>).</p>

<h2 id="Notes">Notes</h2>

<p>The {{ Cssxref("inherit") }} keyword allows authors to explicitly specify inheritance. It works on both inherited and non-inherited properties.</p>

<p>You can control inheritance for all properties at once using the {{cssxref("all")}} shorthand property, which applies its value to all properties. For example:</p>

<pre class="brush: css">p {
  all: revert;
  font-size: 200%;
  font-weight: bold;
}</pre>

<p>This reverts the style of the paragraphs' {{cssxref("font")}} property to the user agent's default unless a user stylesheet exists, in which case that is used instead. Then it doubles the font size and applies a {{cssxref("font-weight")}} of <code>"bold"</code>.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>CSS values for controlling inheritance: {{ cssxref("inherit") }}, {{cssxref("initial")}}, {{cssxref("unset")}}, and {{cssxref("revert")}}</li>
 <li><a href="/en-US/docs/Web/CSS/Cascade">Introducing the CSS cascade</a></li>
 <li><a href="/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance">Cascade and inheritance</a></li>
 <li>{{ CSS_key_concepts() }}</li>
</ul>
