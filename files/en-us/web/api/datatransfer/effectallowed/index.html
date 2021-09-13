---
title: DataTransfer.effectAllowed
slug: Web/API/DataTransfer/effectAllowed
tags:
- API
- HTML DOM
- Property
- Reference
- drag and drop
browser-compat: api.DataTransfer.effectAllowed
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p>The <strong><code>DataTransfer.effectAllowed</code></strong> property specifies the
  effect that is allowed for a drag operation. The <em>copy</em> operation is used to
  indicate that the data being dragged will be copied from its present location to the
  drop location. The <em>move</em> operation is used to indicate that the data being
  dragged will be moved, and the <em>link</em> operation is used to indicate that some
  form of relationship or connection will be created between the source and drop
  locations.</p>

<p>This property should be set in the {{event("dragstart")}} event to set the desired drag
  effect for the drag source. Within the {{event("dragenter")}} and {{event("dragover")}}
  event handlers, this property will be set to whatever value was assigned during the
  {{event("dragstart")}} event, thus <code>effectAllowed</code> may be used to determine
  which effect is permitted.</p>

<p>Assigning a value to <code>effectAllowed</code> in events other than
  {{event("dragstart")}} has no effect.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>dataTransfer</var>.effectAllowed;
</pre>

<h3 id="Values">Values</h3>

<p>A {{domxref("DOMString")}} representing the drag operation that is allowed. The
  possible values are:</p>

<dl>
  <dt>none</dt>
  <dd>The item may not be dropped.</dd>
  <dt>copy</dt>
  <dd>A copy of the source item may be made at the new location.</dd>
  <dt>copyLink</dt>
  <dd>A copy or link operation is permitted.</dd>
  <dt>copyMove</dt>
  <dd>A copy or move operation is permitted.</dd>
  <dt>link</dt>
  <dd>A link may be established to the source at the new location.</dd>
  <dt>linkMove</dt>
  <dd>A link or move operation is permitted.</dd>
  <dt>move</dt>
  <dd>An item may be moved to a new location.</dd>
  <dt>all</dt>
  <dd>All operations are permitted.</dd>
  <dt>uninitialized</dt>
  <dd>The default value when the effect has not been set, equivalent to all.</dd>
</dl>

<p>Assigning any other value to <code>effectAllowed</code> has no effect and the old value
  is retained.</p>

<p>Internet Explorer will change the value to be lowercased; thus, <code>linkMove</code>
  will become <code>linkmove</code>, and so on.</p>

<h2 id="Example">Example</h2>

<p>This example shows the use of the <code>effectAllowed</code> and
  {{domxref("DataTransfer.dropEffect", "dropEffect")}} properties.</p>

<pre class="brush: js">&lt;!DOCTYPE html&gt;
&lt;html lang=en&gt;
&lt;title&gt;Examples of DataTransfer.{dropEffect,effectAllowed} properties&lt;/title&gt;
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
&lt;script&gt;
function dragstart_handler(ev) {
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
&lt;/script&gt;
&lt;body&gt;
&lt;h1&gt;Examples &lt;code&gt;DataTransfer&lt;/code&gt;.{&lt;code&gt;dropEffect&lt;/code&gt;, &lt;code&gt;effectAllowed&lt;/code&gt;} properties&lt;/h1&gt;
 &lt;div&gt;
   &lt;p id="source" ondragstart="dragstart_handler(event);" draggable="true"&gt;
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
 <li><a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API">Drag and drop</a></li>
 <li><a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations">Drag Operations</a></li>
 <li><a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types">Recommended Drag Types</a></li>
 <li><a href="/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items">Dragging and Dropping Multiple Items</a></li>
 <li><a href="https://codepen.io/tech_query/pen/MqGgap">DataTransfer test - Paste or Drag</a></li>
</ul>

