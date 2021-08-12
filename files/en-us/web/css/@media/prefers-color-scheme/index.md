---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
tags:
  - '@media'
  - CSS
  - Reference
  - Web
  - media feature
  - prefers-color-scheme
browser-compat: css.at-rules.media.prefers-color-scheme
---
<p>The <strong><code>prefers-color-scheme</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> is used to detect if the user has requested a light or dark color theme.</p>

<p>The user might indicate this preference through an operating system setting (e.g. light or dark mode) or a user agent setting.</p>

<h2 id="Syntax">Syntax</h2>

<dl>
 <dt><code><dfn>light</dfn></code></dt>
 <dd>Indicates that user has notified that they prefer an interface that has a light theme, or has not expressed an active preference.</dd>
 <dt><code><dfn>dark</dfn></code></dt>
 <dd>Indicates that user has notified that they prefer an interface that has a dark theme.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The elements below have an initial color theme. They can be further themed according to the user's color scheme preference.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="day"&gt;Day (initial)&lt;/div&gt;
&lt;div class="day light-scheme"&gt;Day (changes in light scheme)&lt;/div&gt;
&lt;div class="day dark-scheme"&gt;Day (changes in dark scheme)&lt;/div&gt; &lt;br&gt;

&lt;div class="night"&gt;Night (initial)&lt;/div&gt;
&lt;div class="night light-scheme"&gt;Night (changes in light scheme)&lt;/div&gt;
&lt;div class="night dark-scheme"&gt;Night (changes in dark scheme)&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.day   { background: #eee; color: black; }
.night { background: #333; color: white; }

@media (prefers-color-scheme: dark) {
  .day.dark-scheme   { background:  #333; color: white; }
  .night.dark-scheme { background: black; color:  #ddd; }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme   { background: white; color:  #555; }
  .night.light-scheme { background:  #eee; color: black; }
}

.day, .night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
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
 <li><a href="/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#view_media_rules_for_prefers-color-scheme">Simulate prefers-color-scheme in Firefox</a> (Firefox Page Inspector > Examine and edit CSS)</li>
 <li><a href="https://www.youtube.com/watch?v=jmepqJ5UbuM">Video tutorial: Coding a Dark Mode for your Website</a></li>
 <li><a href="https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode">Redesigning your product and website for dark mode</a></li>
 <li>Changing color schemes in <a href="https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/">Windows</a>, <a href="https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/">macOS</a>, <a href="https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019">Android</a>, or <a href="https://support.mozilla.org/en-US/questions/1271928">other platforms</a>.</li>
</ul>

<div>{{QuickLinksWithSubpages("/en-US/docs/Web/CSS/@media/")}}</div>
