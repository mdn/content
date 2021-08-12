---
title: '-ms-high-contrast'
slug: Web/CSS/@media/-ms-high-contrast
tags:
  - '@media'
  - CSS
  - Non-standard
  - Reference
  - media feature
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>The <strong>-ms-high-contrast</strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> is a <a href="/en-US/docs/Web/CSS/Microsoft_Extensions">Microsoft extension</a> that describes whether the application is being displayed in high contrast mode, and with what color variation.</p>

<p>High Contrast Mode is a specialized display mode that prioritizes making content as legible as possible by dynamically replacing foreground and background colors with a user-specified theme. For web content, theme colors are mapped to content types.</p>

<p>This media feature applies to bitmap media types. It does not accept <em>min/max</em> prefixes.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <strong><code>-ms-high-contrast</code></strong> media feature is specified as one of the following values.</p>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>none</code> {{Deprecated_Inline}}</dt>
 <dd>...<br>
 <strong>No longer supported as of Microsoft Edge 18.</strong></dd>
 <dt><code>active</code></dt>
 <dd>
 <p>Indicates that the subsequent styling rules will be applied when the system is placed in high contrast mode with any color variation.</p>
 </dd>
 <dt><code>black-on-white</code></dt>
 <dd>
 <p>Indicates that the subsequent styling rules will be applied when the system is placed in high contrast mode with a black-on-white color variation.</p>
 </dd>
 <dt><code>white-on-black</code></dt>
 <dd>
 <p>Indicates that the subsequent styling rules will be applied when the system is placed in high contrast mode with a white-on-black color variation.</p>
 </dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Matching_any_high-contrast_variations">Matching any high-contrast variations</h3>

<pre class="brush: css">@media screen and (-ms-high-contrast: active) {
  /* All high contrast styling rules */
}
</pre>

<h3 id="Matching_a_black-on-white_variation">Matching a black-on-white variation</h3>

<pre class="brush: css">@media screen and (-ms-high-contrast: black-on-white) {
  div { background-image: url('image-bw.png'); }
}</pre>

<h3 id="Matching_a_white-on-black_variation">Matching a white-on-black variation</h3>

<pre class="brush: css">@media screen and (-ms-high-contrast: white-on-black) {
  div { background-image: url('image-wb.png'); }
}</pre>

<h2 id="Accessibility_concerns">Accessibility concerns</h2>

<h3 id="Theming">Theming</h3>

<p>High Contrast Mode's theme colors come from a limited subset of deprecated <a href="https://www.w3.org/TR/2018/REC-css-color-3-20180619/#css2-system">CSS2 system colors</a>. The available color keywords are:</p>

<ul>
 <li><code>windowText</code>: controls the color of text content.</li>
 <li><code>highlightText</code>: controls the color of selected text.</li>
 <li><code>highlight</code>: controls the background color of selected text.</li>
 <li><code>buttonFace</code>: controls the color of a {{HTMLElement("button")}} element's text.</li>
 <li><code>window</code>: controls the color of the background.</li>
 <li>The {{HTMLElement("a")}} element controls the color of links.</li>
</ul>

<p>Because High Contrast Mode themes are dynamic, use these color keywords in place of other <a href="/en-US/docs/Web/CSS/color">CSS color values</a>. This will ensure that content will always be able to be perceived.</p>

<h3 id="Content">Content</h3>

<p>If at all possible, prefer updating HTML markup over modifying content using CSS2 system color keywords. This helps keep the content more predictable.</p>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any standard.</p>

<h2 id="Remarks">Remarks</h2>

<p>As of Microsoft Edge 18, <code>-ms-high-contrast: none</code> is no longer supported. Microsoft Edge versions 18 and higher will be using the <a href="/en-US/docs/Web/CSS/@media/forced-colors"><code>forced-colors</code> media feature</a> instead, but the <code>forced-colors</code> media feature specification is still being actively worked on.</p>

<p>The <code>-ms-high-contrast</code> media feature works with the {{CSSxRef("-ms-high-contrast-adjust")}} property.</p>

<p>The <code>-ms-high-contrast</code> media feature was introduced in Windows 8.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using Media Queries</a></li>
 <li><a href="/en-US/docs/Web/CSS/@media">@media</a></li>
</ul>
