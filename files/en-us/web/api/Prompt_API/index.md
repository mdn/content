---
title: Prompt API
slug: Web/API/Prompt_API
page-type: web-api-overview
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{DefaultAPISidebar("Prompt API")}}{{SecureContext_Header}}

The **Prompt API** allows web pages to directly prompt a language model provided by the user agent model through a uniform JavaScript interface, without needing to manage implementation-specific details of the AI model being used. The API does not provide a way to specify a model other than the one provided by the user agent.

## Concepts and usage

### Sessions

All interaction with the language model happens through a {{domxref("LanguageModel")}} session. A session is created by calling the static {{domxref("LanguageModel.create_static", "LanguageModel.create()")}} method, which returns a {{jsxref("Promise")}} that resolves with a `LanguageModel` instance. If the model is not yet downloaded, the browser begins the download automatically; you can monitor progress with the `monitor` option passed to the {{domxref("LanguageModel.create_static", "LanguageModel.create()")}} method.

Once you have a session, use {{domxref("LanguageModel.prompt()")}} to send text or multimodal input and receive the model's complete response, or {{domxref("LanguageModel.promptStreaming()")}} to receive the response incrementally as it is generated. Both methods add to the session's running context, maintaining conversational history across multiple interactions.

Use {{domxref("LanguageModel.append()")}} to preload content into the context window without generating a response — useful for providing documents, background information, or conversation history before asking a question.

Before creating a session, call the static {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} method to determine whether the language model supports a given configuration on the current device. The method resolves with one of four string values: `"available"`, `"downloadable"`, `"downloading"`, or `"unavailable"`. This allows pages to adapt gracefully — for example, by displaying a download prompt or falling back to a server-side implementation — rather than creating a session only to have it fail.

### The context window

Every `LanguageModel` session has a finite context window, which constrains the total number of input and output tokens it can hold at once. The {{domxref("LanguageModel.contextWindow")}} property reports the session's maximum capacity, and {{domxref("LanguageModel.contextUsage")}} reports how many tokens have been consumed so far.

When a {{domxref("LanguageModel.prompt()")}}, {{domxref("LanguageModel.promptStreaming()")}}, or {{domxref("LanguageModel.append()")}} call would exceed the context window, they throw a `QuotaExceededError` {{domxref("DOMException")}} and the {{domxref("LanguageModel.oncontextoverflow", "contextoverflow")}} event fires. To check how many tokens a piece of input would consume without actually sending it, use {{domxref("LanguageModel.measureContextUsage()")}}.

To branch from a session at a specific point in a conversation — for example, to explore different response paths in parallel without affecting each other — use {{domxref("LanguageModel.clone()")}}.

### Trigger developer functions from prompts

The Prompt API supports tool use, allowing the language model to invoke developer-defined functions during generation. Tools are registered when creating a session via the `tools` option of {{domxref("LanguageModelCreateOptions")}}. Each tool is described with a name, a natural-language description, and a JSON Schema object defining its input parameters. When the model decides to call a tool, the user agent invokes the tool's {{domxref("LanguageModelToolFunction")}} callback with the arguments the model specified, and feeds the returned string back to the model to continue generation.

### Multimodal input

Sessions can accept text, image, and audio input, depending on the capabilities of the underlying model. Declare the expected input and output modalities when creating a session using the `expectedInputs` and `expectedOutputs` options, each of which accepts an array of {{domxref("LanguageModelExpected")}} objects. These declarations also allow {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} to check whether the desired modalities and languages are supported before committing to session creation.

Multimodal messages are expressed using the {{domxref("LanguageModelMessage")}} and {{domxref("LanguageModelMessageContent")}} dictionaries. When a session is configured to accept images or audio, you can include `ImageBitmapSource` or `AudioBuffer` values alongside text parts in a single message.

### Permissions policy

Access to the Prompt API is controlled by the `language-model` [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) feature, whose default allowlist is `'self'`. This means the API is available to same-origin contexts by default. To enable it in cross-origin {{HTMLElement("iframe")}} elements, the embedding page must explicitly grant permission via the `allow` attribute or an appropriate `Permissions-Policy` response header.

### Security considerations

The Prompt API is restricted to [secure contexts](/en-US/docs/Web/Security/Secure_Contexts) (HTTPS). The privacy and security considerations for the API — including protections against fingerprinting through model capability queries, restrictions on the information revealed by availability checks, and requirements on how user agents must handle sensitive or harmful outputs — are discussed in the [Writing Assistance APIs](https://webmachinelearning.github.io/writing-assistance-apis/) specification, which defines the shared infrastructure on which the Prompt API is built.

## Interfaces

- {{domxref("LanguageModel")}}
  - : Represents a session with a browser-provided language model. Provides static methods for creating sessions and checking availability, and instance methods for prompting the model, managing context, and cloning sessions.

## Callback functions

- {{domxref("LanguageModelToolFunction")}}
  - : The type of function assigned to the `execute` property of a {{domxref("LanguageModelTool")}}. Called by the user agent when the language model invokes a tool; must return a {{jsxref("Promise")}} that resolves with a string representing the tool's result.

## Specifications

{{Specifications}}

## See also

- [Writing Assistance APIs](https://webmachinelearning.github.io/writing-assistance-apis/) — the specification defining the shared infrastructure underlying the Prompt API
- [Web Machine Learning Working Group](https://www.w3.org/groups/wg/webmachinelearning/)
