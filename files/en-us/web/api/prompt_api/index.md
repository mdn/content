---
title: Prompt API
slug: Web/API/Prompt_API
page-type: web-api-overview
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{DefaultAPISidebar("Prompt API")}}{{SecureContext_Header}}

The **Prompt API** allows web pages to directly prompt a language model provided by the user agent via a JavaScript interface, without needing to manage implementation-specific details of the AI model being used. The API does not provide a way to specify a model other than the one provided by the user agent.

## Concepts and usage

The Prompt API lets web pages talk directly to a browser-provided language model without relying on a cloud service. This means sensitive data can stay on the user's device, the model is available offline, and developers can avoid the cost and latency of API calls to external services. The API abstracts away model-specific details such as tokenization and templating, so developers don't need to handle those differences across different implementations.

### Sessions

All interaction with the language model happens through a {{domxref("LanguageModel")}} session.
You can use this session to specify context for the model, such as providing documents, background information, or conversation history, and to prompt it for responses to specific questions.

Before creating a session, you can call the static {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} method to determine whether the language model supports a given configuration on the current device.
The method resolves with one of four string values:

- `"available"`: The browser supports the given configuration, and it can be used immediately.
- `"downloadable"`: The browser supports the given configuration, but it first needs to download an AI model, or some fine-tuning data for the model.
- `"downloading"`: The browser supports the given configuration, but it has to finish an ongoing download before it can proceed.
- `"unavailable"`: The browser does not support the given configuration, or the Prompt API is blocked by a [permissions policy](#permissions_policy).

This allows pages to adapt gracefully if the desired model can't be provided or is not downloaded. For example, you could display a download prompt or fall back to a cloud-based AI service, rather than creating a session only to have it fail.

A session is created by calling the static {{domxref("LanguageModel.create_static", "create()")}} method, which returns a {{jsxref("Promise")}} that resolves with a `LanguageModel` instance.
If the model is not downloaded, the browser downloads it automatically if available. You can monitor download progress by passing the `monitor` option to the `create()` method.

Once you have a session, you can call {{domxref("LanguageModel.append()", "append()")}} to preload content into the session without generating a response, and {{domxref("LanguageModel.prompt()","prompt()")}} or {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}} to send text or multimodal input and receive the response. The difference is that `prompt()` returns the response immediately, whereas `promptStreaming()` returns it incrementally as it is generated.
Note that both prompting methods add to the session's running context, maintaining conversational history across multiple interactions.

### The context window

Every `LanguageModel` session has a finite context window, which constrains the total number of input and output tokens it can hold at once. The {{domxref("LanguageModel.contextWindow", "contextWindow")}} property reports the session's maximum capacity, and {{domxref("LanguageModel.contextUsage", "contextUsage")}} reports how many tokens have been consumed so far.

When a {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}}, or {{domxref("LanguageModel.append()", "append()")}} call would exceed the context window, a `QuotaExceededError` {{domxref("DOMException")}} is thrown and the {{domxref("LanguageModel.contextoverflow_event", "contextoverflow")}} event fires.
To check how many tokens a piece of input would consume without actually sending it, use {{domxref("LanguageModel.measureContextUsage()", "measureContextUsage()")}}.

To branch from a session at a specific point in a conversation — for example, to explore different response paths in parallel without affecting each other — use {{domxref("LanguageModel.clone()", "clone()")}}.

### Trigger developer functions from prompts

The Prompt API allows the language model to invoke tools and capture their output.

Tools are registered when {{domxref("languageModel.create_static", "creating a session")}} via the `tools` option.
Each tool is described by a name, a natural-language description, a JSON Schema object defining its input parameters, and a callback function that is used to invoke it.
When the model decides to call a tool, the user agent invokes the callback with arguments specific to the model being used, and feeds the returned string back to the model to continue generation.

### Multimodal input

Sessions can accept text, image, and audio input, depending on the capabilities of the underlying model. Declare the expected input and output modalities when creating a session using the `expectedInputs` and `expectedOutputs` options, each of which accepts an array.

First, call {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} to check whether the desired modalities and languages are supported before committing to session creation.
If `availability()` returns a value other than `"unavailable"` the configuration is supported, and you can proceed to create the corresponding model:

Here's an example:

```js
const availability = await LanguageModel.availability({
  expectedInputs: [{ type: "text" }, { type: "image" }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});

if (availability === "unavailable") {
  console.warn("This configuration is not supported.");
} else {
  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text" }, { type: "image" }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
}
```

### Roles

Role is a required field on every `LanguageModelMessage` that identifies who authored that message.

- `"system"`
  - : A system-level instruction that configures or constrains the model's behavior before the conversation begins. System messages are only allowed in `initialPrompts`. Note that {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}}, and {{domxref("LanguageModel.append()", "append()")}} throw a {{DOMxRef("NotSupportedError")}} {{DOMxRef("DOMException")}} if a message with `role: "system"` is passed to them. Additionally, system messages cannot be submitted after any input has already been appended to the context; attempting to do so throws a {{DOMxRef("TypeError")}}.
- `"user"` (default)
  - : A message from the user. User messages support any content type supported by the underlying (user-agent defined) model.
- `"assistant"`
  - : A message from the model. Use this for few-shot examples or continued dialogue. A few-shot example is a set of input-output pairs passed to an AI model as an example before asking it to complete a similar task. Only text is allowed for `"assistant"` messages. Any other content type throws a {{DomxRef("NotSupportedError")}}.

## Security considerations

The Prompt API is restricted to [secure contexts](/en-US/docs/Web/Security/Secure_Contexts) (HTTPS).

Access to the Prompt API is controlled by the `language-model` [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) feature, whose default allowlist is `'self'`. This means the API is available to same-origin contexts by default. To enable it in cross-origin {{HTMLElement("iframe")}} elements, the embedding page must explicitly grant permission via the `allow` attribute or an appropriate `Permissions-Policy` response header.

## Interfaces

- {{domxref("LanguageModel")}}
  - : Represents a session with a browser-provided language model. Provides static methods for creating sessions and checking availability, and instance methods for prompting the model, managing context, and cloning sessions.

## Callback functions

- {{domxref("LanguageModelToolFunction")}}
  - : The type of function assigned to the `tool.execute` property that was passed to {{domxref("LanguageModel.create_static", "create()")}}. Called by the user agent when the language model invokes a tool. the callback must return a {{jsxref("Promise")}} that resolves with a string representing the tool's result.

## Specifications

{{Specifications}}

## See also

- [Writing Assistance APIs](https://webmachinelearning.github.io/writing-assistance-apis/) — the specification defining the shared infrastructure underlying the Prompt API
- [Web Machine Learning Working Group](https://www.w3.org/groups/wg/webmachinelearning/)
