---
title: Prompt API
slug: Web/API/Prompt_API
page-type: web-api-overview
browser-compat: api.LanguageModel
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{DefaultAPISidebar("Prompt API")}}{{SeeCompatTable}}{{SecureContext_Header}}

> [!WARNING]
> This feature is currently opposed by two browser vendor(s). See the [Standards positions](#standards_positions) section below for details of opposition.

The **Prompt API** allows web pages to directly prompt a language model provided by the user agent via a JavaScript interface, without needing to manage implementation-specific details of the AI model being used.

## Concepts and usage

Using AI prompts to return information is very common on the web, with examples including rapid information look up, code and content generation, chatbots to provide customer service functions, image identification and description, audio transcription, and more.

The Prompt API provides an asynchronous ({{jsxref("Promise")}}-based) mechanism for a website to prompt the browser's own internal AI model. Having an on-device model is useful and efficient because sensitive data can stay on the user's device, the model is available offline, and developers can avoid the cost and latency of API calls to external services. The API abstracts away model-specific details such as tokenization and templating, so developers don't need to handle those differences across different implementations.

All interaction with the language model happens through a {{domxref("LanguageModel")}} session.
You can use this session to specify context for the model, such as providing documents, background information, or conversation history, and to prompt it for responses to specific questions.

Before creating a session, you can call the static {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} method to determine whether the language model supports a given configuration on the current device. This allows pages to adapt gracefully if data for the desired configuration can't be provided or is not downloaded. For example, you could display a download prompt or fall back to a cloud-based AI service, rather than creating a session only to have it fail.

A session is created by calling the static {{domxref("LanguageModel.create_static", "create()")}} method. Once you have a session, you can call {{domxref("LanguageModel.append()", "append()")}} to preload content into the session without generating a response, and {{domxref("LanguageModel.prompt()","prompt()")}} or {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}} to send text or multimodal input and receive the response.

You can cancel pending operations such as `create()`, `prompt()`, and `append()` using an {{domxref("AbortController")}}.

After a `LanguageModel` instance has been created, you can release its assigned resources and stop any further activity by calling its {{domxref("LanguageModel.destroy()")}} method. You are encouraged to do this after you've finished with the object as it can consume a lot of resources.

To get started, check out [Using the Prompt API](/en-US/docs/Web/API/Prompt_API/Using) for a walkthrough of the basics.

## Interfaces

- {{domxref("LanguageModel")}}
  - : Represents a session with a browser-provided language model. Provides static methods for creating sessions and checking availability, and instance methods for prompting the model, managing context, cloning sessions, etc.

## HTTP headers

- {{httpheader("Permissions-Policy")}}; the {{httpheader("Permissions-Policy/language-model", "language-model")}} directive
  - : Controls access to the prompt functionality.
    Where a policy specifically disallows its use, the {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} static method will return `unavailable`, and any attempts to call other `LanguageModel` methods will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Security considerations

The Prompt API is restricted to [secure contexts](/en-US/docs/Web/Security/Secure_Contexts) (HTTPS). In addition, creation of `LanguageModel` objects requires that the user has recently interacted with the page ([transient user activation](/en-US/docs/Web/Security/Defenses/User_activation) is required).

Access to the API is also controlled via the {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} directive.

## Examples

For full examples, check out our guides, starting with [Using the Prompt API](/en-US/docs/Web/API/Prompt_API/Using).

Also see the Chrome dev rel team's demos:

- [Prompt API playground](https://chrome.dev/web-ai-demos/prompt-api-playground/)
- [MediaRecorder audio transcription](https://chrome.dev/web-ai-demos/mediarecorder-audio-prompt/)
- [Canvas API image prompt](https://chrome.dev/web-ai-demos/canvas-image-prompt/)

## Specifications

{{Specifications}}

### Standards positions

Two browser vendors [oppose](/en-US/docs/Glossary/Web_standards#opposing_standards) this specification.
Known standards positions are as follows:

- Mozilla (Firefox): [Negative](https://github.com/mozilla/standards-positions/issues/1213)
- Apple (WebKit): [Negative](https://github.com/WebKit/standards-positions/issues/495)

## Browser compatibility

{{Compat}}

## See also

- [The Prompt API](https://developer.chrome.com/docs/ai/prompt-api) on developer.chrome.com (2026)
