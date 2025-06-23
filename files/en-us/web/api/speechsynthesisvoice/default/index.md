---
title: "SpeechSynthesisVoice: default property"
short-title: default
slug: Web/API/SpeechSynthesisVoice/default
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisVoice.default
---

{{APIRef("Web Speech API")}}

The **`default`** read-only property of the
{{domxref("SpeechSynthesisVoice")}} interface returns a boolean value
indicating whether the voice is the default voice for the current app
(`true`), or not (`false`.)

> [!NOTE]
> For some devices, it might be the default voice for the
> voice's language. The spec is not very clear on which it should be, so some
> implementations may differ.

## Value

A boolean value.

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
