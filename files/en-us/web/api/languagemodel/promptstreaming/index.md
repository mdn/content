---
title: "LanguageModel: promptStreaming() method"
short-title: promptStreaming()
slug: Web/API/LanguageModel/promptStreaming
page-type: web-api-instance-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`promptStreaming()`** method of the {{domxref("LanguageModel")}} interface sends input to the language model and returns a {{domxref("ReadableStream")}} that delivers the model's response incrementally as it is generated.

This is useful for displaying responses to users in real time, for long outputs, or for any scenario where low perceived latency matters. Consume the stream using `for await...of` or by attaching a reader via {{domxref("ReadableStream.getReader()")}}.

## Syntax

```js-nolint
promptStreaming(input)
promptStreaming(input, options)
```

### Parameters

- `input`
  - : The prompt to send to the model. One of the following:
    - A string — Shorthand for a single user message. For example: `[{ role: "user", content: [{ type: "text", value: input }] }]`.
    - An array representing a single message in a conversation with a language model. Options include:
      - `role`
        - : A string indicating who sent the message. Must be one of:
          - `"system"`
            - : A system-level instruction that guides the model's overall behavior. Note that {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}}, and {{domxref("LanguageModel.append()", "append()")}} throw a `"NotSupportedError"` `DOMException` if a message with `role: "system"` is passed to them; system messages are only allowed in `initialPrompts`.
          - `"user"`
            - : A message from the user.
          - `"assistant"`
            - : A message from the model. Use this for few-shot examples or continued dialogue. A few-shot example is a set of input-output pairs passed as an example to an AI before asking it to complete a similar task.
- `options` {{optional_inline}}
  - : Options for streaming a prompt. Options include:
    - `responseConstraint`
      - : An implementation-defined object that constrains the format of the model's output. When provided and `omitResponseConstraintInput` is `false`, any implementation-defined constraint-description message is included in the measurement.
    - `omitResponseConstraintInput`
      - : A boolean; when `true`, the automatic constraint-description message is excluded from the measurement. Throws a `"TypeError"` if `true` is passed without a `responseConstraint`.
    - `signal`
      - : An {{domxref("AbortSignal")}} to cancel the operation.

### Return value

A {{domxref("ReadableStream")}} of {{jsxref("String")}} chunks. Each chunk is a piece of the model's response as it is generated. The stream closes when generation completes.

### Exceptions

Errors are surfaced as stream errors rather than as rejected promises. Consumers should handle errors using a stream's standard error-handling mechanisms.

- `AbortError` {{domxref("DOMException")}}
  - : Surfaced if the operation was cancelled via the `signal` option.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown in the following situations:
    - The `role` is `"assistant"` and `type` is anything other than `"text"`.
    - The input or output text is in a language the user agent doesn't support for prompting.
    - The content type is `"image"` or `"audio"` but the type was not listed in `expectedInputs`.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if `promptStreaming()` fails for any other reason not listed in the other exception types.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the prompt would cause the session's context usage to exceed {{domxref("LanguageModel.contextWindow")}}.

Like `prompt()`, each call to `promptStreaming()` adds to the session's running context.

## Examples

### Streaming a response to the page

This exaxmple writes out chunks from an instance of {{domxref("ReadableStream")}} as they arrive.

```js
const session = await LanguageModel.create();
const output = document.querySelector("#output");

const stream = session.promptStreaming("Write a short poem about the ocean.");

for await (const chunk of stream) {
  output.textContent += chunk;
}
```

### Streaming with an abort signal

This example shows how to use an {{domxref("AbortController")}} with prompt streaming.

```js
const controller = new AbortController();
document
  .querySelector("#stop")
  .addEventListener("click", () => controller.abort());

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

In this example, chucks from a {{domxref("ReadableStream")}} are collected before the whole stream is written out.

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
- {{domxref("ReadableStream")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
