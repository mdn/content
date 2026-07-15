---
title: "LanguageModel: append() method"
short-title: append()
slug: Web/API/LanguageModel/append
page-type: web-api-instance-method
browser-compat: api.LanguageModel.append
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`append()`** method of the {{domxref("LanguageModel")}} interface adds content to the session's context window without generating a model response. It returns a {{jsxref("Promise")}} that resolves when the content has been successfully loaded into context. Use this method to preload a context before asking the model a question.

A context may be a document, conversation, history, or background information. You can call the `append()` method at any point during the session's lifetime.

## Syntax

```js-nolint
append(input)
append(input, options)
```

### Parameters

- `input`
  - : The content to append to the context window. This is either:
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
  - : An object representing the options that can be passed. Properties include:
    - `signal`
      - : An {{domxref("AbortSignal")}} to cancel the append operation.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` when the content has been prefilled into the context window, or rejects with one of the following exception values on failure.

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
  - : Thrown if prefilling fails for any other reason not listed in the other exception types.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if appending `input` would cause the session's context usage to exceed the model's {{domxref("LanguageModel.contextWindow")}}.

## Examples

### Append context before prompting

This example shows how to append to a context for the user role before calling `prompt()`.
Note that we can just specify text input (`documentText`) in this case, because `user` is the default role.

```js
const documentText = "This is my important essay...";
const session = await LanguageModel.create();

// Preload the document text into context
await session.append(documentText);

// Now ask questions about the document
const summary = await session.prompt(
  "Summarize the key points of this document.",
);
console.log(summary);
```

### Appending context with an abort signal

An abort signal lets you cancel an append operation. The example below passes an {{domxref("AbortSignal")}} to the `signal` member and calls its `abort()` method after 3 seconds.

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 3000);

try {
  await session.append(
    "Here is some background context for future questions.",
    {
      signal: controller.signal,
    },
  );
  console.log("Context appended successfully.");
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Append was aborted.");
  }
}
```

### Checking context usage after appending

The code below shows how to log the number of tokens used after appending a large amount of context.

```js
const largeDocument = "This is my large body of text...";
const session = await LanguageModel.create();
await session.append(largeDocument);

console.log(
  `Context used: ${session.contextUsage} / ${session.contextWindow} tokens`,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.prompt()")}}
- {{domxref("LanguageModel.measureContextUsage()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
