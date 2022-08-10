---
title: SpeechSynthesisEvent.name
slug: Web/API/SpeechSynthesisEvent/name
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisEvent
  - Web Speech API
  - name
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisEvent.name
---
{{APIRef("Web Speech API")}}

The **`name`** read-only property of the {{domxref("SpeechSynthesisUtterance")}} interface returns the name associated with certain types of events occurring as the {{domxref("SpeechSynthesisUtterance.text")}} is being spoken:
the name of the [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) marker reached in the case of a {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} event, or the type of boundary reached in the case of a {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} event.

## Value

A string.

## Examples

```js
utterThis.onboundary = (event) => {
  console.log(`${event.name} boundary reached after ${event.elapsedTime} seconds.`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
