---
title: "SpeechRecognition: install() static method"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.SpeechRecognition.install_static
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`install()`** static method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) installs the required language packs for [on-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) in the specified languages and quality level.

To check if the language packs are already available, use the {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} method.

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
    - `quality` {{optional_inline}}
      - : An enumerated value that indicates the approximate use case of your speech recognition app, and therefore, the required level of complexity of the language pack and speech recognition service. Possible values are:
        - `command`
          - : Level 1: Short isolated phrases with limited vocabulary and a single speaker. Use cases include voice commands for apps. This is the default value.
        - `dictation`
          - : Level 2: Continuous speech with moderate background noise and a single primary speaker. Use cases include dictating long-form text inputs such as SMS messages, email bodies, or strings for translation.
        - `conversation`
          - : Level 3: Continuous speech with complex vocabulary, high background noise tolerance, and multiple primary speakers. Use cases include transcribing meetings and continuous live captioning.

### Return value

A {{jsxref("Promise")}} that resolves with a boolean value indicating whether the language pack was installed successfully. The conditions that result in each return value are as follows:

- `true`
  - : All installation attempts succeeded for the requested languages, or the languages were already installed.
- `false`
  - : One or more of the requested languages are not supported, a supported language pack failed to install, or an empty array was passed for the `langs` property.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The current document is not fully active.
- `SyntaxError` {{domxref("DOMException")}}
  - : One or more of the strings specified in `langs` is not a valid BCP 47 language tag.

## Examples

### Checking on-device availability and installing language packs

For on-device speech recognition to work, the browser must have a language pack installed for the language you want to recognize. If you run the `start()` method after specifying `processLocally = true` but the correct language pack isn't installed, the function call will fail with a [`language-not-supported`](/en-US/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) error.

To get the correct language pack installed, ensure you follow these two steps:

1. Check whether the language pack is available on the user's computer using the {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} method.
2. Install the language pack if it isn't available using the `install()` method.

These steps are handled using the following code snippet:

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

We first run the `available()` method, specifying one language (`langs: ["en-US"]`) to check availability for, and `processLocally: true`. We test for three different possibilities of the return value:

- If the resulting value is `unavailable`, it means that no suitable language pack is available to download. We also print an appropriate message to the output.
- If the resulting value is `available`, it means that the language pack is available locally, so recognition can begin. In this case, we run `start()` and log a message to the console when the app is ready to receive speech.
- If the value is something else (`downloadable` or `downloading`), we print a diagnostic message to inform the user that a language pack download is starting, then run the `install()` method to handle the download.

The `install()` method works in a similar way to the `available()` method, except that its options object only takes the `langs` array. When run, it starts downloading the `en-US` language pack and returns a {{jsxref("Promise")}} that resolves with a boolean indicating whether the specified language packs were downloaded and installed successfully (`true`) or not (`false`).

This code is excerpted from our [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([run the demo live](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). See [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) for a full explanation.

### Checking on-device model capabilities

The following code snippet is a modification of the previous example in which we call the `available()` method with the `quality` option set to `dictation`, to check whether on-device recognition will support this quality level. If the result returned is `unavailable`, we set the `SpeechRecognition` object's {{domxref("SpeechRecognition.processLocally", "processLocally")}} property to `false` (assuming it was previously set to `true`) to force the API to use a cloud recognition service, then `start()` the recognition service.

If the result is `available`, we are good to go, so we just call `start()` to start on-device recognition. If the result is any other value, we run the `install()` method with the `quality` option set to `dictation` to install the required language packs.

```js
startBtn.addEventListener("click", () => {
  // check availability of on-device target language dictation quality
  SpeechRecognition.available({
    langs: ["en-US"],
    processLocally: true,
    quality: "dictation",
  }).then((result) => {
    if (result === "unavailable") {
      diagnostic.textContent = `on-device recognition for dictation not available, running with cloud recognition`;
      recognition.processLocally = false;
      recognition.start();
    } else if (result === "available") {
      recognition.start();
      console.log("Ready to receive a color command.");
    } else {
      diagnostic.textContent = `en-US language pack downloading`;
      SpeechRecognition.install({
        langs: ["en-US"],
        processLocally: true,
        quality: "dictation",
      }).then((result) => {
        if (result) {
          diagnostic.textContent = `en-US language pack downloaded. Try again.`;
        } else {
          diagnostic.textContent = `en-US language pack failed to download. Try again later.`;
        }
      });
    }
  });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- {{domxref("SpeechRecognition.processLocally")}}
- {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}}
