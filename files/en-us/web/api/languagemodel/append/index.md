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
  - : The content to append to the context window. This is a `LanguageModelPrompt`, which is either:
    - A string — Shorthand for a single user message: `[{ role: "user", content: [{ type: "text", value: input }] }]`.
    - A sequence of {{domxref("LanguageModelMessage")}} objects — For multi-turn or multimodal content.
- `options` {{optional_inline}}
  - : A {{domxref("LanguageModelAppendOptions")}} object. Options include:
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

`append()` is useful for pre-loading context — such as a document, conversation history, or background information — before asking the model a question. Because it does not trigger generation, it is more efficient than calling `prompt()` with a prompt that is intended only to set context.

Unlike `initialPrompts` in {{domxref("LanguageModelCreateOptions")}}, `append()` can be called at any point during the session's lifetime.

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
- {{domxref("LanguageModelAppendOptions")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
