---
title: "LanguageModel: contextoverflow event"
short-title: contextoverflow
slug: Web/API/LanguageModel/contextoverflow_event
page-type: web-api-event
browser-compat: api.LanguageModel.contextoverflow_event
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`contextoverflow`** event fires on a {{domxref("LanguageModel")}} instance when a call to {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}}, or {{domxref("LanguageModel.append()", "append()")}} causes the session's {{domxref("LanguageModel.contextUsage", "contextUsage")}} to exceed the {{domxref("LanguageModel.contextWindow", "contextWindow")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("contextoverflow", (event) => {})

oncontextoverflow = (event) => {}
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Reacting to a context overflow

```js
const session = await LanguageModel.create();

session.addEventListener("contextoverflow", () => {
  console.warn("Context overflow detected.");
});
```

Alternatively:

```js
const session = await LanguageModel.create();

session.oncontextoverflow = () => {
  console.warn(
    "The session's context window is full. " +
      "Consider cloning the session or starting a new one.",
  );
};

```

### Resetting the session on overflow

```js
let session = await LanguageModel.create({
  initialPrompts: [{ role: "system", content: "You are a helpful assistant." }],
});

session.addEventListener("contextoverflow", async () => {
  console.log("Context full — creating a fresh session.");
  session.destroy();
  session = await LanguageModel.create({
    initialPrompts: [
      { role: "system", content: "You are a helpful assistant." },
    ],
  });
});

async function chat(userMessage) {
  const response = await session.prompt(userMessage);
  return response;
}
```

### Checking context before prompting to avoid overflow

```js
const session = await LanguageModel.create();

session.addEventListener("contextoverflow", () => {
  updateUI("Warning", "Context window is full.");
});

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
