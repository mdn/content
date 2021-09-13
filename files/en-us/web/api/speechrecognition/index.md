---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechRecognition
  - Web Speech API
  - recognition
  - speech
browser-compat: api.SpeechRecognition
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`SpeechRecognition`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is the controller interface for the recognition service; this also handles the {{domxref("SpeechRecognitionEvent")}} sent from the recognition service.

> **Note:** On some browsers, like Chrome, using Speech Recognition on a web page involves a server-based recognition engine. Your audio is sent to a web service for recognition processing, so it won't work offline.

## Constructor

- {{domxref("SpeechRecognition.SpeechRecognition()")}}
  - : Creates a new `SpeechRecognition` object.

## Properties

_`SpeechRecognition` also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("SpeechRecognition.grammars")}}
  - : Returns and sets a collection of {{domxref("SpeechGrammar")}} objects that represent the grammars that will be understood by the current `SpeechRecognition`.
- {{domxref("SpeechRecognition.lang")}}
  - : Returns and sets the language of the current `SpeechRecognition`. If not specified, this defaults to the HTML {{htmlattrxref("lang","html")}} attribute value, or the user agent's language setting if that isn't set either.
- {{domxref("SpeechRecognition.continuous")}}
  - : Controls whether continuous results are returned for each recognition, or only a single result. Defaults to single (`false`.)
- {{domxref("SpeechRecognition.interimResults")}}
  - : Controls whether interim results should be returned (`true`) or not (`false`.) Interim results are results that are not yet final (e.g. the {{domxref("SpeechRecognitionResult.isFinal")}} property is `false`.)
- {{domxref("SpeechRecognition.maxAlternatives")}}
  - : Sets the maximum number of {{domxref("SpeechRecognitionAlternative")}}s provided per result. The default value is 1.
- {{domxref("SpeechRecognition.serviceURI")}} {{deprecated_inline}}
  - : Specifies the location of the speech recognition service used by the current `SpeechRecognition` to handle the actual recognition. The default is the user agent's default speech service.

## Methods

_`SpeechRecognition` also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("SpeechRecognition.abort()")}}
  - : Stops the speech recognition service from listening to incoming audio, and doesn't attempt to return a {{domxref("SpeechRecognitionResult")}}.
- {{domxref("SpeechRecognition.start()")}}
  - : Starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current `SpeechRecognition`.
- {{domxref("SpeechRecognition.stop()")}}
  - : Stops the speech recognition service from listening to incoming audio, and attempts to return a {{domxref("SpeechRecognitionResult")}} using the audio captured so far.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`audiostart`](/en-US/docs/Web/API/SpeechRecognition/audiostart_event)
  - : Fired when the user agent has started to capture audio.
    Also available via the [`onaudiostart`](/en-US/docs/Web/API/SpeechRecognition/onaudiostart) property.
- [`audioend`](/en-US/docs/Web/API/SpeechRecognition/audioend_event)
  - : Fired when the user agent has finished capturing audio.
    Also available via the [`onaudioend`](/en-US/docs/Web/API/SpeechRecognition/onaudioend) property.
- [`end`](/en-US/docs/Web/API/SpeechRecognition/end_event)
  - : Fired when the speech recognition service has disconnected.
    Also available via the [`onend`](/en-US/docs/Web/API/SpeechRecognition/onend) property.
- [`error`](/en-US/docs/Web/API/SpeechRecognition/error_event)
  - : Fired when a speech recognition error occurs.
    Also available via the [`onerror`](/en-US/docs/Web/API/SpeechRecognition/onerror) property.
- [`nomatch`](/en-US/docs/Web/API/SpeechRecognition/nomatch_event)
  - : Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the {{domxref("SpeechRecognitionAlternative.confidence","confidence")}} threshold.
    Also available via the [`onnomatch`](/en-US/docs/Web/API/SpeechRecognition/onnomatch) property.
- [`result`](/en-US/docs/Web/API/SpeechRecognition/result_event)
  - : Fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app.
    Also available via the [`onresult`](/en-US/docs/Web/API/SpeechRecognition/onresult) property.
- [`soundstart`](/en-US/docs/Web/API/SpeechRecognition/soundstart_event)
  - : Fired when any sound — recognisable speech or not — has been detected.
    Also available via the [`onsoundstart`](/en-US/docs/Web/API/SpeechRecognition/onsoundstart) property.
- [`soundend`](/en-US/docs/Web/API/SpeechRecognition/soundend_event)
  - : Fired when any sound — recognisable speech or not — has stopped being detected.
    Also available via the [`onsoundend`](/en-US/docs/Web/API/SpeechRecognition/onsoundend) property.
- [`speechstart`](/en-US/docs/Web/API/SpeechRecognition/speechstart_event)
  - : Fired when sound that is recognized by the speech recognition service as speech has been detected.
    Also available via the [`onspeechstart`](/en-US/docs/Web/API/SpeechRecognition/onspeechstart) property.
- [`speechend`](/en-US/docs/Web/API/SpeechRecognition/speechend_event)
  - : Fired when speech recognized by the speech recognition service has stopped being detected.
    Also available via the [`onspeechend`](/en-US/docs/Web/API/SpeechRecognition/onspeechend) property.
- [`start`](/en-US/docs/Web/API/SpeechRecognition/start_event)
  - : Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current `SpeechRecognition`.
    Also available via the [`onstart`](/en-US/docs/Web/API/SpeechSynthesisUtterance/onstart) property.

## Examples

In our simple [Speech color changer](https://github.com/mdn/web-speech-api/tree/master/speech-color-changer) example, we create a new `SpeechRecognition` object instance using the {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} constructor, create a new {{domxref("SpeechGrammarList")}}, and set it to be the grammar that will be recognized by the `SpeechRecognition` instance using the {{domxref("SpeechRecognition.grammars")}} property.

After some other values have been defined, we then set it so that the recognition service starts when a click event occurs (see {{domxref("SpeechRecognition.start()")}}.) When a result has been successfully recognized, the {{domxref("SpeechRecognition.onresult")}} handler fires,  we extract the color that was spoken from the event object, and then set the background color of the {{htmlelement("html")}} element to that color.

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color;
  bg.style.backgroundColor = color;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
