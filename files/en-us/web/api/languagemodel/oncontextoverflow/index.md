---
title: "LanguageModel: oncontextoverflow property"
short-title: oncontextoverflow
slug: Web/API/LanguageModel/oncontextoverflow
page-type: web-api-instance-property
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`oncontextoverflow`** property of the {{domxref("LanguageModel")}} interface is an event handler that is called when the `contextoverflow` event fires. This event fires when {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}}, or {{domxref("LanguageModel.append()", "append()")}} would cause the session's {{domxref("LanguageModel.contextUsage", "contextUsage")}} to exceed the {{domxref("LanguageModel.contextWindow", "contextWindow")}}.


## Value

A function to be called when the `contextoverflow` event fires, or `null` if no handler is set.

## Examples

### Reacting to a context overflow

```js
const session = await LanguageModel.create();

session.oncontextoverflow = () => {
  console.warn(
    "The session's context window is full. " +
    "Consider cloning the session or starting a new one.",
  );
};

// Alternatively, use addEventListener:
session.addEventListener("contextoverflow", () => {
  console.warn("Context overflow detected.");
});
```

### Resetting the session on overflow

```js
let session = await LanguageModel.create({
  initialPrompts: [
    { role: "system", content: "You are a helpful assistant." },
  ],
});

session.oncontextoverflow = async () => {
  console.log("Context full — creating a fresh session.");
  session.destroy();
  session = await LanguageModel.create({
    initialPrompts: [
      { role: "system", content: "You are a helpful assistant." },
    ],
  });
};

async function chat(userMessage) {
  const response = await session.prompt(userMessage);
  return response;
}
```

### Checking context before prompting to avoid overflow

```js
const session = await LanguageModel.create();

session.oncontextoverflow = () => {
  updateUI("warning", "Context window is full.");
};

async function safeSend(text) {
  const usage = await session.measureContextUsage(text);
  if (session.contextUsage + usage > session.contextWindow) {
    updateUI("error", "Message too long for remaining context.");
    return;
  }
  const response = await session.prompt(text);
  renderResponse(response);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.contextUsage")}}
- {{domxref("LanguageModel.contextWindow")}}
- {{domxref("LanguageModel.measureContextUsage()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
