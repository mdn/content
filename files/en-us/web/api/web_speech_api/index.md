---
title: Web Speech API
slug: Web/API/Web_Speech_API
page-type: web-api-overview
tags:
  - API
  - Landing
  - Reference
  - Web Speech API
  - recognition
  - speech
  - synthesis
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

- Speech recognition is accessed via the {{domxref("SpeechRecognition")}} interface, which provides the ability to recognize voice context from an audio input (normally via the device's default speech recognition service) and respond appropriately.
  Generally you'll use the interface's constructor to create a new {{domxref("SpeechRecognition")}} object, which has a number of event handlers available for detecting when speech is input through the device's microphone. The {{domxref("SpeechGrammar")}} interface represents a container for a particular set of grammar that your app should recognize.
  Grammar is defined using [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**.)
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
- {{domxref("SpeechGrammar")}}
  - : The words or patterns of words that we want the recognition service to recognize.
- {{domxref("SpeechGrammarList")}}
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
    It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)
- {{domxref("SpeechSynthesisVoice")}}
  - : Represents a voice that the system supports.
    Every `SpeechSynthesisVoice` has its own relative speech service including information about language, name and URI.
- {{domxref("Window.speechSynthesis")}}
  - : Specified out as part of a `[NoInterfaceObject]` interface called `SpeechSynthesisGetter`, and Implemented by the `Window` object, the `speechSynthesis` property provides access to the {{domxref("SpeechSynthesis")}} controller, and therefore the entry point to speech synthesis functionality.

## Examples

The [Web Speech API examples](https://github.com/mdn/dom-examples/tree/main/web-speech-api) on GitHub contains demos to illustrate speech recognition and synthesis.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [SitePoint article](https://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [HTML5Rocks article](https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/)
