---
title: "Event: timeStamp property"
short-title: timeStamp
slug: Web/API/Event/timeStamp
page-type: web-api-instance-property
browser-compat: api.Event.timeStamp
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

The **`timeStamp`** read-only property of the {{domxref("Event")}} interface returns the time (in milliseconds) at which the event was created.

## Value

This value is the number of milliseconds elapsed from the beginning of the time origin until the event was created.
If the global object is {{domxref("Window")}}, the time origin is the moment the user clicked on the link, or the script that initiated the loading of the document.
In a worker, the time origin is the moment of creation of the worker.

The value is a {{domxref("DOMHighResTimeStamp")}} accurate to 5 microseconds (0.005 ms), but the [precision is reduced](#reduced_time_precision) to prevent [fingerprinting](/en-US/docs/Glossary/Fingerprinting).

## Example

### HTML

```html
<p>
  Focus this iframe and press any key to get the current timestamp for the
  keypress event.
</p>
<p>timeStamp: <span id="time">-</span></p>
```

### JavaScript

```js
function getTime(event) {
  const time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);
```

### Result

{{EmbedLiveSample("Example", "100%", 100)}}

## Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `event.timeStamp` might get rounded depending on browser settings. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 2ms. You can also enable `privacy.resistFingerprinting`, in which case the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, with reduced time precision, the result of `event.timeStamp` will always be a multiple of 2, or a multiple of 100 (or `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) with `privacy.resistFingerprinting` enabled.

```js
// reduced time precision (2ms) in Firefox 60
event.timeStamp;
// Might be:
// 9934
// 10362
// 11670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
event.timeStamp;
// Might be:
// 53500
// 58900
// 64400
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
