---
title: Using the Translator and Language Detector APIs
slug: Web/API/Translator_and_Language_Detector_APIs/Using
page-type: guide
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}

The [Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) provide asynchronous ({{jsxref("Promise")}}-based) mechanisms for a website to detect languages and translate text via the browser's own internal AI model. This is useful and efficient because the browser handles the service, rather than the developer having to rely on the user downloading AI models, or host or pay for a cloud-based translation service.
This article explains how to use these APIs.

## Detecting a language

All of the language detection functionality is accessed through the {{domxref("LanguageDetector")}} interface.

The first step in getting the AI model to detect a language is to create a `LanguageDetector` object instance. This is done using the {{domxref("LanguageDetector.create_static", "LanguageDetector.create()")}} static method, which takes an options object as an argument:

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

The {{domxref("LanguageDetector.expectedInputLanguages", "expectedInputLanguages")}} property specifies the languages you are expecting to feed into the detector, to help improve the accuracy of the language detection.

> [!NOTE]
> Different implementations will likely support different languages.

When you've created a `LanguageDetector` instance, you can use it to detect a language by calling the {{domxref("LanguageDetector.detect()")}} instance method on it, passing it the text to check as an argument.

```js
const results = await detector.detect(myTextString);
```

This method returns an array of objects representing the detected potential language matches.
Each one contains:

- A string containing the [BCP 47 language tag](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) representing the detected language.
- A number between 0 and 1 representing a confidence score for that match.

So for example:

```js
results.forEach((result) => {
  console.log(`${result.detectedLanguage}: ${result.confidence}`);
});

// Results in logs like this:
// la: 0.8359838724136353
// es: 0.017705978825688362
// sv: 0.012977192178368568
// en: 0.011148443445563316
// und: 0.0003214875760022551
```

> [!NOTE]
> The last array element always represents a confidence score for the `und` language — this is an abbreviation of "undetermined", and represents the probability that the text is not written in a language the model knows.

## Creating a translation

Translation follows a very similar pattern to language detection. A {{domxref("Translator")}} object instance is created using the {{domxref("Translator.create_static", "Translator.create()")}} static method, which takes an options object that must contain at least a {{domxref("Translator.sourceLanguage", "sourceLanguage")}} and {{domxref("Translator.targetLanguage", "targetLanguage")}}:

```js
const translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

The translation is then created by calling the {{domxref("Translator.translate()")}} instance method, which is passed the text string to translate as an argument:

```js
const translation = await translator.translate(myTextString);
```

This returns a string containing the translation.

There is also a streaming version of the `translate()` method available — {{domxref("Translator.translateStreaming()")}} — that allows you to return the translation as a {{domxref("ReadableStream")}}. This can be useful when translating very large bodies of text:

```js
const stream = translator.translateStreaming(myTextString);
let translation = "";

for await (const chunk of stream) {
  translation += chunk;
}

console.log("Stream complete");
console.log(translation);
```

## Checking configuration support

Before creating a `LanguageDetector` or `Translator` object, you can check whether your desired language configuration is supported by the current browser using the {{domxref("LanguageDetector.availability_static", "LanguageDetector.availability()")}} and {{domxref("Translator.availability_static", "Translator.availability()")}} static methods. For example:

```js
const detectorAvailability = await LanguageDetector.availability({
  expectedInputLanguages: ["en-US", "ja"],
});

const translatorAvailability = await Translator.availability({
  sourceLanguage: "en",
  targetLanguage: "ja",
});
```

These methods return an enumerated value indicating whether support is, or will be available for the specified set of options:

- `downloadable` means that the implementation supports the requested options, but needs to download a model or some fine-tuning data.
- `downloading` means that the implementation supports the requested options, but needs to finish an ongoing download.
- `available` means that the implementation supports the requested options without requiring any new downloads.
- `unavailable` means that the implementation doesn't support the requested options.

If a download is required, it will be started automatically by the browser once a `LanguageDetector` or `Translator` instance is created using the relevant `create()` method. You can track download progress automatically using a [monitor](#monitoring_download_progress).

## Cancelling operations and destroying instances

You can cancel a pending detection or translation operation using an {{domxref("AbortController")}}, with the associated {{domxref("AbortSignal")}} being included inside the method options object as a `signal` property value. For example, aborting a `Translator.create()` operation would look like this:

```js
const controller = new AbortController();

const translator = await Translator.create({
  sourceLanguage: detectedLanguage,
  targetLanguage: formData.get("translateLanguage"),
  signal: controller.signal,
});

// ...

controller.abort();
```

Once a `Translator` or `LanguageDetector` instance has been created, you can destroy it when it is finished with using the {{domxref("Translator.destroy()")}}/{{domxref("LanguageDetector.destroy()")}} methods:

```js
translator.destroy();
detector.destroy();
```

It makes sense to destroy these objects if they are no longer going to be used, as they tie up significant resources in their handling.

## Monitoring download progress

If the AI model for a particular detection or translation is downloading (`availability()` returns `downloadable` and `downloading`), it is helpful to provide the user with feedback to tell them how long they need to wait before the operation completes.

The `Translator` and `LanguageDetector` `create()` methods can accept a `monitor` property, the value of which is a callback function that takes a {{domxref("CreateMonitor")}} instance as an argument. `CreateMonitor` has a {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} event available, which fires when progress is made on downloading the AI model.

You can use this event to expose loading progress data:

```js
translator = await Translator.create({
  sourceLanguage: "en",
  targetLanguage: "ja",
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", (e) => {
      console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
    });
  },
});
```

If the specified languages are not supported, a download will not be initiated, and a `NotSupportedError` {{domxref("DOMException")}} will be thrown.

## Usage quotas

Some implementations have an input quota that governs how many operations a website can request in a given period. The total quota can be accessed via the {{domxref("Translator.inputQuota")}}/{{domxref("LanguageDetector.inputQuota")}} properties, while the quota usage for a particular translation or language detection can be returned using the {{domxref("Translator.measureInputUsage()")}}/{{domxref("LanguageDetector.measureInputUsage()")}} methods:

For example, the below snippet returns the total input quota via `Translator.inputQuota` and the input quota usage for a translating a particular text string via `Translator.measureInputUsage()`.

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

If you try to run a language detection or translation operation that exceeds the available quota, a `QuotaExceededError` {{domxref("DOMException")}} will be thrown.

## Complete example

Let's look at a complete example that demonstrates the Translator and Language Detector APIs in action.

### HTML

In our markup, we first define an input {{htmlelement("form")}} that allows the user to set the text to translate, and language to translate into. This includes a {{htmlelement("textarea")}} for entering the text itself, an {{htmlelement("output")}} element to display the detected language, and a {{htmlelement("select")}} element for choosing a translation language.

```html live-sample___translator-example
<h2>Input</h2>

<form>
  <div>
    <label for="translate-text">Enter text to translate:</label>
    <textarea id="translate-text" name="translateText" rows="6"></textarea>
    <output class="detected-language">Detected language: </output>
  </div>
  <div>
    <label for="translate-language">Choose translation language:</label>
    <select id="translate-language" name="translateLanguage">
      <option value="en" selected>English (en)</option>
      <option value="fr">French (fr)</option>
      <option value="de">German (de)</option>
      <option value="it">Italian (it)</option>
      <option value="zh">Mandarin Chinese (zh)</option>
      <option value="zh-Hant">Taiwanese Mandarin (zh-Hant)</option>
      <option value="ja">Japanese (ja)</option>
      <option value="pt">Portuguese (pt)</option>
      <option value="ru">Russian (ru)</option>
      <option value="es">Spanish (es)</option>
      <option value="tr">Turkish (tr)</option>
      <option value="hi">Hindi (hi)</option>
      <option value="vi">Vietnamese (vi)</option>
      <option value="bn">Bengali (bn)</option>
    </select>
  </div>
  <button type="submit">Translate</button>
</form>
```

The second half of our markup includes a {{htmlelement("p")}} element to display the generated translation.

```html live-sample___translator-example
<h2>Translation output</h2>

<p class="translate-output"></p>
```

```css hidden live-sample___translator-example
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  max-width: 600px;
  margin: 0 auto;
}

form div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

select,
textarea,
.translate-output {
  padding: 5px;
}

.translate-output {
  min-height: 150px;
  border: 1px solid black;
  width: 100%;
  display: block;
}

.error {
  color: red;
}
```

Note that we won't show the CSS for this example, as none of it is relevant to understanding the Translator and Language Detector APIs.

### JavaScript

In our script, we start off by grabbing references to the `<form>`, `<textarea>`, submit `<button>`, translation output `<p>`, and language detection `<output>` elements. We also declare a variable called `detectedLanguage` to contain results of language detection operations.

```js live-sample___translator-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const translateOutput = document.querySelector(".translate-output");
const detectedLanguageOutput = document.querySelector(".detected-language");
let detectedLanguage = "";
```

Next, we use the {{domxref("EventTarget.addEventListener()")}} method to listen to two events:

- `submit` events on the `<form>` element; when the form is submitted, the `handleTranslation()` function is called.
- `input` events on the `<textarea>` element; when the current `<textarea>` value is changed, the `detectLanguage()` function is called.

```js live-sample___translator-example
form.addEventListener("submit", handleTranslation);
textarea.addEventListener("input", detectLanguage);
```

The `detectLanguage()` function, defined next, first checks whether the `<textarea>` element's value is greater than 20 characters. If so, we carry on with the language detection. If not, we disable the submit button and display a message in the `<output>` element's {{domxref("Node.textContent", "textContent")}} saying that the text is too short to detect the language. We do this because language detection generally doesn't work well on single words and very short phrases. If you commonly work with short text, test carefully with your priority languages and return the result as unknown when the confidence is too low.

When detecting the language of the entered text, we create a `LanguageDetector` instance using the {{domxref("LanguageDetector.create_static", "create()")}} method, which includes a `monitor` to log download progress if the model takes a while to download. We then detect the language using the {{domxref("LanguageDetector.detect", "detect()")}} method, passing it the `<textarea>` value. When the results are returned, we write the language and confidence of the top result into the `<output>` element. In more complex apps, you might want to report multiple results and possibly let the user choose what language it is, but this will do for the demo.

Finally, we set the submit button to not be disabled, so the form can be submitted to start the translation.

```js live-sample___translator-example
async function detectLanguage() {
  if (textarea.value.length > 20) {
    const detector = await LanguageDetector.create({
      monitor(monitor) {
        monitor.addEventListener("downloadprogress", (e) => {
          console.log(`Downloaded ${e.loaded * 100}%`);
        });
      },
    });

    const results = await detector.detect(textarea.value);
    detectedLanguageOutput.textContent = `Detected language: ${
      results[0].detectedLanguage
    }. Confidence: ${results[0].confidence.toFixed(4)}`;
    detectedLanguage = results[0].detectedLanguage;

    submitBtn.disabled = false;
  } else {
    detectedLanguageOutput.textContent = `Text too short to accurately detect language.`;
    detectedLanguage = "";

    submitBtn.disabled = true;
  }
}
```

Now we define the `handleTranslation()` function. After preventing the form's default submission, we create a new {{domxref("FormData")}} object instance containing our `<form>` data name/value pairs. We then run a data validation test, checking whether the detected `<textarea>` content language is the same as the language chosen to translate into (`translateLanguage`). If it is, we print an error message inside the `<p>` with class `translate-output`.

```js live-sample___translator-example
async function handleTranslation(e) {
  e.preventDefault();

  const formData = new FormData(form);

  if (formData.get("translateLanguage") === detectedLanguage) {
    translateOutput.innerHTML = `<span class="error">Input language and translation language are the same.</span>`;
    return;
  }
  translateOutput.innerHTML = "";
```

If the test passes, we open a [`try { ... }`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block. We start by checking the availability of the model for translating between the detected input and chosen output languages using the {{domxref("Translator.availability_static", "availability()")}} method:

- If it returns `unavailable`, we print an appropriate error message inside the `<p>` with class `translate-output`.
- If it returns `available`, we create a translator using the {{domxref("Translator.create_static", "create()")}} method, passing it the detected input and chosen output languages. The required AI model is available, so we can use it immediately.
- If it returns a different value (that is, `downloadable` or `downloading`), we run the same `create()` method call, but this time we include a `monitor` that prints out the percentage of the model downloaded to the `translate-output` `<p>` each time the {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} event fires.

```js live-sample___translator-example
  try {
    const availability = await Translator.availability({
      sourceLanguage: detectedLanguage,
      targetLanguage: formData.get("translateLanguage"),
    });
    let translator;

    if (availability === "unavailable") {
      translateOutput.innerHTML = `<span class="error">Translation not available; try a different language combination.</span>`;
      return;
    } else if (availability === "available") {
      translator = await Translator.create({
        sourceLanguage: detectedLanguage,
        targetLanguage: formData.get("translateLanguage"),
      });
    } else {
      translator = await Translator.create({
        sourceLanguage: detectedLanguage,
        targetLanguage: formData.get("translateLanguage"),
        monitor(monitor) {
          monitor.addEventListener("downloadprogress", (e) => {
            translateOutput.textContent = `Downloaded ${Math.floor(
              e.loaded * 100
            )}%`;
          });
        },
      });
    }
```

Next, we set the output `<p>` content to a pending message and disable the submit button before calling {{domxref("Translator.translate()")}} to perform the actual translation, passing it the `<textarea>` value. Once the translation is done, we display it inside the output `<p>` before making the submit button not disabled again.

```js live-sample___translator-example
translateOutput.textContent = "...generating translation...";
submitBtn.disabled = true;

const translation = await translator.translate(formData.get("translateText"));

translateOutput.textContent = translation;
submitBtn.disabled = false;
```

Finally, we include the `try` block's counterpart `catch() { ... }` block. If the `try` content throws any kind of exception, we display it inside the output `<p>`.

```js live-sample___translator-example
  } catch (e) {
    translateOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

### Result

The rendered example looks like this:

{{EmbedLiveSample("translator-example", , "750px", , , , "translator; language-detector", "allow-forms")}}

Try typing a body of text into the `<textarea>`, and note how the detected language and confidence are only reported when the number of characters becomes greater than 20. Choose a translation language different to your input text, then press the submit button to generate an AI-generated translation.

Some of the translation language choices may not be available in your browser, even if it does support the APIs.
