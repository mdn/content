---
title: Translator
slug: Web/API/Translator
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Translator
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

The **`Translator`** interface of the {{domxref("Translator and Language Detector APIs", "Translator and Language Detector APIs", "", "nocode")}} contains all the associated translation functionality, including checking AI model availability, creating a new `Translator` instance, using it to create a translation, and more.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("Translator.inputQuota", "inputQuota")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The input quota available to the browser for generating translations.
- {{domxref("Translator.sourceLanguage", "sourceLanguage")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The expected language of the input text to be translated.
- {{domxref("Translator.targetLanguage", "targetLanguage")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The language that the input text will be translated into.

## Static methods

- {{domxref("Translator.availability_static", "availability()")}} {{Experimental_Inline}}
  - : Returns an enumerated value that indicates the availability of the AI model for the given `Translator` configuration.
- {{domxref("Translator.create_static", "create()")}} {{Experimental_Inline}}
  - : Creates a new `Translator` instance from which to generate translations.

## Instance methods

- {{domxref("Translator.destroy", "destroy()")}} {{Experimental_Inline}}
  - : Destroys the `Translator` instance it is called on.
- {{domxref("Translator.measureInputUsage", "measureInputUsage()")}} {{Experimental_Inline}}
  - : Reports how much input quota would be used by a translation operation for a given text input.
- {{domxref("Translator.translate", "translate()")}} {{Experimental_Inline}}
  - : Returns a string containing a translation of the input string.
- {{domxref("Translator.translateStreaming", "translateStreaming()")}} {{Experimental_Inline}}
  - : Generates a translation of the input string as a {{domxref("ReadableStream")}}.

## Examples

See [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using) for a complete example.

### Creating a `Translator` instance

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

### Generating a translation

```js
const translation = await translator.translate(myTextString);
console.log(translation);
```

### Generating a translation stream

```js
const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
