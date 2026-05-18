---
title: "LanguageModel: create() static method"
short-title: create()
slug: Web/API/LanguageModel/create_static
page-type: web-api-static-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`create()`** static method of the {{domxref("LanguageModel")}} interface creates a new language model session, automatically downloading the model if it is not already available.

You can monitor progress of a model download using the `monitor` option.

Before calling `create()`, use {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} to check whether the desired configuration is supported.

Once a session is created, use its instance methods — {{domxref("LanguageModel.prompt()")}}, {{domxref("LanguageModel.promptStreaming()")}}, {{domxref("LanguageModel.append()")}}, and others — to interact with the model.

## Syntax

```js-nolint
LanguageModel.create()
LanguageModel.create(options)
```

### Parameters

- `options` {{optional_inline}}
  - : Represents the options for creating a {{domxref("LanguageModel")}} session. Options include:
    - `expectedInputs`
      - : An array representing the required input modalities and languages. Each entry is an object that may define the following options:
        - `type`
          - : A string from the `LanguageModelMessageType` enumeration indicating the content type. Must be one of:
          - `"text"`
            - : Plain text content.
          - `"image"`
            - : Image content.
          - `"audio"`
            - : Audio content.
          - `"tool-call"`
            - : A tool invocation issued by the model.
          - `"tool-response"`
            - : The result of a tool invocation.
        - `languages` {{optional_inline}}
          - : An array of strings containing [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) language tags (for example, `"en"`, `"fr"`, `"ja"`) that the session is expected to handle for this content type. The user agent uses this list to determine whether the model supports the specified languages and to select appropriate model components or fine-tunings.
    - `expectedOutputs`
      - : An array representing the required output modalities and languages. Options include:
        - `type`
          - : A string from the `LanguageModelMessageType` enumeration indicating the content type. Must be one of:
          - `"text"`
            - : Plain text content.
          - `"image"`
            - : Image content.
          - `"audio"`
            - : Audio content.
          - `"tool-call"`
            - : A tool invocation issued by the model.
          - `"tool-response"`
            - : The result of a tool invocation.
        - `languages` {{optional_inline}}
          - : An array of strings containing [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) language tags (for example, `"en"`, `"fr"`, `"ja"`) that the session is expected to handle for this content type. The user agent uses this list to determine whether the model supports the specified languages and to select appropriate model components or fine-tunings.
    - `initialPrompts`
      - : An array of messages passed during the creation of a language model session. This allows the model to "remember" instructions or previous dialogue without resending them with every new query. Options include:
        - `role`
          - : A string indicating who sent the message. Must be one of:
            - `"system"`
              - : A system-level instruction that guides the model's overall behavior. Note that {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}}, and {{domxref("LanguageModel.append()", "append()")}} throw a `"NotSupportedError"` `DOMException` if a message with `role: "system"` is passed to them; system messages are only allowed in `initialPrompts`.
            - `"user"`
              - : A message from the user.
            - `"assistant"`
              - : A message from the model. Use this for few-shot examples or continued dialogue. A few-shot example is a set of input-output pairs passed as an example to an AI before asking it to complete a similar task.
      - `monitor`
        - : A reference to a {{domxref("CreateMonitor")}} callback function to receive download progress events.
      - `signal`
        - : An {{domxref("AbortSignal")}} to cancel session creation.
      - `tools`
        — An array of tools to verify support for. Options include:
        - `name`
          - : A string giving the tool a unique name the model uses to refer to it when issuing a tool call.
        - `description`
          - : A string describing what the tool does. The model uses this description to decide if and when to invoke the tool.
        - `inputSchema`
          - : A [JSON Schema](https://json-schema.org/) that describes the tool's input parameters. The model uses this schema to construct the arguments it passes to the tool's `execute` function.
        - `execute`
          - : A `LanguageModelToolFunction` callback that the user agent invokes when the model calls this tool. It receives the arguments the model provides and must return a {{jsxref("Promise")}} that resolves with a {{jsxref("String")}} representing the tool's result.

### Return value

A {{jsxref("Promise")}} that resolves with a new {{domxref("LanguageModel")}} instance.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was aborted via the `signal` option.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown in the following situations:
    - The `role` is `"assistant"` and `type` is anything other than `"text"`.
    - The input or output text is in a language the user agent doesn't support for prompting.
    - The content type is `"image"` or `"audio"` but the type was not listed in `expectedInputs`.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if creation fails for any other reason not listed in the other exception types.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the content provided in `initialPrompts` exceeds the model's context window size.

## Examples

### Creating a basic session

```js
const session = await LanguageModel.create();
const answer = await session.prompt("What is 2 + 2?");
console.log(answer); // "4"
```

### Creating a session with a system prompt

The following example provides the AI with instructions on the persona to adopt before generating an answer.

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

A few-shot example is a set of user role (input) and assistant role (output) pairs passed as an example to an AI, using the `initialPrompts` property, before asking it to complete a similar task.

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

### Cancelling a session

The following example enables a user to cancel a prompt. It does this by first creating an {{domxref("AbortController")}} and assigning its `abort()` method to a cancel button's click handler. Next, it calls `create()` and passes `AbortController.signal` as the `signal` property.

```js
const controller = new AbortController();

const cancelButton = document.getElementById("cancel-button");
cancelButton.addEventListener("click", () => controller.abort());

const session = await LanguageModel.create({
  signal: controller.signal,
  initialPrompts: [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
  ],
});

const response = await session.prompt("Tell me about the web platform.");
console.log(response);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
