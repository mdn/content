---
title: object-position
slug: Web/CSS/object-position
tags:
  - CSS
  - CSS Images
  - CSS Property
  - Layout
  - Position
  - Reference
  - Replaced Elements
  - css layout
  - object-position
  - 'recipe:css-property'
browser-compat: css.properties.object-position
---
<div>{{CSSRef}}</div>

<p>The <strong><code>object-position</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property specifies the alignment of the selected <a href="/en-US/docs/Web/CSS/Replaced_element">replaced element</a>'s contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.</p>

<p>You can adjust how the replaced element's object's intrinsic size (that is, its natural size) is adjusted to fit within the element's box using the {{cssxref("object-fit")}} property.</p>

<div>{{EmbedInteractiveExample("pages/css/object-position.html")}}</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:css no-line-numbers">/* &lt;position&gt; values */
object-position: center top;
object-position: 100px 50px;

/* Global values */
object-position: inherit;
object-position: initial;
object-position: revert;
object-position: unset;
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("&lt;position&gt;")}}</dt>
 <dd>From one to four values that define the 2D position of the element. Relative or absolute offsets can be used.</dd>
</dl>

<div class="note">
<p><strong>Note:</strong> The position can be set so that the replaced element is drawn outside its box.</p>
</div>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Positioning_image_content">Positioning image content</h3>

<h4 id="HTML">HTML</h4>

<p>Here we see HTML that includes two {{HTMLElement("img")}} elements, each displaying the MDN logo.</p>

<pre class="brush: html">&lt;img id="object-position-1" src="mdn.svg" alt="MDN Logo"/&gt;
&lt;img id="object-position-2" src="mdn.svg" alt="MDN Logo"/&gt;
</pre>

<h4 id="CSS">CSS</h4>

<p>The CSS includes default styling for the <code>&lt;img&gt;</code> element itself, as well as separate styles for each of the two images.</p>

<pre class="brush: css">img {
  width: 300px;
  height: 250px;
  border: 1px solid black;
  background-color: silver;
  margin-right: 1em;
  object-fit: none;
}

#object-position-1 {
  object-position: 10px;
}

#object-position-2 {
  object-position: 100% 10%;
}
</pre>

<p>The first image is positioned with its left edge inset 10 pixels from the left edge of the element's box. The second image is positioned with its right edge flush against the right edge of the element's box and is located 10% of the way down the height of the element's box.</p>

<h4 id="Result">Result</h4>

<p>{{ EmbedLiveSample('Positioning_image_content', '100%','600px') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Other image-related CSS properties: {{cssxref("object-fit")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.</li>
</ul>
