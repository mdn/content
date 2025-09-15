---
title: "SpeechRecognition: install() static method"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
page-type: web-api-static-method
browser-compat: api.SpeechRecognition.install
---

{{APIRef("Web Speech API")}}

The **`install()`** static method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) installs the required language packs for [on-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) of the specified languages.

To check existing availability of the language packs for on-device speech recognition, you can use the {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} method.

Access to the `install()` method is controlled by the {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} directive. Specifically, where a defined policy blocks usage, any attempts to call the method will fail.

## Syntax

```js-nolint
install(options)
```

### Parameters

- `options`
  - : An object specifying options for the installation. Possible properties include:
    - `langs`
      - : An array of one or more strings containing {{glossary("BCP 47 language tag", "BCP 47 language tags")}}, each representing a language that you want to install the language pack for.

### Return value

A {{domxref("Promise")}} that resolves with a boolean value indicating whether installation was successful. The conditions that result in each return value are as follows:

- `true`
  - : All installation attempts succeeded for the requested languages, or the languages were already installed.
- `false`
  - : One or more of the requested languages are not supported, any of the language packs for supported languages failed to install, or an empty array was passed for the `langs` option.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The current document is not fully active.
- `SyntaxError` {{domxref("DOMException")}}
  - : One or more of the strings specified in `langs` is not a valid BCP 47 language tag.

## Examples

### Checking on-device availability and installing language packs

For on-device speech recognition to occur, the browser needs to have a language pack installed for the language you are trying to recognize. If you run the `start()` method after specifying `processLocally = true` and you haven't got the correct language pack installed, it will fail with a [`language-not-supported`](/en-US/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) error.

To get the correct language pack installed, there are two steps to follow.

1. You need to check whether the language pack is available on the user's computer using the {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} method.
2. You need to install the language pack if it isn't available using the `install()` method.

Both of the above steps are handled using the following code snippet:

```js
document.body.addEventListener("click", () => {
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
- {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}}
