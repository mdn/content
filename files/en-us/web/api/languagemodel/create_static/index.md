---
title: "LanguageModel: create() static method"
short-title: create()
slug: Web/API/LanguageModel/create_static
page-type: web-api-static-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`create()`** static method of the {{domxref("LanguageModel")}} interface creates a new language model session, optionally downloading the model if it is not already available.

## Syntax

```js-nolint
LanguageModel.create()
LanguageModel.create(options)
```

### Parameters

- `options` {{optional_inline}}
  - : Represents the options for creating a {{domxref("LanguageModel")}} session. Options include:
    - `expectedInputs`
      - : A sequence representing the required input modalities and languages. Options include:
        - `type`
          - : A string from the `LanguageModelMessageType` enumeration indicating the content type. Must be one of:
          - `"text"` — Plain text content.
          - `"image"` — Image content.
          - `"audio"` — Audio content.
          - `"tool-call"` — A tool invocation issued by the model.
          - `"tool-response"` — The result of a tool invocation.
        - `languages` {{optional_inline}}
          - : A sequence of strings containing [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) language tags (for example, `"en"`, `"fr"`, `"ja"`) that the session is expected to handle for this content type. The user agent uses this list to determine whether the model supports the specified languages and to select appropriate model components or fine-tunings.
    - `expectedOutputs`
      - : A sequence representing the required output modalities and languages. Options include:
        - `type`
          - : A string from the `LanguageModelMessageType` enumeration indicating the content type. Must be one of:
          - `"text"` — Plain text content.
          - `"image"` — Image content.
          - `"audio"` — Audio content.
          - `"tool-call"` — A tool invocation issued by the model.
          - `"tool-response"` — The result of a tool invocation.
        - `languages` {{optional_inline}}
          - : A sequence of strings containing [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) language tags (for example, `"en"`, `"fr"`, `"ja"`) that the session is expected to handle for this content type. The user agent uses this list to determine whether the model supports the specified languages and to select appropriate model components or fine-tunings.
    - `initialPrompts` —
    - A sequence representing a single message in a conversation with a language model. Options include:
      - `role` — A string indicating who sent the message. Must be one of:
        - `"system"` — A system-level instruction that guides the model's overall behavior. Note that {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}}, {{domxref("LanguageModel.append()", "append()")}} throw a `"NotSupportedError"` `DOMException` if a message with `role: "system"` is passed to them; system messages are only allowed in `initialPrompts`.
        - `"user"` — A message from the user.
        - `"assistant"` — A message from the model (used for few-shot examples or continued dialogue).
    - `monitor` — A reference to a {{domxref("CreateMonitor")}} callback function to receive download progress events.
    - `signal` — An {{domxref("AbortSignal")}} to cancel session creation.
    - `tools`
      — A sequence of tools to verify support for. Options include:
      - `name`
        - : A string giving the tool a unique name the model uses to refer to it when issuing a tool call.
      - `description`
        - : A string describing what the tool does. The model uses this description to decide when and whether to invoke the tool.
      - `inputSchema`
        - : A [JSON Schema](https://json-schema.org/) that describes the tool's input parameters. The model uses this schema to construct the arguments it passes to the tool's `execute` function.
      - `execute`
        - : A {{domxref("LanguageModelToolFunction")}} callback that the user agent invokes when the model calls this tool. It receives the arguments the model provides and must return a {{jsxref("Promise")}} that resolves with a {{jsxref("String")}} representing the tool's result.

### Return value

A {{jsxref("Promise")}} that resolves with a new {{domxref("LanguageModel")}} instance.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the language model is unavailable, or if the specified options (such as expected content types or languages) are not supported by the user agent.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if session initialization fails for any other reason.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the content provided in `initialPrompts` exceeds the model's context window size.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was aborted via the `signal` option.

## Description

The `create()` method initializes a language model session backed by a browser-provided model. If the model is not yet downloaded, the browser begins the download automatically; you can monitor progress using the `monitor` option.

Once a session is created, use its instance methods — {{domxref("LanguageModel.prompt()")}}, {{domxref("LanguageModel.promptStreaming()")}}, {{domxref("LanguageModel.append()")}}, and others — to interact with the model.

Before calling `create()`, consider using {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} to check whether the desired configuration is supported.

## Examples

### Creating a basic session

```js
const session = await LanguageModel.create();
const answer = await session.prompt("What is 2 + 2?");
console.log(answer); // "4"
```

### Creating a session with a system prompt

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content: "You are a pirate. Respond in pirate speak.",
    },
  ],
});

const response = await session.prompt("Hello, how are you?");
console.log(response); // "Ahoy! I be doin' fine, matey!"
```

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
const session = await LanguageModel.create({
  monitor(monitor) {
    monitor.addEventListener("downloadprogress", ({ loaded, total }) => {
      console.log(`Model download: ${Math.round((loaded / total) * 100)}%`);
    });
  },
});
```

### Providing few-shot examples

A few-shot example is a set of input-output pairs passed to an AI before asking it to complete a similar task.

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

### Cancelling session creation

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 10_000);

try {
  const session = await LanguageModel.create({ signal: controller.signal });
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Session creation was cancelled.");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}}
- {{domxref("LanguageModelToolFunction")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
