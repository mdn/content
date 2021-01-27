---
title: Multi-touch interaction
slug: Web/API/Touch_events/Multi-touch_interaction
tags:
  - Guide
  - TouchEvent
  - touch
---
<p>{{DefaultAPISidebar("Touch Events")}}</p>

<p>The touch event interfaces support application-specific single and multi-touch interactions. However, the interfaces can be a bit tricky for programmers to use because touch events are very different from other DOM input events, such as {{domxref("MouseEvent","mouse events")}}. The application described in this guide shows how to use touch events for simple single and multi-touch interactions, the basics needed to build application-specific gestures.</p>

<p>A <em>live</em> version of this application is available on <a href="https://mdn.github.io/dom-examples/touchevents/Multi-touch_interaction.html">Github</a>. The <a href="https://github.com/mdn/dom-examples/tree/master/touchevents">source code is available on Github</a> and pull requests and <a href="https://github.com/mdn/dom-examples/issues">bug reports</a> are welcome.</p>

<h2 id="Example">Example</h2>

<p>This example demonstrates using the {{event("touchstart")}}, {{event("touchmove")}}, {{event("touchcancel")}}, and {{event("touchend")}}) touch events for the following gestures: single touch, two (simultaneous) touches, more than two simultaneous touches, 1-finger swipe, and 2-finger move/pinch/swipe.</p>

<h3 id="Define_touch_targets">Define touch targets</h3>

<p>The application uses {{HTMLElement("div")}} elements to represent four touch areas.</p>

<pre class="brush: html">&lt;style&gt;
  div {
    margin: 0em;
    padding: 2em;
  }
  #target1 {
    background: white;
    border: 1px solid black;
  }
  #target2 {
    background: white;
    border: 1px solid black;
  }
  #target3 {
    background: white;
    border: 1px solid black;
  }
  #target4 {
    background: white;
    border: 1px solid black;
  }
&lt;/style&gt;
</pre>

<h3 id="Global_state">Global state</h3>

<p><code>tpCache</code> is used to cache touch points for processing outside of the event where they were fired.</p>

<pre class="brush: js">// Log events flag
var logEvents = false;

// Touch Point cache
var tpCache = new Array();
</pre>

<h3 id="Register_event_handlers">Register event handlers</h3>

<p>Event handlers are registered for all four touch event types. The {{event("touchend")}} and {{event("touchcancel")}} event types use the same handler.</p>

<pre class="brush: js">function set_handlers(name) {
 // Install event handlers for the given element
 var el=document.getElementById(name);
 el.ontouchstart = start_handler;
 el.ontouchmove = move_handler;
 // Use same handler for touchcancel and touchend
 el.ontouchcancel = end_handler;
 el.ontouchend = end_handler;
}

function init() {
 set_handlers("target1");
 set_handlers("target2");
 set_handlers("target3");
 set_handlers("target4");
}
</pre>

<h3 id="MovePinchZoom_handler">Move/Pinch/Zoom handler</h3>

<p>This function provides very basic support for 2-touch horizontal move/pinch/zoom handling. The code does not include error handling, or vertical moving. Note that the <em>threshold</em> for pinch and zoom movement detection is application specific (and device dependent).</p>

<pre class="brush: js">// This is a very basic 2-touch move/pinch/zoom handler that does not include
// error handling, only handles horizontal moves, etc.
function handle_pinch_zoom(ev) {

 if (ev.targetTouches.length == 2 &amp;&amp; ev.changedTouches.length == 2) {
   // Check if the two target touches are the same ones that started
   // the 2-touch
   var point1=-1, point2=-1;
   for (var i=0; i &lt; tpCache.length; i++) {
     if (tpCache[i].identifier == ev.targetTouches[0].identifier) point1 = i;
     if (tpCache[i].identifier == ev.targetTouches[1].identifier) point2 = i;
   }
   if (point1 &gt;=0 &amp;&amp; point2 &gt;= 0) {
     // Calculate the difference between the start and move coordinates
     var diff1 = Math.abs(tpCache[point1].clientX - ev.targetTouches[0].clientX);
     var diff2 = Math.abs(tpCache[point2].clientX - ev.targetTouches[1].clientX);

     // This threshold is device dependent as well as application specific
     var PINCH_THRESHOLD = ev.target.clientWidth / 10;
     if (diff1 &gt;= PINCH_THRESHOLD &amp;&amp; diff2 &gt;= PINCH_THRESHOLD)
         ev.target.style.background = "green";
   }
   else {
     // empty tpCache
     tpCache = new Array();
   }
 }
}
</pre>

<h3 id="Touch_start_handler">Touch start handler</h3>

<p>The {{event("touchstart")}} event handler caches touch points to support 2-touch gestures. It also calls {{domxref("Event.preventDefault","preventDefault()")}} to keep the browser from applying further event handling (for example, mouse event emulation).</p>

<pre class="brush: js">function start_handler(ev) {
 // If the user makes simultaneous touches, the browser will fire a
 // separate touchstart event for each touch point. Thus if there are
 // three simultaneous touches, the first touchstart event will have
 // targetTouches length of one, the second event will have a length
 // of two, and so on.
 ev.preventDefault();
 // Cache the touch points for later processing of 2-touch pinch/zoom
 if (ev.targetTouches.length == 2) {
   for (var i=0; i &lt; ev.targetTouches.length; i++) {
     tpCache.push(ev.targetTouches[i]);
   }
 }
 if (logEvents) log("touchStart", ev, true);
 update_background(ev);
}
</pre>

<h3 id="Touch_move_handler">Touch move handler</h3>

<p>The {{event("touchmove")}} handler calls {{domxref("Event.preventDefault","preventDefault()")}} for the same reason mentioned above, and invokes the pinch/zoom handler.</p>

<pre class="brush: js">function move_handler(ev) {
 // Note: if the user makes more than one "simultaneous" touches, most browsers
 // fire at least one touchmove event and some will fire several touchmoves.
 // Consequently, an application might want to "ignore" some touchmoves.
 //
 // This function sets the target element's border to "dashed" to visually
 // indicate the target received a move event.
 //
 ev.preventDefault();
 if (logEvents) log("touchMove", ev, false);
 // To avoid too much color flashing many touchmove events are started,
 // don't update the background if two touch points are active
 if (!(ev.touches.length == 2 &amp;&amp; ev.targetTouches.length == 2))
   update_background(ev);

 // Set the target element's border to dashed to give a clear visual
 // indication the element received a move event.
 ev.target.style.border = "dashed";

 // Check this event for 2-touch Move/Pinch/Zoom gesture
 handle_pinch_zoom(ev);
}
</pre>

<h3 id="Touch_end_handler">Touch end handler</h3>

<p>The {{event("touchend")}} handler restores the event target's background color back to its original color.</p>

<pre class="brush: js">function end_handler(ev) {
  ev.preventDefault();
  if (logEvents) log(ev.type, ev, false);
  if (ev.targetTouches.length == 0) {
    // Restore background and border to original values
    ev.target.style.background = "white";
    ev.target.style.border = "1px solid black";
  }
}
</pre>

<h3 id="Application_UI">Application UI</h3>

<p>The application uses {{HTMLElement("div")}} elements for the touch areas and provides buttons to enable logging and clear the log.</p>

<pre class="brush: html">&lt;div id="target1"&gt; Tap, Hold or Swipe me 1&lt;/div&gt;
&lt;div id="target2"&gt; Tap, Hold or Swipe me 2&lt;/div&gt;
&lt;div id="target3"&gt; Tap, Hold or Swipe me 3&lt;/div&gt;
&lt;div id="target4"&gt; Tap, Hold or Swipe me 4&lt;/div&gt;

&lt;!-- UI for logging/bebugging --&gt;
&lt;button id="log" onclick="enableLog(event);"&gt;Start/Stop event logging&lt;/button&gt;
&lt;button id="clearlog" onclick="clearLog(event);"&gt;Clear the log&lt;/button&gt;
&lt;p&gt;&lt;/p&gt;
&lt;output&gt;&lt;/output&gt;
</pre>

<h3 id="Miscellaneous_functions">Miscellaneous functions</h3>

<p>These functions support the application but aren't directly involved with the event flow.</p>

<h4 id="Update_background_color">Update background color</h4>

<p>The background color of the touch areas will change as follows: no touch is <code>white</code>; one touch is <code>yellow</code>; two simultaneous touches is <code>pink</code>, and three or more simultaneous touches is <code>lightblue</code>. See <a href="#touch_move">touch move</a> for information about the background color changing when a 2-finger move/pinch/zoom is detected.</p>

<pre class="brush: js">function update_background(ev) {
 // Change background color based on the number simultaneous touches
 // in the event's targetTouches list:
 //   yellow - one tap (or hold)
 //   pink - two taps
 //   lightblue - more than two taps
 switch (ev.targetTouches.length) {
   case 1:
     // Single tap`
     ev.target.style.background = "yellow";
     break;
   case 2:
     // Two simultaneous touches
     ev.target.style.background = "pink";
     break;
   default:
     // More than two simultaneous touches
     ev.target.style.background = "lightblue";
 }
}
</pre>

<h4 id="Event_logging">Event logging</h4>

<p>The functions are used to log event activity to the application window, to support debugging and learning about the event flow.</p>

<pre class="brush: js">function enableLog(ev) {
  logEvents = logEvents ? false : true;
}

function log(name, ev, printTargetIds) {
  var o = document.getElementsByTagName('output')[0];
  var s = name + ": touches = " + ev.touches.length +
                " ; targetTouches = " + ev.targetTouches.length +
                " ; changedTouches = " + ev.changedTouches.length;
  o.innerHTML += s + "
";

  if (printTargetIds) {
    s = "";
    for (var i=0; i &lt; ev.targetTouches.length; i++) {
      s += "... id = " + ev.targetTouches[i].identifier + "
";
    }
    o.innerHTML += s;
  }
}

function clearLog(event) {
 var o = document.getElementsByTagName('output')[0];
 o.innerHTML = "";
}
</pre>

<h2 id="Related_topics_and_resources">Related topics and resources</h2>

<ul>
 <li>{{domxref("Pointer_events","Pointer Events")}}</li>
</ul>
