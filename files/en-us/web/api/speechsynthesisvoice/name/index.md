---
title: "SpeechSynthesisVoice: name property"
short-title: name
slug: Web/API/SpeechSynthesisVoice/name
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisVoice.name
---

{{APIRef("Web Speech API")}}

The **`name`** read-only property of the
{{domxref("SpeechSynthesisVoice")}} interface returns a human-readable name that
represents the voice.

## Value

A string representing the name of the voice.

## Examples

```js
for (const voice of voices) {
  const option = document.createElement("option");
  option.textContent = `${voice.name} (${voice.lang})`;

  if (voice.default) {
    option.textContent += " — DEFAULT";
  }

  option.setAttribute("data-lang", voice.lang);
  option.setAttribute("data-name", voice.name);
  voiceSelect.appendChild(option);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
