---
title: "SpeechRecognition: stop() method"
short-title: stop()
slug: Web/API/SpeechRecognition/stop
page-type: web-api-instance-method
browser-compat: api.SpeechRecognition.stop
---

{{APIRef("Web Speech API")}}

The **`stop()`** method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) stops the speech
recognition service from listening to incoming audio, and attempts to return a
{{domxref("SpeechRecognitionResult")}} using the results captured so far.

## Syntax

```js-nolint
stop()
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
const startBtn = document.querySelector("button");

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
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
