---
title: DataTransferItem.type
slug: Web/API/DataTransferItem/type
tags:
  - API
  - DataTransferItem
  - HTML DOM
  - HTML Drag and Drop API
  - Property
  - Reference
  - Type
  - drag and drop
browser-compat: api.DataTransferItem.type
---
<div>{{APIRef("HTML Drag and Drop API")}}</div>

<p>The read-only <strong><code>DataTransferItem.type</code></strong> property returns the
  type (format) of the {{domxref("DataTransferItem")}} object representing the drag data
  item. The <code>type</code> is a Unicode string generally given by a MIME type, although
  a MIME type is not required.</p>

<p>Some example types are: <code>text/plain</code> and <code>text/html</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>dataItem</em>.type;
</pre>

<h3 id="Return_value">Return value</h3>

<p>A {{domxref("DOMString")}} representing the drag data item's type.</p>

<h2 id="Example">Example</h2>

<p>This example shows the use of the <code>type</code> property.</p>

<pre class="brush: js">function drop_handler(ev) {
 console.log("Drop");
 ev.preventDefault();
 var data = ev.dataTransfer.items;
 for (var i = 0; i &lt; data.length; i += 1) {
   if ((data[i].kind == 'string') &amp;&amp;
       (data[i].type.match('^text/plain'))) {
     // This item is the target node
     data[i].getAsString(function (s){
       ev.target.appendChild(document.getElementById(s));
     });
   } else if ((data[i].kind == 'string') &amp;&amp;
              (data[i].type.match('^text/html'))) {
     // Drag data item is HTML
     console.log("... Drop: HTML");
   } else if ((data[i].kind == 'string') &amp;&amp;
              (data[i].type.match('^text/uri-list'))) {
     // Drag data item is URI
     console.log("... Drop: URI");
   } else if ((data[i].kind == 'file') &amp;&amp;
              (data[i].type.match('^image/'))) {
     // Drag data item is an image file
     var f = data[i].getAsFile();
     console.log("... Drop: File ");
   }
 }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("DataTransfer.type()")}}</li>
  <li><a
      href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types">Incomplete
      list of MIME types</a></li>
</ul>
