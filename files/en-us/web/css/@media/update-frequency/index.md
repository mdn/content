---
title: update
slug: Web/CSS/@media/update-frequency
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.update
---
<div>{{CSSRef}}</div>

<p>The <strong><code>update</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> can be used to test how frequently (if at all) the output device is able to modify the appearance of content.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>update</code> feature is specified as a single keyword value chosen from the list below.</p>

<dl>
 <dt><code>none</code></dt>
 <dd>Once it has been rendered, the layout can no longer be updated. Example: documents printed on paper.</dd>
 <dt><code>slow</code></dt>
 <dd>The layout may change dynamically according to the usual rules of CSS, but the output device is not able to render or display changes quickly enough for them to be perceived as a smooth animation. Examples: e-book readers or severely underpowered devices.</dd>
 <dt><code>fast</code></dt>
 <dd>The layout may change dynamically according to the usual rules of CSS, and the output device is not unusually constrained in speed, so regularly-updating things like <a href="/en-US/docs/Web/CSS/CSS_Animations">CSS Animations</a> can be used. Example: computer screens.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;If this text animates for you, you are using a fast-updating device.&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@keyframes jiggle {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(25px);
  }
}

@media (update: fast) {
  p {
    animation: 1s jiggle linear alternate infinite;
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
 <li><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using Media Queries</a></li>
 <li><a href="/en-US/docs/Web/CSS/@media">@media</a></li>
</ul>
