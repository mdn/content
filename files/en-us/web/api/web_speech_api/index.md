---
title: Web Speech API
slug: Web/API/Web_Speech_API
page-type: web-api-overview
browser-compat:
  - api.SpeechRecognition
  - api.SpeechSynthesis
---

{{DefaultAPISidebar("Web Speech API")}}

The **Web Speech API** enables you to incorporate voice data into web apps.
The Web Speech API has two parts: `SpeechSynthesis` (Text-to-Speech), and `SpeechRecognition` (Asynchronous Speech Recognition.)

## Web Speech Concepts and Usage

The Web Speech API makes web apps able to handle voice data.
There are two components to this API:

- Speech recognition is accessed via the {{domxref("SpeechRecognition")}} interface, which provides the ability to recognize voice context from an audio input and respond appropriately.
  Generally you'll use the interface's constructor to create a new {{domxref("SpeechRecognition")}} object, which has a number of event handlers available for detecting when speech is input through the device's microphone (or from an audio track).
  You can specify whether you want the speech recognition done using a service provided by the user's platform (the default), or [locally in the browser](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition).
- Speech synthesis is accessed via the {{domxref("SpeechSynthesis")}} interface, a text-to-speech component that allows programs to read out their text content (normally via the device's default speech synthesizer.) Different voice types are represented by {{domxref("SpeechSynthesisVoice")}} objects, and different parts of text that you want to be spoken are represented by {{domxref("SpeechSynthesisUtterance")}} objects.
  You can get these spoken by passing them to the {{domxref("SpeechSynthesis.speak()")}} method.

For more details on using these features, see [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Web Speech API Interfaces

### Speech recognition

- {{domxref("SpeechRecognition")}}
  - : The controller interface for the recognition service; this also handles the {{domxref("SpeechRecognitionEvent")}} sent from the recognition service.
- {{domxref("SpeechRecognitionAlternative")}}
  - : Represents a single word that has been recognized by the speech recognition service.
- {{domxref("SpeechRecognitionErrorEvent")}}
  - : Represents error messages from the recognition service.
- {{domxref("SpeechRecognitionEvent")}}
  - : The event object for the {{domxref("SpeechRecognition.result_event", "result")}} and {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} events, and contains all the data associated with an interim or final speech recognition result.
- {{domxref("SpeechRecognitionPhrase")}}
  - : Represents a phrase that can be passed into the speech recognition engine to be used for [speech recognition contextual biasing](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#speech_recognition_contextual_biasing).
- {{domxref("SpeechGrammar")}} {{deprecated_inline}}
  - : The words or patterns of words that we want the recognition service to recognize.
- {{domxref("SpeechGrammarList")}} {{deprecated_inline}}
  - : Represents a list of {{domxref("SpeechGrammar")}} objects.
- {{domxref("SpeechRecognitionResult")}}
  - : Represents a single recognition match, which may contain multiple {{domxref("SpeechRecognitionAlternative")}} objects.
- {{domxref("SpeechRecognitionResultList")}}
  - : Represents a list of {{domxref("SpeechRecognitionResult")}} objects, or a single one if results are being captured in {{domxref("SpeechRecognition.continuous","continuous")}} mode.

### Speech synthesis

- {{domxref("SpeechSynthesis")}}
  - : The controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.
- {{domxref("SpeechSynthesisErrorEvent")}}
  - : Contains information about any errors that occur while processing {{domxref("SpeechSynthesisUtterance")}} objects in the speech service.
- {{domxref("SpeechSynthesisEvent")}}
  - : Contains information about the current state of {{domxref("SpeechSynthesisUtterance")}} objects that have been processed in the speech service.
- {{domxref("SpeechSynthesisUtterance")}}
  - : Represents a speech request.
    It contains the content the speech service should read and information about how to read it (e.g., language, pitch and volume.)
- {{domxref("SpeechSynthesisVoice")}}
  - : Represents a voice that the system supports.
    Every `SpeechSynthesisVoice` has its own relative speech service including information about language, name and URI.
- {{domxref("Window.speechSynthesis")}}
  - : Specified out as part of a `[NoInterfaceObject]` interface called `SpeechSynthesisGetter`, and Implemented by the `Window` object, the `speechSynthesis` property provides access to the {{domxref("SpeechSynthesis")}} controller, and therefore the entry point to speech synthesis functionality.

## Errors

For information on errors reported by the Speech API (for example, `"language-not-supported"` and `"language-unavailable"`), see the following documentation:

- [`error` property of the `SpeechRecognitionErrorEvent` object](/en-US/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [`error` property of the `SpeechSynthesisErrorEvent` object](/en-US/docs/Web/API/SpeechSynthesisErrorEvent/error)

## Security considerations

Access to the [on-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) functionality of the Web Speech API is controlled by the {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} directive.

Specifically, where a defined policy blocks usage, any attempts to call the API's {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} or {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} methods will fail.

## Examples

Our [Web Speech API examples](https://github.com/mdn/dom-examples/tree/main/web-speech-api) illustrate speech recognition and synthesis.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
