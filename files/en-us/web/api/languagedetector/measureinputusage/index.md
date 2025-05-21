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

### Return value

A {{jsxref("Promise")}} that fulfills with a number specifying the {{domxref("LanguageDetector.inputQuota", "inputQuota")}} usage of the given input text.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the `LanguageDetector` API is blocked by a {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}}.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the `measureInputUsage()` call failed for any other reason, or a reason the user agent did not wish to disclose.

## Examples

### Checking if you have enough quota

In the below snippet, we create a new `LanguageDetector` instance using {{domxref("LanguageDetector.create_static", "create()")}}, then return the total input quota via {{domxref("LanguageDetector.inputQuota", "inputQuota")}} and the input quota usage for a detecting a particular text string's language via `measureInputUsage()`.

We then test to see if the individual input usage for that string is greater than the total available quota. If so, we throw an appropriate error; it not, we commence detecting the string's language using {{domxref("LanguageDetector.detect", "detect()")}}.

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

const totalInputQuota = detector.inputQuota;
const inputUsage = await detector.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Boo, insufficient quota to detect languages.");
} else {
  console.log("Yay, quota available to detect languages.");
  const results = await detector.detect(myTextString);
  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
