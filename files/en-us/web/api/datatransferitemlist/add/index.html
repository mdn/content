---
title: DataTransferItemList.add()
slug: Web/API/DataTransferItemList/add
tags:
- API
- Add
- DataTransferItemList
- HTML DOM
- HTML Drag and Drop API
- Method
- Reference
- drag and drop
browser-compat: api.DataTransferItemList.add
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p>The <strong><code>DataTransferItemList.add()</code></strong> method creates a new
  {{domxref("DataTransferItem")}} using the specified data and adds it to the drag data
  list. The item may be a {{domxref("File")}} or a {{domxref("DOMString","string")}} of a
  given type. If the item is successfully added to the list, the newly-created
  {{domxref("DataTransferItem")}} object is returned.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>DataTransferItem</em> = <em>DataTransferItemList</em>.add(data, type);
<em>DataTransferItem</em> = <em>DataTransferItemList</em>.add(file);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>data</code></dt>
  <dd>A {{domxref("DOMstring","string")}} representing the drag item's data.</dd>
  <dt><code>type</code></dt>
  <dd>A {{domxref("DOMstring","string")}} of the drag item's type. Some example types are
    <code>text/html</code> and <code>text/plain</code>.</dd>
  <dt><code>file</code></dt>
  <dd>A {{domxref("File")}} object. No type needs to be given in this case.</dd>
</dl>

<h3 id="Return_Value">Return value</h3>

<p>A {{domxref("DataTransferItem")}} containing the specified data. If the drag item
  couldn't be created (for example, if the associated {{domxref("DataTransfer")}} object
  has no data store), <code>null</code> is returned.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
  <dt><code>NotSupportedError</code></dt>
  <dd>A string <code>data</code> parameter was provided, and the list already contains an
    item whose {{domxref("DataTransferItem.kind","kind")}} is "Plain Unicode string" and
    whose type is equal to the specified type parameter.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This example shows the use of the <code>add()</code> method.</p>

<h4 id="HTML">HTML</h4>

<pre
  class="brush: html">&lt;div&gt;
 &lt;p id="source" ondragstart="dragstart_handler(event);" ondragend="dragend_handler(event);" draggable="true"&gt;
 Select this element, drag it to the Drop Zone and then release the selection to move the element.&lt;/p&gt;
&lt;/div&gt;
&lt;div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);"&gt;Drop Zone&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

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
}</pre>

<p>Javascript</p>

<pre class="brush: js">function dragstart_handler(ev) {
  console.log("dragStart");
  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  var dataList = ev.dataTransfer.items;
  dataList.add(ev.target.id, "text/plain");
  // Add some other items to the drag payload
  dataList.add("&lt;p&gt;... paragraph ...&lt;/p&gt;", "text/html");
  dataList.add("http://www.example.org","text/uri-list");
}

function drop_handler(ev) {
  console.log("Drop");
  ev.preventDefault();
  var data = event.dataTransfer.items;
  // Loop through the dropped items and log their data
  for (var i = 0; i &lt; data.length; i++) {
    if ((data[i].kind == 'string') &amp;&amp; (data[i].type.match('^text/plain'))) {
      // This item is the target node
      data[i].getAsString(function (s){
        ev.target.appendChild(document.getElementById(s));
      });
    } else if ((data[i].kind == 'string') &amp;&amp; (data[i].type.match('^text/html'))) {
      // Drag data item is HTML
      data[i].getAsString(function (s){
        console.log("... Drop: HTML = " + s);
      });
    } else if ((data[i].kind == 'string') &amp;&amp; (data[i].type.match('^text/uri-list'))) {
      // Drag data item is URI
      data[i].getAsString(function (s){
        console.log("... Drop: URI = " + s);
      });
    }
  }
}

function dragover_handler(ev) {
  console.log("dragOver");
  ev.preventDefault();
  // Set the dropEffect to move
  ev.dataTransfer.dropEffect = "move"
}

function dragend_handler(ev) {
  console.log("dragEnd");
  var dataList = ev.dataTransfer.items;
  for (var i = 0; i &lt; dataList.length; i++) {
    dataList.remove(i);
  }
  // Clear any remaining drag data
  dataList.clear();
}</pre>


<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('Example', 400, 300)}}</p>

<p>{{LiveSampleLink('Example', 'Result link')}}</p>


<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
