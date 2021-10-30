---
title: SpeechSynthesisEvent.elapsedTime
slug: Web/API/SpeechSynthesisEvent/elapsedTime
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisEvent
  - Web Speech API
  - elapsedTime
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisEvent.elapsedTime
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`elapsedTime`** read-only property of the
{{domxref("SpeechSynthesisUtterance")}} interface returns the elapsed time in seconds
after the {{domxref("SpeechSynthesisUtterance.text")}} started being spoken that the
event was triggered at.

Chrome returns the value in milliseconds, while Safari may returns the value in
seconds, so this may behave differently on different browsers.  Chrome is still using
the original specification, while Safari is using the updated specification.

## Syntax

```js
event.elapsedTime;
```

### Value

A float.

## Examples

```js
utterThis.onboundary = function(event) {
  console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' seconds.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
