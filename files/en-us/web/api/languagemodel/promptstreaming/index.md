---
title: "LanguageModel: promptStreaming() method"
short-title: promptStreaming()
slug: Web/API/LanguageModel/promptStreaming
page-type: web-api-instance-method
browser-compat: api.LanguageModel.promptStreaming
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`promptStreaming()`** method of the {{domxref("LanguageModel")}} interface sends input to the language model and returns a {{domxref("ReadableStream")}} that delivers the model's response incrementally as it is generated.

This is useful for displaying responses to users in real time, for long outputs, or for any scenario where perceived latency should be minimized. Consume the stream using `for await...of` or by attaching a reader via {{domxref("ReadableStream.getReader()")}}.

## Syntax

```js-nolint
promptStreaming(input)
promptStreaming(input, options)
```

### Parameters

- `input`
  - : The content to prompt the model with. This is either:
    - A string — Shorthand for a single textual message.
    - An array of objects, each representing a single message in a conversation with a language model.
      Objects may have the following properties:
      - `role`
        - : A string indicating the point of view the message is phrased from. Must be one of:
          - `"system"`
            - : A system-level instruction that guides the model's overall behavior. This must be the first instruction passed to the model.
          - `"user"`
            - : A message from the user, which the API should respond to.
          - `"assistant"`
            - : Inputs that come from the point of view of the AI assistant, which mainly serve to provide context/history, and further shape how the model responds.
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

A {{domxref("ReadableStream")}} of {{jsxref("String")}} chunks. Each chunk represents a piece of the model's response as it is generated. The stream closes when generation completes.

### Exceptions

Errors are surfaced as stream errors rather than as rejected promises. Consumers should handle errors using a stream's standard error-handling mechanisms.

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

The `promptStreaming()` method adds the provided input to the context window and generates a response. The entire response is receives incrementally as a {{domxref("ReadableStream")}}.

To receive the response as one complete string, use {{domxref("LanguageModel.prompt()")}} instead. To add content to the context window without generating a response, use {{domxref("LanguageModel.append()")}}.

Each call to `promptStreaming()` adds to the session's context. To branch from a given state without affecting the original session, call {{domxref("LanguageModel.clone()")}}.

## Examples

### Streaming a response to the page

This exaxmple writes out chunks from a `promptStreaming()` call's {{domxref("ReadableStream")}} as they arrive.

```js
const session = await LanguageModel.create();
const output = document.querySelector("#output");

const stream = session.promptStreaming("Write a short poem about the ocean.");

for await (const chunk of stream) {
  output.textContent += chunk;
}
```

### Streaming with an abort signal

This example shows how to use an {{domxref("AbortController")}} with `promptStreaming()`.

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

In this example, chunks from a {{domxref("ReadableStream")}} are collected before the whole stream is written out.

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
