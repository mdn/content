---
title: "LanguageModel: create() static method"
short-title: create()
slug: Web/API/LanguageModel/create_static
page-type: web-api-static-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`create()`** static method of the {{domxref("LanguageModel")}} interface creates a new language model session, optionally downloading the model if it is not already available.

## Syntax

```js-nolint
LanguageModel.create()
LanguageModel.create(options)
```

### Parameters

- `options` {{optional_inline}}
  - : A {{domxref("LanguageModelCreateOptions")}} object that configures the session. Options include:
    - `signal` — An {{domxref("AbortSignal")}} to cancel session creation.
    - `monitor` — A `CreateMonitorCallback` to receive download progress events.
    - `initialPrompts` — A sequence of {{domxref("LanguageModelMessage")}} objects to pre-load into the context window.
    - `expectedInputs` — A sequence of {{domxref("LanguageModelExpected")}} objects declaring the input modalities.
    - `expectedOutputs` — A sequence of {{domxref("LanguageModelExpected")}} objects declaring the output modalities.
    - `tools` — A sequence of {{domxref("LanguageModelTool")}} objects the model may invoke during generation.

### Return value

A {{jsxref("Promise")}} that resolves with a new {{domxref("LanguageModel")}} instance.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the language model is unavailable, or if the specified options (such as expected content types or languages) are not supported by the user agent.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if session initialization fails for any other reason.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the content provided in `initialPrompts` exceeds the model's context window size.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was aborted via the `signal` option.

## Description

`LanguageModel.create()` is the primary entry point for the Prompt API. It initializes a language model session backed by a browser-provided model. If the model is not yet downloaded, the browser begins the download automatically; you can monitor progress using the `monitor` option.

Once a session is created, use its instance methods — {{domxref("LanguageModel.prompt()")}}, {{domxref("LanguageModel.promptStreaming()")}}, {{domxref("LanguageModel.append()")}}, and others — to interact with the model.

Before calling `create()`, consider using {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} to check whether the desired configuration is supported.

## Examples

### Creating a basic session

```js
const session = await LanguageModel.create();
const answer = await session.prompt("What is 2 + 2?");
console.log(answer); // "4"
```

### Creating a session with a system prompt

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content: "You are a pirate. Respond in pirate speak.",
    },
  ],
});

const response = await session.prompt("Hello, how are you?");
console.log(response); // "Ahoy! I be doin' fine, matey!"
```

### Monitoring download progress

```js
const session = await LanguageModel.create({
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", ({ loaded, total }) => {
      console.log(`Model download: ${Math.round((loaded / total) * 100)}%`);
    });
  },
});
```

### Cancelling session creation

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 10_000);

try {
  const session = await LanguageModel.create({ signal: controller.signal });
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Session creation was cancelled.");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}}
- {{domxref("LanguageModelCreateOptions")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
