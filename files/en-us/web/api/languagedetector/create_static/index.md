---
title: "LanguageDetector: create() static method"
short-title: create()
slug: Web/API/LanguageDetector/create_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.LanguageDetector.create_static
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

The **`create()`** static method of the {{domxref("LanguageDetector")}} interface creates a new `LanguageDetector` instance to detect languages.

> [!NOTE]
> The `create()` method requires [transient activation](/en-US/docs/Glossary/Transient_activation), that is, it must be invoked in response to a user action such as a mouse click or button press.

## Syntax

```js-nolint
LanguageDetector.create(options)
```

### Parameters

- `options`

  - : An object specifying configuration options for the `LanguageDetector`. Possible values include:

    - `expectedInputLanguages`
      - : An array of strings specifying the expected languages of the input text, which helps improve the accuracy of the language detection. These should be valid [BCP 47 language tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (as specified in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)). Defaults to `["en"]`.
    - `monitor` {{optional_inline}}
      - : A callback function with a {{domxref("CreateMonitor")}} argument that enables monitoring download progress of the AI model.
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the `create()` operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with a `LanguageDetector` object instance.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the page's {{domxref("Document")}} is not yet active.
- `NetworkError` {{domxref("DOMException")}}
  - : Thrown if:
    - The network was not available to download the AI model.
    - The user has cancelled the AI model download.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if:
    - Usage of the method is blocked by a {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}}.
    - The user has blocked the AI model download in some way.
    - The `create()` method wasn't called via {{glossary("transient activation")}}.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if:
    - The language tags specified in `expectedInputLanguages` are invalid, or not supported.
    - An AI model to support the specified `expectedInputLanguages` is not available.
- `OperationError` {{domxref("DOMException")}}
  - : General-purpose exception thrown if `LanguageDetector` creation failed for any other reason.

## Examples

### Basic `LanguageDetector` creation

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
