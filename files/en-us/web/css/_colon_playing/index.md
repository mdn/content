---
title: ':playing'
slug: 'Web/CSS/:playing'
tags:
  - CSS
  - Pseudo-class
  - Reference
  - playing
browser-compat: css.selectors.playing
---
<p>{{CSSRef}}{{SeeCompatTable}}</p>

<p>The <strong><code>:playing</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-classes">pseudo-class</a> selector is a resource state pseudo-class that will match an audio, video, or similar resource that is capable of being “played” or “paused”, when that element is “playing”. </p>

<p>A resource is playing even if in buffering state or paused for any reason other than a user interaction to cause it to be paused.</p>

<pre class="brush: css">:playing {

}</pre>

<h2 id="Syntax">Syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">:playing {
  border: 5px solid green;
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref(":paused")}}</li>
</ul>
