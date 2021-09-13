---
title: TouchList.length
slug: Web/API/TouchList/length
tags:
- API
- DOM
- DOM Reference
- Mobile
- Property
- Reference
- TouchList
- touch
browser-compat: api.TouchList.length
---
<div>{{ APIRef("Touch Events") }}</div>

<p>The <code><strong>length</strong></code> read-only property indicates the number of
  items (touch points) in a given {{domxref("TouchList")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>numTouches</em> = <em>touchList</em>.length;
</pre>

<h3 id="Return_value">Return value</h3>

<dl>
  <dt><code>numTouches</code></dt>
  <dd>The number of touch points in <code>touchList</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>This code example illustrates the use of the {{domxref("TouchList")}} interface's
  {{domxref("TouchList.item()","item")}} method and the
  {{domxref("TouchList.length","length")}} property.</p>

<pre class="brush: js">target = document.getElementById("target");

target.addEventListener('touchstart', function(ev) {

  // If this touchstart event started on element target,
  // set touch to the first item in the targetTouches list;
  // otherwise set touch to the first item in the touches list
  var touch;

  if (ev.targetTouches.length &gt;= 1)
     touch = ev.targetTouches.item(0);
  else
     touch = ev.touches.item(0);
}, false);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
