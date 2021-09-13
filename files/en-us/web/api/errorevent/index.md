---
title: ErrorEvent
slug: Web/API/ErrorEvent
tags:
  - API
  - Event
  - Worker API
browser-compat: api.ErrorEvent
---
<p>{{APIRef("HTML DOM")}}</p>

<p>The <strong><code>ErrorEvent</code></strong> interface represents events providing information related to errors in scripts or in files.</p>

<p>{{InheritanceDiagram(600, 120)}}</p>

<h2 id="Properties">Properties</h2>

<p><em>Also inherits properties from its parent {{domxref("Event")}}</em>.</p>

<dl>
 <dt>{{domxref("ErrorEvent.message")}} {{readonlyInline}}</dt>
 <dd>Is a {{domxref("DOMString")}} containing a human-readable error message describing the problem.</dd>
 <dt>{{domxref("ErrorEvent.filename")}} {{readonlyInline}}</dt>
 <dd>Is a {{domxref("DOMString")}} containing the name of the script file in which the error occurred.</dd>
 <dt>{{domxref("ErrorEvent.lineno")}} {{readonlyInline}}</dt>
 <dd>Is an <code>integer</code> containing the line number of the script file on which the error occurred.</dd>
 <dt>{{domxref("ErrorEvent.colno")}} {{readonlyInline}}</dt>
 <dd>Is an <code>integer</code> containing the column number of the script file on which the error occurred.</dd>
 <dt>{{domxref("ErrorEvent.error")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>Is a JavaScript <code>Object</code> that is concerned by the event.</dd>
</dl>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("ErrorEvent.ErrorEvent", "ErrorEvent()")}}</dt>
 <dd>Creates an <code>ErrorEvent</code> event with the given parameters.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>Inherits methods from its parent {{domxref("Event")}}</em>.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers">Using web workers</a>, most likely objects to raise such an event</li>
</ul>
