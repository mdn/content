---
title: Adding context with initial and ongoing prompt inputs
short-title: Adding context
slug: Web/API/Prompt_API/Adding_context
page-type: guide
---

{{DefaultAPISidebar("Prompt API")}}

In our basic [Prompt API guide](/en-US/docs/Web/API/Prompt_API/Using), we covered everything you need to get up and running with the [Prompt API](/en-US/docs/Web/API/Prompt_API). However, this only really covers creating a generic AI prompt app. To give your app different personalities, get it to respond in different ways, and remember past conversations, you need to provide additional context. The Prompt API has a few different mechanisms to allow you to do this, which are covered in this article.

## Prompt input syntax

When {{domxref("LanguageModel.prompt()")}} is called, it takes an `input` parameter containing the inputs to respond to:

```js
const response = await session.prompt(inputElem.value);
```

The previous `prompt()` call only receives a single string as a parameter. This is a shorthand form, available for the common situation where you only want to pass the model a single user text prompt (note that this form cannot be used in the [`initialPrompts`](/en-US/docs/Web/API/LanguageModel/create_static#initialprompts) option of a `create()` call). You can expand this to explicitly declare the `role` of the `input` object:

```js
const response = await session.prompt([
  {
    role: "user",
    content: inputElem.value,
  },
]);
```

The three available `role` types are:

- `user`
  - : Inputs that come from the `user`, which the API should respond to.
- `assistant`
  - : Inputs that come from the AI assistant, which mainly serve to provide context/history.
- `system`
  - : Global inputs from the overall system that give the model instructions on how to respond. If a `system` input is included, it must come first in the provided inputs, otherwise an exception is thrown. As a result, `system` inputs are usually only included as [initial prompts](#providing_initial_prompts_during_session_creation).

### Multiple inputs

You can provide multiple inputs in the array, for example:

```js
const response = await session.prompt([
  {
    role: "user",
    content: "The following is my favourite color. Do you like it?",
  },
  {
    role: "user",
    content: inputElem.value,
  },
]);
```

This is useful because you can provide extra context to help the model build a response along with the actual input taken from the page, which might only be one word.

### Specifying input type

By default, the `input` type is `text`. To explicitly declare the `type`, you can further expand the previous form to the full longhand equivalent, which looks like this:

```js
const response = await session.prompt([
  {
    role: "user",
    content: [
      {
        type: "text",
        value: inputElem.value,
      },
    ],
  },
]);
```

You don't need this form unless you are providing the assistant with `image` and/or `audio` inputs (see [multimodal prompts](/en-US/docs/Web/API/Prompt_API/Multimodal)).

```js
const response = await session.prompt([
  {
    role: "user",
    content: [
      { type: "text", value: "Describe my image and audio:" },
      { type: "image", value: imgElem },
      { type: "audio", value: audioBuffer },
    ],
  },
]);
```

However, you could rewrite the previous multiple user inputs example into this form, which you might find easier to understand:

```js
const response = await session.prompt([
  {
    role: "user",
    content: [
      {
        type: "text",
        value: "The following is my favourite color. Do you like it?",
      },
      { type: "text", value: inputElem.value },
    ],
  },
]);
```

## Providing initial prompts during session creation

The {{domxref("LanguageModel.create_static", "create()")}} method can take an [`initialPrompts`](/en-US/docs/Web/API/LanguageModel/create_static#initialprompts) option that contains an array of input prompts, just like the `inputs` array passed to `prompt()` and other methods. This allows you to pass an initial set of prompts into the session as it is created, so the model immediately has some context to work with.

For example:

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content: "You are a pirate, and will respond as such.",
    },
    {
      role: "assistant",
      content: "Avast ye, pirate! I am Redbeard!.",
    },
    {
      role: "user",
      content:
        "Yarrrr, matey! Well met. My name is Slias Blacktooth, the scourge of Blackpool!",
    },
  ],
});
```

As well as telling the model what kind of personality it should have, `initialPrompts` is also useful for loading a previous saved conversation into the session after a page reload or subsequent visit to the app. See [preserving sessions across reloads](/en-US/docs/Web/API/Prompt_API/Preserving_sessions).

## Initial and multiple inputs example

Let's look at an example that makes use of intial and multiple inputs for extra context. In this example, the user is prompted to enter their name, and the API provides a whimsical review of it.

Technically, this is very similar to the [complete example](/en-US/docs/Web/API/Prompt_API/Using#complete_example) from the previous guide, the only real differences being that user input is provided via a single line text {{htmlelement("input")}} rather than a {{htmlelement("textarea")}}, and the `create()` and `prompt()` calls are different. As a result, we won't walk through the entire codebase again. To check out the codebase in more detail, see the previous article's descriptions, and press the "Play" button in the rendered live output to open the full code in MDN Playground.

```html hidden live-sample___rate-my-name
<h1>Prompt API rate my name!</h1>
<p>
  Enter your name (or someone else's name) into the input field and press the
  rate button to have AI review your name. Released in Chrome 148, but trialled
  since version 137.
</p>

<h2>Input</h2>

<form>
  <div>
    <label for="prompt-text">Enter your name:</label>
    <input id="prompt-text" name="promptText" />
  </div>
  <button type="submit" id="submit">Rate my name!</button
  ><button type="button" id="abort">Abort rating</button>
</form>

<h2>Output</h2>

<p class="prompt-output"></p>
```

```css hidden live-sample___rate-my-name live-sample___excerpt-question
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

input,
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

```js hidden live-sample___rate-my-name
const form = document.querySelector("form");
const inputElem = document.querySelector("input");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");

let session;
inputElem.addEventListener("focus", () => {
  if (!session) {
    init();
  }
});

async function init() {
  session = await getSession();
  promptOutput.textContent = `Session created.`;
  submitBtn.disabled = false;
}

form.addEventListener("submit", handleSubmission);

async function handleSubmission(e) {
  e.preventDefault();

  if (inputElem.value === "") {
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

    const response = await session.prompt(
      [
        {
          role: "user",
          content: "What do you think of my name?",
        },
        {
          role: "user",
          content: inputElem.value,
        },
      ],
      {
        signal: controller.signal,
      },
    );

    promptOutput.textContent = response;

    submitBtn.disabled = false;
    abortBtn.disabled = true;
    console.log(`${session.contextUsage}/${session.contextWindow}`);
  } catch (e) {
    promptOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}

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
      initialPrompts: [
        {
          role: "system",
          content:
            "In each case, respond with a short paragraph that pokes fun at the person's name in a sarcastic manner. Include a rating out of 10 at the end of the paragraph. The response should be cheeky, but not rude or offensive.",
        },
      ],
    });
  } else {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
      initialPrompts: [
        {
          role: "system",
          content:
            "In each case, respond with a short paragraph that pokes fun at the person's name in a sarcastic manner. Include a rating out of 10 at the end of the paragraph. The response should be cheeky, but not rude or offensive.",
        },
      ],
      monitor(monitor) {
        monitor.addEventListener("downloadprogress", (e) => {
          promptOutput.textContent = `Downloading model data ${Math.floor(e.loaded * 100)}%`;
        });
      },
    });
  }
}
```

### JavaScript

When the {{domxref("LanguageModel.create_static", "create()")}} method is called to create the session `LanguageModel` instance, we pass in an `initialPrompts` option that includes a `system` input to tell the model exactly how we want it to respond to each user prompt:

```js
return await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
  initialPrompts: [
    {
      role: "system",
      content:
        "In each case, respond with a short paragraph that pokes fun at the person's name in a sarcastic manner. Include a rating out of 10 at the end of the paragraph. The response should be cheeky, but not rude or offensive.",
    },
  ],
});
```

When we call {{domxref("LanguageModel.prompt", "prompt()")}} on our `session` object, we pass two `user` input objects to it. The first one makes it clear what the user is asking of the API, and the second provides the user's name entered into the `<input>` element for the API to review.

```js
const response = await session.prompt(
  [
    {
      role: "user",
      content: "What do you think of my name?",
    },
    {
      role: "user",
      content: inputElem.value,
    },
  ],
  {
    signal: controller.signal,
  },
);
```

### Result

{{EmbedLiveSample("rate-my-name", , "600px", , , , "language-model", "allow-forms")}}

Try entering a name into the `<input>`, then press the submit button to prompt the AI model for a whimsical review of the name.

## Adding response constraints

The `prompt()` and {{domxref("LanguageModel.promptStreaming", "promptStreaming()")}} methods both accept a [`responseConstraint`](/en-US/docs/Web/API/LanguageModel/prompt#responseconstraint) option that takes as its value a [JSON Schema](https://json-schema.org/) object defining the precise format the assistant's responses should be delivered in.

For example, a very simple schema might define a response that should contain a single boolean value:

```js
const schema = {
  type: "boolean",
};
```

To use this, you set the schema as the value of the `responseConstraint` option:

```js
const response = await session.prompt(
  [
    {
      role: "user",
      content: `Is this a color: ${inputElem.value}?`,
    },
  ],
  {
    responseConstraint: schema,
  },
);
```

In this case, we set the prompt content to "Is this a color:" followed by an `<input>` element `value`. As a result, the API will evaluate whether the user's input is a color or not, and return a value of `true` or `false`.

## Appending extra messages to the context

Inferring a response to a user question or statement can take a long time, especially when the API has to deal with large, complex text inputs, or multimodal inputs.

To reduce the perceived latency between the user's prompt and the response, it can be a good idea to start the API processing the request as soon as possible — providing useful context before the user submits their actual input — or adding further context afterwards.

The {{domxref("LanguageModel.append()")}} method exists to provide such context — it adds further inputs for the API to process, without generating a model response.

For example, in the following snippet we provide an excerpt from a fairly famous book. We use `append()` to feed the excerpt into the API session, and then ask a question about it using a `prompt()` call. The browser can get a headstart on processing the excerpt while it waits for the question to be asked.

```js
const excerpt =
  "The face of Elrond was ageless, neither old nor young, though in it was written the memory of many things both glad and sorrowful. His hair was dark as the shadows of twilight, and upon it was set a circlet of silver; his eyes were grey as a clear evening, and in them was a light like the light of stars. Venerable he seemed as a king crowned with many winters, and yet hale as a tried warrior in the fullness of his strength. He was Lord of Rivendell and mighty among both Elves and Men.";

await session.append(excerpt);

// ...

const response = await session.prompt([
  {
    role: "user",
    content: "I have a question for you, about the text that was just entered",
  },
  {
    role: "user",
    content: "What book is it taken from?",
  },
]);
```

## An append example

Let's look at a real implementation of the excerpt example mentioned previously. It works similarly to previous examples, so we won't walk through all the code exhaustively. To study the full code, press the "Play" button in the rendered live output to open the full code in MDN Playground.

```html hidden live-sample___excerpt-question
<h1>Prompt API excerpt question demo</h1>
<p>
  Enter a passage of text (such as a book excerpt) into the textarea, then enter
  a question about the text into the single-line input. Press the submit button
  to ask your question to the API. Released in Chrome 148, but trialled since
  version 137.
</p>

<h2>Input</h2>

<form>
  <div>
    <label for="excerpt-text">Enter your text passage:</label>
    <textarea id="excerpt-text" name="excerpt-text" rows="6"></textarea>
  </div>
  <div>
    <label for="question-text">Enter your question:</label>
    <input id="question-text" name="question-text" />
  </div>
  <button type="submit" id="submit">Ask question!</button
  ><button type="button" id="abort">Abort question</button>
</form>

<h2>Output</h2>

<p class="prompt-output"></p>
```

```js hidden live-sample___excerpt-question
const form = document.querySelector("form");
const textareaElem = document.querySelector("textarea");
const inputElem = document.querySelector("input");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");

let session;
textareaElem.addEventListener("focus", () => {
  if (!session) {
    init();
  }
});

async function init() {
  session = await getSession();
  promptOutput.textContent = `Session created.`;
}

textareaElem.addEventListener("change", appendExcerpt);
form.addEventListener("submit", handleSubmission);

async function appendExcerpt() {
  if (textareaElem.value === "") {
    promptOutput.innerHTML = `<span class="error">No passage entered!</span>`;
    return;
  }
  session.append(textareaElem.value);
  submitBtn.disabled = false;
}

async function handleSubmission(e) {
  e.preventDefault();

  if (inputElem.value === "") {
    promptOutput.innerHTML = `<span class="error">No question entered!</span>`;
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

    const response = await session.prompt(
      [
        {
          role: "user",
          content: "I have a question for you about the provided text.",
        },
        {
          role: "user",
          content: inputElem.value,
        },
      ],
      {
        signal: controller.signal,
      },
    );

    promptOutput.textContent = response;

    submitBtn.disabled = false;
    abortBtn.disabled = true;
    console.log(`${session.contextUsage}/${session.contextWindow}`);
  } catch (e) {
    promptOutput.innerHTML = `<span class="error">${e}</span>`;
  }
}

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

### JavaScript

In this example, the excerpt is entered into a `<textarea>`. Once the `<textarea>`'s `change` event fires (meaning the user has entered some text into it and then moved focus somewhere else), we run the `appendExcerpt()` function. This checks whether the `<textarea>` contains any text. If so, the text is passed into the session via `append()` so processing can start. At this point, we also enable the form's submit button (we previously disabled it so that a question cannot be submitted without an excerpt being entered).

```js
textareaElem.addEventListener("change", appendExcerpt);

async function appendExcerpt() {
  if (textareaElem.value === "") {
    promptOutput.innerHTML = `<span class="error">No passage entered!</span>`;
    return;
  }
  session.append(textareaElem.value);
  submitBtn.disabled = false;
}
```

The question is entered into a text `<input>`. Once the `<form>` containing the input is submitted (the `submit` event is fired), we run the `handleSubmission()` function. The most significant part of the function body is the `prompt()` call. We pass two `user` inputs into it — one stating that the question will be about the provided text (passed earlier via the `append()` call), and one containing the actual question taken from the `<input>` element's `value`.

```js
form.addEventListener("submit", handleSubmission);

async function handleSubmission(e) {
  // ...

  const response = await session.prompt(
    [
      {
        role: "user",
        content: "I have a question for you about the provided text.",
      },
      {
        role: "user",
        content: inputElem.value,
      },
    ],
    {
      signal: controller.signal,
    },
  );

  promptOutput.textContent = response;

  // ...
}
```

### Result

{{EmbedLiveSample("excerpt-question", , "730px", , , , "language-model", "allow-forms")}}

Try entering a passage of text into the text area, and a question about the passage into the single-line input, then submitting the form.
