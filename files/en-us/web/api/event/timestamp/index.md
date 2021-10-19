---
title: Event.timeStamp
slug: Web/API/Event/timeStamp
tags:
  - Property
  - Reference
  - Read-only
browser-compat: api.Event.timeStamp
---
{{APIRef("DOM")}}

The **`timeStamp`** read-only property of the
{{domxref("Event")}} interface returns the time (in milliseconds) at which the event was
created.

> **Note:** This property only works if the event system supports it for
> the particular event.

## Value

This value is the number of milliseconds elapsed from the beginning of the current [document's lifetime](/en-US/docs/Web/API/Performance/timeOrigin) until the
event was created.

The value is a {{domxref("DOMHighResTimeStamp")}} accurate to
5 microseconds (0.005 ms).
## Example

### HTML

```html
<p>
  Focus this iframe and press any key to get the
  current timestamp for the keypress event.
</p>
<p>timeStamp: <span id="time">-</span></p>
```

### JavaScript

```js
function getTime(event) {
  var time = document.getElementById("time");
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
default and defaults to 20µs in Firefox 59; and 2ms from Firefox 60.

```js
// reduced time precision (2ms) in Firefox 60
event.timeStamp;
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// reduced time precision with `privacy.resistFingerprinting` enabled
event.timeStamp;
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

In Firefox, if you also enable `privacy.resistFingerprinting`, the precision
will be 100ms or the value of
`privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever
is larger.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
