---
title: display
slug: Web/Manifest/display
tags:
  - Manifest
  - Web
  - display
browser-compat: html.manifest.display
---
<div>{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Type</th>
   <td><code>String</code></td>
  </tr>
  <tr>
   <th scope="row">Mandatory</th>
   <td>No</td>
  </tr>
 </tbody>
</table>

<p>The <code>display</code> member is a string that determines the developers’ preferred display mode for the website. The display mode changes how much of browser UI is shown to the user and can range from <code>browser</code> (when the full browser window is shown) to <code>fullscreen</code> (when the app is full-screened).</p>

<div class="notecard note">
<p><strong>Note:</strong> If the <code>display</code> member is not specified, it defaults to <code>browser</code>.</p>
</div>

<div class="notecard note">
<p><strong>Note:</strong> You can selectively apply CSS to your app based on the display mode, using the {{cssxref("@media/display-mode", "display-mode")}} media feature. This can be used to provide a consistent user experience between launching a site from an URL and launching it from a desktop icon.</p>
</div>

<h2 id="Values">Values</h2>

<p>The possible values are:</p>

<table class="fullwidth-table standard-table">
 <thead>
  <tr>
   <th scope="col">Display Mode</th>
   <th scope="col">Description</th>
   <th scope="col">Fallback Display Mode</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>fullscreen</code></td>
   <td>All of the available display area is used and no user agent {{Glossary("chrome")}} is shown.</td>
   <td><code>standalone</code></td>
  </tr>
  <tr>
   <td><code>standalone</code></td>
   <td>The application will look and feel like a standalone application. This can include the application having a different window, its own icon in the application launcher, etc. In this mode, the user agent will exclude UI elements for controlling navigation, but can include other UI elements such as a status bar.</td>
   <td><code>minimal-ui</code></td>
  </tr>
  <tr>
   <td><code>minimal-ui</code></td>
   <td>The application will look and feel like a standalone application, but will have a minimal set of UI elements for controlling navigation. The elements will vary by browser.</td>
   <td><code>browser</code></td>
  </tr>
  <tr>
   <td><code>browser</code></td>
   <td>The application opens in a conventional browser tab or new window, depending on the browser and platform. This is the default.</td>
   <td>(None)</td>
  </tr>
 </tbody>
</table>

<h2 id="Example">Example</h2>

<pre class="brush: json">"display": "standalone"
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
