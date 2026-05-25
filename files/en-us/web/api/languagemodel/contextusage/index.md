---
title: "LanguageModel: contextUsage property"
short-title: contextUsage
slug: Web/API/LanguageModel/contextUsage
page-type: web-api-instance-property
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`contextUsage`** read-only property of the {{domxref("LanguageModel")}} interface returns the number of context window tokens currently consumed by this session, including initial prompts and all subsequent turns.

This value increases every time you call {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}}, or {{domxref("LanguageModel.append()", "append()")}}.

Compare `contextUsage` with {{domxref("LanguageModel.contextWindow")}} to determine how much space remains. When `contextUsage` would exceed `contextWindow`, subsequent method calls throw a `QuotaExceededError` and the `contextoverflow` event fires.

To estimate how many tokens a new prompt would use before sending it, call {{domxref("LanguageModel.measureContextUsage()")}}.

## Value

A number representing the current context window usage in tokens.

## Examples

### Monitoring context usage during a conversation

This example writes context usage to the console after a session prompt completes.

```js
const session = await LanguageModel.create();

await session.prompt("Tell me about the history of the internet.");

console.log(
  `Context used: ${session.contextUsage} / ${session.contextWindow} tokens`,
);
```

### Warning when the context is nearly full

The following example uses a function to verify that context is available before calling `prompt()`. It first calculates the remaining context and passes that value to `measureContextUsage()`. If `needed` is less than `remaining`, it returns `true` and the session continues.

```js
async function contextAvailable(text) {
  const remaining = session.contextWindow - session.contextUsage;
  const needed = await session.measureContextUsage(text);

  return needed <= remaining;
}

const session = await LanguageModel.create();
const promptText = "Your text goes here";

if (await contextAvailable(promptText)) {
  const response = await session.prompt(promptText);
  console.log(response);
} else {
  console.warn("Prompt skipped: Not enough context window remaining.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.contextWindow")}}
- {{domxref("LanguageModel.measureContextUsage()")}}
- {{domxref("LanguageModel.oncontextoverflow")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
