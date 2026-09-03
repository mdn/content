---
title: "Permissions-Policy: on-device-speech-recognition directive"
short-title: on-device-speech-recognition
slug: Web/HTTP/Reference/Headers/Permissions-Policy/on-device-speech-recognition
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.on-device-speech-recognition
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `on-device-speech-recognition` directive controls access to the [on-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) functionality of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API).

Specifically, where a defined policy blocks usage, any attempts to call the API's {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} or {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} methods will fail.

## Syntax

```http
Permissions-Policy: on-device-speech-recognition=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `on-device-speech-recognition` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
