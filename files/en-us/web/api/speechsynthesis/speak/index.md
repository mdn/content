---
title: "SpeechSynthesis: speak() method"
short-title: speak()
slug: Web/API/SpeechSynthesis/speak
page-type: web-api-instance-method
browser-compat: api.SpeechSynthesis.speak
---

{{APIRef("Web Speech API")}}

The **`speak()`** method of the {{domxref("SpeechSynthesis")}}
interface adds an {{domxref("SpeechSynthesisUtterance", "utterance")}} to the utterance
queue; it will be spoken when any other utterances queued before it have been spoken.

## Syntax

```js-nolint
speak(utterance)
```

### Parameters

- `utterance`
  - : A {{domxref("SpeechSynthesisUtterance")}} object.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This snippet is excerpted from our [Speech synthesizer demo](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js) ([see it live](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/)). When a form containing the text we want to speak is submitted,
we (amongst other things) create a new utterance containing this text, then speak it by
passing it into `speak()` as a parameter.

```js
const synth = window.speechSynthesis;

// ...

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
