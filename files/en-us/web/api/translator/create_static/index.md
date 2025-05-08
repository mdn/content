---
title: "Translator: create() static method"
short-title: create()
slug: Web/API/Translator/create_static
page-type: web-api-static-method
browser-compat: api.Translator.create_static
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}

The **`create()`** static method of the {{domxref("Translator")}} interface creates a new `Translator` instance from which to generate translations.

## Syntax

```js-nolint
Translator.create(options)
```

### Parameters

- `options`

  - : An object specifying configuration options for the `Translator`. Possible values include:

    - `sourceLanguage`
      - : A string specifying the expected language of the input text to be translated, which should be a valid [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (as specified in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)).
    - `targetLanguage`
      - : A string specifying the language that the input text will be translated into, which should be valid BCP 47 language tag.
    - `monitor` {{optional_inline}}
      - : A callback function with a {{domxref("CreateMonitor")}} argument that enables monitoring download progress of the AI model.
    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} object instance, which allows the `create()` operation to be aborted via the associated {{domxref("AbortController")}}.

EDITORIAL: Aborting the call via an abort signal doesn't seem to work. Am I missing something?

### Return value

A {{jsxref("Promise")}} that fulfills with a `Translator` object instance.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the page's {{domxref("Document")}} is not yet active.
- `NetworkError` {{domxref("DOMException")}}
  - : Thrown in any of the following circumstances:
    - The network was not available to download the AI model.
    - The user has cancelled the AI model download.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown in any of the following circumstances:
    - Usage of the method is blocked by a {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}}.
    - The user has blocked the AI model download in some way.
    - The `create()` method wasn't called via {{glossary("transient activation")}}.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown in any of the following circumstances:
    - The language tags specified in `sourceLanguage` or `targetLanguage` are invalid, or not supported.
    - An AI model to support the specified combination of `sourceLanguage` and `targetLanguage` is not available.
- `OperationError` {{domxref("DOMException")}}
  - : General-purpose exception thrown if `Translator` creation failed for any other reason.

## Examples

### Basic `Translator` creation

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
