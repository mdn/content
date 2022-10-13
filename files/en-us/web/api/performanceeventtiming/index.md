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

The `PerformanceEventTiming` interface of the Event Timing API provides timing information for certain event types.

This API enables visibility into slow events without the need to register event listeners and calling {{domxref("performance.now()")}} both at the beginning and at the end of event handler functions. Such an approach comes with unnecessary performance overhead and asynchronous code can't be measured easily either.

The `PerformanceEventTiming` interface provides event timestamps for certain event types ([see below](#events_exposed)), so that there is no need to implement event latency monitoring yourself. The user agent computes these performance measures, so that an application's performance won't suffer from unneeded event listeners.

This API is particularly useful for measuring the {{Glossary("first input delay")}} (FID): the time when a user first interacts with your app to the time when the browser is actually able to respond to that interaction.

This interface inherits methods and properties from its parent:

{{InheritanceDiagram}}

## Constructor

This interface has no constructor on its own. You typically work with `PerformanceEventTiming` objects by creating a {{domxref("PerformanceObserver")}} and [observe](/en-US/docs/Web/API/PerformanceObserver/observe) using the [entryType](/en-US/docs/Web/API/PerformanceEntry/entryType) `"event"` or `"first-input"`.

For more information, see the [example below](#getting_event_timing_information).

## Instance properties

- {{domxref("PerformanceEventTiming.cancelable")}} {{ReadOnlyInline}}
  - : Returns the associated event's cancelable attribute.
- {{domxref("PerformanceEventTiming.interactionId")}} {{ReadOnlyInline}}
  - : Returns the ID that uniquely identifies the user interaction which triggered the associated event.
- {{domxref("PerformanceEventTiming.processingStart")}} {{ReadOnlyInline}}
  - : Returns the time at which event dispatch started.
- {{domxref("PerformanceEventTiming.processingEnd")}} {{ReadOnlyInline}}
  - : Returns the time at which the event dispatch ended.
- {{domxref("PerformanceEventTiming.target")}} {{ReadOnlyInline}}
  - : Returns the associated event's last target, if it is not removed.

## Instance methods

- {{domxref("PerformanceEventTiming.toJSON()")}}
  - : Converts the PerformanceEventTiming object to JSON.

## Events exposed

The following event types are exposed by the Event Timing API and contain performance metrics like event processing timestamps, counts, targets, etc.

<table>
  <tbody>
    <tr>
      <th scope="row">Click events</th>
      <td>
        {{domxref("Element/auxclick_event", "auxclick")}},
        {{domxref("Element/click_event", "click")}},
        {{domxref("Element/contextmenu_event", "contextmenu")}},
        {{domxref("Element/dblclick_event", "dblclick")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Composition events</th>
      <td>
        {{domxref("Element/compositionend_event", "compositionend")}},
        {{domxref("Element/compositionstart_event", "compositionstart")}},
        {{domxref("Element/compositionupdate_event", "compositionupdate")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Drag &amp; drop events</th>
      <td>
        {{domxref("HTMLElement/dragend_event", "dragend")}},
        {{domxref("HTMLElement/dragenter_event", "dragenter")}},
        {{domxref("HTMLElement/dragleave_event", "dragleave")}},
        {{domxref("HTMLElement/dragover_event", "dragover")}},
        {{domxref("HTMLElement/dragstart_event", "dragstart")}},
        {{domxref("HTMLElement/drop_event", "drop")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Input events</th>
      <td>
        {{domxref("HTMLElement/beforeinput_event", "beforeinput")}},
        {{domxref("HTMLElement/input_event", "input")}},
        {{domxref("Element/keydown_event", "keydown")}},
        {{domxref("Element/keypress_event", "keypress")}},
        {{domxref("Element/keyup_event", "keyup")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Mouse events</th>
      <td>
        {{domxref("Element/mousedown_event", "mousedown")}},
        {{domxref("Element/mouseenter_event", "mouseenter")}},
        {{domxref("Element/mouseleave_event", "mouseleave")}},
        {{domxref("Element/mouseout_event", "mouseout")}},
        {{domxref("Element/mouseover_event", "mouseover")}},
        {{domxref("Element/mouseup_event", "mouseup")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Pointer events</th>
      <td>
        {{domxref("HTMLElement/pointerover_event", "pointerover")}},
        {{domxref("HTMLElement/pointerenter_event", "pointerenter")}},
        {{domxref("HTMLElement/pointerdown_event", "pointerdown")}},
        {{domxref("HTMLElement/pointerup_event", "pointerup")}},
        {{domxref("HTMLElement/pointercancel_event", "pointercancel")}},
        {{domxref("HTMLElement/pointerout_event", "pointerout")}},
        {{domxref("HTMLElement/pointerleave_event", "pointerleave")}},
        {{domxref("HTMLElement/gotpointercapture_event", "gotpointercapture")}},
        {{domxref("HTMLElement/lostpointercapture_event", "lostpointercapture")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Touch events</th>
      <td>
        {{domxref("Element/touchstart_event", "touchstart")}},
        {{domxref("Element/touchend_event", "touchend")}},
        {{domxref("Element/touchcancel_event", "touchcancel")}}
      </td>
    </tr>
  </tbody>
</table>

Note that that the following events are not included in the list because the are continuous events and no meaningful event counts or performance metrics can be obtained at this point: {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/pointermove_event", "pointermove")}},
{{domxref("HTMLElement/pointerrawupdate_event", "pointerrawupdate")}}, {{domxref("Element/touchmove_event", "touchmove")}}, {{domxref("Element/wheel_event", "wheel")}}, {{domxref("HTMLElement/drag_event", "drag")}}.

To get a list of all exposed events, you can also look up keys in the {{domxref("performance.eventCounts")}} map:

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Examples

### Getting event timing information

To get event timing information, a {{domxref("PerformanceObserver")}} is created and registered using [observe()](/en-US/docs/Web/API/PerformanceObserver/observe) where the [entryType](/en-US/docs/Web/API/PerformanceEntry/entryType) needs to be either `"event"` or `"first-input"`.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Full duration
    const duration = entry.duration;

    // Input delay (before processing event)
    const delay = entry.processingStart - entry.startTime;

    // Synchronous event processing time 
    // (between start and end dispatch)
    const time = entry.processingEnd - entry.processingStart;
  });
});

// Register the observer for events
observer.observe({entryTypes: ["event"]});
```

### Reporting the First Input Delay (FID)

The {{Glossary("first input delay")}} or FID, measures the time from when a user first interacts with a page (i.e. when they click a link or tap on a button) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

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
