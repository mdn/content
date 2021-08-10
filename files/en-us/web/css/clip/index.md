---
title: clip
slug: Web/CSS/clip
tags:
  - CSS
  - CSS Masking
  - CSS Property
  - Deprecated
  - Reference
  - 'recipe:css-property'
browser-compat: css.properties.clip
---
<div>{{CSSRef}}</div>

<p>The <strong><code>clip</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> property defines a visible portion of an element. The <code>clip</code> property applies only to absolutely positioned elements — that is, elements with {{cssxref("position","position:absolute")}} or {{cssxref("position","position:fixed")}}.</p>

<pre class="brush:css no-line-numbers">/* Keyword value */
clip: auto;

/* &lt;shape&gt; values */
clip: rect(1px, 10em, 3rem, 2ch);

/* Global values */
clip: inherit;
clip: initial;
clip: revert;
clip: unset;</pre>

<h2 id="Syntax">Syntax</h2>

<div class="note">
<p><strong>Note:</strong> Where possible, authors are encouraged to use the newer {{cssxref("clip-path")}} property instead.</p>
</div>

<h3 id="Values">Values</h3>

<dl>
 <dt>{{cssxref("shape")}}</dt>
 <dd>
  <p>A rectangular {{cssxref("shape")}} of the form <code>rect(&lt;top&gt;, &lt;right&gt;, &lt;bottom&gt;, &lt;left&gt;)</code>. The <code>&lt;top&gt;</code> and <code>&lt;bottom&gt;</code> values are offsets from the <em>inside top border edge</em> of the box, while <code>&lt;right&gt;</code> and <code>&lt;left&gt;</code> are offsets from the <em>inside left border edge</em> of the box — that is, the extent of the padding box.</p>
  <p>The <code>&lt;top&gt;</code>, <code>&lt;right&gt;</code>, <code>&lt;bottom&gt;</code>, and <code>&lt;left&gt;</code> values may be either a {{cssxref("&lt;length&gt;")}} or <code>auto</code>. If any side's value is <code>auto</code>, the element is clipped to that side's <em>inside border edge</em>.</p>
 </dd>
 <dt><code>auto</code></dt>
 <dd>The element does not clip (default). This is different from <code>rect(auto, auto, auto, auto)</code>, which clips to the element's inside border edges.</dd>
</dl>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Clipping_an_image">Clipping an image</h3>

<h4 id="CSS">CSS</h4>

<pre class="brush:css">.dotted-border {
  border: dotted;
  position: relative;
  width: 536px;
  height: 350px;
}

#top-left,
#middle,
#bottom-right {
  position: absolute;
  top: 0;
}

#top-left {
  left: 360px;
  clip: rect(0, 175px, 113px, 0);
}

#middle {
  left: 280px;
  clip: rect(119px, 255px, 229px, 80px);
}

#bottom-right {
  left: 200px;
  clip: rect(235px, 335px, 345px, 160px);
}</pre>

<h4 id="HTML">HTML</h4>

<pre class="brush:html">&lt;p class="dotted-border"&gt;
  &lt;img src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Original graphic"&gt;
  &lt;img id="top-left" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to upper left"&gt;
  &lt;img id="middle" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped towards middle"&gt;
  &lt;img id="bottom-right" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to bottom right"&gt;
&lt;/p&gt;</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Clipping_an_image', '689px', '410px')}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>This property is deprecated. Use {{cssxref("clip-path")}} instead.</li>
 <li>Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow")}}, {{cssxref("display")}}, {{cssxref("position")}}</li>
</ul>
