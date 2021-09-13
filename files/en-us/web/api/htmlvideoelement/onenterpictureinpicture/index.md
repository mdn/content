---
title: HTMLVideoElement.onenterpictureinpicture
slug: Web/API/HTMLVideoElement/onenterpictureinpicture
tags:
- API
- Event Handler
- Interface
- Picture-in-Picture
- Picture-in-Picture API
- Property
- Reference
- Video
- events
- pip
browser-compat: api.HTMLVideoElement.onenterpictureinpicture
---
<div>{{ ApiRef() }}</div>

<p>The <code><strong>onenterpictureinpicture</strong></code> property of the
  {{domxref("HTMLVideoElement")}} interface is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> that
  processes {{domxref("HTMLVideoElement.enterpictureinpicture_event",
  "HTMLVideoElement.enterpictureinpicture")}} events.</p>

<p>The <code>enterpictureinpicture</code> event fires after the video has successfully
  entered picture-in-picture mode.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>video</em>.onenterpictureinpicture = <em>functionRef</em>;
</pre>

<h3 id="Value">Value</h3>

<p><code>functionRef</code> is a function name or a <a
    href="/en-US/docs/Web/JavaScript/Reference/Operators/function">function
    expression</a>. The function receives a {{domxref("FocusEvent")}} object as its sole
  argument.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Window_size_logger">Window size logger</h3>

<pre class="brush: html">&lt;button id="button&gt;Enter Picture-in-Picture&lt;/button&gt;
&lt;video id="video" muted autoplay src=""&gt;&lt;/video&gt;
</pre>

<pre class="brush: js">const video = document.querySelector('#video');
const button = document.querySelector('#button');

function onEnterPip() {
  console.log("Picture-in-Picture mode activated!");
}

video.onenterpictureinpicture = onEnterPip;

button.onclick = function() =&gt; {
  video.requestPictureInPicture();
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{DOMxRef("Picture-in-Picture_API")}}</li>
  <li>{{DOMxRef("HTMLVideoElement")}}</li>
</ul>
