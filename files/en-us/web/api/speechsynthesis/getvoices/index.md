---
title: "SpeechSynthesis: getVoices() method"
short-title: getVoices()
slug: Web/API/SpeechSynthesis/getVoices
page-type: web-api-instance-method
browser-compat: api.SpeechSynthesis.getVoices
---

{{APIRef("Web Speech API")}}

The **`getVoices()`** method of the
{{domxref("SpeechSynthesis")}} interface returns a list of
{{domxref("SpeechSynthesisVoice")}} objects representing all the available voices on the
current device.

## Syntax

```js-nolint
getVoices()
```

### Parameters

None.

### Return value

A list (array) of {{domxref("SpeechSynthesisVoice")}} objects.

## Examples

### JavaScript

```js
function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}

populateVoiceList();
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

### HTML

```html
<select id="voiceSelect"></select>
```

{{EmbedLiveSample("Examples", 400, 25)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
