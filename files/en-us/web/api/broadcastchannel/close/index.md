---
title: BroadcastChannel.close()
slug: Web/API/BroadcastChannel/close
tags:
  - API
  - Broadcast Channel API
  - BroadcastChannel
  - Experimental
  - HTML API
  - Method
  - Reference
browser-compat: api.BroadcastChannel.close
---
<p>{{APIRef("BroadCastChannel API")}}</p>

<p>The <strong><code>BroadcastChannel.close()</code></strong> terminates the connection to
  the underlying channel, allowing the object to be garbage collected. This is a necessary
  step to perform as there is no other way for a browser to know that this channel is not
  needed anymore.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var str = channel.close();
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">// Connect to a channel
var bc = new BroadcastChannel('test_channel');

// More operations (like postMessage, …)

// When done, disconnect from the channel
bc.close();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("BroadcastChannel")}}, the interface it belongs to.</li>
</ul>
