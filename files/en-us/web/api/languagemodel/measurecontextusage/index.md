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

### Warning when the context is nearly full

The following example uses a function to verify that context is available before calling `prompt()`. It first calculates the remaining context and passes that value to `measureContextUsage()`. If `needed` is less than `remaining`, it returns `true` and the session continues.

```js
async function contextAvailable(text) {
  const remaining = session.contextWindow - session.contextUsage;
  const needed = await session.measureContextUsage(text);

  return needed <= remaining;
}

const session = await LanguageModel.create();
const promptText = "Your text goes here";

if (await contextAvailable(promptText)) {
  const response = await session.prompt(promptText);
  console.log(response);
} else {
  console.warn("Prompt skipped: Not enough context window remaining.");
}
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
