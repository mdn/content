---
title: "Translator: translate() method"
short-title: translate()
slug: Web/API/Translator/translate
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Translator.translate
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

The **`translate()`** method of the {{domxref("Translator")}} interface returns a translation of an input string.

## Syntax

```js-nolint
translate(input)
translate(input, options)
```

### Parameters

- `input`
  - : A string representing the text to be translated.
- `options` {{optional_inline}}
  - : An object specifying configuration options for the `translate()` operation. Possible values include:
    - `signal`
      - : An {{domxref("AbortSignal")}} object instance, which allows the `translate()` operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with a string containing the generated translation.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not active.
- {{domxref("QuotaExceededError")}}
  - : Thrown if the translation operation exceeds the available {{domxref("Translator.inputQuota", "inputQuota")}}.

## Examples

### Basic `translate()` usage

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const translation = await translator.translate(myTextString);
console.log(translation);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
