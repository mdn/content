---
title: color-index
slug: Web/CSS/@media/color-index
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.color-index
---
<div>{{CSSRef}}</div>

<p>The <strong><code>color-index</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> can be used to test the number of entries in the output device's color lookup table.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>color-index</code> feature is specified as an {{cssxref("&lt;integer&gt;")}} value representing the number of entries in the output device's color lookup table. (This value is zero if the device does not use such a table.) It is a range feature, meaning that you can also use the prefixed <strong><code>min-color-index</code></strong> and <code><strong>max-color-index</strong></code> variants to query minimum and maximum values, respectively.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Basic_example">Basic example</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;This is a test.&lt;/p&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p {
  color: black;
}

@media (color-index) {
  p {
    color: red;
  }
}

@media (min-color-index: 15000) {
  p {
    color: #1475ef;
  }
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Basic_example")}}</p>

<h3 id="Custom_stylesheet">Custom stylesheet</h3>

<p>This HTML will apply a special stylesheet for devices that have at least 256 colors.</p>

<pre class="brush: html">&lt;link rel=&quot;stylesheet&quot; href=&quot;http://foo.bar.com/base.css&quot; /&gt;
&lt;link rel=&quot;stylesheet&quot; media=&quot;all and (min-color-index: 256)&quot; href=&quot;http://foo.bar.com/color-stylesheet.css&quot; /&gt;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using Media Queries</a></li>
 <li><a href="/en-US/docs/Web/CSS/@media">@media</a></li>
</ul>
