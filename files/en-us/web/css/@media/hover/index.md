---
title: hover
slug: Web/CSS/@media/hover
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.hover
---
<div>{{CSSRef}}</div>

<p>The <strong><code>hover</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> can be used to test whether the user's <em>primary</em> input mechanism can hover over elements.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>hover</code> feature is specified as a keyword value chosen from the list below.</p>

<dl>
 <dt><code>none</code></dt>
 <dd>The primary input mechanism cannot hover at all or cannot conveniently hover (e.g., many mobile devices emulate hovering when the user performs an inconvenient long tap), or there is no primary pointing input mechanism.</dd>
 <dt><code>hover</code></dt>
 <dd>The primary input mechanism can conveniently hover over elements.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#"&gt;Try hovering over me!&lt;/a&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@media (hover: hover) {
  a:hover {
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
 <li><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using Media Queries</a></li>
 <li><a href="/en-US/docs/Web/CSS/@media">@media</a></li>
</ul>
