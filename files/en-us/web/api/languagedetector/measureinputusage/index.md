---
title: "LanguageDetector: measureInputUsage() method"
short-title: measureInputUsage()
slug: Web/API/LanguageDetector/measureInputUsage
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.LanguageDetector.measureInputUsage
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

The **`measureInputUsage()`** method of the {{domxref("LanguageDetector")}} interface reports how much input quota would be used by a language detection operation for a given text input.

## Syntax

```js-nolint
measureInputUsage(input)
measureInputUsage(input, options)
```

### Parameters

- `input`
  - : A string representing the input text you want an input usage measurement for.
- `options` {{optional_inline}}
  - : An object specifying configuration options for the `measureInputUsage()` operation. Possible values include:
    - `signal`
      - : An {{domxref("AbortSignal")}} object instance, which allows the `measureInputUsage()` operation to be aborted via the associated {{domxref("AbortController")}}.

EDITORIAL: Aborting the call via an abort signal doesn't seem to work. Am I missing something?

### Return value

A {{jsxref("Promise")}} that fulfills with a number specifying the {{domxref("LanguageDetector.inputQuota", "inputQuota")}} usage of the given input text.

EDITORIAL: As I said on the inputQuota page, I ought to include some information about input quota and how it is determined for each implementation. Maybe just including all of that info on the inputQuota page and then linking to it from here would be enough? I should specify how accurate the value returned by measureInputUsage is, whether it is an estimate, etc.?

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the `LanguageDetector` API is blocked by a {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}}.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the `measureInputUsage()` call failed for any other reason, or a reason the user agent did not wish to disclose.

## Examples

### Basic `measureInputUsage()` usage

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

const inputUsage = await detector.measureInputUsage(myTextString);
console.log(`Input usage: ${inputUsage}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
