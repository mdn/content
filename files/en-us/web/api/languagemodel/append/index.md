---
title: "LanguageModel: append() method"
short-title: append()
slug: Web/API/LanguageModel/append
page-type: web-api-instance-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`append()`** method of the {{domxref("LanguageModel")}} interface adds content to the session's context window without generating a model response. It returns a {{jsxref("Promise")}} that resolves when the content has been successfully loaded into context.

## Syntax

```js-nolint
append(input)
append(input, options)
```

### Parameters

- `input`
  - : The content to append to the context window. This is either:
    - A string — Shorthand for a single user message: `[{ role: "user", content: [{ type: "text", value: input }] }]`.
    - A sequence representing a single message in a conversation with a language model. Options include:
      - `role` — A string indicating who sent the message. Must be one of:
          - `"system"` — A system-level instruction that guides the model's overall behavior. Note that {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreamiing()", "promptStreaming()")}}, {{domxref("LanguageModel.append()", "append()")}} throw a `"NotSupportedError"` `DOMException` if a message with `role: "system"` is passed to them; system messages are only allowed in `initialPrompts`.
          - `"user"` — A message from the user.
          - `"assistant"` — A message from the model (used for few-shot examples or continued dialogue).
- `options` {{optional_inline}}
  - : Represents the options that can be passed. Options include:
    - `signal` — An {{domxref("AbortSignal")}} to cancel the operation.

### Return value

A {{jsxref("Promise")}} that resolves with `undefined` when the content has been prefilled into the context window.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `input` contains a message with `role: "system"`.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if appending `input` would cause the session's context usage to exceed {{domxref("LanguageModel.contextWindow")}}.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if prefilling fails for any other reason.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was cancelled via the `signal` option.

## Description

The `append()` method preloads a context before asking the model a question. A context may be a document, conversation, history or background information. Because it does not trigger generation, it is more efficient than calling `prompt()` with a prompt that is intended only to set context. The `append()` method can be called at any point during the session's lifetime.
 
## Examples

### Loading a document before querying

```js
const session = await LanguageModel.create();

// Pre-load the document text into context
await session.append(documentText);

// Now ask questions about the document
const summary = await session.prompt("Summarize the key points of this document.");
console.log(summary);
```

### Appending multiple turns

```js
const session = await LanguageModel.create();

await session.append([
  { role: "user", content: "My project is a task management app." },
  { role: "assistant", content: "Understood. I'll keep that in mind." },
]);

const advice = await session.prompt("What database would you recommend?");
console.log(advice);
```

### Appending context with an abort signal

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

```js
const session = await LanguageModel.create();
await session.append(largeDocument);

console.log(`Context used: ${session.contextUsage} / ${session.contextWindow} tokens`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.prompt()")}}
- {{domxref("LanguageModel.measureContextUsage()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
