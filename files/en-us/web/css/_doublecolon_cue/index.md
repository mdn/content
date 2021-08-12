---
title: '::cue'
slug: Web/CSS/::cue
tags:
  - '::cue'
  - CSS
  - Media
  - Pseudo-element
  - Reference
  - Selector
  - Web Video Text Tracks
  - WebVTT
  - cue
browser-compat: css.selectors.cue
---
<div>{{CSSRef}}</div>

<p>The <strong><code>::cue</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Pseudo-elements">pseudo-element</a> matches <a href="/en-US/docs/Web/API/WebVTT_API">WebVTT</a> cues within a selected element. This can be used to <a href="/en-US/docs/Web/API/WebVTT_API#styling_webtt_cues">style captions and other cues</a> in media with VTT tracks.</p>

<pre class="brush: css no-line-numbers">::cue {
  color: yellow;
  font-weight: bold;
}</pre>

<p>The properties are applied to the entire set of cues as if they were a single unit. The only exception is that <code>background</code> and its longhand properties apply to each cue individually, to avoid creating boxes and obscuring unexpectedly large areas of the media.</p>

<h2 id="Syntax">Syntax</h2>

{{CSSSyntax}}

<h2 id="Permitted_properties">Permitted properties</h2>

<p>Rules whose selectors include this element may only use the following CSS properties:</p>

<ul>
 <li><a href="/en-US/docs/Web/CSS/background"><code>background</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/background-attachment"><code>background-attachment</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/background-clip"><code>background-clip</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/background-color"><code>background-color</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/background-image"><code>background-image</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/background-origin"><code>background-origin</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/background-position"><code>background-position</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/background-repeat"><code>background-repeat</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/background-size"><code>background-size</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/color"><code>color</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/font"><code>font</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/font-family"><code>font-family</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/font-size"><code>font-size</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/font-stretch"><code>font-stretch</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/font-style"><code>font-style</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/font-variant"><code>font-variant</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/font-weight"><code>font-weight</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/line-height"><code>line-height</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/opacity"><code>opacity</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/outline"><code>outline</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/outline-color"><code>outline-color</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/outline-style"><code>outline-style</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/outline-width"><code>outline-width</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/ruby-position"><code>ruby-position</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/text-combine-upright"><code>text-combine-upright</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/text-decoration"><code>text-decoration</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/text-decoration-color"><code>text-decoration-color</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/text-decoration-line"><code>text-decoration-line</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/text-decoration-style"><code>text-decoration-style</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/text-decoration-thickness"><code>text-decoration-thickness</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/text-shadow"><code>text-shadow</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/visibility"><code>visibility</code></a></li>
 <li><a href="/en-US/docs/Web/CSS/white-space"><code>white-space</code></a></li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Styling_WebVTT_cues_as_white-on-black">Styling WebVTT cues as white-on-black</h3>

<p>The following CSS sets the cue style so that the text is white and the background is a translucent black box.</p>

<pre class="brush: css">::cue {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebVTT_API">Web Video Tracks Format (WebVTT)</a></li>
 <li>{{HTMLElement("track")}}, {{HTMLElement("video")}}</li>
</ul>
