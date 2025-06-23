---
title: "Translator: inputQuota property"
short-title: inputQuota
slug: Web/API/Translator/inputQuota
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Translator.inputQuota
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

The **`inputQuota`** read-only property of the {{domxref("Translator")}} interface returns the input quota available to the browser for generating translations.

## Value

A number specifying the available input quota.

This number is implementation-dependant. For example, it might be {{jsxref("Infinity")}} if there are no limits beyond the user's memory and the maximum length of JavaScript strings, or it might be a number of tokens in the case of AI models that use a token/credits scheme.

The only guarantee is that `inputQuota` - {{domxref("Translator.measureInputUsage", "measureInputUsage()")}} will be non-negative if there is sufficient quota to translate the text.

## Examples

### Checking if you have enough quota

In the below snippet, we create a new `Translator` instance using {{domxref("Translator.create_static", "create()")}}, then return the total input quota via `inputQuota` and the input quota usage for a translating a particular text string via {{domxref("Translator.measureInputUsage", "measureInputUsage()")}}.

We then test to see if the individual input usage for that string is greater than the total available quota. If so, we throw an appropriate error; it not, we commence translating the string using {{domxref("Translator.translate", "translate()")}}.

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const totalInputQuota = translator.inputQuota;
const inputUsage = await translator.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Insufficient quota to translate.");
} else {
  console.log("Quota available to translate.");
  const translation = await translator.translate(myTextString);
  // ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
