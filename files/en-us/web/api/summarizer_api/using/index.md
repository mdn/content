---
title: Using the Summarizer API
slug: Web/API/Summarizer_API/Using
page-type: guide
---

{{DefaultAPISidebar("Summarizer API")}}

The [Summarizer API](/en-US/docs/Web/API/Summarizer_API) provides an asynchronous ({{jsxref("Promise")}}-based) mechanism for a website to feed a body of text into the browser's own internal language model and request that it returns a summary of the text based on specified options. This article explains how to use the fundamentals of the Summarizer API.

## Creating a summarizer

All of the Summarizer API's functionality is accessed through a single interface — {{domxref("Summarizer")}}.

The first step in getting the browser LLM to output a summary is to create a `Summarizer` object instance. This is done using the {{domxref("Summarizer.create()")}} static method, which takes an options object as an argument specifying options for what kind of summary you want written:

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

The {{domxref("Summarizer.sharedContext", "sharedContext")}} provides a string that helps the LLM write a more suitable summary for the context the text is being used in, while the {{domxref("Summarizer.type", "type")}} specifies what kind of summary you want to provide (key bullet points? A "tl;dr" summary?).

We also specify the desired {{domxref("Summarizer.length", "length")}}, output {{domxref("Summarizer.format", "format")}}, {{domxref("Summarizer.expectedInputLanguages", "expectedInputLanguages")}}, and desired {{domxref("Summarizer.outputLanguage", "outputLanguage")}}. If the input and output languages are not specified, the language of the input text is auto-detected, and the output language will match the input language.

If the browser's LLM does not support the specified input or output languages, an error is thrown.

> [!NOTE]
> See the {{domxref("Summarizer.create", "create()")}} reference page for the full list of available options.

Different implementations will likely support different languages.

## Checking configuration support

Before creating a `Summarizer`, you can check whether your desired configuration is supported by the current browser using the {{domxref("Summarizer.availability()")}} static method. For example:

```js
const availability = await Summarizer.availability({
  type: "tl;dr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

This method returns an emumerated value indicating whether support is, or will be available for the specified set of options. The meaning of the `available` and `unavailable` values is fairly obvious, but there are also `downloadable` and `downloading` values that mean support for the specified set of options is available to download or currently downloading, respectively.

## Generating a summary

When you've determined that your desired configuration works and you've created a `Summarizer` instance, you can use it to generate a summary by calling the {{domxref("Summarizer.summarize()")}} instance method on it, passing it the text to summarize as an argument.

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

It also optionally accepts an options object as a second argument that can accept a `context` string specific to this summary, and an abort {{domxref("AbortSignal", "signal")}} allowing the summary request to be aborted (see next section).

There is a streaming version of the `summarize()` method available — {{domxref("Summarizer.summarizeStreaming()")}} — that allows you to return the summary as a {{domxref("ReadableStream")}}:

```js
const stream = await summarizer.summarizeStreaming(myTextString);
const reader = stream.getReader();
let summary = "";

async function processText({ done, value }) {
  if (done) {
    console.log("Stream complete");
    console.log(summary);
    return;
  } else {
    summary += value;
    const result = await reader.read();
    processText(result);
  }
}

const result = await reader.read();
processText(result);
```

After a `Summarizer` instance has been created, you can remove it again using the {{domxref("Summarizer.destroy()")}} instance method.

## Cancelling summarize operations

You can cancel a pending `create()`, `summarize()`, or `summarizeStreaming()` operation using an {{domxref("AbortController")}}:

```js
const controller = new AbortController();
const summary = await summarizer.summarize(formData.get("summaryText"), {
  signal: controller.signal,
});

// ...

controller.abort();
```

EDITORIAL: I've tried this, and it doesn't seem to work. Am I missing something?

## Example

Let's look at a complete example that demonstrates the Summarizer API in action.

### HTML

In our markup, we first define an input {{htmlelement("form")}} that allows the user to set the text to summarize, and configuration options. This includes a {{htmlelement("textarea")}} for entering the text itself, an {{htmlelement("output")}} element to display the text character count, and two {{htmlelement("select")}} elements for choosing a summarizer {{domxref("Summarizer.type", "type")}} and {{domxref("Summarizer.length", "length")}}.

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

Next, we use the {{domxref("EventTarget.when()")}} method to create {{domxref("Observable")}} objects representing:

- `click` events on the `<button>` element; when the button is clicked, the `handleSubmission()` function is called (we're not doing a real form `submit`, as they are disabled in the MDN live example embeds for security purposes).
- `input` events on the `<textarea>` element; when the current `<textarea>` value is changed, the `updateInputCount()` function is called.

```js live-sample___summarizer-example
submitBtn.when("click").subscribe(handleSubmission);
textarea.when("input").subscribe(updateInputCount);
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

Now we define the `handleSubmission()` function itself. We begin by creating a new {{domxref("FormData")}} object instance containing all our `<form>` data name/value pairs. We then run some data validation tests, checking whether the `<textarea>` content (`summaryText`) is empty or too short to waste LLM cycles on, and printing an error message inside the summary output `<p>` if so.

Provided the text passed the tests, we create a `Summarizer` object using the `create()` method, passing it a `sharedContext` string and the `type` (`summaryType`) and `length` (`summaryLength`) values selected in the form. We then set the output summary `<p>` and `<output>` to "pending" messages and disable the `<submit>` button while we run the `summarize()` operation.

After the `summary` value is successfully returned, we set it as the output summary `<p>` element's `textContent`, call `displayOutputCount()` to display the output character count in the second `<output>` element, and reenable the submit `<button>`.

```js live-sample___summarizer-example
async function handleSubmission() {
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
}
```

The final step is to call the `updateInputCount()` function at the top level of the script, to ensure that the first `<output>` element containing the input count always displays the correct value on page load.

```js live-sample___summarizer-example
updateInputCount();
```

### Result

The rendered exaple looks like this:

{{EmbedLiveSample("summarizer-example", "100%", "400px")}}

Try entering a body of text into the `<textarea>` then pressing the button to generate an AI-generated summary. The text from your favourite Wikipedia page would be ideal. Try generating multiple summaries with different option combinations, to see how they affect the output.

## See also

- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev.
