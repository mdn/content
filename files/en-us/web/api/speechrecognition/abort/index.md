---
title: "SpeechRecognition: abort() method"
short-title: abort()
slug: Web/API/SpeechRecognition/abort
page-type: web-api-instance-method
browser-compat: api.SpeechRecognition.abort
---

{{APIRef("Web Speech API")}}

The **`abort()`** method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) stops the speech
recognition service from listening to incoming audio, and doesn't attempt to return a
{{domxref("SpeechRecognitionResult")}}.

## Syntax

```js-nolint
abort()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const recognition = new SpeechRecognition();

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

document.body.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};

abortBtn.onclick = () => {
  recognition.abort();
  console.log("Speech recognition aborted.");
};

recognition.onspeechend = () => {
  recognition.stop();
  console.log("Speech recognition has stopped.");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
