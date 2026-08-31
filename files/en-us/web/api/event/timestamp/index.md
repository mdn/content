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

The value is a {{domxref("DOMHighResTimeStamp")}} representing the number of milliseconds elapsed from the relevant global object's [time origin](/en-US/docs/Web/API/Performance/timeOrigin) until the event was created.
Its [precision may be reduced](#reduced_time_precision) to mitigate timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting).

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

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `event.timeStamp` may be reduced depending on browser settings.

Fractional milliseconds do not necessarily mean that time precision has not been reduced.

In Chrome, the rounding interval is 0.1 ms, or 0.005 ms in cross-origin-isolated contexts. In Safari, it is 1 ms, or 0.02 ms in cross-origin-isolated contexts.

In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and uses a rounding interval of 1 ms, or 0.02 ms in cross-origin-isolated contexts. If `privacy.resistFingerprinting` is enabled, the rounding interval is 16.667 ms or the interval configured by `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, these are possible values in Firefox:

```js
// Reduced time precision (1 ms) in a non-isolated context
event.timeStamp;
// Might be:
// 9934
// 10363
// 11671
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
event.timeStamp;
// Might be:
// 10000.2
// 10016.867
// 10033.534
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
