---
title: "LanguageModel: prompt() method"
short-title: prompt()
slug: Web/API/LanguageModel/prompt
page-type: web-api-instance-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`prompt()`** method of the {{domxref("LanguageModel")}} interface sends input to the language model and returns a {{jsxref("Promise")}} that resolves with the model's complete response as a string.

## Syntax

```js-nolint
prompt(input)
prompt(input, options)
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

A {{jsxref("Promise")}} that resolves with a {{jsxref("String")}} containing the model's complete response.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `input` contains a message with `role: "system"`.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the prompt would cause the session's context usage to exceed {{domxref("LanguageModel.contextWindow")}}.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if the model fails to generate a response for any other reason.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was cancelled via the `signal` option.

## Description

`prompt()` is the primary method for interacting with a language model session. It prefills the context window with the provided input and generates a response. The entire response is buffered and returned as a single string when generation completes.

For long responses or streaming use cases, use {{domxref("LanguageModel.promptStreaming()")}} instead to receive the response incrementally. To add content to the context window without generating a response, use {{domxref("LanguageModel.append()")}}.

Each call to `prompt()` adds to the session's running context. To branch from a given state without affecting the original session, use {{domxref("LanguageModel.clone()")}} first.

## Examples

### Basic text prompt

```js
const session = await LanguageModel.create();
const response = await session.prompt("Summarize the water cycle in one paragraph.");
console.log(response);
```

### Multi-turn conversation

```js
const session = await LanguageModel.create();

const reply1 = await session.prompt("My name is Alex.");
console.log(reply1); // "Nice to meet you, Alex!"

const reply2 = await session.prompt("What's my name?");
console.log(reply2); // "Your name is Alex."
```

### Constrained JSON output

```js
const session = await LanguageModel.create();
const raw = await session.prompt('Name three planets in our solar system.', {
  responseConstraint: {
    type: "object",
    properties: {
      planets: {
        type: "array",
        items: { type: "string" },
      },
    },
    required: ["planets"],
  },
});

const { planets } = JSON.parse(raw);
console.log(planets); // ["Mercury", "Venus", "Earth"]
```

### Cancelling a prompt

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);

try {
  const response = await session.prompt("Write a very long story.", {
    signal: controller.signal,
  });
  console.log(response);
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Prompt was cancelled.");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.promptStreaming()")}}
- {{domxref("LanguageModel.append()")}}
- {{domxref("LanguageModelPromptOptions")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
