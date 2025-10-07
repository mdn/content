---
title: "SpeechRecognition: start() method"
short-title: start()
slug: Web/API/SpeechRecognition/start
page-type: web-api-instance-method
browser-compat: api.SpeechRecognition.start
---

{{APIRef("Web Speech API")}}

The **`start()`** method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) starts the speech recognition service to listen for incoming audio (from a microphone or an audio track) and returns the results of that recognition.

## Syntax

```js-nolint
start()
start(audioTrack)
```

### Parameters

- `audioTrack` {{optional_inline}} {{experimental_inline}}
  - : A {{domxref("MediaStreamTrack")}} instance to perform speech recognition on. If not specified, the service attempts to recognize audio from the user's microphone instead.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if an `audioTrack` is specified and one or both of the following are true:
    - The track's {{domxref("MediaStreamTrack.kind", "kind")}} property is not `audio`.
    - The track's {{domxref("MediaStreamTrack.readyState", "readyState")}} property is not `live`.

## Examples

### Recognizing speech from a microphone

In our [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) example, we create a new `SpeechRecognition` object instance using the {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} constructor. Later on, we create a `click` event handler on a `<button>` so that when it's clicked, we start the speech recognition service and await audio input from the user's microphone:

```js
const recognition = new SpeechRecognition();

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const startBtn = document.querySelector("button");

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};
```

When a result has been successfully recognized, the {{domxref("SpeechRecognition.result_event", "result")}} event fires. We extract the color that was spoken from the event object by grabbing the {{domxref("SpeechRecognitionAlternative.transcript", "transcript")}} of the first {{domxref("SpeechRecognitionAlternative")}} of the first {{domxref("SpeechRecognitionResult")}} in the returned {{domxref("SpeechRecognitionEvent.results", "results")}} list. We then set the background color of the {{htmlelement("html")}} element to that color.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

### Recognizing speech from an audio track

This code (excerpted from our [audio track recognition demo](https://mdn.github.io/dom-examples/web-speech-api/audio-track-recognition/)) shows how to recognize speech from an audio track. To begin with, we create a new {{domxref("SpeechRecognition")}} instance and set its {{domxref("SpeechRecognition.lang", "lang")}} to `en-US`. We then grab a reference to a {{htmlelement("button")}} element and a {{htmlelement("p")}} element to output results and diagnostic information.

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";

const startBtn = document.querySelector("button");
const diagnostic = document.querySelector(".output");
```

Next, we add a `click` event handler to the `<button>`. When it is clicked, we create a new {{htmlelement("audio")}} element using the {{domxref("HTMLAudioElement.Audio", "Audio()")}} constructor and load an MP3 file into it. Once the MP3 is ready to play (determined by the {{domxref("HTMLMediaElement.canplay_event", "canplay")}} event), we capture it as a {{domxref("MediaStream")}} using the {{domxref("HTMLMediaElement.captureStream", "captureStream()")}} method, then extract its audio {{domxref("MediaStreamTrack")}} using {{domxref("MediaStream.getAudioTracks", "getAudioTracks()")}}.

We then play the audio (required for the recognition to take place), and pass the `MediaStreamTrack` into the `start()` method to start the recognition.

```js
startBtn.addEventListener("click", () => {
  diagnostic.textContent = "";
  console.log("Loading audio track");
  const audioElement = new Audio("cheese-on-toast.mp3");
  audioElement.addEventListener("canplay", () => {
    const stream = audioElement.captureStream();
    const audioTrack = stream.getAudioTracks()[0];
    audioElement.play();
    recognition.start(audioTrack);
    console.log("Recognition started");
  });
});
```

To output the recognized audio, we listen for the {{domxref("SpeechRecognition.result_event", "result")}} event. When that fires, we grab the {{domxref("SpeechRecognitionAlternative.transcript", "transcript")}} of the first {{domxref("SpeechRecognitionAlternative")}} of the first {{domxref("SpeechRecognitionResult")}} in the returned {{domxref("SpeechRecognitionEvent.results", "results")}} list. We output the transcript itself to the output `<p>` and log its confidence rating to the console.

```js
recognition.addEventListener("result", (event) => {
  const speech = event.results[0][0].transcript;
  diagnostic.textContent = `Speech recognized: ${speech}.`;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
