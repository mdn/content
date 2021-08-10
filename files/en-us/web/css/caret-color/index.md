---
title: caret-color
slug: Web/CSS/caret-color
tags:
  - CSS
  - CSS Property
  - CSS User Interface
  - Editing
  - HTML Colors
  - Input
  - Reference
  - Styling HTML
  - Text Editing
  - caret
  - caret-color
  - contenteditable
  - 'recipe:css-property'
browser-compat: css.properties.caret-color
---
<div>{{CSSRef}}</div>

<p>The <strong><code>caret-color</code></strong> CSS property sets the color of the <strong>insertion caret</strong>, the visible marker where the next character typed will be inserted. This is sometimes referred to as the <strong>text input cursor</strong>. The caret appears in elements such as {{HTMLElement("input")}} or those with the {{htmlattrxref("contenteditable")}} attribute. The caret is typically a thin vertical line that flashes to help make it more noticeable. By default, it is black, but its color can be altered with this property.</p>

<div>{{EmbedInteractiveExample("pages/css/caret-color.html")}}</div>

<p>Note that the insertion caret is only one type of caret. For example, many browsers have a “navigation caret,” which acts similarly to an insertion caret but can be moved around in non-editable text. On the other hand, the mouse cursor image shown when hovering over text where the {{cssxref("cursor")}} property is <code>auto</code>, or when hovering over an element where the <code>cursor</code> property is <code>text</code> or <code>vertical-text</code>, though it sometimes looks like a caret, is not a caret (it’s a cursor).</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css no-line-numbers">/* Keyword values */
caret-color: auto;
caret-color: transparent;
caret-color: currentcolor;

/* &lt;color&gt; values */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0, 200, 0);
caret-color: hsla(228, 4%, 24%, 0.8);

/* Global values */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: unset;</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>The user agent selects an appropriate color for the caret. This is generally {{cssxref("&lt;color&gt;","currentcolor","#currentcolor_keyword")}}, but the user agent may choose a different color to ensure good visibility and contrast with the surrounding content, taking into account the value of <code>currentcolor</code>, the background, shadows, and other factors.
 <div class="note">
 <p><strong>Note:</strong> While user agents may use <code>currentcolor</code> (which is usually animatable) for the <code>auto</code> value, <code>auto</code> is not interpolated in transitions and animations.</p>
 </div>
 </dd>
 <dt>{{cssxref("&lt;color&gt;")}}</dt>
 <dd>The color of the caret.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Setting_a_custom_caret_color">Setting a custom caret color</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;input value="This field uses a default caret." size="64"/&gt;
&lt;input class="custom" value="I have a custom caret color!" size="64"/&gt;
&lt;p contenteditable class="custom"&gt;This paragraph can be
   edited, and its caret has a custom color as well!&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">input {
  caret-color: auto;
  display: block;
  margin-bottom: .5em;
}

input.custom {
  caret-color: red;
}

p.custom {
  caret-color: green;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Setting_a_custom_caret_color', 500, 200)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{HTMLElement("input")}} element</li>
 <li>The HTML {{htmlattrxref("contenteditable")}} attribute, which can be used to make any element's text editable</li>
 <li><a href="/en-US/docs/Web/Guide/HTML/Editable_content">Making content editable</a></li>
 <li><a href="/en-US/docs/Web/HTML/Applying_color">Applying color to HTML elements using CSS</a></li>
 <li>The {{cssxref("&lt;color&gt;")}} data type</li>
 <li>Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}</li>
</ul>
