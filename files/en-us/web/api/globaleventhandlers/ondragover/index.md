---
title: GlobalEventHandlers.ondragover
slug: Web/API/GlobalEventHandlers/ondragover
tags:
- API
- HTML DOM
- Reference
- drag and drop
browser-compat: api.GlobalEventHandlers.ondragover
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>A {{domxref("GlobalEventHandlers","global event handler")}} for the
  {{event("dragover")}} event.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <var>dragoverHandler</var> = <var>targetElement</var>.ondragover;
</pre>

<h3 id="Return_value">Return value</h3>

<dl>
  <dt><code>dragoverHandler</code></dt>
  <dd>The <code>dragover</code> event handler for element <code>targetElement</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example demonstrates using the
  {{domxref("GlobalEventHandlers.ondragover","ondragover")}} attribute handler to set an
  element's {{event("dragover")}} event handler.</p>

<pre class="brush: js">&lt;!DOCTYPE html&gt;
&lt;html lang=en&gt;
&lt;title&gt;Examples of using the ondrag Global Event Attribute&lt;/title&gt;
&lt;meta content="width=device-width"&gt;
&lt;style&gt;
  div {
    margin: 0em;
    padding: 2em;
  }
  #source {
    color: blue;
    border: 1px solid black;
  }
  #target {
    border: 1px solid black;
  }
&lt;/style&gt;
&lt;/head&gt;
&lt;script&gt;
function drag_handler(ev) {
 console.log("Drag");
}

function dragstart_handler(ev) {
 console.log("dragStart");
 ev.dataTransfer.setData("text", ev.target.id);
}

function drop_handler(ev) {
 console.log("Drop");
 ev.currentTarget.style.background = "lightyellow";

 ev.preventDefault();
 var data = ev.dataTransfer.getData("text");
 ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
 console.log("dragOver");
 ev.preventDefault();
}
&lt;/script&gt;
&lt;body&gt;
&lt;h1&gt;Examples of &lt;code&gt;ondrag&lt;/code&gt;, &lt;code&gt;ondrop&lt;/code&gt;, &lt;code&gt;ondragstart&lt;/code&gt;, &lt;code&gt;ondragover&lt;/code&gt;&lt;/h1&gt;
 &lt;div&gt;
   &lt;p id="source" ondrag="drag_handler(event);" ondragstart="dragstart_handler(event);" draggable="true"&gt;
     Select this element, drag it to the Drop Zone and then release the selection to move the element.&lt;/p&gt;
 &lt;/div&gt;
 &lt;div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);"&gt;Drop Zone&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{event("dragover")}}</li>
</ul>
