---
title: "LanguageModel: contextWindow property"
short-title: contextWindow
slug: Web/API/LanguageModel/contextWindow
page-type: web-api-instance-property
browser-compat: api.LanguageModel.contextWindow
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`contextWindow`** read-only property of the {{domxref("LanguageModel")}} interface returns the total number of context window tokens available for this session. It is set when the session is created and does not change during the session's lifetime.

Compare `contextWindow` against {{domxref("LanguageModel.contextUsage", "contextUsage")}} to determine how much space remains. Use {{domxref("LanguageModel.measureContextUsage()", "measureContextUsage()")}} to estimate how many tokens a new prompt would consume before sending it.

The value is implementation-specific and varies depending on the model, device capabilities, and the session's configuration. A value of `Infinity` indicates that the user agent does not impose a hard limit.

## Value

An number representing the session's context window capacity in tokens. This value may be `Infinity` if the user agent does not impose a specific limit beyond available memory or JavaScript string constraints.

## Examples

### Warning when the context is nearly full

The following example uses a function to verify that context is available before calling {{domxref("LanguageModel.prompt()")}}. It first calculates the remaining context and passes that value to `measureContextUsage()`. If `needed` is less or equal to than `remaining`, it returns `true` and the session continues.

```js
const promptText = "Let me ask you an interesting question...";

async function contextAvailable(promptText) {
  const remaining = session.contextWindow - session.contextUsage;
  const needed = await session.measureContextUsage(promptText);

  return needed <= remaining;
}

const session = await LanguageModel.create();

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

- {{domxref("LanguageModel.contextUsage")}}
- {{domxref("LanguageModel.measureContextUsage()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
