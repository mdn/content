---
title: display-mode
slug: Web/CSS/@media/display-mode
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - display
  - display-mode
  - media feature
  - web app manifest
browser-compat: css.at-rules.media.display-mode
---
<div>{{CSSRef}}</div>

<p>The <strong><code>display-mode</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features">media feature</a> can be used to test the display mode of an application. You can use it to provide a consistent user experience between launching a site from a URL and launching it from a desktop icon.</p>

<p>This feature corresponds to the Web app manifest's <a href="/en-US/docs/Web/Manifest#display"><code>display</code></a> member. Both apply to the top-level browsing context and any child browsing contexts. The feature query applies regardless of whether a web app manifest is present.</p>

<h2 id="Syntax">Syntax</h2>

<p>The <code>display-mode</code> feature is specified as a keyword value chosen from the list below.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Display mode</th>
   <th scope="col">Description</th>
   <th scope="col">Fallback display mode</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>fullscreen</code></td>
   <td>All of the available display area is used and no user agent {{glossary("chrome")}} is shown.</td>
   <td><code>standalone</code></td>
  </tr>
  <tr>
   <td><code>standalone</code></td>
   <td>The application will look and feel like a standalone application. This can include the application having a different window, its own icon in the application launcher, etc. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.</td>
   <td><code>minimal-ui</code></td>
  </tr>
  <tr>
   <td><code>minimal-ui</code></td>
   <td>The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. The elements will vary by browser.</td>
   <td><code>browser</code></td>
  </tr>
  <tr>
   <td><code>browser</code></td>
   <td>The application opens in a conventional browser tab or new window, depending on the browser and platform.</td>
   <td>(none)</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<h3 id="The_CSS_is_used_if_the_device_is_at_fullscreen">The CSS is used if the device is at fullscreen</h3>

<pre class="brush: css">@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using Media Queries</a></li>
 <li><a href="/en-US/docs/Web/CSS/@media">@media</a></li>
</ul>
