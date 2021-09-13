---
title: Screen.height
slug: Web/API/Screen/height
tags:
- API
- CSSOM View
- NeedsMarkupWork
- NeedsMobileBrowserCompatibility
- Property
- Reference
browser-compat: api.Screen.height
---
<p>{{APIRef("CSSOM")}}</p>

<p>The <code><strong>Screen.height</strong></code> read-only property returns the height
  of the screen in pixels.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <var>height</var> = window.screen.height</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js;">if (window.screen.availHeight !== window.screen.height) {
   // Something is occupying some screen real estate!
}
</pre>

<h2 id="Notes">Notes</h2>

<p>Note that not all of the height given by this property may be available to the window
  itself. Widgets such as taskbars or other special application windows that integrate
  with the OS (e.g., the Spinner player minimized to act like an additional toolbar on
  windows) may reduce the amount of space available to browser windows and other
  applications.</p>

<p>Internet Explorer will take into account the zoom setting when reporting the screen
  height. It will only return the real height of the screen if the zoom is set to 100%.
</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
