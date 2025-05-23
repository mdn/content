---
title: "Translator: destroy() method"
short-title: destroy()
slug: Web/API/Translator/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Translator.destroy
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

The **`destroy()`** method of the {{domxref("Translator")}} interface destroys the `Translator` instance it is called on. It makes sense to destroy these objects if they are no longer going to be used, as they tie up significant resources in their handling.

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
