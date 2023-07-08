---
title: PerformanceEventTiming
slug: Web/API/PerformanceEventTiming
page-type: web-api-interface
browser-compat: api.PerformanceEventTiming
---

{{APIRef("Performance API")}}

The `PerformanceEventTiming` interface of the Event Timing API provides insights into the latency of certain event types triggered by user interaction.

## Description

This API enables visibility into slow events by providing event timestamps and duration for certain event types ([see below](#events_exposed)). For example, you can monitor the time between a user action and the start of its event handler, or the time an event handler takes to run.

This API is particularly useful for measuring the {{Glossary("first input delay")}} (FID): the time from the point when a user first interacts with your app to the point when the browser is actually able to respond to that interaction.

You typically work with `PerformanceEventTiming` objects by creating a {{domxref("PerformanceObserver")}} instance and then calling its [`observe()`](/en-US/docs/Web/API/PerformanceObserver/observe) method, passing in `"event"` or `"first-input"` as the value of the [`type`](/en-US/docs/Web/API/PerformanceEntry/entryType) option. The `PerformanceObserver` object's callback will then be called with a list of `PerformanceEventTiming` objects which you can analyze. See the [example below](#getting_event_timing_information) for more.

By default, `PerformanceEventTiming` entries are exposed when their `duration` is 104ms or greater. Research suggests that user input that is not handled within 100ms is considered slow and 104ms is the first multiple of 8 greater than 100ms (for security reasons, this API is rounded to the nearest multiple of 8ms).
However, you can set the {{domxref("PerformanceObserver")}} to a different threshold using the `durationThreshold` option in the [`observe()`](/en-US/docs/Web/API/PerformanceObserver/observe) method.

This interface inherits methods and properties from its parent, {{domxref("PerformanceEntry")}}:

{{InheritanceDiagram}}

### Events exposed

The following event types are exposed by the Event Timing API:

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
        {{domxref("HTMLElement/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Keyboard events</th>
      <td>
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

Note that the following events are not included in the list because they are continuous events and no meaningful event counts or performance metrics can be obtained at this point: {{domxref("Element/mousemove_event", "mousemove")}}, {{domxref("Element/pointermove_event", "pointermove")}},
{{domxref("HTMLElement/pointerrawupdate_event", "pointerrawupdate")}}, {{domxref("Element/touchmove_event", "touchmove")}}, {{domxref("Element/wheel_event", "wheel")}}, {{domxref("HTMLElement/drag_event", "drag")}}.

To get a list of all exposed events, you can also look up keys in the {{domxref("performance.eventCounts")}} map:

```js
const exposedEventsList = [...performance.eventCounts.keys()];
```

## Constructor

This interface has no constructor on its own. See the [example below](#getting_event_timing_information) for how to typically get the information the `PerformanceEventTiming` interface holds.

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for event timing performance entry types by qualifying them as follows:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time from `startTime` to the next rendering paint (rounded to the nearest 8ms).
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Returns `"event"` (for long events) or `"first-input"` (for the first user interaction).
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Returns the associated event's type.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the associated event's [`timestamp`](/en-US/docs/Web/API/Event/timestamp) property. This is the time the event was created and can be considered as a proxy for the time the user interaction occurred.

This interface also supports the following properties:

- {{domxref("PerformanceEventTiming.cancelable")}} {{ReadOnlyInline}}
  - : Returns the associated event's [`cancelable`](/en-US/docs/Web/API/Event/cancelable) property.
- {{domxref("PerformanceEventTiming.interactionId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the ID that uniquely identifies the user interaction which triggered the associated event.
- {{domxref("PerformanceEventTiming.processingStart")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time at which event dispatch started. To measure the time between a user action and the time the event handler starts to run, calculate `processingStart-startTime`.
- {{domxref("PerformanceEventTiming.processingEnd")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time at which the event dispatch ended. To measure the time the event handler took to run, calculate `processingEnd-processingStart`.
- {{domxref("PerformanceEventTiming.target")}} {{ReadOnlyInline}}
  - : Returns the associated event's last target, if it is not removed.

## Instance methods

- {{domxref("PerformanceEventTiming.toJSON()")}}
  - : Returns a JSON representation of the `PerformanceEventTiming` object.

## Examples

### Getting event timing information

To get event timing information, create a {{domxref("PerformanceObserver")}} instance and then call its [`observe()`](/en-US/docs/Web/API/PerformanceObserver/observe) method, passing in `"event"` or `"first-input"` as the value of the [`type`](/en-US/docs/Web/API/PerformanceEntry/entryType) option. You also need to set `buffered` to `true` to get access to events the user agent buffered while constructing the document. The `PerformanceObserver` object's callback will then be called with a list of `PerformanceEventTiming` objects which you can analyze.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Full duration
    const duration = entry.duration;

    // Input delay (before processing event)
    const delay = entry.processingStart - entry.startTime;

    // Synchronous event processing time
    // (between start and end dispatch)
    const eventHandlerTime = entry.processingEnd - entry.processingStart;
    console.log(`Total duration: ${duration}`);
    console.log(`Event delay: ${delay}`);
    console.log(`Event handler duration: ${eventHandlerTime}`);
  });
});

// Register the observer for events
observer.observe({ type: "event", buffered: true });
```

You can also set a different [`durationThreshold`](/en-US/docs/Web/API/PerformanceObserver/observe#durationthreshold). The default is 104ms and the minimum possible duration threshold is 16ms.

```js
observer.observe({ type: "event", durationThreshold: 16, buffered: true });
```

### Reporting the First Input Delay (FID)

The {{Glossary("first input delay")}} or FID, measures the time from when a user first interacts with a page (i.e. when they click a link or tap on a button) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

```js
// Keep track of whether (and when) the page was first hidden, see:
// https://github.com/w3c/page-visibility/issues/29
// NOTE: ideally this check would be performed in the document <head>
// to avoid cases where the visibility state changes before this code runs.
let firstHiddenTime = document.visibilityState === "hidden" ? 0 : Infinity;
document.addEventListener(
  "visibilitychange",
  (event) => {
    firstHiddenTime = Math.min(firstHiddenTime, event.timeStamp);
  },
  { once: true },
);

// Sends the passed data to an analytics endpoint. This code
// uses `/analytics`; you can replace it with your own URL.
function sendToAnalytics(data) {
  const body = JSON.stringify(data);
  // Use `navigator.sendBeacon()` if available,
  // falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon("/analytics", body)) ||
    fetch("/analytics", { body, method: "POST", keepalive: true });
}

// Use a try/catch instead of feature detecting `first-input`
// support, since some browsers throw when using the new `type` option.
// https://webkit.org/b/209216
try {
  function onFirstInputEntry(entry) {
    // Only report FID if the page wasn't hidden prior to
    // the entry being dispatched. This typically happens when a
    // page is loaded in a background tab.
    if (entry.startTime < firstHiddenTime) {
      const fid = entry.processingStart - entry.startTime;

      // Report the FID value to an analytics endpoint.
      sendToAnalytics({ fid });
    }
  }

  // Create a PerformanceObserver that calls
  // `onFirstInputEntry` for each entry.
  const po = new PerformanceObserver((entryList) => {
    entryList.getEntries().forEach(onFirstInputEntry);
  });

  // Observe entries of type `first-input`, including buffered entries,
  // i.e. entries that occurred before calling `observe()` below.
  po.observe({
    type: "first-input",
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
