---
title: "LanguageDetector: inputQuota property"
short-title: inputQuota
slug: Web/API/LanguageDetector/inputQuota
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.LanguageDetector.inputQuota
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

The **`inputQuota`** read-only property of the {{domxref("LanguageDetector")}} interface returns the input quota available to the browser for detecting languages.

## Value

A number specifying the available input quota. This number is implementation-dependant. For example, it might be {{jsxref("Infinity")}} if there are no limits beyond the user's memory and the maximum length of JavaScript strings, or it might be a number of tokens in the case of AI models that use a token/credits scheme.

## Examples

### Checking if you have enough quota

In the below snippet, we create a new `LanguageDetector` instance using {{domxref("LanguageDetector.create_static", "create()")}}, then return the total input quota via `inputQuota` and the input quota usage for a detecting a particular text string's language via {{domxref("LanguageDetector.measureInputUsage", "measureInputUsage()")}}.

We then test to see if the individual input usage for that string is greater than the total available quota. If so, we throw an appropriate error; it not, we commence detecting the string's language using {{domxref("LanguageDetector.detect", "detect()")}}.

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});

const totalInputQuota = detector.inputQuota;
const inputUsage = await detector.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Boo, not enough quota left to detect languages.");
} else {
  console.log("Yay, enough quota left to detect languages.");
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
