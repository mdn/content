---
title: "LanguageDetector: create() static method"
short-title: create()
slug: Web/API/LanguageDetector/create_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.LanguageDetector.create_static
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

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
      - : An array of strings specifying the expected languages of the input text, which helps improve the accuracy of the language detection. These should be valid {{glossary("BCP 47 language tag", "BCP 47 language tags")}}. Defaults to `["en"]`.
    - `monitor` {{optional_inline}}
      - : A callback function with a {{domxref("CreateMonitor")}} argument that enables monitoring download progress of the AI model.
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows a `create()` operation to be aborted via the associated {{domxref("AbortController")}}. The exact effect is dependant on when {{domxref("AbortController.abort()")}} is called:
        - If `abort()` is called before the `create()` promise resolves, the `create()` operation is cancelled.
        - If `abort()` is called after the `create()` promise fulfills, it has the same effect as calling {{domxref("LanguageDetector.destroy()")}}: The resources assigned to the resulting `LanguageDetector` instance are released, and any further language detection activity will fail.

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
