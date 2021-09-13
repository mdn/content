---
title: Pinch zoom gestures
slug: Web/API/Pointer_events/Pinch_zoom_gestures
tags:
  - Guide
  - PointerEvent
  - touch
---
<div>{{DefaultAPISidebar("Pointer Events")}}</div>

<p>Adding <em>gestures</em> to an application can significantly improve the user experience. There are many types of gestures, from the simple single-touch <em>swipe</em> gesture to the more complex multi-touch <em>twist</em> gesture, where the touch points (aka <em>pointers</em>) move in different directions.</p>

<p>This example shows how to detect the <em>pinch/zoom</em> gesture, which uses {{domxref("Pointer_events","pointer events")}} to detect whether the user moves two pointers closer or farther apart from each other. </p>

<p>A <em>live</em> version of this application is available on <a href="https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html">GitHub</a>. The <a href="https://github.com/mdn/dom-examples/blob/master/pointerevents/Pinch_zoom_gestures.html">source code is available on GitHub</a>; pull requests and <a href="https://github.com/mdn/dom-examples/issues">bug reports</a> are welcome.</p>

<h2 id="Example">Example</h2>

<p>In this example, you use the {{domxref("Pointer_events","pointer events")}} to simultaneously detect two pointing devices of any type, including fingers, mice, and pens. The pinch in (zoom out) gesture, which moves the two pointers toward each other, changes the target element's background color to <code>lightblue</code>. The pinch out (zoom in) gesture, which moves the two pointers away from each other, changes the target element's background color to <code>pink</code>.</p>

<h3 id="Define_touch_target">Define touch target</h3>

<p>The application uses {{HTMLElement("div")}} to define the pointers' target areas.</p>

<pre class="brush: html">&lt;style&gt;
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    background: white;
    border: 1px solid black;
  }
&lt;/style&gt;
</pre>

<h3 id="Global_state">Global state</h3>

<p>Supporting a two-pointer gesture requires preserving a pointer's event state during various event phases. This application uses two global variables to cache the event state.</p>

<pre class="brush: js">// Global vars to cache event state
var evCache = new Array();
var prevDiff = -1;
</pre>

<h3 id="Register_event_handlers">Register event handlers</h3>

<p>Event handlers are registered for the following pointer events: {{event("pointerdown")}}, {{event("pointermove")}} and {{event("pointerup")}}. The handler for {{event("pointerup")}} is used for the {{event("pointercancel")}}, {{event("pointerout")}} and {{event("pointerleave")}} events since these four events have the same semantics in this application.</p>

<pre class="brush: js">function init() {
 // Install event handlers for the pointer target
 var el=document.getElementById("target");
 el.onpointerdown = pointerdown_handler;
 el.onpointermove = pointermove_handler;

 // Use same handler for pointer{up,cancel,out,leave} events since
 // the semantics for these events - in this app - are the same.
 el.onpointerup = pointerup_handler;
 el.onpointercancel = pointerup_handler;
 el.onpointerout = pointerup_handler;
 el.onpointerleave = pointerup_handler;
}
</pre>

<h3 id="Pointer_down">Pointer down</h3>

<p>The {{event("pointerdown")}} event is fired when a pointer (mouse, pen/stylus or touch point on a touchscreen) makes contact with the <em>contact surface</em>. In this application, the event's state must be cached in case this down event is part of a two-pointer pinch/zoom gesture.</p>

<pre class="brush: js">function pointerdown_handler(ev) {
 // The pointerdown event signals the start of a touch interaction.
 // This event is cached to support 2-finger gestures
 evCache.push(ev);
 log("pointerDown", ev);
}
</pre>

<h3 id="Pointer_move">Pointer move</h3>

<p>The {{event("pointermove")}} event handler detects if a user is invoking a two-pointer pinch/zoom gesture. If two pointers are down, and the distance between the pointers is increasing (signifying a pinch out or zoom in), the element's background color is changed to <code>pink</code>, and if the distance between the pointers is decreasing (a pinch in or zoom out), the background color is changed to <code>lightblue</code>. In a more sophisticated application, pinch in or pinch out determination could be used to apply application-specific semantics.</p>

<p>When this event is processed, the target's border is set to <code>dashed</code> to provide a clear visual indication the element has received a move event.</p>

<pre class="brush: js">function pointermove_handler(ev) {
 // This function implements a 2-pointer horizontal pinch/zoom gesture.
 //
 // If the distance between the two pointers has increased (zoom in),
 // the target element's background is changed to "pink" and if the
 // distance is decreasing (zoom out), the color is changed to "lightblue".
 //
 // This function sets the target element's border to "dashed" to visually
 // indicate the pointer's target received a move event.
 log("pointerMove", ev);
 ev.target.style.border = "dashed";

 // Find this event in the cache and update its record with this event
 for (var i = 0; i &lt; evCache.length; i++) {
   if (ev.pointerId == evCache[i].pointerId) {
      evCache[i] = ev;
   break;
   }
 }

 // If two pointers are down, check for pinch gestures
 if (evCache.length == 2) {
   // Calculate the distance between the two pointers
   var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

   if (prevDiff &gt; 0) {
     if (curDiff &gt; prevDiff) {
       // The distance between the two pointers has increased
       log("Pinch moving OUT -&gt; Zoom in", ev);
       ev.target.style.background = "pink";
     }
     if (curDiff &lt; prevDiff) {
       // The distance between the two pointers has decreased
       log("Pinch moving IN -&gt; Zoom out",ev);
       ev.target.style.background = "lightblue";
     }
   }

   // Cache the distance for the next move event
   prevDiff = curDiff;
 }
}
</pre>

<h3 id="Pointer_up">Pointer up</h3>

<p>The {{event("pointerup")}} event is fired when a pointer is raised from the <em>contact surface</em>. When this occurs, the event is removed from the event cache and the target element's background color and border are restored to their original values.</p>

<p>In this application, this handler is also used for {{event("pointercancel")}}, {{event("pointerleave")}} and {{event("pointerout")}} events.</p>

<pre class="brush: js">function pointerup_handler(ev) {
  log(ev.type, ev);
  // Remove this pointer from the cache and reset the target's
  // background and border
  remove_event(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";

  // If the number of pointers down is less than two then reset diff tracker
  if (evCache.length &lt; 2) {
    prevDiff = -1;
  }
}</pre>

<h3 id="Application_UI">Application UI</h3>

<p>The application uses a {{HTMLElement("div")}} element for the touch area and provides buttons to enable logging and to clear the log.</p>

<p>To prevent the browser's default touch behavior from overriding this application's pointer handling, the {{cssxref("touch-action")}} property is applied to the {{HTMLElement("body")}} element.</p>

<pre class="brush: html">&lt;body onload="init();" style="touch-action:none"&gt;
 &lt;div id="target"&gt;Touch and Hold with 2 pointers, then pinch in or out.&lt;br/&gt;
    The background color will change to pink if the pinch is opening (Zoom In)
    or changes to lightblue if the pinch is closing (Zoom out).&lt;/div&gt;
 &lt;!-- UI for logging/debugging --&gt;
 &lt;button id="log" onclick="enableLog(event);"&gt;Start/Stop event logging&lt;/button&gt;
 &lt;button id="clearlog" onclick="clearLog(event);"&gt;Clear the log&lt;/button&gt;
 &lt;p&gt;&lt;/p&gt;
 &lt;output&gt;&lt;/output&gt;
&lt;/body&gt;
</pre>

<h3 id="Miscellaneous_functions">Miscellaneous functions</h3>

<p>These functions support the application but aren't directly involved in the event flow.</p>

<h4 id="Cache_management">Cache management</h4>

<p>This function helps manage the global event caches <code>evCache</code>.</p>

<pre class="brush: js">function remove_event(ev) {
 // Remove this event from the target's cache
 for (var i = 0; i &lt; evCache.length; i++) {
   if (evCache[i].pointerId == ev.pointerId) {
     evCache.splice(i, 1);
     break;
   }
 }
}
</pre>

<h4 id="Event_logging">Event logging</h4>

<p>These functions are used to send event activity to the application's window (to support debugging and learning about the event flow).</p>

<pre class="brush: js">// Log events flag
var logEvents = false;

// Logging/debugging functions
function enableLog(ev) {
  logEvents = logEvents ? false : true;
}

function log(prefix, ev) {
  if (!logEvents) return;
  var o = document.getElementsByTagName('output')[0];
  var s = prefix + ": pointerID = " + ev.pointerId +
                " ; pointerType = " + ev.pointerType +
                " ; isPrimary = " + ev.isPrimary;
  o.innerHTML += s + "
";
}

function clearLog(event) {
 var o = document.getElementsByTagName('output')[0];
 o.innerHTML = "";
}
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/">Pointer Events now in Firefox Nightly</a>; Mozilla Hacks; by Matt Brubeck and Jason Weathersby; 2015-Aug-04</li>
 <li><a href="https://github.com/jquery/PEP">jQuery Pointer Events Polyfill</a></li>
 <li><a href="https://material.io/design/interaction/gestures.html">Gestures</a>; Material Design</li>
</ul>
