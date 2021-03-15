---
title: Using the Frame Timing API
slug: Web/API/Frame_Timing_API/Using_the_Frame_Timing_API
tags:
  - Guide
  - Web Performance
---
<div>{{DefaultAPISidebar("Frame Timing API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>PerformanceFrameTiming</code></strong> interface provides <em>frame</em> timing data about the browser's event loop. A <em>frame</em> represents the amount of work a browser does in <a href="https://html.spec.whatwg.org/multipage/webappapis.html#processing-model-8">one event loop iteration</a> such as processing DOM events, resizing, scrolling, rendering, CSS animations, etc. A <em>frame rate</em> of 60 fps (frames per second) for a 60 Hz refresh rate is a common target for a good <em>responsive</em> user experience. This means the browser should process a frame in about 16.7ms.</p>

<p>An application can register a {{domxref("PerformanceObserver")}} for "<code>frame</code>" {{domxref("PerformanceEntry","performance entry types")}} and the observer will have data about the duration of each frame event. This data can be used to help identify areas that take too long to provide a good user experience.</p>

<p>This document describes how to use the {{domxref("PerformanceFrameTiming")}} interfaces including example code. For an overview of these interfaces see <a href="/en-US/docs/Web/API/Frame_Timing_API">Frame Timing API</a>.</p>

<h2 id="Frame_observers">Frame observers</h2>

<p>{{experimental_inline}}The <em>performance observer</em> interfaces allow an application to register an <em>observer</em> for specific {{domxref("PerformanceEntry","performance event types")}}. When one of those event types is added to the browser's <em>performance timeline</em>, the application is notified of the event via the observer's callback function that was specified when the observer was created.</p>

<h2 id="Creating_an_observer">Creating an observer</h2>

<p>To observe "<code>frame</code>" performance entry types, the application first creates a {{domxref("PerformanceObserver")}} object with a specific frame observer callback. In the following example, two observers for the "<code>frame</code>" {{domxref("PerformanceEntry.entryType","performance entry type")}} are created and the first observer constructor uses inline function syntax.</p>

<pre class="brush: js">function create_frame_observer() {
  if (window.PerformanceObserver === undefined) return;

  // Register the performance observer
  var observe_frame = new PerformanceObserver(function(list) {
    // Log the frame entries
    var perfEntries = list.getEntriesByType("frame");
    for (var i=0; i &lt; perfEntries.length; i++) {
      console.log("OBS #1: [" + i + "] = " + perfEntries[i].name);
    }
  });
  // Only observe 'frame' events
  observe_frame.observe({entryTypes: ['frame']});
}

function init () {
  create_frame_observer();

  var obs = new PerformanceObserver(frame_observer_2);
  obs.observe({entryTypes: ['frame']});
}

function frame_observer_2(list) {
  // Log the frame entries
  var perfEntries = list.getEntriesByType("frame");
  for (var i=0; i &lt; perfEntries.length; i++) {
    console.log("OBS #2: [" + i + "] = " + perfEntries[i].name);
  }
}

&lt;body onload="init(event)"&gt;
</pre>

<p>When the browser adds a new "<code>frame</code>" entry to the performance timeline, both of the observer callbacks will be invoked.</p>

<h2 id="Registering_for_notifications">Registering for notifications</h2>

<p>After an observer is created, the next step is to use the {{domxref("PerformanceObserver.observe()")}} method to specify the set of performance events to observe. In the following example, the observer only registers for "<code>frame</code>" {{domxref("PerformanceEntry.entryType","performance entry")}} notifications.</p>

<pre class="brush: js"> var observe_frame = new PerformanceObserver(function(list) {
   // Process the frame ...
 });
 // Only observe 'frame' events
 observe_frame.observe({entryTypes: ['frame']});
</pre>

<p>In the following example, the observer registers to be notified when several different {{domxref("PerformanceEntry.entryType","performance entry types")}} are added to the performance timeline.</p>

<pre class="brush: js"> var observe_all = new PerformanceObserver(function(list) {
   var perfEntries = list.getEntries();
   for (var i=0; i &lt; perfEntries.length; i++) {
     switch (perfEntries[i].entryType) {
       case "frame": process_frame(perfEntries[i]); break;
       case "mark": process_mark(perfEntries[i]); break;
       case "measure": process_measure(perfEntries[i]); break;
       case "resource": process_resource(perfEntries[i]); break;
       default: console.log("Unexpected performance entry type: " + perfEntries[i].entryType);
     }
  }
 });
 // Observe frame, mark, measure and resource events
 observe_frame.observe({entryTypes: ['frame', 'mark', 'measure', 'resource']});
</pre>

<h2 id="Accessing_frame_data">Accessing frame data</h2>

<p>When a frame {{domxref("PerformanceObserver","observer")}} is invoked, the observer callback is given one argument that is a {{domxref("PerformanceObserverEntryList")}} object. This object has three methods to retrieve frame data:</p>

<dl>
 <dt>{{domxref("PerformanceObserverEntryList.getEntries","PerformanceObserverEntryList.getEntries()")}}</dt>
 <dd>Returns a list of explicitly <em>observed</em> {{domxref("PerformanceEntry")}} objects based on the list of entry types given to {{domxref("PerformanceObserver.observe()")}}.</dd>
 <dt>{{domxref("PerformanceObserverEntryList.getEntriesByType","PerformanceObserverEntryList.getEntriesByType()")}}</dt>
 <dd>Returns a list of explicitly <em>observed</em> {{domxref("PerformanceEntry")}} objects of the given <em>entry type</em>.</dd>
 <dt>{{domxref("PerformanceObserverEntryList.getEntriesByName","PerformanceObserverEntryList.getEntriesByName()")}}</dt>
 <dd>Returns a list of explicitly <em>observed</em> {{domxref("PerformanceEntry")}} objects based on the given <em>name</em> and <em>entry type</em>.</dd>
</dl>

<p>In the following example, the observer only processes "<code>frame</code>" entries.</p>

<pre class="brush: js">var THRESHOLD = 1500;
var observe_frame = new PerformanceObserver(function(list) {
  var perfEntries = list.getEntriesByType("frame");
  for (var i=0; i &lt; perfEntries.length; i++) {
    if (perfEntries[i].duration &gt; THRESHOLD) {
      console.log("Warning: frame '" + THRESHOLD + "' exceeded!");
    }
  }
});
observe_frame.observe({entryTypes: ['frame']});
</pre>

<h2 id="The_tools_will_save_you!">The tools will save you!</h2>

<p>First, perhaps using <em>the tools will save you</em> is a <em>bit too strong</em> but performance tools can certainly help identify code that is not conformant to some expected time threshold. This section briefly describes the web performance tools for the Firefox and Chrome/Canary browsers.</p>

<h3 id="Firefox_performance_tool">Firefox performance tool</h3>

<p>Firefox's performance tool allows the developer to <em>record</em> a piece of the user's interaction and the data obtained during the recording is used to create a <em>profile</em> of the browser's activity. The profile includes a <em><a href="/en-US/docs/Tools/Performance/Waterfall">waterfall</a></em> of the activity such as event handling, layout, painting, scripting, etc.</p>

<p>Firefox's performance tool also includes a <em><a href="/en-US/docs/Tools/Performance/Frame_rate">frame rate graph</a></em> which provides timestamps for each frame including the average frame rate and the minimum and maximum rates (for a specific recording session). This data, along with the waterfall data, gives an indication of where a site might be having frame related performance problems (for example, by correlating the recording's minimum rates with their respective waterfall events).</p>

<p>The performance tool's <em><a href="/en-US/docs/Tools/Performance/Flame_Chart">flame chart</a></em> and <em><a href="/en-US/docs/Tools/Performance/Call_Tree">call tree</a></em> tabs provide data to help analyze the site's JavaScript usage. The call tree shows where the application is spending most of its time, whereas the flame chart shows the state of the JavaScript stack for the code at every millisecond during the performance profile. This provides a way to know exactly which function was executing at any point during the recording, how long it ran, and where it was called from.</p>

<h3 id="Chrome_performance_tool">Chrome performance tool</h3>

<p>The Chrome (and Canary) browsers also have a performance tool with similar functions as Firefox. See <a href="https://developer.chrome.com/devtools/docs/timeline">Performance profiling with the Timeline</a> for more information about this tool.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Tools/Performance/Frame_rate">Frame Rate (Firefox Performance Tool)</a></li>
 <li><a href="https://w3c.github.io/frame-timing/">Frame Timing</a>; W3C Editor's Draft</li>
</ul>
