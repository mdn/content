---
title: LanguageModel
slug: Web/API/LanguageModel
page-type: web-api-interface
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModel`** interface of the [Prompt API](/en-US/docs/Web/API/Prompt_API) represents a session with a browser-provided language model. It exposes static methods for creating sessions and checking availability, as well as instance methods for prompting the model, appending context, and managing the context window.

`LanguageModel` instances cannot be constructed directly. Instead, use the static {{domxref("LanguageModel.create_static", "LanguageModel.create()")}} method.

{{InheritanceDiagram}}

## Static methods

- {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with an `Availability` value indicating whether the language model is available for the given options.
- {{domxref("LanguageModel.create_static", "LanguageModel.create()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a new `LanguageModel` session, downloading the model if necessary.

## Instance methods

- {{domxref("LanguageModel.append()")}}
  - : Returns a {{jsxref("Promise")}} that resolves when the given input has been added to the session's context window, without generating a response.
- {{domxref("LanguageModel.clone()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with a new `LanguageModel` session that is a copy of the current session, including all context.
- {{domxref("LanguageModel.destroy()")}}
  - : Releases the resources assigned to the `LanguageModel` instance it is called on and stops any further activity on it.
- {{domxref("LanguageModel.measureContextUsage()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with the number of context window tokens that the given input would consume.
- {{domxref("LanguageModel.prompt()")}}
  - : Returns a {{jsxref("Promise")}} that resolves with the model's complete response to the given input.
- {{domxref("LanguageModel.promptStreaming()")}}
  - : Returns a {{domxref("ReadableStream")}} that streams the model's response to the given input as it is generated.

## Instance properties

- {{domxref("LanguageModel.contextUsage")}} {{ReadOnlyInline}}
  - : Returns the number of context window tokens currently consumed by this session.
- {{domxref("LanguageModel.contextWindow")}} {{ReadOnlyInline}}
  - : Returns the total context window size available for this session, in tokens.

## Events

- {{domxref("LanguageModel.contextoverflow_event", "contextoverflow")}}
  - : Fired when a `prompt()`, `promptStreaming()`, or `append()` call would exceed the context window size.

## Examples

### Creating a session and prompting the model

This example first calls {{domxref("LanguageModel.create_static", "create()")}} to get a new session. It specifies that the language model adopt a `"system"` role and defines how it should behave. Note that the example uses `await` because `create()` returns a {{jsxref("Promise")}}. This may take some time to resolve if the model needs to be downloaded.

After creating the session, the example calls {{domxref("LanguageModel.prompt()", "prompt()")}} to ask a specific question.

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
  ],
});

const response = await session.prompt("What is the capital of France?");
console.log(response); // "The capital of France is Paris."
```

### Streaming a response

This example calls {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}} to get an instance of {{domxref("ReadableStream")}} and writes it to the console in chunks.

```js
const session = await LanguageModel.create();
const readableStream = session.promptStreaming("Tell me a short story.");

for await (const chunk of readableStream) {
  console.log(chunk);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prompt API](/en-US/docs/Web/API/Prompt_API)
