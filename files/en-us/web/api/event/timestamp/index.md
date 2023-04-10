---
title: "Event: timeStamp property"
short-title: timeStamp
slug: Web/API/Event/timeStamp
page-type: web-api-instance-property
browser-compat: api.Event.timeStamp
---

{{APIRef("DOM")}}

The **`timeStamp`** read-only property of the
{{domxref("Event")}} interface returns the time (in milliseconds) at which the event was
created.

## Value

This value is the number of milliseconds elapsed from the beginning of the time origin until the event was created. If the global object is {{domxref("Window")}}, the time origin is the moment the user clicked on the link, or the script that initiated the loading of the document. In a worker, the time origin is the moment of creation of the worker.

The value is a {{domxref("DOMHighResTimeStamp")}} accurate to
5 microseconds (0.005 ms), but the [precision is reduced](#reduced_time_precision) to prevent [fingerprinting](/en-US/docs/Glossary/Fingerprinting).

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

To offer protection against timing attacks and fingerprinting, the precision of
`Event.timeStamp` might get rounded depending on browser settings.

In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by
default and defaults to 2ms.

```js
// reduced time precision (2ms) in Firefox 60
event.timeStamp;
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
event.timeStamp;
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

In Firefox, if you also enable `privacy.resistFingerprinting`, the precision
will be 100ms or the value of
`privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever
is larger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
