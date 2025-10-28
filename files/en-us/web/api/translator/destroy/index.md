---
title: "Translator: destroy() method"
short-title: destroy()
slug: Web/API/Translator/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Translator.destroy
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}} {{securecontext_header}}

The **`destroy()`** method of the {{domxref("Translator")}} interface releases the resources assigned to the `Translator` instance it is called on and stops any further activity on it. This means that any ongoing and subsequent method calls made on the `Translator` will reject with an `AbortError`.

It makes sense to destroy `Translator` objects if they are no longer being used, as they tie up significant resources in their handling.

## Syntax

```js-nolint
destroy()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Basic `destroy()` usage

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});

// ...

translator.destroy();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
