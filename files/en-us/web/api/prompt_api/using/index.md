---
title: Using the Prompt API
slug: Web/API/Prompt_API/Using
page-type: guide
---

{{DefaultAPISidebar("Prompt API")}}

The [Prompt API](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs) provides an asynchronous ({{jsxref("Promise")}}-based) mechanism for a website to directly prompt a language model provided by the user agent, without needing to manage implementation-specific details of the AI model being used. This is useful and efficient because sensitive data can stay on the user's device, the model is available offline, and developers can avoid the cost and latency of API calls to external services.

This article explains how to use the core fundamentals of the Prompt API.

## Creating a session

All of the AI prompting functionality is contained within the {{domxref("LanguageModel")}} interface.

The first step in prompting the AI model is to create a `LanguageModel` object instance. This is done using the {{domxref("LanguageModel.create_static", "LanguageModel.create()")}} static method, which takes an options object as an argument:

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

The browser will automatically download the corresponding model data to handle the requested language model if it is not already available, and if the browser is able to do so.

> [!NOTE]
> The `create()` method (and other methods contained within the Prompt API) require [transient activation](/en-US/docs/Glossary/Transient_activation) to invoke, as a precaution to stop apps from using language model resources without user interaction.

A `LanguageModel` object instance and the activity that occurs as a result of using its methods and properties is called a **session**. The browser stores all the prompts and responses sent to and received from the Prompt API as part of a single session, allowing the API to tailor its responses based on previous interactions and hold a conversation.

> [!NOTE]
> The browser doesn't store session information across browser reloads by default. To restore session context after a reload or browser restart, you will have to implement a mechanism to save the conversation and restore it using a server-side solution or a client-side mechanism such as [Web Storage](/en-US/docs/Web/API/Web_Storage_API). Such an example is covered in [Preserving sessions across reloads](/en-US/docs/Web/API/Prompt_API/Preserving_sessions).

The [`expectedInputs`](/en-US/docs/Web/API/LanguageModel/create_static#expectedinputs) and [`expectedOutputs`](/en-US/docs/Web/API/LanguageModel/create_static#expectedOutputs) parameters specify the types of input and output and the input/output languages you are expecting to provide to and receive from the AI prompt.

The Prompt API handles text inputs and outputs by default, but it is multimodal — you can also give it images and audio inputs, for example to ask it to describe an image or transcribe an audio file. See [Multimodal prompts](/en-US/docs/Web/API/Prompt_API/Multimodal) for more details.

The Prompt API will handle multiple languages by default, but it might not handle all languages you are expecting, so it is a good idea to explicitly specify them in case the browser needs to download extra resources.

## Prompting the model

When you've created a `LanguageModel` instance, you can start prompting the AI model by calling the {{domxref("LanguageModel.prompt()")}} instance method on it, passing it one or more input prompts as an argument. For example:

```js
const response = await session.prompt(textarea.value);
```

This method returns a {{jsxref("Promise")}} that fulfills with a string containing the AI response to your prompt.

You can pass multiple inputs into the API with different roles — for example, standard `user` prompts and instructions from the `assistant` to further shape how it responds to the `user` prompts. To get the AI to respond to your input in the style of a villanous mastermind, you might use this `prompt()` call:

```js
const response = await session.prompt([
  {
    role: "assistant",
    content: "I'm going to answer this user query like a James Bond villain",
  },
  {
    role: "user",
    content: textarea.value,
  },
]);
```

You'll learn more about these roles in the next article, [Adding context with initial and ongoing prompt inputs](/en-US/docs/Web/API/Prompt_API/Adding_context).

> [!NOTE]
> If you want to return the AI response gradually as a {{domxref("ReadableStream")}} rather than a single large string, you can use the {{domxref("LanguageModel.promptStreaming()")}} method.

## Checking configuration support

Before creating a `LanguageModel` object instance, you can check whether your desired model configuration is supported by the current browser using the {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} static method. For example:

```js
const availability = await LanguageModel.availability({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

This method's return promise fulfills with an enumerated value indicating whether support is, or will be available for the specified set of options:

- `downloadable` means that the implementation supports the requested options, but needs to download a model or some fine-tuning data.
- `downloading` means that the implementation supports the requested options, but needs to finish an ongoing download.
- `available` means that the implementation supports the requested options without requiring any new downloads.
- `unavailable` means that the implementation doesn't support the requested options.

If a download is required, it will be started automatically by the browser once a `LanguageModel` instance is created using the `create()` method. You can track download progress automatically using a monitor, which we'll cover in the next section.

> [!NOTE]
> Even though you can ask for a language model session that expects multimedia outputs, this will fail — the availability will be `unavailable`. The API currently only supports text outputs.

## Monitoring download progress

If the AI model is downloading (`availability()` returns `downloading`), it is helpful to provide the user with feedback to tell them how long they need to wait before the operation completes.

The `create()` method can accept a `monitor` property, the value of which is a callback function that takes a {{domxref("CreateMonitor")}} instance as an argument. `CreateMonitor` has a {{domxref("CreateMonitor/downloadprogress_event", "downloadprogress")}} event available, which fires when progress is made on downloading the AI model.

You can use this event to expose loading progress data:

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", (e) => {
      promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
    });
  },
});
```

If the specified languages are not supported, a download will not be initiated, and a `NotSupportedError` {{domxref("DOMException")}} will be thrown.

## The context window

Every `LanguageModel` session has a finite context window, which constrains the total number of input and output tokens it can hold at once. The {{domxref("LanguageModel.contextWindow", "contextWindow")}} property reports the session's maximum capacity, and {{domxref("LanguageModel.contextUsage", "contextUsage")}} reports how many tokens have been consumed so far.

For example, after each prompt, you can report how many tokens are left using something like this:

```js
console.log(`${session.contextUsage}/${session.contextWindow}`);
```

When a method call such as {{domxref("LanguageModel.prompt()", "prompt()")}} or {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}} would exceed the remaining number of tokens in the context window, a `QuotaExceededError` {{domxref("DOMException")}} is thrown and the {{domxref("LanguageModel.contextoverflow_event", "contextoverflow")}} event fires.

To check how many tokens a prompt operation would consume without actually sending it, use {{domxref("LanguageModel.measureContextUsage()", "measureContextUsage()")}}.

## Cloning a session

One way to get around the problem of running out of tokens is to copy your existing session using the {{domxref("LanguageModel.clone()")}} function. This creates a replica of the `LanguageModel` object instance in which the conversation up to that point and initial prompt are preserved, but the token count (`contextUsage`) is reset. You can think of the session clone as being a fork of the original conversation, with its own token allowance.

```js
const clonedSession = await session.clone();

clonedSession.prompt("Let's talk about the weather.");
```

## Cancelling operations and destroying instances

You can cancel pending `prompt()`, `clone()` and other operations using an {{domxref("AbortController")}}, with the associated {{domxref("AbortSignal")}} being included inside the method options object as a `signal` property value. For example, aborting a `LanguageModel.prompt()` operation via a button press could look like this:

```js
const controller = new AbortController();

abortBtn.addEventListener("click", () => {
  controller.abort("Query aborted by user.");
});

const response = await session.prompt(textarea.value, {
  signal: controller.signal,
});
```

After a `LanguageModel` has been created, you can release its assigned resources and stop any further activity by calling its {{domxref("LanguageModel.destroy()")}} method. You are encouraged to do this after you've finished with the object as it can consume a lot of resources.

```js
session.destroy();
```

If a `create()` call has an associated {{domxref("AbortController")}}, and you call its {{domxref("AbortController.abort()")}} method after the `create()` call has succeeded, it will have the same effect as calling `destroy()` on the resulting `LanguageModel` object.

## Complete example

Let's look at a complete basic example that demonstrates the Prompt API in action.

### HTML

In our markup, we define an input {{htmlelement("textarea")}} that allows the user to type in a prompt. We also include two {{htmlelement("button")}} elements — one to submit the prompt/query, and another to abort an ongoing query.

```html live-sample___prompt-example
<h1>Prompt API demo</h1>
<p>Released in Chrome 148, but trialled since version 137.</p>

<h2>Input</h2>
<form>
  <div>
    <label for="prompt-text">Enter prompt text:</label>
    <textarea id="prompt-text" name="promptText" rows="6"></textarea>
  </div>
  <button type="submit" id="submit">Submit query</button
  ><button type="button" id="abort">Abort query</button>
</form>
```

Next, we include a {{htmlelement("p")}} element to display the model's response to the user's prompt, plus details of any errors that are thrown.

```html live-sample___prompt-example
<h2>Output</h2>
<p class="prompt-output"></p>
```

```css hidden live-sample___prompt-example
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

textarea,
.prompt-output {
  padding: 5px;
}

.prompt-output {
  min-height: 150px;
  border: 1px solid black;
  width: 100%;
  display: block;
}

.error {
  color: red;
}

button {
  margin-right: 10px;
}
```

Note that we won't show the CSS for this example, as none of it is relevant to understanding the Prompt API.

### JavaScript

In our script, we start off by grabbing references to the `<form>`, `<textarea>`, submit `<button>`, abort `<button>`, and output `<p>`. We initially disable the submit and abort buttons, as we don't want them to be pressed before the related functionality is available.

```js live-sample___prompt-example
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");
```

Next, we create a global `session` variable to hold our session. Because using the API requires transient activation, we populate `session` inside a `focus` event handler on the `<textarea>`. When the user focuses the `<textarea>`, we check whether `session` already has a value assigned (we don't want to create a new session each time). If not, we run the `init()` function, which generates a `LanguageModel` instance using the custom `getSession()` function, which we will define later on. Provided that is successful, we assign the resulting `LanguageModel` instance to the `session` variable, print a success message to the output `<p>`, and enable the submit `<button>` (now the session is available, we can start prompting it).

```js live-sample___prompt-example
let session;
textarea.addEventListener("focus", () => {
  if (!session) {
    init();
  }
});

async function init() {
  session = await getSession();
  promptOutput.textContent = `Session created.`;
  submitBtn.disabled = false;
}
```

Next, we add a `submit` event listener to the `<form>` element; when the form is submitted, the `handleSubmission()` function is called.

```js live-sample___prompt-example
form.addEventListener("submit", handleSubmission);
```

Next, we define the `handleSubmission()` function. This first stops the form from submitting using {{domxref("Event.preventDefault()")}}, then checks whether the input `<textarea>` was empty on submission. If it was, we write an error into the output `<p>` and return out of the function. We don't want to waste our time trying to prompt the AI with an empty string.

Next, inside a `try` block, we:

- Insert a message in the output `<p>` to say that a response is being generated, and flip the `disabled` status of the two buttons. At this point, we want to allow users to abort the prompt operation that is about to start, but we don't want them trying to start another prompt until that one is finished.
- Create a new {{domxref("AbortController")}} and add a `click` event listener to the abort `<button>` so that when it is clicked, {{domxref("AbortController.abort", "abort()")}} is fired on the controller to abort the prompt operation and the `<button>` disabled states are reset.
- Invoke `prompt()` on the `session` to start the prompt, passing it the contents of the `<textarea>` as its prompt query, and an options object containing a `signal` property equal to the {{domxref("AbortController.signal", "signal")}} of the controller. This is what allows us to abort the `prompt()` operation by pressing the abort `<button>`.
- Set the output `<p>`'s `textContent` to the API's `response` when it is returned, so the user can read it.
- Reset the `disabled` state of the buttons.
- Log the remaining tokens available to the console, as `contextUsage`/`contextWindow`.

In the `try` block's `catch` counterpart, we print any errors that are thrown to the output `<p>`.

```js live-sample___prompt-example
async function handleSubmission(e) {
  e.preventDefault();

  if (textarea.value === "") {
    promptOutput.innerHTML = `<span class="error">No text entered!</span>`;
    return;
  }

  try {
    promptOutput.textContent = "...generating response...";
    submitBtn.disabled = true;
    abortBtn.disabled = false;

    const controller = new AbortController();
    abortBtn.addEventListener("click", () => {
      controller.abort("Query aborted by user.");
      submitBtn.disabled = false;
      abortBtn.disabled = true;
    });

    const response = await session.prompt(textarea.value, {
      signal: controller.signal,
    });

    promptOutput.textContent = response;

    submitBtn.disabled = false;
    abortBtn.disabled = true;
    console.log(`${session.contextUsage}/${session.contextWindow}`);
  } catch (e) {
    promptOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

Now we define the `getSession()` function used to return our session `LanguageModel`. The function starts by running our desired model requirements through the `availability()` method to see if it is available:

- If it returns `unavailable`, we print an appropriate error message to the output `<p>`.
- If it returns `available`, we create a session using the `create()` method, passing it the desired options, and return it. The required AI model is available, so we can use it immediately.
- If it returns a different value (that is, `downloadable` or `downloading`), we run the same `create()` method call, but this time we include a `monitor` that prints out the percentage of the model downloaded to the output `<p>` each time the {{domxref("CreateMonitor.downloadprogress_event", "downloadprogress")}} event fires.

```js live-sample___prompt-example
async function getSession() {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    promptOutput.textContent = "Language model not available.";
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
    });
  } else {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
      monitor(monitor) {
        monitor.addEventListener("downloadprogress", (e) => {
          promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
        });
      },
    });
  }
}
```

### Result

{{EmbedLiveSample("prompt-example", , "600px", , , , "language-model", "allow-forms")}}

Try typing a question or statement into the `<textarea>`, then press the submit button to prompt the AI model and generate a response.

## See also

- [Prompt API Playground](https://chrome.dev/web-ai-demos/prompt-api-playground/) on chrome.dev (2026)
