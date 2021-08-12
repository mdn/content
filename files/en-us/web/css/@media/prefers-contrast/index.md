---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
tags:
  - CSS
  - Reference
  - media feature
browser-compat: css.at-rules.media.prefers-contrast
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>The <strong><code>prefers-contrast</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> is used to detect if the user has requested that the web content is presented with a higher (or lower) contrast.</p>

<h2 id="Syntax">Syntax</h2>

<dl>
 <dt><code><dfn>no-preference</dfn></code></dt>
 <dd>Indicates that the user has made no preference known to the system. This keyword value evaluates as false in a Boolean context.</dd>
 <dt><code>more</code></dt>
 <dd>Indicates that user has notified the system that they prefer an interface that has a higher level of contrast.</dd>
 <dt><code><dfn>less</dfn></code></dt>
 <dd>Indicates that user has notified the system that they prefer an interface that has a lower level of contrast.</dd>
</dl>

<h2 id="User_preferences">User preferences</h2>

<p>Various operating systems do support such preferences and user agents are likely to rely on the settings provided by the operating system.</p>

<h2 id="Examples">Examples</h2>

<p>This example has an annoying low contrast by default.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="contrast"&gt;low contrast box&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.contrast {
  width: 100px;
  height: 100px;
  outline: 2px dashed black;
}

@media (prefers-contrast: more) {
  .contrast {
    outline: 2px solid black;
  }
}
</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Microsoft <a href="https://msdn.microsoft.com/library/Hh771830">-ms-high-contrast</a> media feature</li>
 <li>CSS <a href="/en-US/docs/Web/CSS/@media/forced-colors">forced-colors</a> media query</li>
</ul>

<p>{{QuickLinksWithSubpages("/en-US/docs/Web/CSS/@media/")}}</p>
