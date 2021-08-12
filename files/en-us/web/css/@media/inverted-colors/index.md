---
title: inverted-colors
slug: Web/CSS/@media/inverted-colors
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.inverted-colors
---
<div>{{CSSRef}}</div>

<p>The <strong><code>inverted-colors</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> can be used to test whether the {{glossary("user agent")}} or underlying OS is inverting colors.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>inverted-colors</code> feature is specified as a keyword value chosen from the list below.</p>

<dl>
 <dt><code>none</code></dt>
 <dd>Colors are displayed normally.</dd>
 <dt><code>inverted</code></dt>
 <dd>All pixels within the displayed area have been inverted.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;If you're using inverted colors, this text should be blue on white (the inverse of yellow on black). If you're not, it should be red on light gray.&lt;/p&gt;
&lt;p&gt;If the text is gray, your browser doesn't support the `inverted-colors` media feature.&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p {
  color: gray;
}

@media (inverted-colors: inverted) {
  p {
    background: black;
    color: yellow;
  }
}

@media (inverted-colors: none) {
  p {
    background: #eee;
    color: red;
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
 <li><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using Media Queries</a></li>
 <li><a href="/en-US/docs/Web/CSS/@media">@media</a></li>
</ul>
