---
title: DataTransfer.dropEffect
slug: Web/API/DataTransfer/dropEffect
tags:
- API
- HTML DOM
- Property
- Reference
- drag and drop
browser-compat: api.DataTransfer.dropEffect
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p>The <strong><code>DataTransfer.dropEffect</code></strong> property controls the
  feedback (typically visual) the user is given during a drag and drop operation. It will
  affect which cursor is displayed while dragging. For example, when the user hovers over
  a target drop element, the browser's cursor may indicate which type of operation will
  occur.</p>

<p>When the {{domxref("DataTransfer")}} object is created, <code>dropEffect</code> is set
  to a string value. On getting, it returns its current value. On setting, if the new
  value is one of the values listed below, then the property's current value will be set
  to the new value and other values will be ignored.</p>

<p>For the {{event("dragenter")}} and {{event("dragover")}} events,
  <code>dropEffect</code> will be initialized based on what action the user is requesting.
  How this is determined is platform specific, but typically the user can press modifier
  keys such as the alt key to adjust the desired action. Within event handlers for
  {{event("dragenter")}} and {{event("dragover")}} events, <code>dropEffect</code> should
  be modified if a different action is desired than the action that the user is
  requesting.</p>

<p>For the {{event("drop")}} and {{event("dragend")}} events, <code>dropEffect</code> will
  be set to the action that was desired, which will be the value <code>dropEffect</code>
  had after the last {{event("dragenter")}} or {{event("dragover")}} event. In a
  {{event("dragend")}} event, for instance, if the desired dropEffect is "move", then the
  data being dragged should be removed from the source.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>dataTransfer</var>.dropEffect;
</pre>

<h3 id="Values">Values</h3>

<p>A {{domxref("DOMString")}} representing the drag operation effect. The possible values
  are:</p>

<dl>
  <dt><code>copy</code></dt>
  <dd>A copy of the source item is made at the new location.</dd>
  <dt><code>move</code></dt>
  <dd>An item is moved to a new location.</dd>
  <dt><code>link</code></dt>
  <dd>A link is established to the source at the new location.</dd>
  <dt><code>none</code></dt>
  <dd>The item may not be dropped.</dd>
</dl>

<p>Assigning any other value to <code>dropEffect</code> has no effect and the old value is
  retained.</p>

<h2 id="Example">Example</h2>

<p>This example shows the use of the <code>dropEffect</code> and
  {{domxref("DataTransfer.effectAllowed","effectAllowed")}} properties.</p>

<h3 id="HTML_Content">HTML Content</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p id="source" ondragstart="dragstart_handler(event);" draggable="true"&gt;
    Select this element, drag it to the Drop Zone and then release the selection to move the element.
  &lt;/p&gt;
&lt;/div&gt;
&lt;div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);"&gt;Drop Zone&lt;/div&gt;
</pre>

<h3 id="CSS_Content">CSS Content</h3>

<pre class="brush: css">div {
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
</pre>

<h3 id="JavaScript_Content">JavaScript Content</h3>

<pre class="brush: js">function dragstart_handler(ev) {
  console.log("dragStart: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function drop_handler(ev) {
  console.log("drop: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
  ev.preventDefault();

  // Get the id of the target and add the moved element to the target's DOM
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragover_handler(ev) {
  console.log("dragOver: dropEffect = " + ev.dataTransfer.dropEffect + " ; effectAllowed = " + ev.dataTransfer.effectAllowed);
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
}
</pre>

<p>{{EmbedLiveSample('Example', 300, 250)}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API">Drag and drop</a></li>
 <li><a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations">Drag Operations</a></li>
 <li><a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types">Recommended Drag Types</a></li>
 <li><a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items">Dragging and Dropping Multiple Items</a></li>
 <li><a href="https://codepen.io/tech_query/pen/MqGgap">DataTransfer test - Paste or Drag</a></li>
</ul>
