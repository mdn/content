---
title: Using the Frame Timing API
slug: Web/API/Frame_Timing_API/Using_the_Frame_Timing_API
tags:
  - Guide
  - Web Performance
---
{{DefaultAPISidebar("Frame Timing API")}}{{SeeCompatTable}}

The **`PerformanceFrameTiming`** interface provides _frame_ timing data about the browser's event loop. A _frame_ represents the amount of work a browser does in [one event loop iteration](https://html.spec.whatwg.org/multipage/webappapis.html#processing-model-8) such as processing DOM events, resizing, scrolling, rendering, CSS animations, etc. A _frame rate_ of 60 fps (frames per second) for a 60 Hz refresh rate is a common target for a good _responsive_ user experience. This means the browser should process a frame in about 16.7ms.

An application can register a {{domxref("PerformanceObserver")}} for "`frame`" {{domxref("PerformanceEntry","performance entry types")}} and the observer will have data about the duration of each frame event. This data can be used to help identify areas that take too long to provide a good user experience.

This document describes how to use the {{domxref("PerformanceFrameTiming")}} interfaces including example code. For an overview of these interfaces see [Frame Timing API](/en-US/docs/Web/API/Frame_Timing_API).

## Frame observers

{{experimental_inline}}The _performance observer_ interfaces allow an application to register an _observer_ for specific {{domxref("PerformanceEntry","performance event types")}}. When one of those event types is added to the browser's _performance timeline_, the application is notified of the event via the observer's callback function that was specified when the observer was created.

## Creating an observer

To observe "`frame`" performance entry types, the application first creates a {{domxref("PerformanceObserver")}} object with a specific frame observer callback. In the following example, two observers for the "`frame`" {{domxref("PerformanceEntry.entryType","performance entry type")}} are created and the first observer constructor uses inline function syntax.

```js
function create_frame_observer() {
  if (window.PerformanceObserver === undefined) return;

  // Register the performance observer
  var observe_frame = new PerformanceObserver(function(list) {
    // Log the frame entries
    var perfEntries = list.getEntriesByType("frame");
    for (var i=0; i < perfEntries.length; i++) {
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
  for (var i=0; i < perfEntries.length; i++) {
    console.log("OBS #2: [" + i + "] = " + perfEntries[i].name);
  }
}

<body onload="init(event)">
```

When the browser adds a new "`frame`" entry to the performance timeline, both of the observer callbacks will be invoked.

## Registering for notifications

After an observer is created, the next step is to use the {{domxref("PerformanceObserver.observe()")}} method to specify the set of performance events to observe. In the following example, the observer only registers for "`frame`" {{domxref("PerformanceEntry.entryType","performance entry")}} notifications.

```js
 var observe_frame = new PerformanceObserver(function(list) {
   // Process the frame ...
 });
 // Only observe 'frame' events
 observe_frame.observe({entryTypes: ['frame']});
```

In the following example, the observer registers to be notified when several different {{domxref("PerformanceEntry.entryType","performance entry types")}} are added to the performance timeline.

```js
 var observe_all = new PerformanceObserver(function(list) {
   var perfEntries = list.getEntries();
   for (var i=0; i < perfEntries.length; i++) {
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
```

## Accessing frame data

When a frame {{domxref("PerformanceObserver","observer")}} is invoked, the observer callback is given one argument that is a {{domxref("PerformanceObserverEntryList")}} object. This object has three methods to retrieve frame data:

- {{domxref("PerformanceObserverEntryList.getEntries","PerformanceObserverEntryList.getEntries()")}}
  - : Returns a list of explicitly _observed_ {{domxref("PerformanceEntry")}} objects based on the list of entry types given to {{domxref("PerformanceObserver.observe()")}}.
- {{domxref("PerformanceObserverEntryList.getEntriesByType","PerformanceObserverEntryList.getEntriesByType()")}}
  - : Returns a list of explicitly _observed_ {{domxref("PerformanceEntry")}} objects of the given _entry type_.
- {{domxref("PerformanceObserverEntryList.getEntriesByName","PerformanceObserverEntryList.getEntriesByName()")}}
  - : Returns a list of explicitly _observed_ {{domxref("PerformanceEntry")}} objects based on the given _name_ and _entry type_.

In the following example, the observer only processes "`frame`" entries.

```js
var THRESHOLD = 1500;
var observe_frame = new PerformanceObserver(function(list) {
  var perfEntries = list.getEntriesByType("frame");
  for (var i=0; i < perfEntries.length; i++) {
    if (perfEntries[i].duration > THRESHOLD) {
      console.log("Warning: frame '" + THRESHOLD + "' exceeded!");
    }
  }
});
observe_frame.observe({entryTypes: ['frame']});
```

## The tools will save you!

First, perhaps using _the tools will save you_ is a _bit too strong_ but performance tools can certainly help identify code that is not conformant to some expected time threshold. This section briefly describes the web performance tools for the Firefox and Chrome/Canary browsers.

### Firefox performance tool

Firefox's performance tool allows the developer to _record_ a piece of the user's interaction and the data obtained during the recording is used to create a _profile_ of the browser's activity. The profile includes a _[waterfall](/en-US/docs/Tools/Performance/Waterfall)_ of the activity such as event handling, layout, painting, scripting, etc.

Firefox's performance tool also includes a _[frame rate graph](/en-US/docs/Tools/Performance/Frame_rate)_ which provides timestamps for each frame including the average frame rate and the minimum and maximum rates (for a specific recording session). This data, along with the waterfall data, gives an indication of where a site might be having frame related performance problems (for example, by correlating the recording's minimum rates with their respective waterfall events).

The performance tool's _[flame chart](/en-US/docs/Tools/Performance/Flame_Chart)_ and _[call tree](/en-US/docs/Tools/Performance/Call_Tree)_ tabs provide data to help analyze the site's JavaScript usage. The call tree shows where the application is spending most of its time, whereas the flame chart shows the state of the JavaScript stack for the code at every millisecond during the performance profile. This provides a way to know exactly which function was executing at any point during the recording, how long it ran, and where it was called from.

### Chrome performance tool

The Chrome (and Canary) browsers also have a performance tool with similar functions as Firefox. See [Performance profiling with the Timeline](https://developer.chrome.com/devtools/docs/timeline) for more information about this tool.

## See also

- [Frame Rate (Firefox Performance Tool)](/en-US/docs/Tools/Performance/Frame_rate)
- [Frame Timing](https://w3c.github.io/frame-timing/); W3C Editor's Draft
