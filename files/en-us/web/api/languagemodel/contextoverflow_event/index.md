---
title: "LanguageModel: contextoverflow event"
short-title: contextoverflow
slug: Web/API/LanguageModel/contextoverflow_event
page-type: web-api-event
browser-compat: api.LanguageModel.contextoverflow_event
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

The code below shows two methods of creating an event listener for the `contextoverflow` event.

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

The following example creates a new session when the `contextoverflow` event is triggered.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.contextUsage")}}
- {{domxref("LanguageModel.contextWindow")}}
- {{domxref("LanguageModel.measureContextUsage()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
