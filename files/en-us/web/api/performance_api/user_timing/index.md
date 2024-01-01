---
title: User timing
slug: Web/API/Performance_API/User_timing
page-type: guide
---

{{DefaultAPISidebar("Performance API")}}

User Timing is part of the Performance API and allows you to measure the performance of applications using [high-precision timestamps](/en-US/docs/Web/API/DOMHighResTimeStamp) that are part of the browser's performance timeline.
There are two types of timing performance entries:

- {{domxref("PerformanceMark")}} entries are marks that you can name and add at any location in an application.
- {{domxref("PerformanceMeasure")}} entries are time measurements between two marks.

## What is User Timing?

The browser provides certain information (called _performance entries_) to the browser's performance timeline for you. This includes, for example, entries provided by the [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing) that determine the time it takes to fetch a resource like an image.

The browser, however, can not determine what is going on in your application. For example, when a user clicks a button or performs a specific task within your application, there is no high-precision performance measurement. The User Timing API is an extension to the browser's performance timeline and helps you to measure and record performance data that is custom to your application.

The advantage of using this API, over calls to {{jsxref("Date.now()")}} or {{domxref("performance.now()")}}, is that you can give the markers a name and that it integrates well with performance tooling. Browser's developer tools can display performance marks in Performance Panels, and it also works with other performance APIs like {{domxref("PerformanceObserver")}} objects.

## Adding performance markers

As a first step to start measuring the performance of your app's functionality, you need to add named performance markers at important places in your code. Ideally, you go through your codebase and determine critical paths and important tasks for which you want to ensure they can be performed fast.

The {{domxref("Performance.mark","performance.mark()")}} method is used to create a {{domxref("PerformanceMark")}}. The method takes one argument, the `name` of the mark, as shown in the following example.

```js
// Place at a location in the code that starts login
performance.mark("login-started");

// Place at a location in the code that finishes login
performance.mark("login-finished");
```

If the `name` argument isn't enough, `mark()` is configurable using an options object where you can put additional information in the `detail` property, which can be of any type. You can also set a different `startTime` if needed. In the following code, the `startTime` is set to `12.5`, and additional information, like the HTML element used, is provided with `detail`.

```js
performance.mark("login-started", {
  startTime: 12.5,
  detail: { htmlElement: myElement.id },
});
```

## Measuring duration between markers

Now that you added markers to your application, you can measure the time between them.

The {{domxref("Performance.measure()")}} method is used to create a {{domxref("PerformanceMeasure")}} object. It accepts a `name` parameter, used to identify the measure, and two marks, `start` and `end`, that it should measure between. The following example creates a `"login-duration"` measure and measures between the start and the finish of the login process.

The object then has a `duration` property which calculates the end mark timestamp minus the start mark timestamp for you. For example, you can log this value or send it to some analytics endpoint.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);

console.log(loginMeasure.duration);
```

The {{domxref("Performance.measure()")}} method is also configurable using an options object, so you can do more advanced measurements or provide additional information using the `detail` property.

For example, you can use the [`event.timestamp`](/en-US/docs/Web/API/Event/timeStamp) property from a [`click` event](/en-US/docs/Web/API/Element/click_event) to know exactly when a user clicked login and measure that to the point in time when the UI was updated, which is the `"login-finished"` marker here.

```js
loginButton.addEventListener("click", (clickEvent) => {
  fetch(loginURL).then((data) => {
    renderLoggedInUser(data);

    const marker = performance.mark("login-finished");

    performance.measure("login-click", {
      detail: { htmlElement: myElement.id },
      start: clickEvent.timeStamp,
      end: marker.startTime,
    });
  });
});
```

## Observing performance measures

The preferred way to get notified about your custom performance measures is the use of {{domxref("PerformanceObserver")}} objects. Performance observers allow you to subscribe passively to performance marks and measures as they happen.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

For more information, see {{domxref("PerformanceObserver")}}.

## Retrieving markers and measures

There are many different performance entries in the browser's performance timeline. Some are added by the browser, and some might be added by you, like the login markers and measures from the examples above.

To retrieve performance marks and measures at a single point in time, the {{domxref("Performance")}} interface provides three methods, as shown below.

> **Note:** The methods below do not notify you about new performance markers; you will only get markers that have been created when you call these methods.
> See the section [Observing performance measures](#observing_performance_measures) above for receiving notifications about new metrics as they become available using a {{domxref("PerformanceObserver")}}. Usually, using performance observers is the preferred way to get performance markers and measures.

The {{domxref("Performance.getEntries","performance.getEntries()")}} method gets all performance entries. You can filter them as needed.

```js
const entries = performance.getEntries();
entries.forEach((entry) => {
  if (entry.entryType === "mark") {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  }
  if (entry.entryType === "measure") {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

The {{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}} method filters the entries by type already.

```js
const marks = performance.getEntriesByType("mark");
marks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});

const measures = performance.getEntriesByType("measure");
measures.forEach((entry) => {
  console.log(`${entry.name}'s duration: ${entry.duration}`);
});
```

The {{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}} method allows you to get specific marks or measures by name.

```js
// Log all marks named "debug-marks"
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## Removing markers and measures

To clean up all performance marks or measures, or just specific entries, the following methods are available:

- [`performance.clearMarks()`](/en-US/docs/Web/API/Performance/clearMarks)
- [`performance.clearMeasures()`](/en-US/docs/Web/API/Performance/clearMeasures)

```js
// Clear all marks
performance.clearMarks();

// Removes the marker with the name "myMarker"
performance.clearMarks("myMarker");

// Clear all measures
performance.clearMeasures();

// Removes the measure with the name "myMeasure"
performance.clearMeasures("myMeasure");
```

## See also

- {{domxref("Performance")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceObserver")}}
