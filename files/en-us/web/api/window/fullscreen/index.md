---
title: Window.fullScreen
slug: Web/API/Window/fullScreen
tags:
- API
- HTML DOM
- NeedsMarkupWork
- Non-standard
- Property
- Reference
- Window
browser-compat: api.Window.fullScreen
---
<div>{{APIRef}}{{Non-standard_Header}}</div>

<p>The <code><strong>fullScreen</strong></code> property of the <code>Window</code>
  interface indicates whether the window is displayed in full screen mode or not.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>isInFullScreen</var> = <var>windowRef</var>.fullScreen;
</pre>

<p>With chrome privileges, the property is read-write, otherwise it is read-only. Bear in
  mind that if you try to set this property without chrome privileges, it will not throw
  an exception and instead just silently fail. This is to prevent scripts designed to set
  this property in Internet Explorer from breaking.</p>

<h3 id="Return_Value">Return value</h3>

<dl>
  <dt><code>isInFullScreen</code></dt>
  <dd>A boolean. Possible Values:</dd>
</dl>

<ul>
  <li><code>true</code>: The window is in full screen mode.</li>
  <li><code>false</code>: The window is not in full screen mode.</li>
</ul>

<h2 id="Notes">Notes</h2>

<ul>
  <li>Switching between regular window and full screen will fire the "resize" event on the
    corresponding window.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">if (window.fullScreen) {
  // it's fullscreen!
}
else {
  // not fullscreen!
}</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
