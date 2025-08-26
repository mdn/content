---
title: "Translator: translateStreaming() method"
short-title: translateStreaming()
slug: Web/API/Translator/translateStreaming
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Translator.translateStreaming
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

The **`translateStreaming()`** method of the {{domxref("Translator")}} interface generates a translation as a {{domxref("ReadableStream")}}.

## Syntax

```js-nolint
translateStreaming(input)
translateStreaming(input, options)
```

### Parameters

- `input`
  - : A string representing the text to be translated.
- `options` {{optional_inline}}
  - : An object specifying configuration options for the `translateStreaming()` operation. Possible values include:
    - `signal`
      - : An {{domxref("AbortSignal")}} object instance, which allows the `translateStreaming()` operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{domxref("ReadableStream")}} containing the generated translation.

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

const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  console.log(chunk);
  translation += chunk;
}

console.log("Complete translation:", translation);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
