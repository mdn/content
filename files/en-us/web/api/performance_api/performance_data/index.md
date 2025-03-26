---
title: Performance data
slug: Web/API/Performance_API/Performance_data
page-type: guide
---

{{DefaultAPISidebar("Performance API")}}

The Performance API measures and exposes performance data that can be collected as performance metrics for your web application. It provides methods to observe aspects of application performance. It doesn't provide performance data analysis, or visualizations. However, the Performance API is integrated well with developer tools in browsers and its data is often sent to analytics end points and libraries to record performance metrics which help you to evaluate the data to find performance bottlenecks affecting your users.

This page provides an overview about what sorts of Performance API data exists, how it is collected, and how it can be accessed.

## Collecting data

Most of the metrics exposed by the Performance API are automatically collected by the browser, and you don't have to tell it to collect them: you just have to retrieve them.

For some metrics you do have to tell the browser what to measure:

- the [Element Timing](/en-US/docs/Web/API/PerformanceElementTiming) metric measures the time it takes to load and render certain DOM elements. This metric is opt-in: to ask the browser to include metrics for a particular element you must add the `elementtiming` attribute to it.
- the [User Timing](/en-US/docs/Web/API/Performance_API/User_timing) metric enables you to measure the time between arbitrary points in your program, that might map to application-defined operations (such as logging in a user). To collect these metrics you need to add Performance API calls at the relevant points.
- the [Server Timing](/en-US/docs/Web/API/Performance_API/Server_timing) metric enables you to measure the time taken for application-defined server-side operations. To collect these metrics your server must send the `Server-Timing` HTTP header.

## Performance data structure

With the Performance API you can collect performance data in both {{domxref("Window.performance", "Window")}} and {{domxref("WorkerGlobalScope.performance", "Worker")}} global contexts. If you are collecting performance metrics for multiple contexts, take a look at {{domxref("performance.timeOrigin")}} to synchronize time origins between contexts.

Within these contexts, individual performance data is represented by performance entries.

### Performance entries

A single recorded performance data point is called a _performance entry_ and is represented by an instance of the {{domxref("PerformanceEntry")}} interface.

The Performance API records various different types of performance data, and the `PerformanceEntry` has an {{domxref("PerformanceEntry.entryType", "entryType")}} property which is a string describing the type of this performance entry:

- `"element"` records how long it takes an element to load and render.
- `"event"` records how long it took the browser to start running an event handler in response to its trigger, and how long the event handler took to run. Used to measure {{Glossary("Interaction to Next Paint")}}.
- `"first-input"` records the {{Glossary("First Input Delay")}}.
- `"largest-contentful-paint"` records the largest paint during page load.
- `"layout-shift"` records a metric representing how much the page layout has shifted in each animation frame.
- `"longtask"` records tasks that took 50ms or more.
- `"mark"` records a custom timestamp made by the developer.
- `"measure"` records a custom measurement between two timestamps made by the developer.
- `"navigation"` records metrics associated with navigating to and initial load of the page.
- `"paint"` records key moments of rendering during page load.
- `"resource"` records how long it took the browser to fetch a resource.
- `"visibility-state"` records the timing of page visibility state changes, i.e., when a tab changes from the foreground to the background or vice versa.

### Performance entry subclasses

Particular entry types typically include extra type-specific data: for example, the `"resource"` type captures the time at which DNS lookup started and ended. So entries are represented by subclasses that extend the basic `PerformanceEntry` interface. For example, a `"resource"` entry is represented by an instance of {{domxref("PerformanceResourceTiming")}}, which inherits from `PerformanceEntry`, and which adds properties to record DNS lookup timestamps.

The subclasses of `PerformanceEntry` also define the semantics of the properties belonging to `PerformanceEntry` itself: for example, `PerformanceEntry` has a {{domxref("PerformanceEntry.name", "name")}} property whose meaning depends on the subclass.

The following interfaces inherit from `PerformanceEntry`:

- {{domxref("LargestContentfulPaint")}}
- {{domxref("LayoutShift")}}
- {{domxref("PerformanceElementTiming")}}
- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceResourceTiming")}}
  - {{domxref("PerformanceNavigationTiming")}} inherits from `PerformanceResourceTiming`
- {{domxref("TaskAttributionTiming")}}
- {{domxref("VisibilityStateEntry")}}

## Accessing data

You can access performance entries in one of two ways. The preferred way is to use the {{domxref("PerformanceObserver")}} interface, which is constructed with a callback function to be called when particular performance entries are recorded. You then call its {{domxref("PerformanceObserver.observe", "observe")}} method, passing in the types to observe and using the `buffered` option to retrieve entries that occurred before observation.

```js
function logEventDuration(entries) {
  const events = entries.getEntriesByType("event");
  for (const event of events) {
    console.log(
      `Event handler took: ${
        event.processingEnd - event.processingStart
      } milliseconds`,
    );
  }
}

const observer = new PerformanceObserver(logEventDuration);
observer.observe({ type: "event", buffered: true });
```

Alternatively, you can use the {{domxref("Performance.getEntries()")}}, {{domxref("Performance.getEntriesByName()")}}, and {{domxref("Performance.getEntriesByType()")}} methods to retrieve all performance entries for a page, or entries matching the given name or type.

```js
const events = performance.getEntriesByType("event");

for (const event of events) {
  console.log(
    `Event handler took: ${
      event.processingEnd - event.processingStart
    } milliseconds`,
  );
}
```

The `PerformanceObserver` option is preferred because:

- The `getEntries*` methods will always return all relevant entries since the start of the timeline, so if you call it twice, you will see the same entries again and will need to filter out entries that you've seen before.
- Observer notifications are delivered asynchronously, so the browser can dispatch them during idle time to minimize their performance impact.
- Not all entry types work with the `getEntries*` methods. For some you have to use performance observers to access them.

## Managing buffer sizes

There is a buffer limit for performance entries for each global object. It ensures that the browser doesn't consume indefinite memory when holding performance data. Especially when your website or application fetches a lot of resources (e.g. when using polling), you might need to look into the limits for the buffers:

| {{domxref("PerformanceEntry.entryType", "entryType")}} identifier | Interface                                  | Maximum number of buffer entries |
| ----------------------------------------------------------------- | ------------------------------------------ | -------------------------------- |
| `"mark"`                                                          | {{domxref("PerformanceMark")}}             | Infinite                         |
| `"measure"`                                                       | {{domxref("PerformanceMeasure")}}          | Infinite                         |
| `"navigation"`                                                    | {{domxref("PerformanceNavigationTiming")}} | Infinite                         |
| `"resource"`                                                      | {{domxref("PerformanceResourceTiming")}}   | 250 (adjustable, see below)      |
| `"longtask"`                                                      | {{domxref("PerformanceLongTaskTiming")}}   | 200                              |
| `"paint"`                                                         | {{domxref("PerformancePaintTiming")}}      | 2 (there won't be more)          |
| `"element"`                                                       | {{domxref("PerformanceElementTiming")}}    | 150                              |
| `"event"`                                                         | {{domxref("PerformanceEventTiming")}}      | 150                              |
| `"first-input"`                                                   | {{domxref("PerformanceEventTiming")}}      | 1 (there won't be more)          |
| `"layout-shift"`                                                  | {{domxref("LayoutShift")}}                 | 150                              |
| `"largest-contentful-paint"`                                      | {{domxref("LargestContentfulPaint")}}      | 150                              |
| `"visibility-state"`                                              | {{domxref("VisibilityStateEntry")}}        | 50                               |

Table 1. Buffer sizes ([source](https://w3c.github.io/timing-entrytypes-registry/#registry)).

For `"resource"` entry types, see [Managing resource buffer sizes](/en-US/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) for how to set a different buffer size.

For `"first-input"` and `"paint"`, the limitation is inherent in the metric's definition. There won't be more entries than one (or two).

The [performance observer callback](/en-US/docs/Web/API/PerformanceObserver/PerformanceObserver) contains an optional `droppedEntriesCount` parameter that tells you how many entries were lost because the buffer storage was full.

```js
function perfObserver(list, observer, droppedEntriesCount) {
  list.getEntries().forEach((entry) => {
    // do something with the entries
  });
  if (droppedEntriesCount > 0) {
    console.warn(
      `${droppedEntriesCount} entries were dropped because the buffer was full.`,
    );
  }
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });
```

Another useful method is {{domxref("PerformanceObserver.takeRecords()")}} which returns the current list of performance entries stored in the performance observer while also emptying it out.

## JSON data

All performance entries provide a `toJSON()` {{Glossary("Serialization","serializer")}} which returns a {{jsxref("JSON")}} representation of the entry. This can be useful if you want to collect all of the available data and store it somewhere.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "event", buffered: true });
```

This would log a JSON object like so:

```json
{
  "name": "dragover",
  "entryType": "event",
  "startTime": 67090751.599999905,
  "duration": 128,
  "processingStart": 67090751.70000005,
  "processingEnd": 67090751.900000095,
  "cancelable": true
}
```

To get a string representation of the entry, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) with any `PerformanceEntry` object directly; it will call the entry's `toJSON()` method automatically.

## See also

- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceObserver.observe()")}}
