---
title: Using the Summarizer API
slug: Web/API/Summarizer_API/Using
page-type: guide
---

{{DefaultAPISidebar("Summarizer API")}}

The [Summarizer API](/en-US/docs/Web/API/Summarizer_API) provides an asynchronous ({{jsxref("Promise")}}-based) mechanism for a website to feed a body of text into the browser's own internal AI model and request that it returns a summary of the text based on specified options. This article explains how to use the fundamentals of the Summarizer API.

## Creating a summarizer

All of the Summarizer API's functionality is accessed through a single interface — {{domxref("Summarizer")}}.

The first step in getting the browser AI model to output a summary is to create a `Summarizer` object instance. This is done using the {{domxref("Summarizer.create_static", "Summarizer.create()")}} static method, which takes an options object as an argument specifying options for what kind of summary you want written:

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

The {{domxref("Summarizer.sharedContext", "sharedContext")}} option provides a string that helps the AI model write a more suitable summary for the context the text is being used in, while the {{domxref("Summarizer.type", "type")}} specifies what kind of summary you want to provide, like key bullet points or a "tl;dr" summary.

We also specify the desired {{domxref("Summarizer.length", "length")}}, output {{domxref("Summarizer.format", "format")}}, {{domxref("Summarizer.expectedInputLanguages", "expectedInputLanguages")}}, and desired {{domxref("Summarizer.outputLanguage", "outputLanguage")}}. If the input and output languages are not specified, the language of the input text is auto-detected, and the output language will match the input language.

If the browser's AI model does not support the specified input or output languages, an error is thrown.

> [!NOTE]
> See the {{domxref("Summarizer.create_static", "create()")}} reference page for the full list of available options.

## Checking configuration support

Before creating a `Summarizer`, you can check whether your desired configuration is supported by the current browser using the {{domxref("Summarizer.availability_static", "Summarizer.availability()")}} static method. For example:

```js
const availability = await Summarizer.availability({
  type: "tl;dr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

This method returns an enumerated value indicating whether support is, or will be available for the specified set of options:

- `downloadable` means that the browser supports the requested options, but it first needs to download an AI model, or some fine-tuning data for the model.
- `downloading` means that the browser supports the requested options, but needs to finish an ongoing download before it can proceed.
- `available` means that the browser supports the given configuration without requiring any new downloads.
- `unavailable` means that the browser does not support the given configuration.

If a download is required, it will be started automatically by the browser once a `Summarizer` instance is created using the `create()` method. You can track download progress automatically using a [monitor](#monitoring_download_progress).

## Generating a summary

When you've determined that your desired configuration works and you've created a `Summarizer` instance, you can use it to generate a summary by calling the {{domxref("Summarizer.summarize()")}} instance method on it, passing it the text to summarize as an argument.

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

It also optionally accepts an options object as a second argument that can accept a `context` string specific to this summary, and an abort {{domxref("AbortSignal", "signal")}} allowing the summary request to be aborted (see next section).

There is a streaming version of the `summarize()` method available — {{domxref("Summarizer.summarizeStreaming()")}} — that allows you to return the summary as a {{domxref("ReadableStream")}}:

```js
const stream = summarizer.summarizeStreaming(myTextString);
let summary = "";

for await (const chunk of stream) {
  summary += chunk;
}

console.log("Stream complete");
summaryOutput.textContent = summary;
```

After a `Summarizer` instance has been created, you can remove it again using the {{domxref("Summarizer.destroy()")}} instance method. It makes sense to destroy `Summarizer` objects if they are no longer going to be used, as they tie up significant resources in their handling.

## Cancelling summarize operations

You can cancel a pending `create()`, `summarize()`, or `summarizeStreaming()` operation using an {{domxref("AbortController")}}:

```js
const controller = new AbortController();
const summary = await summarizer.summarize(myTextString, {
  signal: controller.signal,
});

// ...

controller.abort();
```

## Monitoring download progress

If the AI model for a particular summarizer is downloading (`availability()` returns `downloadable` and `downloading`), it is helpful to provide the user with feedback to tell them how long they need to wait before the operation completes.

The `Summarizer.create()` method can accept a `monitor` property, the value of which is a callback function that takes a {{domxref("CreateMonitor")}} instance as an argument. `CreateMonitor` has a {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} event available, which fires when progress is made on downloading the AI model.
You can use this event to expose loading progress data:

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
  monitor: (monitor) => {
    monitor.addEventListener("downloadprogress", (e) => {
      console.log(`Downloaded ${Math.floor(e.loaded * 100)}%`);
    });
  },
});
```

## Usage quotas

Some implementations have an input quota that governs how many operations a website can request in a given period. The total quota can be accessed via the {{domxref("Summarizer.inputQuota")}} property, while the quota usage for a particular summary operation can be returned using the {{domxref("Summarizer.measureInputUsage()")}} method:

For example, in the below snippet, we create a new `Summarizer` instance using {{domxref("Summarizer.create_static", "create()")}}, then return the total input quota via `inputQuota` and the input quota usage for a summarizing a particular text string via `measureInputUsage()`.

We then test to see if the individual input usage for that string is great than the total available quota. If so, we throw an appropriate error; it not, we commence summarizing the string using {{domxref("Summarizer.summarize", "summarize()")}}.

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
});

const totalInputQuota = summarizer.inputQuota;
const inputUsage = await summarizer.measureInputUsage(myTextString);

if (inputUsage > totalInputQuota) {
  throw new Error("Boo, insufficient quota to generate a summary.");
} else {
  console.log("Yay, quota available to generate a summary.");
  const summary = await summarizer.summarize(myTextString);
  // ...
}
```

If you try to run a summarize operation that exceeds the available quota, a `QuotaExceededError` {{domxref("DOMException")}} will be thrown.

## Complete example

Let's look at a complete example that demonstrates the Summarizer API in action.

### HTML

In our markup, we first define an input {{htmlelement("form")}} that allows the user to set the text to summarize, and configuration options. This includes a {{htmlelement("textarea")}} for entering the text to be summarized, an {{htmlelement("output")}} element to display the character count of the text set by the user, and two {{htmlelement("select")}} elements for choosing a summarizer {{domxref("Summarizer.type", "type")}} and {{domxref("Summarizer.length", "length")}}.

```html live-sample___summarizer-example
<h2>Input</h2>

<form>
  <div>
    <label for="summary-text">Enter text to summarize:</label>
    <textarea id="summary-text" name="summaryText" rows="6"></textarea>
    <output class="input-count">Input character count: </output>
  </div>
  <div>
    <label for="summary-type">Summary type:</label>
    <select id="summary-type" name="summaryType">
      <option value="headline">Headline</option>
      <option value="key-points">Key points</option>
      <option value="teaser">Teaser</option>
      <option value="tl;dr" selected>tl;dr</option>
    </select>
  </div>
  <div>
    <label for="summary-length">Summary length:</label>
    <select id="summary-length" name="summaryLength">
      <option value="short" selected>Short</option>
      <option value="medium">Medium</option>
      <option value="long">Long</option>
    </select>
  </div>
  <button type="submit">Submit</button>
</form>
```

The second half of our markup includes a {{htmlelement("p")}} element to display the generated summary, and a second {{htmlelement("output")}} element to display the summary character count.

```html live-sample___summarizer-example
<h2>Summary output</h2>

<p class="summary-output"></p>
<output class="output-count">Output summary character count: 0</output>
```

```css hidden live-sample___summarizer-example
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
.summary-output {
  padding: 5px;
}

.summary-output {
  min-height: 150px;
  border: 1px solid black;
  width: 100%;
  display: block;
}

.error {
  color: red;
}
```

Note that we won't show the CSS for this example, as none of it is relevant to understanding the Summarizer API.

### JavaScript

In our script, we start off by grabbing references to the `<form>`, `<textarea>`, submit `<button>`, summary output `<p>`, and two `<output>` elements.

```js live-sample___summarizer-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("button");

const summaryOutput = document.querySelector(".summary-output");
const inputCount = document.querySelector(".input-count");
const outputCount = document.querySelector(".output-count");
```

Next, we use the {{domxref("EventTarget.addEventListener()")}} method to listen to two sets of events:

- `submit` events on the `<form>` element; when the submit button is clicked, the `handleSubmission()` function is called.
- `input` events on the `<textarea>` element; when the current `<textarea>` value is changed, the `updateInputCount()` function is called.

```js live-sample___summarizer-example
form.addEventListener("submit", handleSubmission);
textarea.addEventListener("input", updateInputCount);
```

The `updateInputCount()` function, defined next, sets the first `<output>` element's {{domxref("Node.textContent", "textContent")}} to a string containing the length of the `<textarea>` value. We also define a counterpart `displayOutputCount()` function that does the same thing for the second `<output>` element. This isn't called until near the end of the `handleSubmission()` function, after the summary has been returned.

```js live-sample___summarizer-example
function updateInputCount() {
  inputCount.textContent = `Input character count: ${textarea.value.length}`;
}

function displayOutputCount() {
  outputCount.textContent = `Output summary character count: ${summaryOutput.textContent.length}`;
}
```

Now we define the `handleSubmission()` function itself. After preventing the default form submission, we create a new {{domxref("FormData")}} object instance containing all our `<form>` data name/value pairs. We then run some data validation tests, checking whether the `<textarea>` content (`summaryText`) is empty or too short to waste cycles on, and printing an error message inside the summary output `<p>` if so.

Provided the text passed the tests, we create a `Summarizer` object using the `create()` method, passing it a `sharedContext` string and the `type` (`summaryType`) and `length` (`summaryLength`) values selected in the form. We then set the output summary `<p>` and `<output>` to "pending" messages and disable the `<submit>` button while we run the `summarize()` operation.

After the `summary` value is successfully returned, we set it as the output summary `<p>` element's `textContent`, call `displayOutputCount()` to display the output character count in the second `<output>` element, and reenable the submit `<button>`.

```js live-sample___summarizer-example
async function handleSubmission(e) {
  e.preventDefault();
  const formData = new FormData(form);

  if (formData.get("summaryText") === "") {
    summaryOutput.innerHTML = `<span class="error">No text entered to summarize!</span>`;
    return;
  } else if (formData.get("summaryText").length < 100) {
    summaryOutput.innerHTML = `<span class="error">I'm not trying to summarize something that short!</span>`;
    return;
  } else {
    summaryOutput.innerHTML = "";
  }

  try {
    const summarizer = await Summarizer.create({
      sharedContext:
        "A general summary to help a user decide if the text is worth reading",
      type: formData.get("summaryType"),
      length: formData.get("summaryLength"),
    });

    summaryOutput.textContent = "...generating summary...";
    outputCount.textContent = "Output summary character count: -";
    submitBtn.disabled = true;

    const summary = await summarizer.summarize(formData.get("summaryText"));

    summaryOutput.textContent = summary;
    displayOutputCount();
    submitBtn.disabled = false;
  } catch (e) {
    summaryOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

The final step is to call the `updateInputCount()` function at the top level of the script, to ensure that the first `<output>` element containing the input count always displays the correct value on page load.

```js live-sample___summarizer-example
updateInputCount();
```

### Result

The rendered example looks like this:

{{EmbedLiveSample("summarizer-example", , "750px", , , , , "allow-forms")}}

Try entering a body of text into the "Input" `<textarea>` then pressing the submit button to generate an AI-generated summary. The text from your favorite Wikipedia page would be ideal. Try generating multiple summaries with different option combinations, to see how they affect the output.

## See also

- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev
