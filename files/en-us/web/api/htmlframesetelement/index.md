---
title: HTMLFrameSetElement
slug: Web/API/HTMLFrameSetElement
tags:
  - API
  - HTML-DOM
  - HTMLFrameSetElement
  - Interface
  - Reference
  - Deprecated
browser-compat: api.HTMLFrameSetElement
---
<div>{{APIRef("HTML DOM")}}{{deprecated_header}}</div>

<p>The <strong><code>HTMLFrameSetElement</code></strong> interface provides special properties (beyond those of the regular {{domxref("HTMLElement")}} interface they also inherit) for manipulating {{HTMLELEment("frameset")}} elements.</p>

<h2 id="Properties">Properties</h2>

<p><em>Inherits properties from its parent, {{domxref("HTMLElement")}} and from {{domxref("WindowEventHandlers")}}.</em></p>

<dl>
 <dt>{{domxref("HTMLFrameSetElement.cols")}} {{deprecated_inline}}</dt>
 <dd>Is a {{domxref("DOMString")}} structured as a comma-separated list specifying the width of each column inside a frameset.</dd>
 <dt>{{domxref("HTMLFrameSetElement.rows")}} {{deprecated_inline}}</dt>
 <dd>Is a {{domxref("DOMString")}} structured as a comma-separated list specifying the height of each column inside a frameset.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>No specific method; inherits methods from its parent, {{domxref("HTMLElement")}} and from {{domxref("WindowEventHandlers")}}.</em></p>

<h2 id="Event_handlers">Event handlers</h2>

<p><em>No specific event handler; inherits event handlers from its parent, {{domxref("HTMLElement")}} and from {{domxref("WindowEventHandlers")}}.</em></p>

<dl>
 <dt>{{domxref("WindowEventHandlers.onafterprint")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("afterprint")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onbeforeprint")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("beforeprint")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onbeforeunload")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("beforeunload")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onhashchange")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("hashchange")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("languagechange")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onmessage")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("message")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onoffline")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("offline")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.ononline")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("online")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onpagehide")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("pagehide")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onpageshow")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("pageshow")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onpopstate")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("popstate")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onresize")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("resize")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onstorage")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("storage")}} event is raised.</dd>
 <dt>{{domxref("WindowEventHandlers.onunload")}}</dt>
 <dd>Is an <a href="/en-US/docs/Web/Events/Event_handlers">event handler</a> representing the code to be called when the {{event("unload")}} event is raised.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>HTML element implementing this interface: {{HTMLElement("frameset")}}</li>
 <li>The equivalent of this element outside of frames: {{domxref("HTMLBodyElement")}}.</li>
</ul>
