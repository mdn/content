---
title: "SpeechRecognition: start() method"
short-title: start()
slug: Web/API/SpeechRecognition/start
page-type: web-api-instance-method
browser-compat: api.SpeechRecognition.start
---

{{APIRef("Web Speech API")}}

The **`start()`** method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) starts the speech recognition service listening to incoming audio with intent to recognize it and return the results of that recognition.

## Syntax

```js-nolint
start()
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
