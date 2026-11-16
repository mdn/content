---
title: "SpeechRecognition: stop() method"
short-title: stop()
slug: Web/API/SpeechRecognition/stop
page-type: web-api-instance-method
browser-compat: api.SpeechRecognition.stop
---

{{APIRef("Web Speech API")}}

The **`stop()`** method of the {{domxref("SpeechRecognition")}} interface stops the speech recognition service from listening for incoming audio.
The service then attempts to return a result based on the audio captured so far, through a {{domxref("SpeechRecognition.result_event", "result")}} event, or a {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} event if nothing was recognized.

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
