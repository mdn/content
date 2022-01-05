---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
tags:
  - API
  - Event Timing API
  - Interface
  - Performance
  - PerformanceEventTiming
  - Reference
  - Web Performance
browser-compat: api.PerformanceEventTiming
---
The `PerformanceEventTiming` interface of the Event Timing API provides timing information for the event types listed below.

- {{event("auxclick")}}
- {{event("beforeinput")}}
- {{event("click")}}
- {{event("compositionend")}}
- {{event("compositionstart")}}
- {{event("compositionupdate")}}
- {{event("contextmenu")}}
- {{event("dblclick")}}
- {{event("dragend")}}
- {{event("dragenter")}}
- {{event("dragleave")}}
- {{event("dragover")}}
- {{event("dragstart")}}
- {{event("drop")}}
- {{event("input")}}
- {{event("keydown")}}
- {{event("keypress")}}
- {{event("keyup")}}
- {{event("mousedown")}}
- {{event("mouseenter")}}
- {{event("mouseleave")}}
- {{event("mouseout")}}
- {{event("mouseover")}}
- {{event("mouseup")}}
- {{event("pointerover")}}
- {{event("pointerenter")}}
- {{event("pointerdown")}}
- {{event("pointerup")}}
- {{event("pointercancel")}}
- {{event("pointerout")}}
- {{event("pointerleave")}}
- {{event("gotpointercapture")}}
- {{event("lostpointercapture")}}
- {{event("touchstart")}}
- {{event("touchend")}}
- {{event("touchcancel")}}

## Properties

- **`{{domxref("PerformanceEventTiming.processingStart")}}`**
  - : Returns the time at which event dispatch started.
- **`{{domxref("PerformanceEventTiming.processingEnd")}}`**
  - : Returns the time at which the event dispatch ended.
- **`{{domxref("PerformanceEventTiming.cancelable")}}`**
  - : Returns the associated event's cancelable attribute.
- **`{{domxref("PerformanceEventTiming.target")}}`**
  - : Returns the associated event's last target, if it is not removed.

## Methods

- **`{{domxref("PerformanceEventTiming.toJSON()")}}`**
  - : Converts the PerformanceEventTiming object to JSON.

## Examples

The following example shows how to use the API for all events:

```js
const observer = new PerformanceObserver(function(list) {
    const perfEntries = list.getEntries().forEach(entry => {
        // Full duration
        const inputDuration = entry.duration;
        // Input delay (before processing event)
        const inputDelay = entry.processingStart - entry.startTime;
        // Synchronous event processing time (between start and end dispatch).
        const inputSyncProcessingTime = entry.processingEnd - entry.processingStart;
    });
});
// Register observer for event.
observer.observe({entryTypes: ["event"]});
```

We can also directly query the [first input delay](https://web.dev/fid). The first input delay or FID, measures the time from when a user first interacts with a page (i.e. when they click a link or tap on a button) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

```js
// Keep track of whether (and when) the page was first hidden, see:
// https://github.com/w3c/page-visibility/issues/29
// NOTE: ideally this check would be performed in the document <head>
// to avoid cases where the visibility state changes before this code runs.
let firstHiddenTime = document.visibilityState === 'hidden' ? 0 : Infinity;
document.addEventListener('visibilitychange', (event) => {
  firstHiddenTime = Math.min(firstHiddenTime, event.timeStamp);
}, {once: true});

// Sends the passed data to an analytics endpoint. This code
// uses `/analytics`; you can replace it with your own URL.
function sendToAnalytics(data) {
  const body = JSON.stringify(data);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
      fetch('/analytics', {body, method: 'POST', keepalive: true});
}

// Use a try/catch instead of feature detecting `first-input`
// support, since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
  function onFirstInputEntry(entry) {
    // Only report FID if the page wasn't hidden prior to
    // the entry being dispatched. This typically happens when a
    // page is loaded in a background tab.
    if (entry.startTime < firstHiddenTime) {
      const fid = entry.processingStart - entry.startTime;

      // Report the FID value to an analytics endpoint.
      sendToAnalytics({fid});
    }
  }

  // Create a PerformanceObserver that calls `onFirstInputEntry` for each entry.
  const po = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach(onFirstInputEntry);
  });

  // Observe entries of type `first-input`, including buffered entries,
  // i.e. entries that occurred before calling `observe()` below.
  po.observe({
    type: 'first-input',
    buffered: true,
  });
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
