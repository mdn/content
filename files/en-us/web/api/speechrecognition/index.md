---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
page-type: web-api-interface
browser-compat: api.SpeechRecognition
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognition`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is the controller interface for the recognition service; this also handles the {{domxref("SpeechRecognitionEvent")}} sent from the recognition service.

> [!NOTE]
> On some browsers, like Chrome, using Speech Recognition on a web page involves a server-based recognition engine. Your audio is sent to a web service for recognition processing, so it won't work offline.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}}
  - : Creates a new `SpeechRecognition` object.

## Instance properties

_`SpeechRecognition` also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("SpeechRecognition.lang")}}
  - : Returns and sets the language of the current `SpeechRecognition`. If not specified, this defaults to the HTML [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) attribute value, or the user agent's language setting if that isn't set either.
- {{domxref("SpeechRecognition.continuous")}}
  - : Controls whether continuous results are returned for each recognition, or only a single result. Defaults to single (`false`.)
- {{domxref("SpeechRecognition.interimResults")}}
  - : Controls whether interim results should be returned (`true`) or not (`false`.) Interim results are results that are not yet final (e.g., the {{domxref("SpeechRecognitionResult.isFinal")}} property is `false`.)
- {{domxref("SpeechRecognition.maxAlternatives")}}
  - : Sets the maximum number of {{domxref("SpeechRecognitionAlternative")}}s provided per result. The default value is 1.
- {{domxref("SpeechRecognition.phrases")}} {{experimental_inline}}
  - : Sets an array of {{domxref("SpeechRecognitionPhrase")}} objects to be used for [contextual biasing](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition).
- {{domxref("SpeechRecognition.processLocally")}} {{experimental_inline}}
  - : Specifies whether speech recognition must be performed locally on the user's device.

### Deprecated properties

The concept of grammar has been removed from the Web Speech API. Related features remain in the specification and are still recognized by supporting browsers for backwards compatibility, but they have no effect on speech recognition services.

- {{domxref("SpeechRecognition.grammars")}}
  - : Returns and sets a collection of {{domxref("SpeechGrammar")}} objects that represent the grammars understood by the current `SpeechRecognition`.

## Static methods

- {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} {{experimental_inline}}
  - : Checks whether the specified languages are available for speech recognition.
- {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} {{experimental_inline}}
  - : Installs the required language packs for on-device speech recognition in the specified languages.

## Instance methods

_`SpeechRecognition` also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("SpeechRecognition.abort()")}}
  - : Stops the speech recognition service from listening to incoming audio, and doesn't attempt to return a {{domxref("SpeechRecognitionResult")}}.
- {{domxref("SpeechRecognition.start()")}}
  - : Starts the speech recognition service to listen for incoming audio (from a microphone or an audio track) and returns the results of that recognition.
- {{domxref("SpeechRecognition.stop()")}}
  - : Stops the speech recognition service from listening for incoming audio and attempts to return a {{domxref("SpeechRecognitionResult")}} based on the results captured so far.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`audiostart`](/en-US/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Fired when the user agent has started to capture audio.
- [`audioend`](/en-US/docs/Web/API/SpeechRecognition/audioend_event)
  - : Fired when the user agent has finished capturing audio.
- [`end`](/en-US/docs/Web/API/SpeechRecognition/end_event)
  - : Fired when the speech recognition service has disconnected.
- [`error`](/en-US/docs/Web/API/SpeechRecognition/error_event)
  - : Fired when a speech recognition error occurs.
- [`nomatch`](/en-US/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the {{domxref("SpeechRecognitionAlternative.confidence","confidence")}} threshold.
- [`result`](/en-US/docs/Web/API/SpeechRecognition/result_event)
  - : Fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app.
- [`soundstart`](/en-US/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Fired when any sound — recognizable speech or not — has been detected.
- [`soundend`](/en-US/docs/Web/API/SpeechRecognition/soundend_event)
  - : Fired when any sound — recognizable speech or not — has stopped being detected.
- [`speechstart`](/en-US/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Fired when sound that is recognized by the speech recognition service as speech has been detected.
- [`speechend`](/en-US/docs/Web/API/SpeechRecognition/speechend_event)
  - : Fired when speech recognized by the speech recognition service has stopped being detected.
- [`start`](/en-US/docs/Web/API/SpeechRecognition/start_event)
  - : Fired when the speech recognition service begins listening for audio to recognize.

## Examples

In our [Speech color changer](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/) example, we create a new `SpeechRecognition` object instance using the {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} constructor.

After some other values have been defined, we then set it so that the recognition service starts when a button is clicked (see {{domxref("SpeechRecognition.start()")}}). When a result has been successfully recognized, the {{domxref("SpeechRecognition.result_event", "result")}} event fires, we extract the color that was spoken from the event object, and then set the background color of the {{htmlelement("html")}} element to that color.

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const startBtn = document.querySelector("button");

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}`;
  bg.style.backgroundColor = color;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
