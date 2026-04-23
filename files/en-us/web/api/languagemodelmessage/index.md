---
title: LanguageModelMessage
slug: Web/API/LanguageModelMessage
page-type: web-api-dictionary
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelMessage`** dictionary of the [Prompt API](/en-US/docs/Web/API/Prompt_API) represents a single message in a conversation with a language model. Messages have a role (system, user, or assistant), content (text or structured content parts), and an optional prefix flag.

`LanguageModelMessage` objects are used in the `initialPrompts` array of {{domxref("LanguageModelCreateOptions")}} to seed the context window before a session begins.

## Instance properties

- `role`
  - : A string indicating who sent the message. Must be one of:
    - `"system"` — A system-level instruction that guides the model's overall behavior. Note that {{domxref("LanguageModel.prompt()", "prompt()")}}, {{domxref("LanguageModel.promptStreamiing()", "promptStreaming()")}}, {{domxref("LanguageModel.append()", "append()")}} throw a `"NotSupportedError"` `DOMException` if a message with `role: "system"` is passed to them; system messages are only allowed in `initialPrompts`.
    - `"user"` — A message from the user.
    - `"assistant"` — A message from the model (used for few-shot examples or continued dialogue).
- `content`
  - : The content of the message. This is either:
    - A string — Shorthand for a single text content part. For example: `[{ type: "text", value: providedValue }]`.
    - A sequence of {{domxref("LanguageModelMessageContent")}} objects for multimodal messages or messages with multiple content parts.
- `prefix` {{optional_inline}}
  - : A boolean, defaulting to `false`. When `true`, the message is treated as a prefix for the model's next generated response rather than a complete turn.

## Examples

### Building a conversation with initial prompts

```js
const session = await LanguageModel.create({
  initialPrompts: [
    {
      role: "system",
      content: "You are a helpful coding assistant. Always use JavaScript examples.",
    },
    {
      role: "user",
      content: "How do I reverse a string?",
    },
    {
      role: "assistant",
      content: 'Use split, reverse, and join: `str.split("").reverse().join("")`.',
    },
  ],
});

const response = await session.prompt("How do I check if a string is a palindrome?");
console.log(response);
```

### Using multimodal content parts

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

## Specifications

{{Specifications}}

## See also

- {{domxref("LanguageModelMessageContent")}}
- {{domxref("LanguageModelCreateOptions")}}
- {{domxref("LanguageModel.prompt()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
