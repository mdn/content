---
title: "LanguageDetector: availability() static method"
short-title: availability()
slug: Web/API/LanguageDetector/availability_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.LanguageDetector.availability_static
---

{{APIRef("Translator and Language Detector APIs")}}{{securecontext_header}}{{SeeCompatTable}}

The **`availability()`** static method of the {{domxref("LanguageDetector")}} interface returns an enumerated value that indicates whether the browser AI model supports a given `LanguageDetector` configuration.

## Syntax

```js-nolint
LanguageDetector.availability(options)
```

### Parameters

- `options`

  - : An object specifying configuration options for the `LanguageDetector`. Possible values include:

    - `expectedInputLanguages`
      - : An array of strings specifying the expected languages of the input text to have its language detected. These should be valid [BCP 47 language tags](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) (as specified in [RFC 5646](https://datatracker.ietf.org/doc/html/rfc5646)). Defaults to `["en"]`

### Return value

A {{jsxref("Promise")}} that fulfills with an enumerated value indicating whether support is available (or will be available) for a given `LanguageDetector` configuration, or `null` if support could not be determined.

Possible values include:

- `available`
  - : The browser supports the given configuration and it can be used immediately.
- `downloadable`
  - : The browser supports the given configuration, but it first needs to download an AI model, or some fune-tuning data for the model.
- `downloading`
  - : The browser supports the given configuration, but it has to finish an ongoing download before it can proceed.
- `unavailable`
  - : The browser does not support the given configuration.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the page's {{domxref("Document")}} is not yet active.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if initialization of the AI model failed for any reason.
- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the `availability()` call failed for any other reason, or a reason the user agent did not wish to disclose.

If usage of the method is blocked by a {{httpheader('Permissions-Policy/language-detector','language-detector')}} {{httpheader("Permissions-Policy")}}, the promise rejects with a value of `unavailable`.

## Examples

### Basic `availability()` usage

In the following snippet, we start by checking the availability of the model for detecting a couple of languages using the `availability()` method:

- If it returns `unavailable`, we print an appropriate error message to the console.
- If it returns `available`, we create a language detector using the {{domxref("LanguageDetector.create_static", "create()")}} method, passing it the `expectedInputLanguages`. The required AI model is available, so we can use it immediately.
- If it returns a different value (that is, `downloadable` or `downloading`), we run the same `create()` method call, but this time we include a `monitor` that logs the percentage of the model downloaded each time the {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} event fires.

```js
async function getDetector(languages) {
  const availability = await LanguageDetector.availability({
    expectedInputLanguages: languages,
  });
  if (availability === "unavailable") {
    console.log(`Detection not supported; try a different set of languages.`);
    return undefined;
  } else if (availability === "available") {
    return await LanguageDetector.create({
      expectedInputLanguages: languages,
    });
  }
  return await LanguageDetector.create({
    expectedInputLanguages: languages,
    monitor: (monitor) => {
      monitor.addEventListener("downloadprogress", (e) => {
        console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
      });
    },
  });
}

const detector = await getDetector(["en-US", "zh"]);
```

### Detecting language support

```js
async function langSupport(language) {
  const availability = await LanguageDetector.availability({
    expectedInputLanguages: [language],
  });
  return availability;
}

await langSupport("en");
await langSupport("pt");
await langSupport("zh");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
