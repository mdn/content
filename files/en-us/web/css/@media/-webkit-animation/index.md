---
title: '-webkit-animation'
slug: Web/CSS/@media/-webkit-animation
tags:
  - '@media'
  - CSS
  - Reference
  - WebKit
  - media feature
browser-compat: css.at-rules.media.-webkit-animation
---
<div>{{ CSSRef }} {{ Non-standard_header }}</div>

<p>The <strong><code>-webkit-animation</code></strong> Boolean <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> is a <a href="/en-US/docs/Web/CSS/WebKit_Extensions">Chrome extension</a> whose value is <code>true</code> if vendor-prefixed CSS {{cssxref("animation")}}s are supported.</p>

<p>Apple has <a href="https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3">a description in Safari CSS Reference</a>.</p>

<div class="note">
<p><strong>Note:</strong> This media feature is only supported by WebKit. If possible, use an {{cssxref("@supports")}} feature query instead.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<p>The <code>-webkit-animation</code> media feature is a Boolean whose value is <code>true</code> if the vendor-prefixed CSS animation properties are supported.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>true</code></dt>
 <dd>The browser supports <code>-webkit</code> prefixed CSS {{cssxref("animation")}}s.</dd>
 <dt><code>false</code></dt>
 <dd>The browser doesn't support these prefixed CSS animations.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Example_of_-webkit-animation">Example of -webkit-animation</h3>

<pre class="brush: css">@media (-webkit-animation) {
  /* CSS to use if animations are supported */
}</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/@media/-webkit-transform-3d"><code>-webkit-transform-3d</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/@media/-webkit-transform-2d"><code>-webkit-transform-2d</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/@media/-webkit-transition"><code>-webkit-transition</code></a></li>
 <li><a href="http://www.quirksmode.org/css/tests/mediaqueries/animation.html">Test page at quirksmode.org</a></li>
</ul>
