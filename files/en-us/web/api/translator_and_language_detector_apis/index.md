---
title: Translator and Language Detector APIs
slug: Web/API/Translator_and_Language_Detector_APIs
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Translator
spec-urls: https://webmachinelearning.github.io/translation-api
---

{{SeeCompatTable}}{{DefaultAPISidebar("Translator and Language Detector APIs")}}

The **Translator and Language Detector APIs** provide functionality to detect the language a body of text is written in and translate text into different languages via a browser's own internal AI model.

## Concepts and usage

Translating a body of text is a common task on today's web. Typical use cases include:

- On-the-fly translation of an article that isn't available in your language.
- Translating a user's support requests into a language the support agent understands.
- Facilitating chats between users that don't speak each other's languages.

Detecting the language of a body of test is an important precursor for successful automated translation, but has other uses beyond direct translation. For example, it allows automatic UI configuration based on user text entry, ranging from updating UI and error strings, to automatically loading appropriate dictionaries for spell checking or curse word detection.

AI is well-suited to facilitating language detection and translation. The Translator and Language Detector APIs provide asynchronous ({{jsxref("Promise")}}-based) mechanisms for a website to detect languages and translate text via the browser's own internal AI model. This is useful and efficient because the browser handles the service, rather than the developer having to rely on the user downloading AI models, or host or pay for a cloud-based translation service.

- Language detection is done via the {{domxref("LanguageDetector")}} interface. A `LanguageDetector` object instance is created using the {{domxref("LanguageDetector.create_static", "LanguageDetector.create()")}} static method, then the {{domxref("LanguageDetector.detect", "detect()")}} instance method is passed the text string to detect the language for.
- Translation is done via the {{domxref("Translator")}} interface. A `Translator` object instance is created using the {{domxref("Translator.create_static", "Translator.create()")}} static method, then the {{domxref("Translator.translate", "translate()")}} instance method is passed the text string to translate.

After the above instances have been created, you can remove them again using a `destroy()` instance method (for example, the {{domxref("Translator.destroy()")}}). You can also cancel pending operations using an {{domxref("AbortController")}}.

See [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using) for a walkthrough of how to use the APIs.

## Interfaces

- {{domxref("LanguageDetector")}} {{Experimental_Inline}}
  - : Contains all the language detection functionality, including checking AI model availability, creating a new `LanguageDetector` instance, using it to detect a language, and more.
- {{domxref("Translator")}} {{Experimental_Inline}}
  - : Contains all the translation functionality, including checking AI model availability, creating a new `Translator` instance, using it to create a translation, and more.

## HTTP headers

- {{httpheader("Permissions-Policy")}}; the {{httpheader("Permissions-Policy/language-detector", "language-detector")}} directive
  - : Controls access to the language detection functionality. Where a policy specifically disallows its use, any attempts to call the `LanguageDetector` methods will fail with a `NotAllowedError` {{domxref("DOMException")}}.
- {{httpheader("Permissions-Policy")}}; the {{httpheader("Permissions-Policy/translator", "translator")}} directive
  - : Controls access to the translation functionality. Where a policy specifically disallows its use, any attempts to call the `Translator` methods will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Examples

For a full example, see [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Language detection with built-in AI](https://developer.chrome.com/docs/ai/language-detection) on developer.chrome.com (2025)
- [Translation with built-in AI](https://developer.chrome.com/docs/ai/translator-api) on developer.chrome.com (2025)
