---
title: "SpeechRecognition: install() static method"
short-title: install()
slug: Web/API/SpeechRecognition/install_static
page-type: web-api-static-method
browser-compat: api.SpeechRecognition.install_static
---

{{APIRef("Web Speech API")}}

The **`install()`** static method of the {{domxref("SpeechRecognition")}} interface installs the language packs needed for [on-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) of the specified languages, at the specified quality level.
A language pack is the data a browser needs to recognize speech in a particular language.
Once it is installed, recognition in that language can run on the user's device, so audio doesn't have to be sent to a remote service.

To check whether the language packs are already installed, use the {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} method with `processLocally` set to `true`.

Access to the `install()` method is controlled by the {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} directive.
If a policy blocks access, the promise returned by `install()` rejects with a `NotAllowedError` {{domxref("DOMException")}}.

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
      - : An enumerated value that indicates the approximate use case of your speech recognition app.
        `install()` installs language packs that support at least this quality level.
        Possible values are:
        - `command`
          - : Level 1: Short isolated phrases with limited vocabulary and a single speaker. Use cases include voice commands for apps. This is the default value.
        - `dictation`
          - : Level 2: Continuous speech with moderate background noise and a single primary speaker. Use cases include dictating long-form text inputs such as SMS messages, email bodies, or strings for translation.
        - `conversation`
          - : Level 3: Continuous speech with complex vocabulary, high background noise, and multiple primary speakers. Use cases include transcribing meetings and continuous live captioning.
    - `processLocally` {{optional_inline}}
      - : A boolean.
        `install()` always installs language packs for [on-device speech recognition](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition), so this option has no effect.
        This means you can pass `install()` the same options object that you pass to {{domxref("SpeechRecognition.available_static", "available()")}}.
        See [Browser compatibility](#browser_compatibility) for browser-specific differences.

### Return value

A {{jsxref("Promise")}} that resolves with a boolean value indicating whether the language packs were installed successfully.
The promise resolves with:

- `true`
  - : All installation attempts succeeded for the requested languages, or the languages were already installed.
- `false`
  - : One or more of the requested languages aren't supported, the language pack for a supported language failed to install, the browser declined to download a language pack (for example, because the user refused a permission prompt), or the `langs` array was empty.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : The current document is not fully active.
- `NotAllowedError` {{domxref("DOMException")}}
  - : One of the following:
    - The call would start a language pack download, but the page doesn't have {{Glossary("transient activation")}}.
    - Use of `install()` is blocked by the {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{httpheader("Permissions-Policy")}} directive.
- `SyntaxError` {{domxref("DOMException")}}
  - : One or more of the strings specified in `langs` aren't valid BCP 47 language tags.

## Examples

### Checking on-device availability and installing language packs

For on-device speech recognition to work, the browser must have a language pack installed for the language you want to recognize.
If you call `start()` after setting `processLocally` to `true` but the correct language pack isn't installed, recognition fails and an {{domxref("SpeechRecognition.error_event", "error")}} event fires with a [`service-not-allowed`](/en-US/docs/Web/API/SpeechRecognitionErrorEvent/error#service-not-allowed) error code.

To install the correct language pack, follow these two steps:

1. Use the {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}} method to check whether the language pack is installed on the user's device.
2. If it isn't installed, use the `install()` method to install it.

These steps are handled using the following code snippet:

```js
startBtn.addEventListener("click", () => {
  // Check availability of target language
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

We then call the `install()` method with the same options.
It starts downloading the `en-US` language pack and returns a {{jsxref("Promise")}} that resolves with `true` if the language packs were downloaded and installed successfully, or `false` if not.

This code is excerpted from our [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([run the demo live](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). See [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) for a full explanation.

### Installing a language pack for a specific quality level

The following code snippet modifies the previous example.
It calls {{domxref("SpeechRecognition.available_static", "available()")}} with the `quality` option set to `dictation`, to check whether on-device recognition supports this quality level.
If the result is `unavailable`, we set the `SpeechRecognition` object's {{domxref("SpeechRecognition.processLocally", "processLocally")}} property to `false` (assuming it was previously `true`), which allows the browser to use a remote recognition service if it has one, and then call `start()`.

If the result is `available`, we call {{domxref("SpeechRecognition.start", "start()")}} to begin on-device recognition.
If the result is any other value, we call `install()` with the `quality` option set to `dictation` to install the required language packs.

```js
startBtn.addEventListener("click", () => {
  // Check availability of on-device target language dictation quality
  SpeechRecognition.available({
    langs: ["en-US"],
    processLocally: true,
    quality: "dictation",
  }).then((result) => {
    if (result === "unavailable") {
      diagnostic.textContent = `On-device recognition for dictation not available. Falling back to any available recognition service.`;
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

- {{domxref("SpeechRecognition.available_static", "SpeechRecognition.available()")}}
- {{domxref("SpeechRecognition.processLocally")}}
- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
