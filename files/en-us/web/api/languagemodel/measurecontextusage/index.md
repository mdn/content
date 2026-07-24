---
title: "LanguageModel: measureContextUsage() method"
short-title: measureContextUsage()
slug: Web/API/LanguageModel/measureContextUsage
page-type: web-api-instance-method
browser-compat: api.LanguageModel.measureContextUsage
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`measureContextUsage()`** method of the {{domxref("LanguageModel")}} interface estimates how many context window tokens the given input would consume without sending it to the model or modifying the session's state.

This allows you to check how much of the context window a given input requires before deciding whether to send it. The result can be compared against {{domxref("LanguageModel.contextWindow")}} and {{domxref("LanguageModel.contextUsage")}} to determine whether the input can fit into the context window limit.

This is particularly useful for long-context applications such as document summarization, where you may need to split or truncate content to stay within the context window limit.

## Syntax

```js-nolint
measureContextUsage(input)
measureContextUsage(input, options)
```

### Parameters

- `input`
  - : The content to append to the context window. This is either:
    - A string — Shorthand for a single textual message.
    - An array of objects, each representing a single message in a conversation with a language model.
      Objects may have the following properties:
      - `role`
        - : A string indicating the point of view the message is phrased from. Must be one of:
          - `"system"`
            - : A system-level instruction that guides the model's overall behavior. This must be the first instruction passed to the model.
          - `"user"`
            - : A message from the user, which the API should respond to.
          - `"assistant"`
            - : Inputs that come from the point of view of the AI assistant, which mainly serve to provide context/history, and further shape how the model responds.
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
- `options` {{optional_inline}}
  - : Options for measuring context usage. Properties include:
    - `responseConstraint`
      - : An object following the structure defined by [JSON Schema](https://json-schema.org/) defining the precise format the model's output should be delivered in. When provided and `omitResponseConstraintInput` is `false`, any implementation-defined constraint-description message is included in the measurement.
    - `omitResponseConstraintInput`
      - : A boolean; when `true`, the automatic constraint-description message is excluded from the measurement.
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

The following example uses a function to verify that context is available before calling {{domxref("LanguageModel.prompt()")}}. It first calculates the remaining context and passes that value to `measureContextUsage()`. If `needed` is less or equal to than `remaining`, it returns `true` and the session continues.

```js
const promptText = "Let me ask you an interesting question...";

async function contextAvailable(promptText) {
  const remaining = session.contextWindow - session.contextUsage;
  const needed = await session.measureContextUsage(promptText);

  return needed <= remaining;
}

const session = await LanguageModel.create();

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
