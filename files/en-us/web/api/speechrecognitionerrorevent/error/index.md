---
title: "SpeechRecognitionErrorEvent: error property"
short-title: error
slug: Web/API/SpeechRecognitionErrorEvent/error
page-type: web-api-instance-property
browser-compat: api.SpeechRecognitionErrorEvent.error
---

{{APIRef("Web Speech API")}}

The **`error`** read-only property of the
{{domxref("SpeechRecognitionErrorEvent")}} interface returns the type of error raised.

## Value

An enumerated value representing the type of error. Possible values include:

- `aborted`
  - : Speech input was aborted in some manner, perhaps by some user-agent-specific
    behavior like a button the user can press to cancel speech input.
- `audio-capture`
  - : Audio capture failed.
- `bad-grammar` {{deprecated_inline}} {{non-standard_inline}}
  - : There was an error in the speech recognition grammar or semantic tags, or the chosen
    grammar format or semantic tag format was unsupported.
    > [!NOTE]
    > This error is no longer in the Web Speech API specification; the whole concept of grammar has been removed. Related features have been kept in the specification and are still recognized by supporting browsers for backwards compatibility purposes, but they have no effect on speech recognition services.
- `language-not-supported`
  - : The user agent does not support the language specified in the [`lang`](/en-US/docs/Web/API/SpeechRecognition/lang) attribute of the {{domxref("SpeechRecognition")}} object. The set of supported languages is browser-dependent, and there is no way to programmatically determine from front-end code the languages a user's browser supports for speech recognition.
- `network`
  - : Network communication required for completing the recognition failed.
- `no-speech`
  - : No speech was detected.
- `not-allowed`
  - : The user agent disallowed any speech input from occurring for reasons of security,
    privacy or user preference.
- `phrases-not-supported`
  - : The speech recognition model does not support {{domxref("SpeechRecognition.phrases", "phrases")}} for [contextual biasing](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#speech_recognition_contextual_biasing).
- `service-not-allowed`
  - : The user agent disallowed the requested speech recognition service, either because
    the user agent doesn't support it or because of reasons of security, privacy or user
    preference. In this case it would allow another more suitable speech recognition
    service to be used instead.

## Examples

```js
const recognition = new SpeechRecognition();

recognition.onerror = (event) => {
  console.log(`Speech recognition error detected: ${event.error}`);
  console.log(`Additional information: ${event.message}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
