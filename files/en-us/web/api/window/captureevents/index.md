---
title: Window.captureEvents()
slug: Web/API/Window/captureEvents
tags:
  - API
  - Gecko
  - HTML DOM
  - Method
  - Non-standard
---
<div>{{ ApiRef() }} {{Deprecated_Header}} {{Non-standard_header}}</div>

<p>The <code><strong>Window.captureEvents()</strong></code> method registers the window to
  capture all events of the specified type.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">window.captureEvents(<em>eventType</em>)
</pre>

<p><code>eventType</code> is a combination of the following values:
  <code>Event.ABORT</code>, <code>Event.BLUR</code>, <code>Event.CLICK</code>,
  <code>Event.CHANGE</code>, <code>Event.DBLCLICK</code>, <code>Event.DRAGDDROP</code>,
  <code>Event.ERROR</code>, <code>Event.FOCUS</code>, <code>Event.KEYDOWN</code>,
  <code>Event.KEYPRESS</code>, <code>Event.KEYUP</code>, <code>Event.LOAD</code>,
  <code>Event.MOUSEDOWN</code>, <code>Event.MOUSEMOVE</code>, <code>Event.MOUSEOUT</code>,
  <code>Event.MOUSEOVER</code>, <code>Event.MOUSEUP</code>, <code>Event.MOVE</code>,
  <code>Event.RESET</code>, <code>Event.RESIZE</code>, <code>Event.SELECT</code>,
  <code>Event.SUBMIT</code>, <code>Event.UNLOAD</code>.</p>

<h2 id="Example">Example</h2>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;!-- ... --&gt;
&lt;script&gt;
function reg() {
  window.captureEvents(Event.CLICK);
  window.onclick = page_click;
}

function page_click() {
  alert('page click event detected!');
}
&lt;/script&gt;
&lt;/head&gt;

&lt;body onload="reg();"&gt;
&lt;p&gt;click anywhere on this page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Notes">Notes</h2>

<p>Events raised in the DOM by user activity (such as clicking buttons or shifting focus
  away from the current document) generally pass through the high-level <a
    href="/en-US/docs/Web/API/Window"><code>window</code></a> and <a
    href="/en-US/docs/Web/API/Document"><code>document</code></a> objects first before
  arriving at the object that initiated the event.</p>

<p>When you call the <code>captureEvents()</code> method on the <a
    href="/en-US/docs/Web/API/Window"><code>window</code></a>, events of the type you
  specify (for example, <code>Event.CLICK</code>) no longer pass through to "lower"
  objects in the hierarchy. In order for events to "bubble up" in the way that they
  normally do, you must call <a
    href="/en-US/docs/Web/API/Window/releaseEvents"><code>window.releaseEvents()</code></a>
  ({{deprecated_inline}}) on the window to keep it from trapping events.</p>

<p>Note that you can pass a list of events to this method using the following syntax:
  <code>window.captureEvents(Event.KEYPRESS | Event.KEYDOWN | Event.KEYUP)</code>.</p>

<h2 id="Specifications">Specifications</h2>

<p>This is not part of any specification.</p>
