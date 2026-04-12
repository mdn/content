---
title: "LanguageModel: promptStreaming() method"
short-title: promptStreaming()
slug: Web/API/LanguageModel/promptStreaming
page-type: web-api-instance-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`promptStreaming()`** method of the {{domxref("LanguageModel")}} interface sends input to the language model and returns a {{domxref("ReadableStream")}} that delivers the model's response incrementally as it is generated.

## Syntax

```js-nolint
promptStreaming(input)
promptStreaming(input, options)
```

### Parameters

- `input`
  - : The prompt to send to the model. This is a `LanguageModelPrompt`, which is either:
    - A string — Shorthand for a single user message: `[{ role: "user", content: [{ type: "text", value: input }] }]`.
    - A sequence of {{domxref("LanguageModelMessage")}} objects — For multi-turn or multimodal input.
- `options` {{optional_inline}}
  - : A {{domxref("LanguageModelPromptOptions")}} object. Options include:
    - `responseConstraint` — An object constraining the format of the model's output.
    - `omitResponseConstraintInput` — A boolean; when `true`, suppresses the automatic constraint-description message.
    - `signal` — An {{domxref("AbortSignal")}} to cancel the operation.

### Return value

A {{domxref("ReadableStream")}} of {{jsxref("String")}} chunks. Each chunk is a piece of the model's response as it is generated. The stream closes when generation completes.

### Exceptions

Errors are surfaced as stream errors rather than as rejected promises. Consumers should handle errors using the stream's standard error-handling mechanisms.

- `NotSupportedError` {{domxref("DOMException")}}
  - : Surfaced if `input` contains a message with `role: "system"`.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Surfaced if the prompt would cause the session's context usage to exceed {{domxref("LanguageModel.contextWindow")}}.
- `OperationError` {{domxref("DOMException")}}
  - : Surfaced if the model fails to generate a response for any other reason.
- `AbortError` {{domxref("DOMException")}}
  - : Surfaced if the operation was cancelled via the `signal` option.

## Description

`promptStreaming()` works like {{domxref("LanguageModel.prompt()")}}, but instead of buffering the entire response, it returns a `ReadableStream` that emits text chunks as they are produced. This is useful for displaying responses to users in real time, for long outputs, or for any scenario where low perceived latency matters.

Consume the stream using `for await...of` or by attaching a reader via {{domxref("ReadableStream.getReader()")}}.

Like `prompt()`, each call to `promptStreaming()` adds to the session's running context.

## Examples

### Streaming a response to the page

```js
const session = await LanguageModel.create();
const output = document.querySelector("#output");

const stream = session.promptStreaming("Write a short poem about the ocean.");

for await (const chunk of stream) {
  output.textContent += chunk;
}
```

### Streaming with an abort signal

```js
const controller = new AbortController();
document.querySelector("#stop").addEventListener("click", () => controller.abort());

const stream = session.promptStreaming("Tell me a long story.", {
  signal: controller.signal,
});

try {
  for await (const chunk of stream) {
    console.log(chunk);
  }
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Streaming was stopped by the user.");
  }
}
```

### Collecting streamed chunks into a single string

```js
const session = await LanguageModel.create();
const stream = session.promptStreaming("Explain quantum entanglement.");
const chunks = [];

for await (const chunk of stream) {
  chunks.push(chunk);
}

const fullResponse = chunks.join("");
console.log(fullResponse);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.prompt()")}}
- {{domxref("LanguageModelPromptOptions")}}
- {{domxref("ReadableStream")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
