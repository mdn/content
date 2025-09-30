---
title: "SpeechRecognition: processLocally property"
short-title: processLocally
slug: Web/API/SpeechRecognition/processLocally
page-type: web-api-instance-property
browser-compat: api.SpeechRecognition.processLocally
---

{{APIRef("Web Speech API")}}

The **`processLocally`** property of the
{{domxref("SpeechRecognition")}} interface specifies whether speech recognition must be performed locally on the user's device.

See [On-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) for more information.

## Value

A boolean value.

- If set to `true`, speech recognition done via the `SpeechRecognition` object must be done locally.
- If set to `false` (the default), the user agent can choose whether to do the processing locally or remotely.

## Examples

### Basic usage

The following code creates a new `SpeechRecognition` object instance using the {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} constructor, then specifies that it should use local processing by setting `processLocally` to `true`:

```js
const recognition = new SpeechRecognition();
recognition.processLocally = true;
```

This code is excerpted from our [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([run the demo live](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). See [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) for a full explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
