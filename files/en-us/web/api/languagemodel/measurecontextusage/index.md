---
title: "LanguageModel: measureContextUsage() method"
short-title: measureContextUsage()
slug: Web/API/LanguageModel/measureContextUsage
page-type: web-api-instance-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`measureContextUsage()`** method of the {{domxref("LanguageModel")}} interface estimates how many context window tokens the given input would consume without sending it to the model or modifying the session's state.

## Syntax

```js-nolint
measureContextUsage(input)
measureContextUsage(input, options)
```

### Parameters

- `input`
  - : The input to measure. This is a `LanguageModelPrompt`, which is either:
    - A string — Shorthand for a single user message. For example: `[{ role: "user", content: [{ type: "text", value: input }] }]`.
    - A sequence of {{domxref("LanguageModelMessage")}} objects for multi-turn or multimodal input.
- `options` {{optional_inline}}
  - : A `LanguageModelPromptOptions` dictionary. Options include:
    - `responseConstraint` — An object constraining the format of the model's output. When provided and `omitResponseConstraintInput` is `false`, any implementation-defined constraint-description message is included in the measurement.
    - `omitResponseConstraintInput` — A boolean; when `true`, the automatic constraint-description message is excluded from the measurement. Throws a `"TypeError"` if `true` is passed without a `responseConstraint`.
    - `signal` — An {{domxref("AbortSignal")}} to cancel the operation.

### Return value

A {{jsxref("Promise")}} that resolves with a {{jsxref("Number")}} representing the number of context window tokens the input would consume.

### Exceptions

- `TypeError`
  - : Thrown if `omitResponseConstraintInput` is `true` but `responseConstraint` is not provided.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was cancelled via the `signal` option.

## Description

The `measureContextUsage()` function is a dry-run measurement that lets you check how much of the context window a given input require, before deciding whether to send it. Compare the result to {{domxref("LanguageModel.contextWindow")}} and {{domxref("LanguageModel.contextUsage")}} to determine whether the input fits.

This is particularly useful for long-context applications such as document summarization, where you need to split or truncate content to stay within the context window limit.

## Examples

### Checking whether a prompt fits in the remaining context

```js
const session = await LanguageModel.create();
const userInput = document.querySelector("#user-input").value;

const usage = await session.measureContextUsage(userInput);
const remaining = session.contextWindow - session.contextUsage;

if (usage > remaining) {
  console.warn(`Input is too long: needs ${usage} tokens, only ${remaining} available.`);
} else {
  const response = await session.prompt(userInput);
  console.log(response);
}
```

### Splitting a document to fit the context window

```js
const session = await LanguageModel.create();
const paragraphs = document.body.innerText.split("\n\n");
const chunks = [];
let currentChunk = "";

for (const paragraph of paragraphs) {
  const candidate = currentChunk + "\n\n" + paragraph;
  const usage = await session.measureContextUsage(candidate);

  if (usage > session.contextWindow * 0.8) {
    chunks.push(currentChunk.trim());
    currentChunk = paragraph;
  } else {
    currentChunk = candidate;
  }
}
if (currentChunk) chunks.push(currentChunk.trim());

// Process each chunk separately
for (const chunk of chunks) {
  const summary = await session.prompt(`Summarize: ${chunk}`);
  console.log(summary);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.contextUsage")}}
- {{domxref("LanguageModel.contextWindow")}}
- {{domxref("LanguageModel.append()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
