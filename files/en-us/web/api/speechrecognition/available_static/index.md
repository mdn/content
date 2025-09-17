---
title: "SpeechRecognition: available() static method"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
page-type: web-api-static-method
browser-compat: api.SpeechRecognition.available
---

{{APIRef("Web Speech API")}}

The **`available()`** static method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) checks whether specified languages are available for speech recognition either locally on the user's computer, or via a remote service.

To install a language pack for speech recognition locally, you need to use the {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} method.

Access to the `available()` method is controlled by the {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} directive. Specifically, where a defined policy blocks usage, any attempts to call the method will fail.

## Syntax

```js-nolint
available(options)
```

### Parameters

- `options`
  - : An object specifying options for the availability check. Possible properties include:
    - `langs`
      - : An array of one or more strings containing {{glossary("BCP 47 language tag", "BCP 47 language tags")}}, each representing a language that you want to check availability of for speech recognition. Passing an empty `langs` array will not throw an error, but the return value will always resolve to `unavailable`.
    - `processLocally` {{optional_inline}}
      - : A boolean that specifies whether you are checking availability of the specified languages for [on-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) (`true`) or availability of the specified languages for on-device or remote speech recognition (`false`). Defaults to `false`.

### Return value

A {{domxref("Promise")}} that resolves with an emumerated value indicating the availability of the specified languages for speech recognition. Possible values are:

- `available`
  - : Indicates that the specified languages are available. If `processLocally` is set to `true`, `available` means that the required language packs have been downloaded and installed on the user's computer. If `processLocally` is set to `false`, `available` means that speech recognition is availale for those languages either on-device or remotely.
- `downloadable`
  - : Indicates that support for the specified languages is available on-device, but the relevant language packs have not yet been downloaded.
- `downloading`
  - : Indicates that support for the specified languages is available on-device, and the relevant language packs are in the process of being downloaded.
- `unavailable`
  - : Indicates that the specified languages are not available. If `processLocally` is set to `true`, `unavailable` means that on-device speech recognition is not available for at least one of the specified languages. If `processLocally` is set to `false`, `unavailable` means that speech recognition is not available for at least one of the specified languages either on-device or remotely.

> [!NOTE]
> The `downloadable` and `downloading` values are primarily relevant when `processLocally` is set to `true`. If `processLocally` is set to `false` and the user agent prefers remote processing, `available()` will always return `available` or `unavailable`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The current document is not fully active.
- `SyntaxError` {{domxref("DOMException")}}
  - : One or more of the strings specified in `langs` is not a valid BCP 47 language tag.

## Examples

### Checking on-device availability and installing language packs

For on-device speech recognition to occur, the browser needs to have a language pack installed for the language you are trying to recognize. If you run the `start()` method after specifying `processLocally = true` and you haven't got the correct language pack installed, it will fail with a [`language-not-supported`](/en-US/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) error.

To get the correct language pack installed, there are two steps to follow.

1. You need to check whether the language pack is available on the user's computer using the `available()` method.
2. You need to install the language pack if it isn't available using the {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} method.

Both of the above steps are handled using the following code snippet:

```js
startBtn.addEventListener("click", () => {
  // check availability of target language
  SpeechRecognition.available({ langs: ["en-US"], processLocally: true }).then(
    (result) => {
      if (result === "unavailable") {
        diagnostic.textContent = `en-US not available to download at this time. Sorry!`;
      } else if (result === "available") {
        recognition.start();
        console.log("Ready to receive a color command.");
      } else {
        diagnostic.textContent = `en-US language pack downloading`;
        SpeechRecognition.install({
          langs: ["en-US"],
          processLocally: true,
        }).then((result) => {
          if (result) {
            diagnostic.textContent = `en-US language pack downloaded. Try again.`;
          } else {
            diagnostic.textContent = `en-US language pack failed to download. Try again later.`;
          }
        });
      }
    },
  );
});
```

We run the `available()` method, specifying one language (`langs: ["en-US"]`) to check availability for, and `processLocally: true`. We test for three different possibilities of the return value:

- If the resulting value is `unavailable`, it means that the language is not available, and a suitable language pack is not available to download, so we print an appropriate message to the output.
- If the resulting value is `available`, it means that the language pack is available locally, so recognition can begin. In this case, we run `start()` and log a message to the console when the app is ready to receive speech.
- If the value is something else (`downloadable` or `downloading`), we print a diagnostic message to inform the user that a language code download is commencing, then run the `install()` method to handle the download.

The `install()` method works in a similar way to the `available()` method, except that its options object only takes the `langs` array. When run, it starts downloading the `en-US` language pack and returns a {{jsxref("Promise")}} that resolves with a boolean indicating whether the specified language packs were downloaded and installed successfully (`true`) or not (`false`).

This code is excerpted from our [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([run the demo live](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)). See [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) for a full explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- {{domxref("SpeechRecognition.processLocally")}}
- {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}}
