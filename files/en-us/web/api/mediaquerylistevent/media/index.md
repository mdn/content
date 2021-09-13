---
title: MediaQueryListEvent.media
slug: Web/API/MediaQueryListEvent/media
tags:
  - API
  - CSSOM View
  - Media
  - Media Queries
  - MediaQueryListEvent
  - Property
  - Reference
browser-compat: api.MediaQueryListEvent.media
---
<p>{{APIRef("CSSOM")}}</p>

<p>The <strong><code>media</code></strong> read-only property of the
  {{DOMxRef("MediaQueryListEvent")}} interface is a {{DOMxRef("DOMString")}} representing
  a serialized media query.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>media</em> = <em>MediaQueryListEvent.media;</em></pre>

<h3 id="Value">Value</h3>

<p>A {{DOMxRef("DOMString")}} representing a serialized media query.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = 'This is a narrow screen — less than 600px wide.';
    document.body.style.backgroundColor = 'red';
  } else {
    /* the viewport is more than than 600 pixels wide */
    para.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'blue';
  }

  console.log(e.media);
}

mql.addListener(screenTest);
</pre>

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
