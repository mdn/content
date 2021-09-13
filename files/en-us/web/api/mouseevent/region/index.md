---
title: MouseEvent.region
slug: Web/API/MouseEvent/region
tags:
  - API
  - Canvas
  - DOM Events
  - MouseEvent
  - Property
  - Read-only
  - Reference
browser-compat: api.MouseEvent.region
---
<div>{{APIRef("DOM Events")}}</div>

<p>The <strong><code>MouseEvent.region</code></strong> read-only property returns the id
  of the <a href="/en-US/docs/Web/API/CanvasRenderingContext2D/addHitRegion">canvas hit
    region</a> affected by the event. If no hit region is affected, <code>null</code> is
  returned.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>hitRegion</em> = <em>instanceOfMouseEvent</em>.region
</pre>

<h3 id="Return_value">Return value</h3>

<p>A {{domxref("DOMString")}} representing the id of the hit region.</p>

<h2 id="Example">Example</h2>

<p>Example of using the <code>event.region</code> combined with
  <code><a href="/en-US/docs/Web/API/CanvasRenderingContext2D">CanvasRenderingContext2D</a>.<a href="/en-US/docs/Web/API/CanvasRenderingContext2D/addHitRegion">addHitRegion()</a></code> method.
</p>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;

&lt;script&gt;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
ctx.fill();
ctx.addHitRegion({id: "circle"});

canvas.addEventListener("mousemove", function(event){
  if(event.region) {
    console.log("hit region: " + event.region);
  }
});
&lt;/script&gt;
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("MouseEvent")}}</li>
  <li>{{domxref("CanvasRenderingContext2D.addHitRegion()")}}</li>
</ul>
