---
title: monochrome
slug: Web/CSS/@media/monochrome
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.monochrome
---
<div>{{CSSRef}}</div>

<p>The <strong><code>monochrome</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> can be used to test the number of bits per pixel in the monochrome frame buffer of the output device.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>monochrome</code> feature is specified as an {{cssxref("&lt;integer&gt;")}} representing the number of bits per pixel in the monochrome frame buffer. If the device is not a monochrome device, the value is zero. It is a range feature, meaning that you can also use the prefixed <strong><code>min-monochrome</code></strong> and <code><strong>max-monochrome</strong></code> variants to query minimum and maximum values, respectively.</p>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="mono"&gt;Your device supports monochrome pixels!&lt;/p&gt;
&lt;p class="no-mono"&gt;Your device doesn't support monochrome pixels.&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  display: none;
}

/* Any monochrome device */
@media (monochrome) {
  p.mono {
    display: block;
    color: #333;
  }
}

/* Any non-monochrome device */
@media (monochrome: 0) {
  p.no-mono {
    display: block;
    color: #ee3636;
  }
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
