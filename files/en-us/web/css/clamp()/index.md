---
title: clamp()
slug: Web/CSS/clamp()
tags:
  - CSS
  - CSS Function
  - Calculate
  - Compute
  - Function
  - Layout
  - Reference
  - Web
  - clamp
browser-compat: css.types.clamp
---
<div>{{CSSRef}}</div>

<p>The <strong><code>clamp()</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/CSS_Functions">function</a> clamps a value between an upper and lower bound. <code>clamp()</code> enables selecting a middle value within a range of values between a defined minimum and maximum. It takes three parameters: a minimum value, a preferred value, and a maximum allowed value. The <code>clamp()</code> function can be used anywhere a {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, or {{CSSxRef("&lt;integer&gt;")}} is allowed.</p>

<p><code>clamp(MIN, VAL, MAX)</code> is resolved as <code>{{CSSxRef("max()")}}(MIN, {{CSSxRef("min()")}}(VAL, MAX))</code></p>

<div>{{EmbedInteractiveExample("pages/css/function-clamp.html")}}</div>

<p>Note that using <code>clamp()</code> for font sizes, as in these examples, allows you to set a font-size that grows with the size of the viewport, but doesn't go below a minimum font-size or above a maximum font-size. It has the same effect as the code in <a href="https://css-tricks.com/snippets/css/fluid-typography/">Fluid Typography</a> but in one line, and without the use of media queries.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>clamp()</code> function takes three comma separated expressions as its parameter, in the order of minimum value, preferred value, maximum value.</p>

<p>The minimum value is the smallest (most negative) value. This is the lower bound in the range of allowed values. If the preferred value is less than this value, the minimum value will be used.</p>

<p>The preferred value is the expression whose value will be used as long as the result is between the minimum and maximum values.</p>

<p>The maximum value is the largest (most positive) expression value to which the value of the property will be assigned if the preferred value is greater than this upper bound.</p>

<p>The expressions can be math functions (see {{CSSxRef("calc()")}} for more information), literal values, or other expressions, such as {{CSSxRef("attr()")}}, that evaluate to a valid argument type (like {{CSSxRef("&lt;length&gt;")}}), or nested {{CSSxRef("min()")}} and {{CSSxRef("max()")}} functions. As math expressions, so you can use addition, subtraction, multiplication and division without using the <code>calc()</code> function itself. You may also use parentheses to establish computation order when needed.</p>

<p>You can use different units for each value in your expressions, and different units in any math function making up any of the arguments.</p>

<h3 id="Notes">Notes</h3>

<ul>
 <li>Math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables <em>may</em> be treated as if <code>auto</code> had been specified.</li>
 <li>It is permitted to nest <code>max()</code> and <code>min()</code> functions as expression values, in which case the inner ones are treated as simple parentheses. The expressions are full math expressions, so you can use direct addition, subtraction, multiplication and division without using the calc() function itself.</li>
 <li>The expression can be values combining the addition ( + ), subtraction ( - ), multiplication ( * ) and division ( / ) operators, using standard operator precedence rules. Make sure to put a space on each side of the + and - operands. The operands in the expression may be any {{CSSxRef("&lt;length&gt;")}} syntax value. You can use different units for each value in your expression. You may also use parentheses to establish computation order when needed.</li>
 <li>Oftentimes you will want to use {{CSSxRef("min()")}} and {{CSSxRef("max()")}} within a <code>clamp()</code> function.</li>
</ul>

<h3 id="Formal_syntax">Formal syntax</h3>

{{CSSSyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="min_max_and_clamp_comparison">min, max, and clamp comparison</h3>

<p>In this example we have a simple responsive example that makes use of {{CSSxRef("min()")}}, {{CSSxRef("max()")}}, and {{CSSxRef("clamp()")}} for some of the sizes.</p>

<p>The <code><a href="/en-US/docs/Web/HTML/Element/body">&lt;body&gt;</a></code> element's <code><a href="/en-US/docs/Web/CSS/width">width</a></code> is set as <code>min(1000px, calc(70% + 100px))</code>. This means that the width will be set at <code>1000px</code>, unless the result of <code>calc(70% + 100px)</code> is less than <code>1000px</code>, in which case it will be set to that value instead. <code>min()</code> allows you set a maximum value.</p>

<p>The <code><a href="/en-US/docs/Web/HTML/Element/p">&lt;p&gt;</a></code> element's <code><a href="/en-US/docs/Web/CSS/font-size">font-size</a></code> is set as <code>max(1.2rem, 1.2vw)</code>. This means that the <code>font-size</code> will be set at <code>1.2rem</code>, unless the computed value of <code>1.2vw</code> is greater than that of <code>1.2rem</code>, in which case it will be set to that value instead. <code>max()</code> allows you set a minimum value, which in cases like this is useful for accessibility purposes.</p>

<p>The <code><a href="/en-US/docs/Web/HTML/Element/Heading_Elements">&lt;h1&gt;</a></code> element's <code>font-size</code> is set as <code>clamp(1.8rem, 2.5vw, 2.8rem)</code>. This means that the <code>font-size</code> will be set at <code>1.8rem</code>, until the computed value of <code>2.5vw</code> becomes greater than that of <code>1.8rem</code>. At this point, <code>font-size</code> will be set at <code>2.5vw</code>, until <code>2.5vw</code>'s computed value becomes greater than that of <code>2.8rem</code>. At this point, the <code>font-size</code> will be set at <code>2.8rem</code>. <code>clamp()</code> allows you to set a minimum and maximum value.</p>

<p>You find this <a href="https://mdn.github.io/css-examples/min-max-clamp/">example live on GitHub</a>, if you want to play around with it.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;h1&gt;Simple responsive test&lt;/h1&gt;
&lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci orci, eleifend id risus nec, mattis rutrum velit. Suspendisse fringilla egestas erat eu convallis. Phasellus eu velit ut magna dapibus elementum cursus at ligula. Ut tempus varius nibh, nec auctor sapien iaculis sit amet. Fusce iaculis, libero quis elementum viverra, nulla ante accumsan lectus, sit amet convallis lacus ipsum vel est. Curabitur et urna non est consectetur pulvinar vel id risus. Ut vestibulum, sem in semper aliquet, felis arcu euismod sapien, ac imperdiet massa nisl quis sem. Vestibulum ac elementum felis, in tempor velit. Pellentesque purus ex, mattis at ornare quis, porta condimentum mi. Donec vestibulum ligula vel nulla blandit, quis euismod nulla vestibulum. Suspendisse potenti. Nunc neque mauris, tempor sed facilisis at, ultrices eget nulla. Pellentesque convallis ante nec augue porttitor, id tempus ante luctus.&lt;/p&gt;

&lt;p&gt;Integer rutrum sollicitudin tellus, quis cursus nulla scelerisque nec. Nunc eu facilisis lorem. Maecenas faucibus sapien eleifend, semper tellus at, pharetra quam. Cras feugiat vulputate tortor at rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non felis quis sem lobortis sodales vel id libero. Phasellus sit amet placerat lorem. &lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">html {
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: min(1000px, calc(70% + 100px));
}

h1 {
  letter-spacing: 2px;
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}

p {
  line-height: 1.5;
  font-size: max(1.2rem, 1.2vw);
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{CSSxRef("calc()")}}</li>
 <li>{{CSSxRef("max()")}}</li>
 <li>{{CSSxRef("min()")}}</li>
 <li><a href="/en-US/docs/Learn/CSS/Building_blocks/Values_and_units">CSS Values</a></li>
</ul>
