---
title: "SpeechRecognitionEvent: emma property"
short-title: emma
slug: Web/API/SpeechRecognitionEvent/emma
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
browser-compat: api.SpeechRecognitionEvent.emma
---

{{APIRef("Web Speech API")}}{{deprecated_header}}{{Non-standard_header}}

The **`emma`** read-only property of the
{{domxref("SpeechRecognitionEvent")}} interface returns an Extensible
MultiModal Annotation markup language (EMMA) — XML — representation of the
result.

> [!NOTE]
> EMMA is defined in the specification [EMMA: Extensible MultiModal Annotation markup language](https://www.w3.org/TR/emma/). You can see multiple EMMA examples in the spec.

## Value

A valid XML document. The exact contents can vary across user agents and recognition
engines, but all supporting implementations will expose a valid XML document complete
with an EMMA namespace. If the speech recognition system does not supply EMMA data then
the user agent will return `null`.

## Examples

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(event.emma);
};
```

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
