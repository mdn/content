---
title: '::-webkit-inner-spin-button'
slug: 'Web/CSS/::-webkit-inner-spin-button'
tags:
  - CSS
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
browser-compat: css.selectors.-webkit-inner-spin-button
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The <strong><code>::-webkit-inner-spin-button</code></strong> CSS pseudo-element is used to style the inner part of the spinner button of number picker input elements.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">::-webkit-inner-spin-button</pre>

<h2 id="Examples">Examples</h2>

<p>These examples work only in browsers based on WebKit and Blink.</p>

<h3 id="Changing_the_cursor_in_the_spin_controls">Changing the cursor in the spin controls</h3>

<p>In this example, the CSS {{cssxref("cursor")}} is changed to <code>pointer</code> whenever the cursor is positioned over the inner part of the input's spin controls.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;input type="number"&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">input[type=number]::-webkit-inner-spin-button {
  cursor: pointer;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Changing_the_cursor_in_the_spin_controls", 200, 30)}}</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("::-webkit-outer-spin-button")}}</li>
 <li>{{cssxref("::-webkit-textfield-decoration-container")}}</li>
 <li><a href="http://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement">Styling Form Controls – WebKit</a></li>
</ul>
