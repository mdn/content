---
title: "LanguageDetector: detect() method"
short-title: detect()
slug: Web/API/LanguageDetector/detect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.LanguageDetector.detect
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

The **`detect()`** method of the {{domxref("LanguageDetector")}} interface detects the closest matching language or languages that a given text string is most likely to be written in.

## Syntax

```js-nolint
detect(input)
detect(input, options)
```

### Parameters

- `input`
  - : A string representing the text to have its language detected.
- `options` {{optional_inline}}
  - : An object specifying configuration options for the `detect()` operation. Possible values include:
    - `signal`
      - : An {{domxref("AbortSignal")}} object instance, which allows the `detect()` operation to be aborted via the associated {{domxref("AbortController")}}.

### Return value

A {{jsxref("Promise")}} that fulfills with an array of objects representing the detected languages. Each object contains the following properties:

- `detectedLanguage`
  - : A [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) representing the detected language.
- `confidence`
  - : A number between `0` and `1` representing the AI model's confidence that the detected language is correct.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not active.

## Examples

### Basic `detect()` usage

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

const results = await detector.detect(myTextString);

results.forEach((result) => {
  console.log(`${result.detectedLanguage}: ${result.confidence}`);
});

// Results in logs like this:
// la: 0.8359838724136353
// es: 0.017705978825688362
// sv: 0.012977192178368568
// en: 0.011148443445563316
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
