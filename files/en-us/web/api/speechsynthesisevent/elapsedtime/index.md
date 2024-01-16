---
title: "SpeechSynthesisEvent: elapsedTime property"
short-title: elapsedTime
slug: Web/API/SpeechSynthesisEvent/elapsedTime
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisEvent.elapsedTime
---

{{APIRef("Web Speech API")}}

The **`elapsedTime`** read-only property of the {{domxref("SpeechSynthesisEvent")}} returns the elapsed time in seconds, after the {{domxref("SpeechSynthesisUtterance.text")}} started being spoken, at which the [event](/en-US/docs/Web/API/SpeechSynthesisUtterance#events) was triggered.

## Value

A float containing the elapsed time, in seconds.

> **Note:** Early versions of the specification required the elapsed time in milliseconds.
> Check the [compatibility table](#browser_compatibility) below for your browser.

## Examples

```js
utterThis.onboundary = (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
