---
title: HTMLMediaElement.msInsertAudioEffect()
slug: Web/API/HTMLMediaElement/msInsertAudioEffect
tags:
  - API
  - API:Microsoft Extensions
  - Method
  - Non-standard
  - Reference
  - msInsertAudioEffect
---
<div>{{APIRef("HTML DOM")}}{{Non-standard_Header}}</div>

<p>The <strong><code>HTMLMediaElement.msInsertAudioEffect()</code></strong> method inserts
  the specified audio effect into the media pipeline.</p>

<p>This proprietary method is specific to Internet Explorer and Microsoft Edge.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>HTMLMediaElement</em>.msInsertAudioEffect(<em>activatableClassId</em>: {{DOMxRef("DOMString")}}, <em>effectRequired</em>: {{JSxRef("Boolean", "boolean")}}, <em>config</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>activatableClassId</dt>
  <dd>A {{DOMxRef("DOMString")}} defining the audio effects class.</dd>
  <dt>effectRequired</dt>
  <dd>A {{JSxRef("Boolean")}} which if set to <em>true</em> requires an audio effect to be
    defined.</dd>
  <dt>config{{Optional_Inline}}</dt>
  <dd>An optional {{JSxRef("Object")}} to help with defining any additional configuration
    needed.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>This method does not return a value.</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{DOMxRef("HTMLMediaElement")}}</li>
  <li><a href="/en-US/docs/Web/API/Microsoft_Extensions">Microsoft API extensions </a>
  </li>
</ul>
