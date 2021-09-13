---
title: Performance.onresourcetimingbufferfull
slug: Web/API/Performance/onresourcetimingbufferfull
tags:
- API
- Property
- Reference
- Web Peformance
browser-compat: api.Performance.onresourcetimingbufferfull
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>The <strong><code>onresourcetimingbufferfull</code></strong> property is an event
  handler that will be called when the {{event("resourcetimingbufferfull")}} event is
  fired. This event is fired when the browser's resource timing performance buffer is
  full.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">callback = <em>performance</em>.onresourcetimingbufferfull = buffer_full_cb;
</pre>

<h3 id="Return_Value">Return value</h3>

<dl>
  <dt>callback</dt>
  <dd>An <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> that is invoked when the
    {{event("resourcetimingbufferfull")}} event is fired.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example sets a callback function on the
  <code>onresourcetimingbufferfull</code> property.</p>

<pre class="brush: js">function buffer_full(event) {
  console.log("WARNING: Resource Timing Buffer is FULL!");
  performance.setResourceTimingBufferSize(200);
}
function init() {
  // Set a callback if the resource buffer becomes filled
  performance.onresourcetimingbufferfull = buffer_full;
}
&lt;body onload="init()"&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{event("resourcetimingbufferfull")}} event</li>
  <li>{{domxref("Performance.clearResourceTimings","Performance.clearResourceTimings()")}}
  </li>
  <li>
    {{domxref("Performance.setResourceTimingBufferSize","Performance.setResourceTimingBufferSize()")}}
  </li>
</ul>
