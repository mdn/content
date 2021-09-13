---
title: HTMLVideoElement.msIsLayoutOptimalForPlayback
slug: Web/API/HTMLVideoElement/msIsLayoutOptimalForPlayback
tags:
- API
- 'API:Microsoft Extensions'
- Non-standard
- Property
- Reference
- msIsLayoutOptimalForPlayback
- onMSVideoOptimalLayoutChanged
---
<div>{{APIRef("Microsoft Extensions")}}{{Non-standard_Header}}</div>

<p><code><strong>msIsLayoutOptimalForPlayback</strong></code> is a read-only property
  which indicates whether the video can be rendered more efficiently.</p>

<p>This proprietary property is specific to Internet Explorer and Microsoft Edge.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>HTMLVideoElement</em>.msIsLayoutOptimalForPlayback: {{DOMxRef("DOMString")}};
</pre>

<h2 id="Value">Value</h2>

<p>Boolean value set to <em>true</em> indicates that video is being rendered optimally
  (better performance and using less battery power). If <em>false</em>, improvements can
  be made to optimize performance.</p>

<p>For <code>msIsLayoutOptimalForPlayback</code> to be true, avoid the following:</p>

<ul>
  <li>Video elements with Cascading Style Sheets (CSS) outlines set.</li>
  <li>Rendering a video element through a canvas element.</li>
  <li>Embedding video elements in a Scalable Vector Graphics (SVG).</li>
</ul>

<p>You can listen to the <a
    href="/en-US/docs/Web/API/OnMSVideoOptimalLayoutChanged">onMSVideoOptimalLayoutChanged</a>
  event to be notified when the <code>msIsLayoutOptimalForPlayback</code> property
  changes.</p>

<p>*To enable Stereo 3D playback, <code>msIsLayoutOptimalForPlayback</code> must be true.
</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{DOMxRef("HTMLVideoElement")}}</li>
  <li><a href="/en-US/docs/Web/API/Microsoft_API_extensions">Microsoft API extensions </a>
  </li>
</ul>
