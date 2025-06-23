---
title: "SpeechSynthesisVoice: lang property"
short-title: lang
slug: Web/API/SpeechSynthesisVoice/lang
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisVoice.lang
---

{{APIRef("Web Speech API")}}

The **`lang`** read-only property of the {{domxref("SpeechSynthesisVoice")}} interface returns a BCP 47 language tag indicating the language of the voice.

## Value

A string representing the language of the device.

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
