---
title: "LayoutShift: lastInputTime property"
short-title: lastInputTime
slug: Web/API/LayoutShift/lastInputTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LayoutShift.lastInputTime
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`lastInputTime`** read-only property of the {{domxref("LayoutShift")}} interface returns the time of the most recent excluding input or `0` if no excluding input has occurred.

Layout shifts are only bad if the user wasn't expecting them. Many layout shift metrics (like [Cumulative Layout Shift (CLS)](https://web.dev/cls/)) exclude shifts that occurred soon after certain user interactions. These interactions are called _excluding inputs_. Excluding inputs are:

- Any events which signal a user's active interaction with the document: ([`mousedown`](/en-US/docs/Web/API/Element/mousedown_event), [`keydown`](/en-US/docs/Web/API/Element/keydown_event), and [`pointerdown`](/en-US/docs/Web/API/Element/pointerdown_event))
- Any events which directly changes the size of the viewport.
- [`change`](/en-US/docs/Web/API/HTMLElement/change_event) events.

The [`mousemove`](/en-US/docs/Web/API/Element/mousemove_event) and [`pointermove`](/en-US/docs/Web/API/Element/pointermove_event) events are **not** excluding inputs.

## Value

A {{domxref("DOMHighResTimeStamp")}} indicating the most recent excluding input time or `0` if no excluding input has occurred.

## Examples

### Logging last input times

Log excluding input times if excluding input has occurred.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.lastInputTime) {
      console.log(entry.lastInputTime);
    }
  });
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LayoutShift.hadRecentInput")}}
