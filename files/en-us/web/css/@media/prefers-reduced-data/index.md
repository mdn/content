---
title: prefers-reduced-data
slug: Web/CSS/@media/prefers-reduced-data
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.prefers-reduced-data
---
<div>{{CSSRef}}{{SeeCompatTable}}{{draft}}</div>

<div class="notecard note">
<p><strong>Note:</strong> This feature is not supported by any user agent and its specifics are subject to change.</p>
</div>

<p>The <strong><code>prefers-reduced-data</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> is used to detect if the user has requested the web content that consumes less internet traffic.</p>

<h2 id="Syntax">Syntax</h2>

<dl>
 <dt><code><dfn>no-preference</dfn></code></dt>
 <dd>Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the boolean context.</dd>
 <dt><code>reduce</code></dt>
 <dd>Indicates that user has expressed the preference for lightweight alternate content.</dd>
</dl>

<h2 id="User_preferences">User preferences</h2>

<p>Currently no user agent implements this feature, although various operating systems do support such preferences and if this media query is ever implemented user agents will likely rely on the settings provided by the operating system.</p>

<h2 id="Examples">Examples</h2>

<div class="notecard note">
<p><strong>Note:</strong> No browser currently implements this feature so the following example will not work.</p>
</div>

<p>In this example the <code>montserrat-regular.woff2</code> font file will neither be preloaded nor downloaded if the user prefers reduced data, in this case the "<a href="https://css-tricks.com/snippets/css/system-font-stack/">system font stack</a>" will serve as the fallback font:</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;head&gt;
  &lt;link rel="preload" href="fonts/montserrat-regular.woff2" as="font" media="(prefers-reduced-data: no-preference)" crossorigin&gt;
  &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">@media (prefers-reduced-data: no-preference) {
    @font-face {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        /* latin */
        src: local('Montserrat Regular'), local('Montserrat-Regular'), url('fonts/montserrat-regular.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
}

body {
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Microsoft YaHei", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
 <li>{{HTTPHeader("Save-Data")}} HTTP header</li>
</ul>
