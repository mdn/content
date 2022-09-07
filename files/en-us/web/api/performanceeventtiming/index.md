---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
page-type: web-api-interface
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

{{APIRef}}

The `PerformanceEventTiming` interface of the Event Timing API provides timing information for the event types listed below.

- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("HTMLElement/beforeinput_event", "beforeinput")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/compositionend_event", "compositionend")}}
- {{domxref("Element/compositionstart_event", "compositionstart")}}
- {{domxref("Element/compositionupdate_event", "compositionupdate")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("HTMLElement/dragend_event", "dragend")}}
- {{domxref("HTMLElement/dragenter_event", "dragenter")}}
- {{domxref("HTMLElement/dragleave_event", "dragleave")}}
- {{domxref("HTMLElement/dragover_event", "dragover")}}
- {{domxref("HTMLElement/dragstart_event", "dragstart")}}
- {{domxref("HTMLElement/drop_event", "drop")}}
- {{domxref("HTMLElement/input_event", "input")}}
- {{domxref("Element/keydown_event", "keydown")}}
- {{domxref("Element/keypress_event", "keypress")}}
- {{domxref("Element/keyup_event", "keyup")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("HTMLElement/pointerover_event", "pointerover")}}
- {{domxref("HTMLElement/pointerenter_event", "pointerenter")}}
- {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}
- {{domxref("HTMLElement/pointerup_event", "pointerup")}}
- {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}
- {{domxref("HTMLElement/pointerout_event", "pointerout")}}
- {{domxref("HTMLElement/pointerleave_event", "pointerleave")}}
- {{domxref("HTMLElement/gotpointercapture_event", "gotpointercapture")}}
- {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}}
- {{domxref("Element/touchstart_event", "touchstart")}}
- {{domxref("Element/touchend_event", "touchend")}}
- {{domxref("Element/touchcancel_event", "touchcancel")}}

{{InheritanceDiagram}}

## Properties

- {{domxref("PerformanceEventTiming.processingStart")}}
  - : Returns the time at which event dispatch started.
- {{domxref("PerformanceEventTiming.processingEnd")}}
  - : Returns the time at which the event dispatch ended.
- {{domxref("PerformanceEventTiming.cancelable")}}
  - : Returns the associated event's cancelable attribute.
- {{domxref("PerformanceEventTiming.target")}}
  - : Returns the associated event's last target, if it is not removed.

## Methods

- {{domxref("PerformanceEventTiming.toJSON()")}}
  - : Converts the PerformanceEventTiming object to JSON.

## Examples

The following example shows how to use the API for all events:

```js
const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
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

We can also directly query the [first input delay](https://web.dev/fid/). The first input delay or FID, measures the time from when a user first interacts with a page (i.e. when they click a link or tap on a button) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

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
