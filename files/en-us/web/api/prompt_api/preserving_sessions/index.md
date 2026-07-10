---
title: Preserving sessions across reloads
short-title: Preserving sessions
slug: Web/API/Prompt_API/Preserving_sessions
page-type: guide
---

{{DefaultAPISidebar("Prompt API")}}

One issue with the [Prompt API](/en-US/docs/Web/API/Prompt_API) is that the browser doesn't store session information across browser reloads — this is not a surprise, as the web is stateless by default, but it is an issue nonetheless. To restore session context after a reload or browser restart, you will have to implement a mechanism to save the conversation and restore it using a server- or client-side solution.

This article shows you how to implement a basic session-preserving solution using [Web Storage](/en-US/docs/Web/API/Web_Storage_API).

> [!NOTE]
> To check out the complete codebase in more detail, press the "Play" button in the [rendered live output](#result) to open the full code in MDN Playground.

## The user interface

The HTML for this example features a {{htmlelement("textarea")}} element to enter prompts into, and a {{htmlelement("p")}} to write the APIs responses into. It also features three {{htmlelement("button")}} elements — one to submit the prompt to the API, one to abort an ongoing prompt request, and one to clear the saved session history.

```html live-sample___preserve-history
<h1>Prompt API demo</h1>
<p>
  This demo stores your previous session prompt history using the Web Storage
  API, and provides an option to delete it. First released in Chrome 148.
</p>

<h2>Input</h2>

<form>
  <div>
    <label for="prompt-text">Enter prompt text:</label>
    <textarea id="prompt-text" name="promptText" rows="6"></textarea>
  </div>
  <button type="submit" id="submit">Submit query</button
  ><button type="button" id="abort">Abort query</button>
  <button type="button" id="delete-session">Delete saved prompt history</button>
</form>

<h2>Output</h2>

<p class="prompt-output"></p>
```

```css hidden live-sample___preserve-history
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

For brevity, we won't show the CSS; there is nothing significant to discuss, style-wise.

## Retrieving the prompt history

When the page first loads, we need to check whether we have any prompt history saved, and if so, load it into the session.

We start by defining a variable called `promptHistory` to store the saved hsitory:

```js hidden live-sample___preserve-history
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
const deleteBtn = document.querySelector("#delete-session");
const promptOutput = document.querySelector(".prompt-output");
abortBtn.disabled = true;
submitBtn.disabled = true;
deleteBtn.disabled = true;
```

```js live-sample___preserve-history
let promptHistory;
```

We then check whether there is a property in {{domxref("Window.localStorage", "localStorage")}} called `promptHistory`, which is the key we will store our prompt history under. If there is, we retrieve that storage item using {{domxref("Storage.getItem", "getItem()")}}, parse it into an array using {{jsxref("JSON.parse()")}}, and store it in the variable. We also enable the delete `<button>` now that there is history to delete. If there is no stored key called `promptHistory`, we set the `promptHistory` variable to an empty array.

```js live-sample___preserve-history
if (localStorage.promptHistory) {
  promptHistory = JSON.parse(localStorage.getItem("promptHistory"));
  deleteBtn.disabled = false;
} else {
  promptHistory = [];
}
```

## Adding the prompt history to the session

Next, we create a `session` variable to hold our session. Because using the API requires [transient activation](/en-US/docs/Glossary/Transient_activation), we populate `session` inside a `focus` event handler on the `<textarea>`. When the user focuses the `<textarea>`, we first check whether the API is supported; if not, we print a non-support message and `return` early. Next, we check whether `session` already has a value assigned (we don't want to create a new session each time). If not, we run the `init()` function, which generates a `LanguageModel` instance using the custom `getSession()` function. We pass `getSession()` the `promptHistory` variable from earlier to add the saved history to the session on creation.

Provided generation is successful, we assign the resulting `LanguageModel` instance to the `session` variable, print a success message to the output `<p>`, and enable the submit `<button>` (now the session is available, we can start prompting it).

```js live-sample___preserve-history
let session;
textarea.addEventListener("focus", () => {
  if (!("LanguageModel" in window)) {
    promptOutput.innerHTML = `<span class="error">Your browser doesn't support the Prompt API!</span>`;
    return;
  }

  if (!session) {
    init();
  }
});

async function init() {
  session = await getSession(promptHistory);
  promptOutput.textContent = `Session created.`;
  submitBtn.disabled = false;
}
```

Now we'll look at the `getSession()` function. The function starts by running our desired model requirements through the `availability()` method to see if it is available:

- If it returns `unavailable`, we print an appropriate error message to the output `<p>`.
- If it returns `available`, we create a session using the `create()` method, passing it several options including `initialPrompts`, which we set to our history parameter. This is what gives the session the previous prompt history as context after each page load.
- If it returns a different value (that is, `downloadable` or `downloading`), we run the same `create()` method call, but this time we include a `monitor` that prints out the percentage of the model downloaded to the output `<p>` each time the {{domxref("CreateMonitor.downloadprogress_event", "downloadprogress")}} event fires.

```js live-sample___preserve-history
async function getSession(history) {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    console.log(`Language model not available.`);
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      initialPrompts: history,
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
    });
  } else {
    return await LanguageModel.create({
      initialPrompts: history,
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

## Updating the history after each prompt

When the form is submitted, the contents of the `<textarea>` are included in a {{domxref("LanguageModel.prompt", "prompt()")}} call and the returned result is included in the output `<p>` so the user can see it.

The most significant part of this example is how we store the history for later — note how after each successful operation, we {{jsxref("Array.push", "push()")}} two objects to the `promptHistory` array, one representing the `user` prompt and one representing the `assistant` response, in the correct format for the API to interpret. We then {{jsxref("JSON.stringify", "stringify()")}} the updated `promptHistory` and store it in the `promptHistory` web storage item using {{domxref("Storage.setItem", "setItem()")}}. At this point, we also enable the delete `<button>`, as there is definitely history to delete at this point.

```js live-sample___preserve-history
form.addEventListener("submit", handleSubmission);

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

    promptHistory.push({ role: "user", content: textarea.value });
    promptHistory.push({ role: "assistant", content: response });
    localStorage.setItem("promptHistory", JSON.stringify(promptHistory));
    deleteBtn.disabled = false;
  } catch (e) {
    promptOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}
```

## Wiring up the delete button

When the delete `<button>` is clicked, we remove the `promptHistory` item from local storage using {{domxref("Storage.removeItem", "removeItem()")}}. We also reload the page using {{domxref("Location.reload()")}} as a cheap way to avoid continuity issues between the local storage and the model session.

```js live-sample___preserve-history
deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("promptHistory");
  window.location.reload();
});
```

## Result

{{EmbedLiveSample("preserve-history", , "630px", , , , "language-model", "allow-forms")}}

[EDITORIAL: THIS DOESN'T WORK WHEN EMBEDDED IN THE MDN PAGE, AS MDN CLEARS OUT SITE DATA ON LOAD. I'M IN THE PROCESS OF GETTING THIS HOSTED SOMEWHERE ELSE AND WILL UPDATE THE ARTICLE WHEN IT IS AVAILABLE]

Try submitting a prompt such as "My favorite color is red", then reload the page and try submitting "What is my favorite color?". The model should remember your previous conversation.

Now try the same thing, but press "Delete saved prompt history" in between. This time the model will not remember your favorite color.
