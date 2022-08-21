---
title: SpeechSynthesisEvent.charIndex
slug: Web/API/SpeechSynthesisEvent/charIndex
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisEvent
  - Web Speech API
  - charIndex
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisEvent.charIndex
---
{{APIRef("Web Speech API")}}

The **`charIndex`** read-only property of the {{domxref("SpeechSynthesisUtterance")}} interface returns the index position of the character in {{domxref("SpeechSynthesisUtterance.text")}} that was being spoken when the event was triggered.

## Value

A number.

## Examples

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(`Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
