---
title: LanguageModelPromptOptions
slug: Web/API/LanguageModelPromptOptions
page-type: web-api-dictionary
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelPromptOptions`** dictionary of the [Prompt API](/en-US/docs/Web/API/Prompt_API) represents the options that can be passed to {{domxref("LanguageModel.prompt()")}} and {{domxref("LanguageModel.promptStreaming()")}}. These options control how the model generates its response, including optional output constraints and abort behavior.

## Instance properties

- `responseConstraint` {{optional_inline}}
  - : An object that constrains the format of the model's output. The object's structure is implementation-defined, but typically follows a JSON Schema or similar schema format. When provided, the model is guided to produce output that conforms to the schema.
- `omitResponseConstraintInput` {{optional_inline}}
  - : A boolean, defaulting to `false`. When `true`, the user agent omits any implementation-defined message that would otherwise be prepended to the context window to describe the `responseConstraint`. Use this when you have already included constraint instructions in the prompt itself.
- `signal` {{optional_inline}}
  - : An {{domxref("AbortSignal")}}. If provided, the prompt operation can be cancelled by calling {{domxref("AbortController.abort()", "abort()")}} on the corresponding {{domxref("AbortController")}}.

## Examples

### Constraining the output format

```js
const session = await LanguageModel.create();

const result = await session.prompt("List three colors.", {
  responseConstraint: {
    type: "object",
    properties: {
      colors: {
        type: "array",
        items: { type: "string" },
        maxItems: 3,
      },
    },
    required: ["colors"],
  },
});

console.log(JSON.parse(result));
// { colors: ["red", "green", "blue"] }
```

### Aborting a prompt

```js
const controller = new AbortController();

// Cancel after 5 seconds
setTimeout(() => controller.abort(), 5000);

try {
  const result = await session.prompt("Write a very long essay.", {
    signal: controller.signal,
  });
  console.log(result);
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Prompt was aborted.");
  }
}
```

## Specifications

{{Specifications}}

## See also

- {{domxref("LanguageModel.prompt()")}}
- {{domxref("LanguageModel.promptStreaming()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
