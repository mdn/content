---
title: "LanguageModel: append() method"
short-title: append()
slug: Web/API/LanguageModel/append
page-type: web-api-instance-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`append()`** method of the {{domxref("LanguageModel")}} interface adds content to the session's context window without generating a model response. It returns a {{jsxref("Promise")}} that resolves when the content has been successfully loaded into context. Use this method to preload a context before asking the model a question.

A context may be a document, conversation, history or background information. Because it does not trigger generation, it is more efficient than calling `prompt()` to set the context. You can call the `append()` method at any point during the session's lifetime.

## Syntax

```js-nolint
append(input)
append(input, options)
```

### Parameters

- `input`
  - : The content to append to the context window. This is either:
    - A string — Shorthand for a single message. Sending only a string is equivalent to sending the following with a `"user"` role in the next option: `[{ type: "text", value: "Some string" }]`.
    - An array of objects, each representing a single message in a conversation with a language model.
      Objects may have the following properties:
      - `role`
        - : A string indicating who sent the message. Must be one of:
        - `"user"`
          - : A message from the user.
        - `"assistant"`
          - : A message from the model. Use this for few-shot examples or continued dialogue.
      - `content` — An object containing the text to add to the context.
        - `type`
          - : One of `"text"`, `"image"`, `"audio"`, `"tool-call"`, or `"tool-response"`.
        - `value`
          - : The actual text of the content to append.
- `options` {{optional_inline}}
  - : Represents the options that can be passed. Options include:
    - `signal`
      - : An {{domxref("AbortSignal")}} to cancel the operation. Reasons to cancel an append operation include:
        - The user cancelled the request or navigated away.
        - A newer request superseded the old one.
        - A timeout.
        - A dependent resource was destroyed.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` when the content has been prefilled into the context window, or rejects with one of the exception values on failure.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was cancelled via the `signal` option.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown in the following situations:
    - The `role` is `"assistant"` and `type` is anything other than `"text"`.
    - The input or output text is in a language the user agent doesn't support for prompting.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if prefilling fails for any other reason not listed in the other exception types.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if appending `input` would cause the session's context usage to exceed {{domxref("LanguageModel.contextWindow")}}.

## Examples

### Append context before prompting

This example shows how to append to a context for the user role before calling `prompt()`.
Note that we can just specify text input (`documentText`) in this case, because `user` is the default role.

```js
const session = await LanguageModel.create();

// Pre-load the document text into context
await session.append(documentText);

// Now ask questions about the document
const summary = await session.prompt(
  "Summarize the key points of this document.",
);
console.log(summary);
```

### Providing few-shot examples

A few-shot example is a set of user role (input) and assistant role (output) pairs passed as an example to an AI, using the `initialPrompts` property, before asking it to complete a similar task.

```js
const session = await LanguageModel.create({
  initialPrompts: [
    { role: "system", content: "Translate the user's input to French." },
    { role: "user", content: "Hello" },
    { role: "assistant", content: "Bonjour" },
    { role: "user", content: "Goodbye" },
    { role: "assistant", content: "Au revoir" },
  ],
});

const result = await session.prompt("Good morning");
console.log(result); // "Bonjour matin" or "Bonjour"
```

### Appending context with an abort signal

An abort signal lets you cancel an append message. The example below passes an {{domxref("AbortSignal")}} to the `signal` member and calls its `abort()` method after 3 seconds.

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

The code below shows how to log the percentage of tokens used after appending a large amount of context.

```js
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
