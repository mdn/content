---
title: "Translator: availability() static method"
short-title: availability()
slug: Web/API/Translator/availability_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.Translator.availability_static
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

The **`availability()`** static method of the {{domxref("Translator")}} interface returns an enumerated value that indicates the availability of the AI model for the given `Translator` configuration.

## Syntax

```js-nolint
Translator.availability(options)
```

### Parameters

- `options`

  - : An object specifying configuration options for the `Translator`. Possible values include:

    - `sourceLanguage`
      - : A string specifying the language of the input text to be translated, which should be a valid [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (as specified in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)).
    - `targetLanguage`
      - : A string specifying the language that the input text will be translated into, which should be valid BCP 47 language tag.

### Return value

A {{jsxref("Promise")}} that fulfills with an enumerated value indicating whether support is available (or will be available) for a given `Translator` configuration, or `null` if support could not be determined.

Possible values include:

- `available`
  - : The browser supports the given configuration and it can be used immediately.
- `downloadable`
  - : The browser supports the given configuration, but it first needs to download an AI model, or some fune-tuning data for the model.
- `downloading`
  - : The browser supports the given configuration, but it has to finish an ongoing download before it can proceed.
- `unavailable`
  - : The browser does not support the given configuration. This value is also returned if the specified `sourceLanguage` and `targetLanguage` are the same.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the page's {{domxref("Document")}} is not yet active.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if initialization of the AI model failed for any reason.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the `availability()` call failed for any other reason, or a reason the user agent did not wish to disclose.

If usage of the method is blocked by a {{httpheader('Permissions-Policy/translator','translator')}} {{httpheader("Permissions-Policy")}}, the promise rejects with a value of `unavailable`.

## Examples

### Basic `availability()` usage

In the following snippet, we start by checking the availability of the model for translating between two languages using the `availability()` method:

- If it returns `unavailable`, we print an appropriate error message to the console.
- If it returns `available`, we create a translator using the {{domxref("Translator.create_static", "create()")}} method, passing it the source and target languages. The required AI model is available, so we can use it immediately.
- If it returns a different value (that is, `downloadable` or `downloading`), we run the same `create()` method call, but this time we include a `monitor` that logs the percentage of the model downloaded each time the {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} event fires.

```js
async function getTranslator(languages) {
  const availability = await Translator.availability(languages);

  if (availability === "unavailable") {
    console.log(
      `Translation not supported; try a different language combination.`,
    );
    return undefined;
  } else if (availability === "available") {
    return await Translator.create(languages);
  }
  return await Translator.create({
    ...languages,
    monitor: (monitor) => {
      monitor.addEventListener("downloadprogress", (e) => {
        console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
      });
    },
  });
}

const translator = await getTranslator({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

### Detecting language support

```js
async function langSupport(source, target) {
  const availability = await Translator.availability({
    sourceLanguage: source,
    targetLanguage: target,
  });
  return availability;
}

await langSupport("en", "fr");
await langSupport("en", "pt");
await langSupport("en", "zh");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
