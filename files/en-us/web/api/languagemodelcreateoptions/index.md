---
title: LanguageModelCreateOptions
slug: Web/API/LanguageModelCreateOptions
page-type: web-api-dictionary
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelCreateOptions`** dictionary of the [Prompt API](/en-US/docs/Web/API/Prompt_API) represents the full set of options for creating a {{domxref("LanguageModel")}} session. It extends {{domxref("LanguageModelCreateCoreOptions")}} with options for aborting creation, monitoring download progress, and seeding the context window with initial messages.

Pass a `LanguageModelCreateOptions` object to {{domxref("LanguageModel.create_static", "LanguageModel.create()")}}.

## Instance properties

Inherits the properties of {{domxref("LanguageModelCreateCoreOptions")}}: `expectedInputs`, `expectedOutputs`, and `tools`.

- `signal` {{optional_inline}}
  - : An {{domxref("AbortSignal")}}. If provided, the session creation can be cancelled by calling {{domxref("AbortController.abort()", "abort()")}} on the corresponding {{domxref("AbortController")}}.
- `monitor` {{optional_inline}}
  - : A `CreateMonitorCallback` function used to monitor the model download progress. The callback receives a monitor object that fires `downloadprogress` events.
- `initialPrompts` {{optional_inline}}
  - : A sequence of {{domxref("LanguageModelMessage")}} objects that are pre-loaded into the session's context window before any prompts are sent. This is typically used to provide a system prompt and any few-shot examples that should persist across all turns.

## Examples

### Creating a session with a system prompt

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content: "You are a concise assistant. Respond in one sentence.",
    },
  ],
});

const response = await session.prompt("What is photosynthesis?");
console.log(response);
```

### Monitoring download progress

```js
const controller = new AbortController();

const session = await LanguageModel.create({
  signal: controller.signal,
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", (event) => {
      console.log(`Downloaded ${event.loaded} of ${event.total} bytes.`);
    });
  },
});
```

### Providing few-shot examples

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

## Specifications

{{Specifications}}

## See also

- {{domxref("LanguageModelCreateCoreOptions")}}
- {{domxref("LanguageModelMessage")}}
- {{domxref("LanguageModel.create_static", "LanguageModel.create()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
