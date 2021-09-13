---
title: GlobalEventHandlers.oncanplaythrough
slug: Web/API/GlobalEventHandlers/oncanplaythrough
tags:
- API
- Event Handler
- GlobalEventHandlers
- Property
- Reference
browser-compat: api.GlobalEventHandlers.oncanplaythrough
---
<div>{{ ApiRef("HTML DOM") }}</div>

<p>The <strong><code>oncanplaythrough</code></strong> property of the
  {{domxref("GlobalEventHandlers")}} mixin is the <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> for
  processing {{event("canplaythrough")}} events.</p>

<p>The <code>canplaythrough</code> event is fired when the user agent can play the media
  and estimates that enough data has been loaded to play the media up to its end without
  having to stop for further buffering of content.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em><var>element</var></em>.oncanplaythrough = <em>handlerFunction</em>;
var <em>handlerFunction</em> = <em><var>element</var></em>.oncanplaythrough;
</pre>

<p><code>handlerFunction</code> is either <code>null</code> or a <a
    href="/en-US/docs/Web/JavaScript/Reference/Functions">JavaScript function</a>
  specifying the handler for the event.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{event("canplaythrough")}}</li>
  <li><a href="/en-US/docs/Web/Guide/Events/Event_handlers">DOM event handlers</a></li>
</ul>
