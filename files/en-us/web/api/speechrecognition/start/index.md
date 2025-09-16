---
title: "SpeechRecognition: start() method"
short-title: start()
slug: Web/API/SpeechRecognition/start
page-type: web-api-instance-method
browser-compat: api.SpeechRecognition.start
---

{{APIRef("Web Speech API")}}

The **`start()`** method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) starts the speech recognition service listening to incoming audio (from a microphone or audio track) with intent to recognize it and return the results of that recognition.

## Syntax

```js-nolint
start()
start(audioTrack)
```

### Parameters

- `audioTrack` {{optional_inline}}
  - : A {{domxref("MediaStreamTrack")}} instance to perform speech recognition on. If this property is not specified, the service attempts to recognize audio input from the user's microphone instead.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if an `audioTrack` is specified and:
    - Its {{domxref("MediaStreamTrack.kind", "kind")}} property is not `audio`.
    - Its {{domxref("MediaStreamTrack.readyState", "readyState")}} property is not `live`.

## Examples

### Recognizing speech from a microphone

In our [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) example, we create a new `SpeechRecognition` object instance using the {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} constructor. Later on, we create a `click` event handler on the `<body>` element so that when it is clicked, we start the speech recognition service and await audio input from the user's microphone:

```js
const recognition = new SpeechRecognition();

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

document.body.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

When a result has been successfully recognized, the {{domxref("SpeechRecognition.result_event", "result")}} event fires, we extract the color that was spoken from the event object, and then set the background color of the {{htmlelement("html")}} element to that color.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

### Recognizing speech from an audio track

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
