---
title: LanguageModelCreateCoreOptions
slug: Web/API/LanguageModelCreateCoreOptions
page-type: web-api-dictionary
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelCreateCoreOptions`** dictionary of the [Prompt API](/en-US/docs/Web/API/Prompt_API) represents the base set of options used when checking language model availability or creating a session. It is the parent dictionary of {{domxref("LanguageModelCreateOptions")}}.

You can pass a `LanguageModelCreateCoreOptions` object to {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} to check whether the model supports a given configuration before creating a full session.

## Instance properties

- `expectedInputs` {{optional_inline}}
  - : A sequence of {{domxref("LanguageModelExpected")}} objects describing the input modalities (such as `"text"`, `"image"`, or `"audio"`) and languages the session should support. The user agent uses this information to determine model availability and to select appropriate model components.
- `expectedOutputs` {{optional_inline}}
  - : A sequence of {{domxref("LanguageModelExpected")}} objects describing the output modalities and languages the session should produce. Like `expectedInputs`, this guides availability checks and model selection.
- `tools` {{optional_inline}}
  - : A sequence of {{domxref("LanguageModelTool")}} objects describing the tools the model can invoke during generation. Providing tools here allows {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}} to verify that tool-augmented sessions are supported before creating one.

## Examples

### Checking availability for a multimodal configuration

```js
const availability = await LanguageModel.availability({
  expectedInputs: [
    { type: "text" },
    { type: "image" },
  ],
  expectedOutputs: [
    { type: "text", languages: ["en"] },
  ],
});

if (availability === "unavailable") {
  console.warn("This configuration is not supported.");
} else {
  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text" }, { type: "image" }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
}
```

## Specifications

{{Specifications}}

## See also

- {{domxref("LanguageModelCreateOptions")}}
- {{domxref("LanguageModelExpected")}}
- {{domxref("LanguageModelTool")}}
- {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
