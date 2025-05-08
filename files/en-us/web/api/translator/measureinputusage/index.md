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

EDITORIAL: Aborting the call via an abort signal doesn't seem to work. Am I missing something?

### Return value

A {{jsxref("Promise")}} that fulfills with a number specifying the {{domxref("Translator.inputQuota", "inputQuota")}} usage of the given input text.

EDITORIAL: As I said on the inputQuota page, I ought to include some information about input quota and how it is determined for each implenentation. Maybe just including all of that info on the inputQuota page and then linking to it from here would be enough? I should specify how accurate the value returned by measureInputUsage is, whether it is an estimate, etc.?

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the `Translator` API is blocked by a {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}}.
- `NotReadableError` {{domxref("DOMException")}}
  - : Thrown if the output translation was filtered by the user agent, for example because it was detected to be harmful, inaccurate, or nonsensical.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the `measureInputUsage()` call failed for any other reason, or a reason the user agent did not wish to disclose.

## Examples

### Basic `measureInputUsage()` usage

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

const inputUsage = await translator.measureInputUsage(myTextString);
console.log(`Input usage: ${inputUsage}`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
