---
title: GlobalEventHandlers.ontouchmove
slug: Web/API/GlobalEventHandlers/ontouchmove
tags:
  - API
  - Experimental
  - HTML DOM
  - Reference
browser-compat: api.GlobalEventHandlers.ontouchmove
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>A {{domxref("GlobalEventHandlers","global event handler")}} for the {{event("touchmove")}} event.</p>

<p>{{SeeCompatTable}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var moveHandler = someElement.ontouchmove;
</pre>

<h3 id="Return_Value">Return value</h3>

<dl>
 <dt><code>moveHandler</code></dt>
 <dd>The <em>touchmove</em> event handler for element <code>someElement</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example shows two ways to use <em>ontouchmove</em> to set an element's <em>touchmove</em> event handler.</p>

<pre class="brush: js">&lt;html&gt;
&lt;head&gt;
&lt;script&gt;

function moveTouch(ev) {
 // Process the event
}

function init() {
 var el=document.getElementById("target1");
 el.ontouchmove = moveTouch;
}

&lt;/script&gt;
&lt;/head&gt;

&lt;body onload="init();"&gt;
&lt;div id="target1"&gt; Touch me ... &lt;/div&gt;
&lt;div id="target2" ontouchmove="moveTouch(event)"&gt; Touch me ... &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{ event("touchmove") }}</li>
</ul>
