---
title: abs()
slug: Web/CSS/abs()
tags:
  - CSS
  - CSS Function
  - Sign-Related
  - Function
  - Layout
  - Reference
  - Web
  - abs
browser-compat: css.types.abs
---
<div>{{CSSRef}}</div>

<p>The <strong><code>abs()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Functions">function</a> contains one calculation, and returns the absolute value of the argument, as the same type as the input.</p>

<p>The <code>abs(A)</code> statement will return <code>A</code> if <code>A</code>’s numeric value is positive or 0⁺. Otherwise it will return the value of <code> -1 * A</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css no-line-numbers">/* property: abs(expression) */
width: abs(20% - 100px);</pre>

<p>The <code>abs()</code> function takes only one expression as its argument.</p>

<h3 id="Formal_syntax">Formal syntax</h3>

{{CSSSyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Positive_variables">Positive variables</h3>

<p>The <code>abs()</code> function can be used to ensure that a value is always positive. In the following  example a CSS custom property <code>--font-size</code> is used as the value of {{CSSxRef("font-size")}}. Wrapping this custom property in <code>abs()</code> will convert a negative value to a positive one.</p>

<pre class="brush: css;">h1 {
  font-size: abs( var( --font-size ) );
}
</pre>


<h3 id="Control_gradient_angle_of_direction">Control gradient angle of direction</h3>

<p>You can also control the gradient direction using <code>abs()</code> function. In the following example, with an angle of -45deg the gradient would start red and transition to blue. By using <code>abs()</code> to make the value positive, the gradient will start blue and transition to red.</p>

<pre class="brush: css;">div {
  --deg: -45deg;
  background-image: linear-gradient( abs( var( --deg ) ), blue, red);
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSSxRef("sign", "sign()")}}</li>
</ul>
