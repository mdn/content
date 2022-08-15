---
title: SpeechRecognitionErrorEvent.error
slug: Web/API/SpeechRecognitionErrorEvent/error
page-type: web-api-instance-property
tags:
  - API
  - Error
  - Property
  - Reference
  - SpeechRecognitionErrorEvent
  - Web Speech API
  - recognition
  - speech
browser-compat: api.SpeechRecognitionErrorEvent.error
---
{{APIRef("Web Speech API")}}

The **`error`** read-only property of the
{{domxref("SpeechRecognitionErrorEvent")}} interface returns the type of error raised.

## Value

A string naming the type of error. The possible error types are:

- `no-speech`
  - : No speech was detected.
- `aborted`
  - : Speech input was aborted in some manner, perhaps by some user-agent-specific
    behavior like a button the user can press to cancel speech input.
- `audio-capture`
  - : Audio capture failed.
- `network`
  - : Network communication required for completing the recognition failed.
- `not-allowed`
  - : The user agent disallowed any speech input from occurring for reasons of security,
    privacy or user preference.
- `service-not-allowed`
  - : The user agent disallowed the requested speech recognition service, either because
    the user agent doesn't support it or because of reasons of security, privacy or user
    preference. In this case it would allow another more suitable speech recognition
    service to be used instead.
- `bad-grammar`
  - : There was an error in the speech recognition grammar or semantic tags, or the chosen
    grammar format or semantic tag format was unsupported.
- `language-not-supported`
  - : The language was not supported.

## Examples

```js
const recognition = new SpeechRecognition();

recognition.onerror = (event) => {
  console.log(`Speech recognition error detected: ${event.error}`);
  console.log(`Additional information: ${event.message}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
