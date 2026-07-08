---
title: "LanguageModel: create() static method"
short-title: create()
slug: Web/API/LanguageModel/create_static
page-type: web-api-static-method
browser-compat: api.LanguageModel.create_static
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`create()`** static method of the {{domxref("LanguageModel")}} interface constructs a new {{domxref("LanguageModel")}} instance, automatically downloading the corresponding model data if it is not already available.

## Syntax

```js-nolint
LanguageModel.create()
LanguageModel.create(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object representing the options for creating a {{domxref("LanguageModel")}} session. Properties include:
    - `expectedInputs`
      - : An array of objects representing the required input modalities and languages.
        Each object can include the following properties:
        - `type`
          - : An enumerated value indicating the content type. Must be one of:
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
      - : An array of objects representing the required output modalities and languages.
        Each object can include the following properties:
        - `type`
          - : An enumerated value indicating the content type. Must be one of:
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
      - : An array of objects representing messages passed during the creation of a language model session. This allows the model to "remember" instructions or previous dialogue without resending them with every new query. Each object can include the following properties:
        - `role`
          - : A string indicating who sent the message. Must be one of:
            - `"system"`
              - : A system-level instruction that guides the model's overall behavior. This must be the first instruction passed to the model.
            - `"user"`
              - : A message from the user.
            - `"assistant"`
              - : A message from the model. Use this for few-shot examples or continued dialogue. A few-shot example is a set of input-output pairs passed as an example to an AI before asking it to complete a similar task.
        - `content`
          - : A string representing a textual prompt, or an array of objects. Each object includes the following properties:
            - `type`
              - : An enumerated value representing the type of content. This can be one of:
                - `audio`
                  - : Audio content.
                - `image`
                  - : Image content.
                - `text`
                  - : Textual content.
                - `"tool-call"`
                  - : A tool invocation issued by the model.
                - `"tool-response"`
                  - : The result of a tool invocation.
            - `value`
              - : The content of the message. If the `type` is `text`, this is always a string. If the `type` is `audio` or `image`, the `value` can be one of several different object types; see [What data types are accepted?](/en-US/docs/Web/API/Prompt_API/Multimodal#what_data_types_are_accepted).
        - `prefix` {{optional_inline}}
          - : A boolean, defaulting to `false`. When `true`, the message is treated as a prefix for the model's next generated response rather than a complete turn.
    - `monitor`
      - : A reference to a {{domxref("CreateMonitor")}} callback function to receive download progress events.
    - `samplingMode` {{optional_inline}}
      - : An enumerated value indicating whether the internal sampling methods used to infer the model response are biased towards more predictable or more creative results. Possible values are as follows:
        - `most-predictable`
          - : Responses are heavily biased towards the most predictable, or most likely, sequence of words to respond to prompts.
        - `predictable`
          - : Responses are biased towards the most predictable, or most likely, sequence of words to respond to prompts.
        - `balanced`
          - : Responses are balanced between predictable and creative sequences of words to respond to prompts.
        - `creative`
          - : Responses are biased towards less predictable, or more creative, sequences of words to respond to prompts.
        - `most-creative`
          - : Responses are heavily biased towards less predictable, or more creative, sequences of words to respond to prompts.

        If omitted, `samplingMode` defaults to `balanced`.

    - `signal`
      - : An {{domxref("AbortSignal")}} to cancel session creation.
    - `tools`
      - : An array of objects representing tools available to the AI.
        Each object can include the following properties:
        - `name`
          - : A string giving the tool a unique name the model uses to refer to it when issuing a tool call.
        - `description`
          - : A string describing what the tool does. The model uses this description to decide if and when to invoke the tool.
        - `inputSchema`
          - : A [JSON Schema](https://json-schema.org/) that describes the tool's input parameters. The model uses this schema to construct the arguments it passes to the tool's `execute` function.
        - `execute`
          - : A callback function that the user agent invokes when the model calls this tool. Its arguments are specific to the model being used. It must return a {{jsxref("Promise")}} that resolves with a {{jsxref("String")}} representing the tool's result.

### Return value

A {{jsxref("Promise")}} that resolves with a new {{domxref("LanguageModel")}} instance.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was aborted via the `signal` option.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if:
    - A message's `role` is `"assistant"` and its `type` is anything other than `"text"`.
    - The input or output text is in a language the user agent doesn't support for prompting.
    - A message's type is `"image"` or `"audio"` but the type was not listed in `expectedInputs`.
    - A message's role is `system` but it was not the first message passed to the context.
- `OperationError` {{domxref("DOMException")}}
  - : Thrown if creation fails for any other reason not listed in the other exception types.
- `QuotaExceededError` {{domxref("DOMException")}}
  - : Thrown if the content provided in `initialPrompts` exceeds the model's {{domxref("LanguageModel.contextWindow")}}.

## Description

The `create()` method constructs a new language model session, automatically downloading the model if it is not already available.
You can monitor progress of a model download using the [`monitor`](#monitor) option.

Before calling `create()`, use {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} to check whether the desired configuration is supported.

Once a session is created, use its instance methods — {{domxref("LanguageModel.prompt()")}}, {{domxref("LanguageModel.promptStreaming()")}}, {{domxref("LanguageModel.append()")}}, and others — to interact with the model.

## Examples

### Creating a basic session

This example creates a default session and then prompts it for the result of summing `2` and `2`.
Note that text is supported by default, so the downloaded model should be suitable for this case.

```js
const session = await LanguageModel.create();
const answer = await session.prompt("What is 2 + 2?");
console.log(answer);
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

This code shows how you can monitor the download progress of a model.
Note that if the model is unavailable or already available, the event will never fire.

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

A few-shot example is a set of `user` role and `assistant` role input pairs passed as an example to an AI, using the `initialPrompts` property, before asking it to complete a similar task.

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

### Defining a tool with a callback

This example creates a session with a hypothetical "get weather" tool. When the model decides to call the tool, the user agent invokes `execute` with the arguments the model provides.

```js
async function getWeatherData(location) {
  const response = await fetch(
    `https://api.example.com/weather?city=${location}`,
  );
  const data = await response.json();
  return `${data.temp}°C, ${data.description}`;
}

const session = await LanguageModel.create({
  tools: [
    {
      name: "getWeather",
      description: "Returns the current weather for a given city.",
      inputSchema: {
        type: "object",
        properties: {
          location: { type: "string", description: "The city name." },
        },
        required: ["location"],
      },
      execute: async (...args) => {
        const location = args[0];
        return await getWeatherData(location);
      },
    },
  ],
});

const response = await session.prompt("What's the weather like in Tokyo?");
console.log(response);
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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
