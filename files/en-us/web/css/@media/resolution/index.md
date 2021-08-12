---
title: resolution
slug: Web/CSS/@media/resolution
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.resolution
---
<div>{{CSSRef}}</div>

<p>The <strong><code>resolution</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> can be used to test the pixel density of the output device.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>resolution</code> feature is specified as a {{cssxref("&lt;resolution&gt;")}} value representing the pixel density of the output device. It is a range feature, meaning that you can also use the prefixed <strong><code>min-resolution</code></strong> and <code><strong>max-resolution</strong></code> variants to query minimum and maximum values, respectively.</p>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;This is a test of your device's pixel density.&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">/* Exact resolution */
@media (resolution: 150dpi) {
  p {
    color: red;
  }
}

/* Minimum resolution */
@media (min-resolution: 72dpi) {
  p {
    text-decoration: underline;
  }
}

/* Maximum resolution */
@media (max-resolution: 300dpi) {
  p {
    background: yellow;
  }
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("window.devicePixelRatio")}}</li>
 <li>The {{cssxref("image-resolution")}} property</li>
</ul>
