---
title: Element.requestFullscreen()
slug: Web/API/Element/requestFullScreen
tags:
  - API
  - DOM
  - Element
  - Full
  - Fullscreen API
  - Graphics
  - Method
  - Reference
  - Video
  - full screen
  - fullscreen
  - requestFullscreen
  - screen
browser-compat: api.Element.requestFullscreen
---
<div>{{APIRef("Fullscreen API")}}</div>

<p>The <code><strong>Element.requestFullscreen()</strong></code>
    method issues an asynchronous request to make the element be displayed in full-screen
    mode.</p>

<p>It's not guaranteed that the element will be put into full screen mode. If permission
  to enter full screen mode is granted, the returned {{JSxRef("Promise")}} will resolve
  and the element will receive a {{Event("fullscreenchange")}} event to let it know that
  it's now in full screen mode. If permission is denied, the promise is rejected and the
  element receives a {{Event('fullscreenerror')}} event instead. If the element has been
  detached from the original document, then the document receives these events instead.
</p>

<div class="note">
  <p><strong>Note:</strong> This method must be called while responding to a user
    interaction or a device orientation change; otherwise it will fail.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var promise = element.requestFullscreen(options);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>options</code> {{optional_inline}}</dt>
  <dd>An object that controls the behavior of the transition to full-screen mode. See below for available options.</dd>
</dl>

<h3>Options</h3>

<dl>
  <dt><code>navigationUI</code></dt>
  <dd>Controls whether or not to show navigation UI while the element is in full-screen mode.
    The default value is "auto", which indicates that the browser should decide what to do.
    <ul>
      <li><code>"hide"</code>: The browser's navigation interface will be hidden
        and the entire dimensions of the screen will be allocated to the display of the element.</li>
      <li><code>"show"</code>: The browser will present page navigation controls and possibly other
        user interface; the dimensions of the element (and the perceived size of the screen) will be clamped
        to leave room for this user interface.</li>
      <li><code>"auto"</code>: The browser will choose which of the above settings to apply.
        This is the default value.</li>
  </ul>
  </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{JSxRef("Promise")}} which is resolved with a value of <code>undefined</code> when
  the transition to full screen is complete.</p>

<h3 id="Exceptions">Exceptions</h3>

<p><em>Rather than throw a traditional exception, the <code>requestFullscreen()</code>
    procedure announces error conditions by rejecting the <code>Promise</code> it has
    returned. The rejection handler receives one of the following exception values:</em>
</p>

<dl>
  <dt>{{jsxref("TypeError")}}</dt>
  <dd>The <code>TypeError</code> exception may be delivered in any of the following
    situations:
    <ul>
      <li>The document containing the element isn't fully active; that is, it's not the
        current active document.</li>
      <li>The element is not contained by a document.</li>
      <li>The element is not permitted to use the <code>"fullscreen"</code> feature,
        either because of Feature Policy configuration or other access control features.
      </li>
      <li>The element and its document are the same node.</li>
    </ul>
  </dd>
</dl>

<h2 id="Usage_notes">Usage notes</h2>

<h3 id="Compatible_elements">Compatible elements</h3>

<p>An element that you wish to place into full-screen mode has to meet a small number of
  simple requirements:</p>

<ul>
  <li>It must be one of the standard HTML elements or {{SVGElement("svg")}} or
    {{MathMLElement("math")}}.</li>
  <li>It is <em>not</em> a {{HTMLElement("dialog")}} element.</li>
  <li>It must either be located within the top-level document or in an
    {{HTMLElement("iframe")}} which has the {{htmlattrxref("allowfullscreen","iframe")}}
    attribute applied to it.</li>
</ul>

<p>Additionally, of course, the Feature Policy <code>"fullscreen"</code> permission must
  be granted.</p>

<h3 id="Detecting_full-screen_activation">Detecting full-screen activation</h3>

<p>You can determine whether or not your attempt to switch to full-screen mode is
  successful by using the {{jsxref("Promise")}} returned by
  <code>requestFullscreen()</code>, as seen in the {{anch("Example")}} below.</p>

<p>To learn when other code has toggled full-screen mode on and off, you should establish
  listeners for the {{event("fullscreenchange")}} event on the {{domxref("Document")}}.
  It's also important to listen for <code>fullscreenchange</code> to be aware when, for
  example, the user manually toggles full-screen mode, or when the user switches
  applications, causing your application to temporarily exit full-screen mode.</p>

<h2 id="Examples">Examples</h2>

<h3>Requesting full-screen mode</h3>

<p>This function toggles the first {{HTMLElement("video")}} element found in the document
  into and out of full-screen mode.</p>

<pre class="brush: js">function toggleFullscreen() {
  let elem = document.querySelector("video");

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err =&gt; {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}</pre>

<p>If the document isn't already in full-screen mode—detected by looking to see if
  {{domxref("document.fullscreenElement")}} has a value—we call the video's
  <code>requestFullscreen()</code> method. We don't need to do anything special if
  successful, but if the request fails, our promise's <code>catch()</code> handler
  presents an alert with an appropriate error message.</p>

<p>If, on the other hand, full-screen mode is already in effect, we call
  {{domxref("document.exitFullscreen()")}} to disable full-screen mode.</p>

<p>You can <a href="https://fullscreen-requestfullscreen-demo.glitch.me/">see this example
    in action</a> or <a
    href="https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo">view or remix the
    code</a> on <a href="https://glitch.com/">Glitch</a>.</p>

<h3>Using navigationUI</h3>

<p>In this example, the entire document is placed into full-screen mode by calling
  {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} on the document's
  {{DOMxRef("Document.documentElement")}}, which is the document's root
  {{HTMLElement("html")}} element.</p>

<pre class="brush: js">let elem = document.documentElement;

elem.requestFullscreen({ navigationUI: "show" }).then(() => {}).catch(err =&gt; {
  alert(`An error occurred while trying to switch into full-screen mode: ${err.message} (${err.name})`);
});
</pre>

<p>The promise's resolve handler does nothing, but if the promise is rejected, an error
  message is displayed by calling {{DOMxRef("Window.alert", "alert()")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Fullscreen_API">Fullscreen API</a></li>
  <li>{{DOMxRef("Document.exitFullscreen()")}}</li>
  <li>{{DOMxRef("Document.fullscreen")}}</li>
  <li>{{DOMxRef("Document.fullscreenElement")}}</li>
  <li>{{CSSxRef(":fullscreen")}}</li>
  <li>{{HTMLAttrxRef("allowfullscreen", "iframe")}}</li>
</ul>
