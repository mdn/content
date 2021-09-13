---
title: AudioParam.cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
tags:
- API
- Audio
- AudioParam
- Experimental
- Method
- Reference
- Web Audio API
- cancelAndHoldAtTime
- cancelValuesAndHoldAtTime
browser-compat: api.AudioParam.cancelAndHoldAtTime
---
<div>{{APIRef("Web Audio API")}}</div>

<p>The <strong><code>cancelAndHoldAtTime()</code></strong> property of the
  {{domxref("AudioParam")}} interface cancels all scheduled future changes to the
  <code>AudioParam</code> but holds its value at a given time until further changes are
  made using other methods.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var audioParam = AudioParam.cancelAndHoldAtTime(cancelTime)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>cancelTime</dt>
  <dd>A double representing the time (in seconds) after the <a
      href="/en-US/docs/Web/API/AudioContext"
      title="An AudioContext can be a target of events, therefore it implements the EventTarget interface."><code>AudioContext</code></a> was
    first created after which all scheduled changes will be cancelled.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A reference to the {{domxref("AudioParam")}} it was called on.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
