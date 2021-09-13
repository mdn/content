---
title: UIEvent.layerY
slug: Web/API/UIEvent/layerY
tags:
- API
- DOM
- Property
- Read-only
- Reference
- UIEvent
browser-compat: api.UIEvent.layerY
---
<p>{{APIRef("DOM Events")}}{{Non-standard_header}}</p>

<p>The <code><strong>UIEvent.layerY</strong></code> read-only property returns the
  vertical coordinate of the event relative to the current layer.</p>

<p>This property takes scrolling of the page into account, and returns a value relative to
  the whole of the document, unless the event occurs inside a positioned element, where
  the returned value is relative to the top left of the positioned element.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>ypos</em> = <em>event</em>.layerY;
</pre>

<ul>
  <li><code>ypos</code> is an integer value in pixels for the y-coordinate of the mouse
    pointer, when the mouse event fired.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;pageX\pageY &amp; layerX\layerY example&lt;/title&gt;

&lt;script type="text/javascript"&gt;

function showCoords(evt){
  var form = document.forms.form_coords;
  var parent_id = evt.target.parentNode.id;
  form.parentId.value = parent_id;
  form.pageXCoords.value = evt.pageX;
  form.pageYCoords.value = evt.pageY;
  form.layerXCoords.value = evt.layerX;
  form.layerYCoords.value = evt.layerY;
}
&lt;/script&gt;

&lt;style type="text/css"&gt;

 #d1 {
  border: solid blue 1px;
  padding: 20px;
 }

 #d2 {
  position: absolute;
  top: 180px;
  left: 80%;
  right:auto;
  width: 40%;
  border: solid blue 1px;
  padding: 20px;
 }

 #d3 {
  position: absolute;
  top: 240px;
  left: 20%;
  width: 50%;
  border: solid blue 1px;
  padding: 10px;
 }

&lt;/style&gt;
&lt;/head&gt;

&lt;body onmousedown="showCoords(event)"&gt;

&lt;p&gt;To display the mouse coordinates please click anywhere on the page.&lt;/p&gt;

&lt;div id="d1"&gt;
&lt;span&gt;This is an un-positioned div so clicking it will return
layerX/layerY values almost the same as pageX/PageY values.&lt;/span&gt;
&lt;/div&gt;

&lt;div id="d2"&gt;

&lt;span&gt;This is a positioned div so clicking it will return layerX/layerY
values that are relative to the top-left corner of this positioned
element. Note the pageX\pageY properties still return the
absolute position in the document, including page scrolling.&lt;/span&gt;

&lt;span&gt;Make the page scroll more! This is a positioned div so clicking it
will return layerX/layerY values that are relative to the top-left
corner of this positioned element. Note the pageX\pageY properties still
return the absolute position in the document, including page
scrolling.&lt;/span&gt;

&lt;/div&gt;

&lt;div id="d3"&gt;
&lt;form name="form_coords" id="form1"&gt;
 Parent Element id: &lt;input type="text" name="parentId" size="7" /&gt;&lt;br /&gt;
 pageX:&lt;input type="text" name="pageXCoords" size="7" /&gt;
 pageY:&lt;input type="text" name="pageYCoords" size="7" /&gt;&lt;br /&gt;
 layerX:&lt;input type="text" name="layerXCoords" size="7" /&gt;
 layerY:&lt;input type="text" name="layerYCoords" size="7" /&gt;
&lt;/form&gt;
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<p><em>This property is not part of any specification.</em></p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
