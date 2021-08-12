---
title: background-position-y
slug: Web/CSS/background-position-y
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Experimental
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.background-position-y
---
<div>{{CSSRef}}</div>

<p>The <strong><code>background-position-y</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property sets the initial vertical position for each background image. The position is relative to the position layer set by {{cssxref("background-origin")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/background-position-y.html")}}</div>
<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

<p>The value of this property is overridden by any declaration of the {{cssxref("background")}} or {{cssxref("background-position")}} shorthand properties applied to the element after it.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* Keyword values */
background-position-y: top;
background-position-y: center;
background-position-y: bottom;

/* &lt;percentage&gt; values */
background-position-y: 25%;

/* &lt;length&gt; values */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* Side-relative values */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* Multiple values */
background-position-y: 0px, center;

/* Global values */
background-position-y: inherit;
background-position-y: initial;
background-position-y: revert;
background-position-y: unset;
</pre>

<p>The <code>background-position-y</code> property is specified as one or more values, separated by commas.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>top</code></dt>
 <dd>Aligns the top edge of the background image with the top edge of the background position layer.</dd>
 <dt><code>center</code></dt>
 <dd>Aligns the vertical center of the background image with the vertical center of the background position layer.</dd>
 <dt><code>bottom</code></dt>
 <dd>Aligns the bottom edge of the background image with the bottom edge of the background position layer.</dd>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>The offset of the given background image's horizontal edge from the corresponding background position layer's top horizontal edge. (Some browsers allow assigning the bottom edge for offset).</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>The offset of the given background image's vertical position relative to the container. A value of 0% means that the top edge of the background image is aligned with the top edge of the container, and a value of 100% means that the <em>bottom</em> edge of the background image is aligned with the <em>bottom</em> edge of the container, thus a value of 50% vertically centers the background image.</dd>
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
 <li>{{cssxref("background-position-x")}}</li>
 <li>{{cssxref("background-position-inline")}}</li>
 <li>{{cssxref("background-position-block")}}</li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds">Using multiple backgrounds</a></li>
</ul>
