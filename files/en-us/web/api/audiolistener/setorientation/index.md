---
title: AudioListener.setOrientation()
slug: Web/API/AudioListener/setOrientation
tags:
  - API
  - AudioListener
  - Method
  - Reference
  - Web Audio API
  - setOrientation
browser-compat: api.AudioListener.setOrientation
---
<p>{{ APIRef("Web Audio API") }}{{deprecated_header}}</p>

<div>
<p>The <code>setOrientation()</code> method of the {{ domxref("AudioListener") }} interface defines the orientation of the listener.</p>

<p>It consists of two direction vectors:</p>

<ul>
 <li>The <em>front vector</em>, defined by the three unitless parameters <code>x</code>, <code>y</code> and <code>z</code>, describes the direction of the face of the listener, that is the direction the nose of the person is pointing towards. The front vector's default value is <code>(0,</code> <code>0,</code> <code>-1)</code>.</li>
 <li>The <em>up vector</em>, defined by three unitless parameters <code>xUp</code>, <code>yUp</code> and <code>zUp</code>, describes the direction of the top of the listener's head. The up vector's default value is <code>(0,</code> <code>1,</code> <code>0)</code>.</li>
</ul>

<p>The two vectors must be separated by an angle of 90° — in linear analysis terms, they must be perpendicular to each other.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var audioCtx = new AudioContext();
var myListener = audioCtx.listener;
myListener.setOrientation(0,0,-1,0,1,0);</pre>

<h3 id="Returns">Returns</h3>

<p>Void.</p>

<h2 id="Example">Example</h2>

<p>See <a href="/en-US/docs/Web/API/BaseAudioContext/createPanner#example"><code>BaseAudioContext.createPanner()</code></a> for example code.</p>

<h2 id="Parameters">Parameters</h2>

<dl>
 <dt>x</dt>
 <dd>The x value of the front vector of the listener.</dd>
 <dt>y</dt>
 <dd>The y value of the front vector of the listener.</dd>
 <dt>z</dt>
 <dd>The z value of the front vector of the listener.</dd>
 <dt>xUp</dt>
 <dd>The x value of the up vector of the listener.</dd>
 <dt>yUp</dt>
 <dd>The y value of the up vector of the listener.</dd>
 <dt>zUp</dt>
 <dd>The z value of the up vector of the listener.</dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>
