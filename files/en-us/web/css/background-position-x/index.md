---
title: background-position-x
slug: Web/CSS/background-position-x
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Experimental
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.background-position-x
---
<div>{{CSSRef}}</div>

<p>The <strong><code>background-position-x</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the initial horizontal position for each background image. The position is relative to the position layer set by {{cssxref("background-origin")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/background-position-x.html")}}</div>
<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

<p>The value of this property is overridden by any declaration of the {{cssxref("background")}} or {{cssxref("background-position")}} shorthand properties applied to the element after it.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css no-line-numbers">/* Keyword values */
background-position-x: left;
background-position-x: center;
background-position-x: right;

/* &lt;percentage&gt; values */
background-position-x: 25%;

/* &lt;length&gt; values */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* Side-relative values */
background-position-x: right 3px;
background-position-x: left 25%;

/* Multiple values */
background-position-x: 0px, center;

/* Global values */
background-position-x: inherit;
background-position-x: initial;
background-position-x: revert;
background-position-x: unset;
</pre>

<p>The <code>background-position-x</code> property is specified as one or more values, separated by commas.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>left</code></dt>
 <dd>Aligns the left edge of the background image with the left edge of the background position layer.</dd>
 <dt><code>center</code></dt>
 <dd>Aligns the center of the background image with the center of the background position layer.</dd>
 <dt><code>right</code></dt>
 <dd>Aligns the right edge of the background image with the right edge of the background position layer.</dd>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>The offset of the given background image's left vertical edge from the background position layer's left vertical edge. (Some browsers allow assigning the right edge for offset).</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>The offset of the given background image's horizontal position relative to the container. A value of 0% means that the left edge of the background image is aligned with the left edge of the container, and a value of 100% means that the <em>right</em> edge of the background image is aligned with the <em>right</em> edge of the container, thus a value of 50% horizontally centers the background image.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Basic_example">Basic example</h3>

<p>The following example shows a simple background image implementation, with background-position-x and background-position-y used to define the image's horizontal and vertical positions separately.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">div {
  width: 300px;
  height: 300px;
  background-color: skyblue;
  background-image: url(https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png);
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom 10px;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Basic_example', '100%', 300)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>{{Compat}}</div>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("background-position")}}</li>
 <li>{{cssxref("background-position-y")}}</li>
 <li>{{cssxref("background-position-inline")}}</li>
 <li>{{cssxref("background-position-block")}}</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds">Using multiple backgrounds</a></li>
</ul>
