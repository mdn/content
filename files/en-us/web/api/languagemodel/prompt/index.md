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
  - : The prompt to send to the model. One of the following:
    - A string — Shorthand for a single user message. For example: `[{ role: "user", content: [{ type: "text", value: input }] }]`.
    - An array representing a single message in a conversation with a language model. Options include:
      - `role`
        - : A string indicating who sent the message. Must be one of:
          - `"user"`
            - : A message from the user.
          - `"assistant"`
            - : A message from the model. Use this for few-shot examples or continued dialogue. A few-shot example is a set of input-output pairs passed as an example to an AI before asking it to complete a similar task.
- `options` {{optional_inline}}
  - : Options for creating a prompt. Options include:
    - `responseConstraint`
      - : An implementation-defined object that constrains the format of the model's output. When provided and `omitResponseConstraintInput` is `false`, any implementation-defined constraint-description message is included in the measurement.
    - `omitResponseConstraintInput`
      - : A boolean; when `true`, the automatic constraint-description message is excluded from the measurement. Throws a `"TypeError"` if `true` is passed without a `responseConstraint`.
    - `signal`
      - : An {{domxref("AbortSignal")}} that can be used to cancel the operation.

### Return value

A {{jsxref("Promise")}} that resolves with a {{jsxref("String")}} containing the model's complete response.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was cancelled via the `signal` option.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown in the following situations:
    - The `role` is `"assistant"` and `type` is anything other than `"text"`.
    - The input or output text is in a language the user agent doesn't support for prompting.
    - The content type is `"image"` or `"audio"` but the type was not listed in `expectedInputs`.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if the prompt fails for any other reason not listed in the other exception types.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the prompt would cause the session's context usage to exceed {{domxref("LanguageModel.contextWindow")}}.

## Description

The `prompt()` method is the primary mechanism for interacting with a language model session. It prefills the context window with the provided input and generates a response. The entire response is buffered and returned as a single string when generation completes.

For long responses or streaming use cases, use {{domxref("LanguageModel.promptStreaming()")}} instead to receive the response incrementally. To add content to the context window without generating a response, use {{domxref("LanguageModel.append()")}}.

Each call to `prompt()` adds to the session's context. To branch from a given state without affecting the original session, call {{domxref("LanguageModel.clone()")}}.

## Examples

### Basic text prompt

This example shows that a session must be created before `prompt()` may be called.

```js
const session = await LanguageModel.create();
const response = await session.prompt(
  "Summarize the water cycle in one paragraph.",
);
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
const raw = await session.prompt("Name three planets in our solar system.", {
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
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
