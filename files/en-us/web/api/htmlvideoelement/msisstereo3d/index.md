---
title: HTMLVideoElement.msIsStereo3D
slug: Web/API/HTMLVideoElement/msIsStereo3D
tags:
- API
- 'API:Microsoft Extensions'
- Non-standard
- Property
- Reference
- msIsStereo3D
browser-compat: api.HTMLVideoElement.msIsStereo3D
---
<div>{{APIRef("Microsoft Extensions")}}{{Non-standard_Header}}</div>

<p><code><strong>msIsStereo3D</strong></code> is a read-only property which determines
  whether the system considers the loaded video source to be stereo 3-D or not.</p>

<p>This proprietary property is specific to Internet Explorer and Microsoft Edge.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>HTMLVideoElement</em>.msIsStereo3D: {{JSxRef("Boolean","boolean")}};</pre>

<h2 id="Value">Value</h2>

<p>{{JSxRef("Boolean")}} value set to <em>true</em> indicates that the video source is
  stereo 3D.</p>

<p>This uses metadata set in MP4 or MPEG-2 file containers and H.264 Supplemental
  enhancement information (SEI) messages to determine the stereo capability of the source.
</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{DOMxRef("HTMLVideoElement")}}</li>
  <li><a href="/en-US/docs/Web/API/Microsoft_API_extensions">Microsoft API extensions </a>
  </li>
</ul>
