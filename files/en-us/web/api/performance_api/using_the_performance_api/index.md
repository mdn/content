---
title: Using the Performance API
slug: Web/API/Performance_API/Using_the_Performance_API
page-type: guide
tags:
  - Guide
  - Performance
  - Web Performance
---
{{DefaultAPISidebar("High Resolution Time")}}

A fundamental requirement of web performance is a precise and consistent definition of _time._ The {{domxref("DOMHighResTimeStamp")}} type (a `double`) is used by all performance interfaces to hold such time values. Additionally, there must be a way to create a _timestamp_ for a specific point in time; this is done with the {{domxref("Performance.now","now()")}} method.

Web performance interfaces are defined in a [suite of standards](https://www.w3.org/wiki/Web_Performance/Publications). The _base_ interface for these standards is the {{domxref("Performance")}} interface and its methods and properties are extended by different standards. This guide describes how to use the {{domxref("Performance")}} interfaces that are defined in the [High-Resolution Time](https://w3c.github.io/hr-time/) standard. Other web performance guides (listed in the [See also](#see_also) section) describe how to use additional methods and properties of the {{domxref("Performance")}} interface.

## High precision timing

_High precision timing_ is achieved by using the {{domxref("DOMHighResTimeStamp")}} type for time values. The unit is milliseconds and should be accurate to 5 µs (microseconds). However, if the browser is unable to provide a time value accurate to 5 microseconds (because of hardware or software constraints, for example), the browser can represent the value as a time in milliseconds accurate to a millisecond.

The following code example shows the use of {{domxref("DOMHighResTimeStamp")}} and the {{domxref("Performance.now","Performance.now()")}} method. The {{domxref("Performance.now","now()")}} method returns a _timestamp_ (of type {{domxref("DOMHighResTimeStamp")}}) that is a discrete point in time. By calling this method before and after a task, the time it takes to do the task can be measured.

```js
function calculate_time() {
  let startTime;
  let endTime;

  startTime = performance.now();
  do_task();
  endTime = performance.now();

  return (endTime - startTime);
}
```

## Serializing the `Performance` object

JSON serialization of the {{domxref("Performance")}} object is done via the {{domxref("Performance.toJSON","toJSON()")}} method. In the following example, JSON serialization for the {{domxref("Performance")}}, {{domxref("Performance.timing")}} and {{domxref("Performance.navigation")}} objects is printed in the `object` element.

```js
function print_json() {
  const output = document.getElementsByTagName("output")[0];

  if (window.performance.toJSON === undefined) {
    output.textContent += `window.performance.toJSON() is NOT supported`;
  } else {
    const json = window.performance.toJSON();

    // Print the performance object
    output.textContent = `performance = ${JSON.stringify(json)} \n`;

    // Print the performance.timing and performance.navigation objects
    const timing = json.timing;
    output.textContent += `performance.timing = ${JSON.stringify(timing)} \n`;

    const navigation = json.navigation;
    output.textContent += `performance.navigation = ${JSON.stringify(navigation)} \n`;
  }
}
```

## Specifications

The interfaces described in this document are defined in the `High Resolution Time` standard which has two levels:

- [High-Resolution Time Level 2](https://w3c.github.io/hr-time/); Editors Draft; Work In Progress
- [High-Resolution Time](https://www.w3.org/TR/hr-time/); W3C Recommendation 17 December 2012

## Interoperability

As shown in the {{domxref("Performance")}} interface's [Browser Compatibility](/en-US/docs/Web/API/Performance#browser_compatibility) table, most of the {{domxref("Performance")}} interfaces are broadly implemented by desktop browsers.

## See also

- {{domxref("Performance_API","Performance API Overview")}}
- [A Primer for Web Performance Timing APIs](https://siusin.github.io/perf-timing-primer/)
- [Graphic of Web Performance Layers](https://docs.google.com/document/d/1ZKW9N0cteHgK91SyYQONFuy2ZW6J4Oak398niTo232E/edit)
- [CanIUse data for High-Resolution Time](https://caniuse.com/#search=high-resolution-time)
- [Web Performance Standards Status and Roadmap](https://www.w3.org/wiki/Web_Performance/Publications)
