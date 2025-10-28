---
title: "SpeechRecognition: available() static method"
short-title: available()
slug: Web/API/SpeechRecognition/available_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.SpeechRecognition.available_static
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`available()`** static method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) checks whether the specified languages are available for speech recognition.

To install a language pack for speech recognition locally, use the {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} method.

Access to the `available()` method is controlled by the {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}}. Specifically, where a defined policy blocks usage, any attempts to call the method will fail.

## Syntax

```js-nolint
available(options)
```

### Parameters

- `options`
  - : An object specifying options for the availability check. Possible properties include:
    - `langs`
      - : An array of one or more strings containing {{glossary("BCP 47 language tag", "BCP 47 language tags")}}, each representing a language to check for availability. Passing an empty `langs` array will not throw an error, but the return value will always resolve to `unavailable`.
    - `processLocally` {{optional_inline}}
      - : A boolean that specifies whether to check availability of the languages only for [on-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) (`true`) or for on-device _or_ remote speech recognition (`false`). The default value is `false`.
        > [!NOTE]
        > It is not possible to use `available()` to guarantee that a remote service supports the specified languages. A value of `false` means that either an on-device _or_ a remote speech recognition service supports them.

### Return value

A {{domxref("Promise")}} that resolves with an enumerated value indicating the availability of the specified languages for speech recognition.

Possible values include:

- `available`
  - : Indicates that support for all the specified languages is available.
    - If `processLocally` is set to `true`, `available` means that speech recognition is available for those languages on-device (the required language packs have been downloaded and installed on the user's computer).
    - If `processLocally` is set to `false`, `available` means that speech recognition is available for those languages either on-device or remotely.
- `downloading`
  - : Indicates that support for the specified languages is available on-device, and the relevant language pack for at least one language is in the process of being downloaded. Only relevant when `processLocally` is `true`.
- `downloadable`
  - : Indicates that support for the specified languages is available on-device, but the relevant language pack for at least one language has not yet been downloaded. Only relevant when `processLocally` is `true`.
- `unavailable`
  - : Indicates that support for at least one of the specified languages is not available.
    - If `processLocally` is set to `true`, `unavailable` means that on-device speech recognition is not available for at least one of the specified languages.
    - If `processLocally` is set to `false`, `unavailable` means that speech recognition is not available for at least one of the specified languages either on-device or remotely.

#### Final return value for multiple languages with different statuses

Only one status value is returned, even if multiple languages are specified in the `langs` array. If different specified languages have different availability statuses, the final return value is the "furthest away" status from `available` for any of the languages, in the order shown in the following lists:

If `processLocally` is `false`:

- If all languages are `available`, then return `available`.
- Otherwise, return `unavailable`.

If `processLocally` is `true`:

- If all languages are `available`, return `available`.
- If at least one language is `downloading`, return `downloading`.
- If at least one language is `downloadable`, return `downloadable`.
- If at least one language is `unavailable`, return `unavailable`.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The current document is not fully active.
- `SyntaxError` {{domxref("DOMException")}}
  - : One or more of the strings specified in `langs` is not a valid BCP 47 language tag.

## Examples

### Checking on-device availability and installing language packs

For on-device speech recognition to work, the browser must have a language pack installed for the language you want to recognize. If you run the `start()` method after specifying `processLocally = true` but the correct language pack isn't installed, the function call will fail with a [`language-not-supported`](/en-US/docs/Web/API/SpeechRecognitionErrorEvent/error#language-not-supported) error.

To get the correct language pack installed, ensure you follow these two steps:

1. Check whether the language pack is available on the user's computer using the `available()` method.
2. Install the language pack if it isn't available using the {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}} method.

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

This code is excerpted from our [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([run the demo live](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)). See [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) for a full explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- {{domxref("SpeechRecognition.processLocally")}}
- {{domxref("SpeechRecognition.install_static", "SpeechRecognition.install()")}}
