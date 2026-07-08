---
title: "LanguageModel: prompt() method"
short-title: prompt()
slug: Web/API/LanguageModel/prompt
page-type: web-api-instance-method
browser-compat: api.LanguageModel.prompt
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
  - : The content to prompt the model with. This is either:
    - A string — Shorthand for a single textual message.
    - An array of objects, each representing a single message in a conversation with a language model.
      Objects may have the following properties:
      - `role`
        - : A string indicating who sent the message. Must be one of:
          - `"system"`
            - : A system-level instruction that guides the model's overall behavior. This must be the first instruction passed to the model.
          - `"user"`
            - : A message from the user.
          - `"assistant"`
            - : A message from the model. Use this for few-shot examples or continued dialogue. A few-shot example is a set of input-output pairs passed as an example to an AI before asking it to complete a similar task.
      - `content`
        - : A string representing a textual prompt, or an array of objects. Each object includes the following properties:
          - `type`
            - : An enumerated value representing the type of content. This can be one of:
              - `audio`
                - : Audio content.
              - `image`
                - : Image content.
              - `text`
                - : Textual content.
              - `"tool-call"`
                - : A tool invocation issued by the model.
              - `"tool-response"`
                - : The result of a tool invocation.
          - `value`
            - : The content of the message. If the `type` is `text`, this is always a string. If the `type` is `audio` or `image`, the `value` can be one of several different object types; see [What data types are accepted?](/en-US/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
      - `prefix` {{optional_inline}}
        - : A boolean, defaulting to `false`. When `true`, the message is treated as a prefix for the model's next generated response rather than a complete turn.
- `options` {{optional_inline}}
  - : Options for creating a prompt. Properties include:
    - `responseConstraint`
      - : An object following the structure defined by [JSON Schema](https://json-schema.org/) defining the precise format the model's output should be delivered in. When provided and `omitResponseConstraintInput` is `false`, any implementation-defined constraint-description message is included in the measurement.
    - `omitResponseConstraintInput`
      - : A boolean; when `true`, the automatic constraint-description message is excluded from the measurement.
    - `signal`
      - : An {{domxref("AbortSignal")}} to cancel the operation.

### Return value

A {{jsxref("Promise")}} that resolves with a {{jsxref("String")}} containing the model's complete response.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was cancelled via the `signal` option.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if:
    - A message's `role` is `"assistant"` and its `type` is anything other than `"text"`.
    - The input or output text is in a language the user agent doesn't support for prompting.
    - A message's type is `"image"` or `"audio"` but the type was not listed in `expectedInputs`.
    - A message's role is `system` but it was not the first message passed to the context.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if the prompt fails for any other reason not listed in the other exception types.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the prompt would cause the session's context usage to exceed the model's {{domxref("LanguageModel.contextWindow")}}.

## Description

The `prompt()` method is the primary mechanism for interacting with a language model session. It adds the provided input to the context window and generates a response. The entire response is buffered and returned as a single string when generation completes.

For long responses or streaming use cases, use {{domxref("LanguageModel.promptStreaming()")}} instead to receive the response incrementally. To add content to the context window without generating a response, use {{domxref("LanguageModel.append()")}}.

Each call to `prompt()` adds to the session's context. To branch from a given state without affecting the original session, call {{domxref("LanguageModel.clone()")}}.

## Examples

### Basic text prompt

This example shows basic `prompt()` usage with a single user text input.

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

The following example shows how do pass JSON to the `responseConstraint` option to specify that you want an array returned by the call to `prompt()`.

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

The following example shows how to enable a user to cancel a prompt with a button. It does this by creating an {{domxref("AbortController")}}. Its `abort()` is callable from a button's `click` handler. For this to work, a reference to the controller's `signal` property must be passed to `prompt()`.

```js
const controller = new AbortController();

// Select your cancel button from the DOM
const cancelButton = document.querySelector("#btn-cancel");

// Trigger the abort when the user clicks the button
cancelButton.addEventListener("click", () => {
  controller.abort();
});

try {
  const response = await session.prompt("write a very long story.", {
    signal: controller.signal,
  });
  console.log(response);
} catch (err) {
  if (err.name === "AbortError") {
    console.log("prompt was cancelled.");
  } else {
    console.error("An unexpected error occurred:", err);
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
