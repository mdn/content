---
title: LanguageDetector
slug: Web/API/LanguageDetector
page-type: web-api-interface
status:
  - experimental
browser-compat: api.LanguageDetector
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

The **`LanguageDetector`** interface of the {{domxref("Translator and Language Detector APIs", "Translator and Language Detector APIs", "", "nocode")}} contains all the language detection functionality, including checking AI model availability, creating a new `LanguageDetector` instance, using it to detect a language, and more.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("LanguageDetector.inputQuota", "inputQuota")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The input quota available to the browser for detecting languages.
- {{domxref("LanguageDetector.expectedInputLanguages", "expectedInputLanguages")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The expected languages to be detected in the input text.

## Static methods

- {{domxref("LanguageDetector.availability_static", "availability()")}} {{Experimental_Inline}}
  - : Returns an enumerated value that indicates whether the browser AI model supports a given `LanguageDetector` configuration.
- {{domxref("LanguageDetector.create_static", "create()")}} {{Experimental_Inline}}
  - : Creates a new `LanguageDetector` instance to detect languages.

## Instance methods

- {{domxref("LanguageDetector.destroy", "destroy()")}} {{Experimental_Inline}}
  - : Destroys the `LanguageDetector` instance it is called on.
- {{domxref("LanguageDetector.detect", "detect()")}} {{Experimental_Inline}}
  - : Detects the closest matching language or languages that a given text string is most likely to be written in.
- {{domxref("LanguageDetector.measureInputUsage", "measureInputUsage()")}} {{Experimental_Inline}}
  - : Reports how much input quota would be used by a language detection operation for a given text input.

## Examples

See [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using) for a complete example.

### Creating a `LanguageDetector` instance

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

> [!NOTE]
> Different implementations will likely support different languages.

### Detecting languages

```js
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
