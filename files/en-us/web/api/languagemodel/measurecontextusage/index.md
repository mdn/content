---
title: "LanguageModel: measureContextUsage() method"
short-title: measureContextUsage()
slug: Web/API/LanguageModel/measureContextUsage
page-type: web-api-instance-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`measureContextUsage()`** method of the {{domxref("LanguageModel")}} interface estimates how many context window tokens the given input would consume without sending it to the model or modifying the session's state.

This allows you to check how much of the context window a given input requires before deciding whether to send it. The result can be compared against {{domxref("LanguageModel.contextWindow")}} and {{domxref("LanguageModel.contextUsage")}} to determine whether the input can fit in the window limit.

This is particularly useful for long-context applications such as document summarization, where you need to split or truncate content to stay within the context window limit.

## Syntax

```js-nolint
measureContextUsage(input)
measureContextUsage(input, options)
```

### Parameters

- `input`
  - : The input to measure. One of the following:
    - A string — Shorthand for a single user message. For example: `[{ role: "user", content: [{ type: "text", value: input }] }]`.
    - An array for multi-turn or multimodal input. Represents a single message in a conversation with a language model. Options include:
      - `role`
        - : A string indicating who sent the message. Must be one of:
          - `"system"`
            - : A system-level instruction that guides the model's overall behavior. Note that {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreaming()", "promptStreaming()")}}, and {{domxref("LanguageModel.append()", "append()")}} throw a `"NotSupportedError"` `DOMException` if a message with `role: "system"` is passed to them; system messages are only allowed in `initialPrompts`.
          - `"user"`
            - : A message from the user.
          - `"assistant"`
            - : A message from the model. Use this for few-shot examples or continued dialogue. A few-shot example is a set of input-output pairs passed as an example to an AI before asking it to complete a similar task.
  - `content`
    - : The content of the message. This is either:
      - A string — Shorthand for a single text content part. For example: `[{ type: "text", value: providedValue }]`.
      - An array of multimodal messages or messages with multiple content parts. Options include:
        - `type` - A string from the `LanguageModelMessageType` enumeration indicating the kind of content. Must be one of:
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
        - `value` - The content value. Its type depends on the `type` property:
          - For `"text"`: a {{jsxref("String")}}.
          - For `"image"`: an `ImageBitmapSource` (for example, a {{domxref("Blob")}}, {{domxref("ImageBitmap")}}, {{domxref("HTMLImageElement")}}, {{domxref("HTMLVideoElement")}}, or {{domxref("HTMLCanvasElement")}}).
          - For `"audio"`: an {{domxref("AudioBuffer")}}.
          - For `"tool-call"` or `"tool-response"`: a `BufferSource` or {{jsxref("String")}}, depending on the implementation.
  - `prefix` {{optional_inline}}
    - : A boolean, defaulting to `false`. When `true`, the message is treated as a prefix for the model's next generated response rather than a complete turn.
- `options` {{optional_inline}}
  - : Options for measuring context usage. Options include:
    - `responseConstraint`
      - : An implementation-defined object that constrains the format of the model's output. When provided and `omitResponseConstraintInput` is `false`, any implementation-defined constraint-description message is included in the measurement.
    - `omitResponseConstraintInput`
      - : A boolean; when `true`, the automatic constraint-description message is excluded from the measurement. Throws a `"TypeError"` if `true` is passed without a `responseConstraint`.
    - `signal`
      - : An {{domxref("AbortSignal")}} to cancel the operation.

### Return value

A {{jsxref("Promise")}} that resolves with a {{jsxref("Number")}} representing the number of context window tokens the input would consume.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the operation was cancelled via the `signal` option.
- `TypeError`
  - : Thrown if `omitResponseConstraintInput` is `true` but `responseConstraint` is not provided.

## Examples

### Checking whether a prompt fits in the remaining context

```js
const session = await LanguageModel.create();
const userInput = document.querySelector("#user-input").value;

const usage = await session.measureContextUsage(userInput);
const remaining = session.contextWindow - session.contextUsage;

if (usage > remaining) {
  console.warn(
    `Input is too long: needs ${usage} tokens, only ${remaining} available.`,
  );
} else {
  const response = await session.prompt(userInput);
  console.log(response);
}
```

### Splitting a document to fit the context window

```js
const session = await LanguageModel.create();
const paragraphs = document.body.innerText.split("\n\n");
const chunks = [];
let currentChunk = "";

for (const paragraph of paragraphs) {
  const candidate = currentChunk + "\n\n" + paragraph;
  const usage = await session.measureContextUsage(candidate);

  if (usage > session.contextWindow * 0.8) {
    chunks.push(currentChunk.trim());
    currentChunk = paragraph;
  } else {
    currentChunk = candidate;
  }
}
if (currentChunk) chunks.push(currentChunk.trim());

// Process each chunk separately
for (const chunk of chunks) {
  const summary = await session.prompt(`Summarize: ${chunk}`);
  console.log(summary);
}
```

### Building a conversation with initial prompts

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content:
        "You are a helpful coding assistant. Always use JavaScript examples.",
    },
    {
      role: "user",
      content: "How do I reverse a string?",
    },
    {
      role: "assistant",
      content:
        'Use split, reverse, and join: `str.split("").reverse().join("")`.',
    },
  ],
});

const response = await session.prompt(
  "How do I check if a string is a palindrome?",
);
console.log(response);
```

### Using multimodal content parts

This example shows how to create a prompt with multiple content types.

```js
const imageBitmap = await createImageBitmap(imageElement);

const session = await LanguageModel.create({
  expectedInputs: [{ type: "text" }, { type: "image" }],
});

const response = await session.prompt([
  {
    role: "user",
    content: [
      { type: "text", value: "What is shown in this image?" },
      { type: "image", value: imageBitmap },
    ],
  },
]);
console.log(response);
```

### A text content part

```js
const textPart = {
  type: "text",
  value: "Describe the following image:",
};
```

### A multimodal message with text and image parts

```js
const imageBitmap = await createImageBitmap(imageBlob);

const message = {
  role: "user",
  content: [
    { type: "text", value: "What breed is this dog?" },
    { type: "image", value: imageBitmap },
  ],
};

const session = await LanguageModel.create({
  expectedInputs: [{ type: "text" }, { type: "image" }],
});

const response = await session.prompt([message]);
console.log(response);
```

### An audio content part

```js
const audioContext = new AudioContext();
const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

const message = {
  role: "user",
  content: [
    { type: "text", value: "Transcribe this audio clip." },
    { type: "audio", value: audioBuffer },
  ],
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.contextUsage")}}
- {{domxref("LanguageModel.contextWindow")}}
- {{domxref("LanguageModel.append()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
