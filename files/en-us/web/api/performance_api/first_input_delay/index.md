---
title: First input delay
slug: Web/API/Performance_API/First_input_delay
page-type: guide
---

{{DefaultAPISidebar("Performance API")}}

The _first input delay_ for a web page is defined as the time between:

- the first time the user tried to interact with a page
- the time the browser is able to run event handlers in response to that interaction.

The typical scenario in which first input delay is an interesting metric is when the browser has downloaded enough of your page to start rendering it to the screen, but is still busy initializing your site, typically by running your JavaScript. The user can experience enough of your site to attempt to interact with it, but if they do so while the site is running initialization tasks, the browser won't be able to respond immediately.

Thus, long first input delays typically occur between the {{Glossary("First contentful paint")}} and {{Glossary("Time to interactive")}} metrics, and are typically associated with long-running JavaScript tasks during site initialization.

## The `"first-input"` performance entry type

In the Performance API the first input delay is reported with the `"first-input"` {{domxref("PerformanceEntry.entryType", "entry type", "", 1)}}. This is a special case of the event delay that is measured by a normal `"event"` entry type, except that it is recorded only for the first event after the page loaded. It is measured for the same set of [event types](/en-US/docs/Web/API/PerformanceEventTiming#events_exposed) as for normal event timings, and like normal event timings, it is represented by a {{domxref("PerformanceEventTiming")}} object. Also like normal event timings, the entry includes:

- a {{domxref("PerformanceEntry.startTime", "startTime")}} property recording the time the event was created, which is an approximation of the time the user input occurred
- a {{domxref("PerformanceEventTiming.processingStart", "processingStart")}} property recording the time event handlers were ready to run
- a {{domxref("PerformanceEventTiming.processingEnd", "processingEnd")}} property recording the time event handlers finished.

For a given page, the `"first-input"` entry may appear once, or zero times if the user didn't try to interact with the page.

The entry is recorded whether or not there actually were any event handlers registered for the element the user interacted with. This is because many elements, such as {{HTMLElement("select")}} or {{HTMLElement("a")}}, have a default behavior even without a JavaScript event handler. If the browser is running JavaScript on the main thread, it can't execute this behavior either.

Unlike normal `"event"` entries, which by default are only recorded if they exceed a certain time threshold, the `"first-input"` entry is _always_ recorded if the user tried to interact with the page.

Note that there are some differences between the `"first-input"` value reported by the Performance API and the First Input Delay metric reported by Google's Web Vitals initiative. See <https://web.dev/fid/#differences-between-the-metric-and-the-api> for the details.

## How to measure first input delay

First input delay is highly dependent on user behavior. If a user does not try to interact with your site until it has finished initializing, then they are more likely to experience a short first input delay value. Even if the user does try to interact while the site is initializing, they may get lucky and hit a gap in between JavaScript tasks, or they may be unlucky and click a button immediately after a long JavaScript task has started.

This means:

- first input delay can only be measured effectively in the field, with real users
- you need to take many samples, and focus on `"first-input"` values that are particularly high.

## Improving first input delay

Large values for first input delay are usually caused by long-running JavaScript tasks on the main thread during site load. Tactics for reducing this include:

- {{Glossary("code splitting")}}: split JavaScript so that on page load you only load the code you need at that point, and load other code dynamically on demand.
- Using [web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), when appropriate, to shift processing from the main thread.
- Only serving the code you need: for example, excluding polyfills that aren't needed for the browsers you are targrting. See the article [Serve modern code to modern browsers](https://web.dev/serve-modern-code-to-modern-browsers/).

## See also

- [First Input Delay](https://web.dev/fid/) in Google's Core Web Vitals initiative.
