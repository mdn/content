---
title: SpeechSynthesisEvent.charIndex
slug: Web/API/SpeechSynthesisEvent/charIndex
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisEvent
  - Web Speech API
  - charIndex
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisEvent.charIndex
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`charIndex`** read-only property of the
{{domxref("SpeechSynthesisUtterance")}} interface returns the index position of the
character in the {{domxref("SpeechSynthesisUtterance.text")}} that was being spoken
when the event was triggered.

## Syntax

```js
event.charIndex;
```

### Value

A number.

## Examples

```js
utterThis.onpause = function(event) {
  var char = event.utterance.text.charAt(event.charIndex);
  console.log('Speech paused at character ' + event.charIndex + ' of "' +
  event.utterance.text + '", which is "' + char + '".');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
