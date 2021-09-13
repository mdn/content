---
title: MediaQueryList.removeListener()
slug: Web/API/MediaQueryList/removeListener
tags:
  - API
  - CSSOM View
  - Media Queries
  - MediaQueryList
  - Method
  - Reference
  - removeListener
browser-compat: api.MediaQueryList.removeListener
---
<p>{{APIRef("CSSOM")}}{{Deprecated_Header}}</p>

<p>The <code><strong>removeListener()</strong></code> method of the
  {{DOMxRef("MediaQueryList")}} interface removes a listener from the
  <code>MediaQueryListener</code>.</p>

<p>In older browsers <code>MediaQueryList</code> did not yet inherit from {{DOMxRef("EventTarget")}},
  so this method was provided as an alias of {{DOMxRef("EventTarget.removeEventListener()")}}.
  Use <code>removeEventListener()</code> instead of <code>removeListener()</code> if it is
  available in the browsers you need to support.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>MediaQueryList.removeListener(func)</em></pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>func</dt>
  <dd>A function or function reference representing the callback function you want to
    remove.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Void.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">var paragraph = document.querySelector('p');
var mediaQueryList = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    paragraph.textContent = 'This is a narrow screen — 600px wide or less.';
    document.body.style.backgroundColor = 'pink';
  } else {
    /* the viewport is more than than 600 pixels wide */
    paragraph.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'aquamarine';
  }
}

mediaQueryList.addListener(screenTest);

// Later on, when it is no longer needed
mediaQueryList.removeListener(screenTest);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Media queries</a></li>
  <li><a href="/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries">Using media queries from
      code</a></li>
  <li>{{DOMxRef("window.matchMedia()")}}</li>
  <li>{{DOMxRef("MediaQueryList")}}</li>
  <li>{{DOMxRef("MediaQueryListEvent")}}</li>
</ul>
