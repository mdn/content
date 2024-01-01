---
title: "SpeechSynthesisEvent: utterance property"
short-title: utterance
slug: Web/API/SpeechSynthesisEvent/utterance
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisEvent.utterance
---

{{APIRef("Web Speech API")}}

The **`utterance`** read-only property of the {{domxref("SpeechSynthesisUtterance")}} interface returns the {{domxref("SpeechSynthesisUtterance")}} instance that the event was triggered on.

## Value

A {{domxref("SpeechSynthesisUtterance")}} object.

## Examples

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
