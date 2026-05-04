---
title: "LanguageModel: contextWindow property"
short-title: contextWindow
slug: Web/API/LanguageModel/contextWindow
page-type: web-api-instance-property
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`contextWindow`** read-only property of the {{domxref("LanguageModel")}} interface returns the total number of context window tokens available for this session. It is set when the session is created and does not change during the session's lifetime.

Compare `contextWindow` against {{domxref("LanguageModel.contextUsage", "contextUsage")}} to determine how much space remains. Use {{domxref("LanguageModel.measureContextUsage()", "measureContextUsage()")}} to estimate how many tokens a new prompt would consume before sending it.

The value is implementation-specific and varies depending on the model, device capabilities, and the session's configuration. A value of `Infinity` indicates that the user agent does not impose a hard limit.

## Value

An unrestricted double representing the session's context window capacity in tokens. This value may be `Infinity` if the user agent does not impose a specific limit beyond available memory or JavaScript string constraints.

## Description

## Examples

### Displaying context window information

```js
const session = await LanguageModel.create();

console.log(`Context window: ${session.contextWindow} tokens`);
console.log(`Currently used: ${session.contextUsage} tokens`);
console.log(
  `Remaining: ${session.contextWindow - session.contextUsage} tokens`,
);
```

### Adapting behavior based on context window size

```js
const session = await LanguageModel.create();

if (session.contextWindow < 4096) {
  console.log("Small context window — keep prompts brief.");
} else if (session.contextWindow === Infinity) {
  console.log("No context window limit reported by this user agent.");
} else {
  console.log(`Context window: ${session.contextWindow} tokens.`);
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
