---
title: Multimodal prompts
slug: Web/API/Prompt_API/Multimodal
page-type: guide
---

{{DefaultAPISidebar("Prompt API")}}

The [Prompt API](/en-US/docs/Web/API/Prompt_API) accepts multimodal inputs, including image and audio content. This article looks at how to handle multimodal inputs in your app.

## Specifying expected input types

To declare that you want to use image and/or audio inputs in your session, you need to include them in the `expectedInputs` option of the {{domxref("LanguageModel.create_static", "create()")}} method:

```js
return await LanguageModel.create({
  expectedInputs: [
    { type: "text", languages: ["en"] },
    { type: "image" },
    { type: "audio" },
  ],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

## Providing multimodal input data

When providing multimodal inputs — for example in a {{domxref("LanguageModel.prompt", "prompt()")}}, {{domxref("LanguageModel.promptStreaming", "promptStreaming()")}}, or {{domxref("LanguageModel.append", "append()")}} call, or in the [`initialPrompts`](/en-US/docs/Web/API/LanguageModel/create_static#initialprompts) option of a `create()` call — you need to specify the correct data `type` in your input objects, and point to the data source in your `value` properties.

The following example passes three `user` inputs into a `prompt()` call, one of each type — `text`, `image`, and `audio`.

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

## What data types are accepted?

The Prompt API accepts several different formats for audio and image data:

- Audio:
  - {{domxref("AudioBuffer")}}
  - {{domxref("ArrayBufferView")}}
  - {{jsxref("ArrayBuffer")}}
  - {{domxref("Blob")}}
- Image:
  - {{domxref("HTMLImageElement")}}
  - {{domxref("SVGImageElement")}}
  - {{domxref("HTMLVideoElement")}} (uses the frame at the current `<video>` position)
  - {{domxref("HTMLCanvasElement")}}
  - {{domxref("ImageBitmap")}}
  - {{domxref("OffscreenCanvas")}}
  - {{domxref("VideoFrame")}}
  - {{domxref("Blob")}}
  - {{domxref("ImageData")}}

## Complete example

Let's look at a multimodal example, which allows you to select a local image file and have the API describe it for you.

The overall app structure is very similar to examples in previous guides. We won't walk through all the code exhaustively; instead, we'll just explain the most relevant parts. To check out the complete codebase in more detail, press the "Play" button in the [rendered live output](#result) to open the full code in MDN Playground.

### HTML

The file to describe can be chosen using an [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) element. The API's image description is output to a {{htmlelement("p")}} element. We also include an {{htmlelement("img")}} element to display the chosen image.

```html live-sample___multimodal
<h1>Prompt API demo</h1>
<p>
  This demo loads an image from your local filesystem, and then uses the Prompt
  API to describe it. First released in Chrome 148.
</p>

<h2>Input</h2>

<section>
  <form>
    <div>
      <label for="url">Choose image from your local files:</label>
      <input type="file" id="inputElem" accept="image/*" />
    </div>
    <button type="submit" id="submit">Submit query</button
    ><button type="button" id="abort">Abort query</button>
  </form>
  <img />
</section>

<h2>Output</h2>

<p class="prompt-output"></p>
```

```css hidden live-sample___multimodal
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

section {
  display: flex;
  gap: 10px;
}

form {
  flex: 1;
}

img {
  display: block;
  flex: 1;
  max-width: 300px;
  border: 1px solid #999;
}

form div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

input,
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

### JavaScript

We create a `session` variable to hold our session. Because using the API requires [transient activation](/en-US/docs/Glossary/Transient_activation), we populate `session` inside a `focus` event handler on the `<input>` element. When the user focuses the `<input>`, we first check whether the API is supported; if not, we print a non-support message and `return` early. Next, we check whether `session` already has a value assigned (we don't want to create a new session each time). If not, we run the `init()` function, which generates a `LanguageModel` instance using the custom `getSession()` function.

Provided generation is successful, we assign the resulting `LanguageModel` instance to the `session` variable, print a success message to the output `<p>`, and enable the submit `<button>` (now the session is available, we can start prompting it).

```js hidden live-sample___multimodal
const form = document.querySelector("form");
const inputElem = document.querySelector("input");
const submitBtn = document.querySelector("#submit");
const abortBtn = document.querySelector("#abort");
abortBtn.disabled = true;
submitBtn.disabled = true;
const promptOutput = document.querySelector(".prompt-output");
const imgElem = document.querySelector("img");
```

```js live-sample___multimodal
let session;
inputElem.addEventListener("focus", () => {
  if (!("LanguageModel" in window)) {
    promptOutput.innerHTML = `<span class="error">Your browser doesn't support the Prompt API!</span>`;
    return;
  }

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

The `getSession()` function works the same as in other examples ([`getSession()` is explained here](/en-US/docs/Web/API/Prompt_API/Using#complete_example:~:text=Now%20we%20define%20the%20getSession%28%29%20function)), except that we include `image` in our `expectedInputs` option as well as `text`:

```js
return await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});
```

When the `<form>` is submitted (via the submit `<button>`), we run the `handleSubmission()` function to handle the prompt functionality:

```js live-sample___multimodal
form.addEventListener("submit", handleSubmission);
```

The `handleSubmission()` function first checks whether a file is chosen in the `<input type="file">` picker. If not, we print a suitable error to the output `<p>` and then `return`. At the end of the function body, we set the `<img>` element's `src` attribute to an object URL created from the file selected in the file picker. Above that, we add two event listeners to the `<img>`:

- If an `error` event fires on the `<img>`, we we print a suitable error to the output `<p>` and then `return`.
- If a `load` event fires on the `<img>`, we start our usual flow to prompt the language model and retrieve its output ([see explanation](/en-US/docs/Web/API/Prompt_API/Using#complete_example:~:text=Next%2C%20inside%20a%20try%20block%2C%20we)). The main difference is that in the `prompt()` call inputs, we first ask the API to describe the image, and then pass it a reference to the `<img>` element itself.

```js live-sample___multimodal
function handleSubmission(e) {
  e.preventDefault();

  const file = inputElem.files[0];
  if (!file) {
    promptOutput.innerHTML = `<span class="error">No file selected!</span>`;
    return;
  }

  imgElem.addEventListener("error", () => {
    promptOutput.innerHTML = `<span class="error">Image not loaded!</span>`;
    return;
  });

  imgElem.addEventListener("load", async () => {
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
            content: [
              { type: "text", value: "Please describe the following image:" },
              { type: "image", value: imgElem },
            ],
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
  });

  imgElem.src = URL.createObjectURL(file);
}
```

```js hidden live-sample___multimodal
async function getSession() {
  const availability = await LanguageModel.availability({
    expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  if (availability === "unavailable") {
    promptOutput.textContent = "Language model not available.";
    return undefined;
  } else if (availability === "available") {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
      expectedOutputs: [{ type: "text", languages: ["en"] }],
    });
  } else {
    return await LanguageModel.create({
      expectedInputs: [{ type: "text", languages: ["en"] }, { type: "image" }],
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

{{EmbedLiveSample("multimodal", , "630px", , , , "language-model", "allow-forms")}}

Try selecting an image using the file picker then pressing the Submit `<button>`. You should see the image loaded in the UI, and the API's description of the image appear in the output `<p>`.

## See also

- [MediaRecorder + Audio Prompt API demo](https://chrome.dev/web-ai-demos/mediarecorder-audio-prompt/) on chrome.dev (2026)
- [Prompt API with image input demo](https://chrome.dev/web-ai-demos/canvas-image-prompt/) on chrome.dev (2026)
