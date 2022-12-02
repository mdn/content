---
title: Using the Performance API
slug: Web/API/Performance_API/Using_the_Performance_API
page-type: guide
tags:
  - Guide
  - Performance
  - Web Performance
---

{{DefaultAPISidebar("Performance API")}}

While a web application is running, the browser collects data that records various aspects of its performance, such as:

- how long event handlers take to run
- how long it takes the browser to fetch resources such as images, videos, fonts, and scripts
- which paint operations take a long time to execute

The Performance API gives web developers access to these metrics, and also enables them to record their own custom metrics that are associated with various events or locations in the code.

## Overview

### Performance entries

A single recorded performance metric is called a _performance entry_ and is represented by an instance of the {{domxref("PerformanceEntry")}} interface.

The Performance API records various different types of performance metric, and the `PerformanceEntry` has an {{domxref("PerformanceEntry.entryType", "entryType")}} property which is a string describing the type of this performance entry:

- `"element"` records how long it takes an element to load and render
- `"event"` records how long it took the browser to start running an event handler in response to its trigger, and how long the event handler took to run
- `"first-input"` records the {{Glossary("First input delay")}}
- `"largest-contentful-paint"` records the largest paint during page load
- `"layout-shift"` records a metric representing how much the page layout has shifted in each animation frame
- `"longtask"` records tasks that took 50ms or more
- `"mark"` records a custom timestamp made by the developer
- `"measure"` records a custom measurement between two timestamps made by the developer
- `"navigation"` records metrics associated with navigating to and initial load of the page
- `"paint"` records key moments of rendering during page load
- `"resource"` records how long it took the browser to fetch a resource

#### Performance entry subclasses

Particular entry types typically include extra type-specific data: for example, the `"resource"` type captures the time at which DNS lookup started and ended. So entries are represented by subclasses that extend the basic `PerformanceEntry` interface. For example, a `"resource"` entry is represented by an instance of {{domxref("PerformanceResourceTiming")}}, which inherits from `PerformanceEntry`, and which adds properties to record DNS lookup timestamps.

The subclasses of `PerformanceEntry` also define the semantics of the properties belonging to `PerformanceEntry` itself: for example, `PerformanceEntry` has a {{domxref("PerformanceEntry.name", "name")}} property whose meaning depends on the subclass.

The following interfaces inherit from `PerformanceEntry`:

- {{domxref("LargestContentfulPaint")}}
- {{domxref("PerformanceElementTiming")}}
- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceResourceTiming")}}
  - {{domxref("PerformanceNavigationTiming")}} inherits from `PerformanceResourceTiming`
- {{domxref("TaskAttributionTiming")}}

### Accessing performance entries

You can access performance entries in one of two ways. The preferred way is to use the {{domxref("PerformanceObserver")}} interface, which is constructed with a callback function to be called when particular performancer entries are recorded. You then call its {{domxref("PerformanceObserver.observe", "observe")}} method, passing in the types to observe:

```js
function logEventDuration(entries) {
  const events = entries.getEntriesByType("event");
  for (const event of events) {
    console.log(
      `Event handler took: ${
        event.processingEnd - event.processingStart
      } milliseconds`
    );
  }
}

const observer = new PerformanceObserver(logEventDuration);
observer.observe({ entryTypes: ["event"] });
```

Alternatively, you can use the {{domxref("Performance.getEntries()")}}, {{domxref("Performance.getEntriesByName()")}}, and {{domxref("Performance.getEntriesByType()")}} methods to retrieve all performance entries for a page, or entries matching the given name or type.

```js
const events = performance.getEntriesByType("event");

for (const event of events) {
  console.log(
    `Event handler took: ${
      event.processingEnd - event.processingStart
    } milliseconds`
  );
}
```

The `PerformanceObserver` option is preferred because:

- The `getEntries*` methods will always return all relevant entries since the start of the timeline, so if you call it twice, you will see the same entries again and will need to filter out entries that you've seen before.
- Observer notifications are delivered asynchronously, so the browser can dispatch them during idle time to minimise their performance impact.

## Performance entry types

In the next sections we'll provide an overview of each of the entry types supported by the Performance API.

### `"event"`

The `"event"` performance entry type measures the latency of DOM events in your application: that is, the time between a user triggering an event and the application updating in response. Event latency is important to perceived performance in part because events are often tied to user actions: a user does something in the application and an event handler runs in response, so slow event handlers make an application feel unresponsive. Research suggests that [100 milliseconds is about the point where actions no longer feel instantaneous](https://www.nngroup.com/articles/response-times-3-important-limits/).

The Performance API records two different aspects of event latency:

- The time difference between the event being created (this is an approximation of the time the user input occurred) and the event handler being run. This is also called the event's _delay_.
- The time the event handler itself takes to run.

Event performance entries are recorded as instances of the {{domxref("PerformanceEventTiming")}} subclass of `PerformanceEntry`. This subclass adds {{domxref("PerformanceEventTiming.processingStart", "processingStart")}} and {{domxref("PerformanceEventTiming.processingEnd", "processingEnd")}} properties, that are timestamps recording the start and end of the event handler's execution.

The {{domxref("PerformanceEventTiming")}} defines the {{domxref("PerformanceEntry.startTime")}} property to be the time that the event was created, and the {{domxref("PerformanceEntry.duration")}} property to be the total event latency, between the `startTime` and the next rendering paint, rounded to the nearest 8ms.

Thus:

- Event delay is `processingStart - startTime`.
- Event handler execution time is `processingEnd - processingStart`.

Only event types that are triggered by user actions are recorded in the Performance API: for the full list of event types that are recorded, see the documentation for the {{domxref("PerformanceEventTiming")}} interface.

Also, by default, only events whose duration exceeds 104 ms are recorded, although this threshold can be changed in the API.

#### Example

In this example, we log the event target, delay, handler processing time, and total latency:

```js
function logEventDuration(entries) {
  const events = entries.getEntriesByType("event");
  for (const event of events) {
    console.log(`Event target: ${event.target}`);
    console.log(
      `Event delay: ${event.processingStart - event.startTime} milliseconds`
    );
    console.log(
      `Event handler: ${
        event.processingEnd - event.processingStart
      } milliseconds`
    );
    console.log(`Event latency: ${event.duration} milliseconds`);
  }
}

const observer = new PerformanceObserver(logEventDuration);
observer.observe({ entryTypes: ["event"] });
```

### `"mark"` and `"measure"`

The `"mark"` and `"measure"` performance entry types enable developers to explicitly instrument their code, to record timing information for operations that don't necessarily map to any of the built-in timing metrics.

For example, you might want to measure how long it takes to log a user into the application.

- _marks_ record individual timestamps. To record a mark, call {{domxref("Performance.mark()")}}. The entry type associated with a mark is {{domxref("PerformanceMark")}}.
- _measures_ record a measurement between two timestamps: the timestamps can be marks or any other timestamp. To record a mark, call {{domxref("Performance.measure()")}}. The entry type associated with a mark is {{domxref("PerformanceMeasure")}}.

#### Example

In this example we record a mark when the user starts the login process, and take a measure when they finish:

```js
loginButton.addEventListener("click", () => {
  performance.mark("start-login");
  // start logging the user in
});

// fires when login is complete
loggedInUser.addEventListener("load", () => {
  // measure from the start to now
  performance.measure("login-duration", "start-login");
});
```
