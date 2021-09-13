---
title: GlobalEventHandlers.ondragenter
slug: Web/API/GlobalEventHandlers/ondragenter
tags:
- API
- HTML DOM
- Reference
- drag and drop
browser-compat: api.GlobalEventHandlers.ondragenter
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>A {{domxref("GlobalEventHandlers","global event handler")}} for the
  {{event("dragenter")}} event.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <var>dragenterHandler</var> = <var>targetElement</var>.ondragenter;
</pre>

<h3 id="Return_value">Return value</h3>

<dl>
  <dt><code>dragenterHandler</code></dt>
  <dd>The <em>dragenter</em> event handler for element <code>targetElement</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example demonstrates using the
  {{domxref("GlobalEventHandlers.ondragenter","ondragenter")}} global event handler to set an
  element's {{event("dragenter")}} event handler.</p>

<h3 id="HTML">HTML</h3>
  
<pre class="brush: html">
&lt;div&gt;
  &lt;p id="source" draggable="true"&gt;
     Select this element, drag it to the Drop Zone and then release the selection to move the element.&lt;/p&gt;
&lt;/div&gt;
&lt;div id="target"&gt;Drop Zone&lt;/div&gt;

&lt;textarea readonly id="event-log"&gt;&lt;/textarea&gt;
&lt;button id="reload"&gt;Reload&lt;/button&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div, #event-log {
    margin: 1em;
}
#source, #target {
    padding: 2em;
    border: 1px solid black;
}
#source {
    color: blue;
}
#event-log {
    width: 25rem;
    height: 4rem;
    margin-bottom: 0;
    padding: .2rem;
}
</pre>

<h3 id="JS">JavaScript</h3>

<pre class="brush: js">const source = document.getElementById("source");
const target = document.getElementById("target");
const event_log = document.getElementById("event-log");

function dragstart_handler(ev) {
  event_log.textContent += "dragStart\n";
  // Change the source element's background color to signify drag has started
  ev.currentTarget.style.border = "dashed";
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragover_handler(ev) {
  event_log.textContent += "dragOver\n";
  // Change the target element's border to signify a drag over event
  // has occurred
  ev.currentTarget.style.background = "lightblue";
  ev.preventDefault();
}

function drop_handler(ev) {
  event_log.textContent += "Drop\n";
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragenter_handler(ev) {
  event_log.textContent += "dragEnter\n";
  // Change the source element's background color for enter events
  ev.currentTarget.style.background = "yellow";
}

function dragleave_handler(ev) {
  event_log.textContent += "dragLeave\n";
  // Change the source element's border back to white
  ev.currentTarget.style.background = "white";
}

function dragend_handler(ev) {
  event_log.textContent += "dragEnd\n";
  // Change the target element's background color to visually indicate
  // the drag ended.
  target.style.background = "pink";
}

// Set handlers for the source's drag - start/enter/leave/end events
source.ondragstart = dragstart_handler;
source.ondragenter = dragenter_handler;
source.ondragleave = dragleave_handler;
source.ondragend = dragend_handler;

// Set handlers for the target's drop and dragover events
target.ondrop = drop_handler;
target.ondragover = dragover_handler;

// Set click event listener on button to reload the example
const button = document.getElementById("reload");
button.addEventListener("click", () => {
  document.location.reload();
});
</pre>

<h3 id="Result">Result</h3>

<p>{{ EmbedLiveSample('Example', '100', '450') }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{event("dragenter")}}</li>
</ul>
