---
title: "Translator: measureInputUsage() method"
short-title: measureInputUsage()
slug: Web/API/Translator/measureInputUsage
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Translator.measureInputUsage
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

The **`measureInputUsage()`** method of the {{domxref("Translator")}} interface reports how much input quota would be used by a translation operation for a given text input.

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

A {{jsxref("Promise")}} that fulfills with a number specifying the {{domxref("Translator.inputQuota", "inputQuota")}} usage of the given input text.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the `Translator` API is blocked by a {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}}.
- `NotReadableError` {{domxref("DOMException")}}
  - : Thrown if the output translation was filtered by the user agent, for example because it was detected to be harmful, inaccurate, or nonsensical.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the `measureInputUsage()` call failed for any other reason, or a reason the user agent did not wish to disclose.

## Examples

### Checking if you have enough quota

In the below snippet, we create a new `Translator` instance using {{domxref("Translator.create_static", "create()")}}, then return the total input quota via {{domxref("Translator.inputQuota", "inputQuota")}} and the input quota usage for a translating a particular text string via `measureInputUsage()`.

We then test to see if the individual input usage for that string is greater than the total available quota. If so, we throw an appropriate error; it not, we commence translating the string using {{domxref("Translator.translate", "translate()")}}.

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const totalInputQuota = translator.inputQuota;
const inputUsage = await translator.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Boo, not enough quota left to translate.");
} else {
  console.log("Yay, enough quota left to translate.");
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
