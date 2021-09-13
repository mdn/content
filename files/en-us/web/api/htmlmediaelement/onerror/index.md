---
title: HTMLMediaElement.onerror
slug: Web/API/HTMLMediaElement/onerror
tags:
- API
- Audio
- Errors
- Event Handler
- HTML DOM
- HTMLMediaElement
- Media
- Property
- Reference
- Video
- onerror
browser-compat: api.HTMLMediaElement.onerror
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The <strong><code>onerror</code></strong> property of the
  {{domxref("HTMLMediaElement")}} interface is the <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> for
  processing {{event("error")}} events.</p>

<p>The <code>error</code> event fires when some form of error occurs while attempting to
  load or perform the media.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>HTMLMediaElement</em>.onerror = <em>EventListener</em>;</pre>

<h3 id="Value">Value</h3>

<p>A {{jsxref("function")}} which serves as the event handler for the {{event("error")}}
  event. When an error occurs, the specified function will be called. If
  <code>null</code>, no error handler is in effect.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("HTMLMediaElement")}}</li>
  <li>{{HTMLElement("audio")}} and {{HTMLElement("video")}}</li>
</ul>
