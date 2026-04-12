---
title: LanguageModelExpected
slug: Web/API/LanguageModelExpected
page-type: web-api-dictionary
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelExpected`** dictionary of the [Prompt API](/en-US/docs/Web/API/Prompt_API) describes an expected input or output capability for a language model session. It specifies both the content type (such as `"text"`, `"image"`, or `"audio"`) and, for text, the languages that should be supported. Use it in the `expectedInputs` and `expectedOutputs` arrays of {{domxref("LanguageModelCreateCoreOptions")}}.

## Instance properties

- `type`
  - : A string from the `LanguageModelMessageType` enumeration indicating the content type. Must be one of:
    - `"text"` — Plain text content.
    - `"image"` — Image content.
    - `"audio"` — Audio content.
    - `"tool-call"` — A tool invocation issued by the model.
    - `"tool-response"` — The result of a tool invocation.
- `languages` {{optional_inline}}
  - : A sequence of strings containing [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) language tags (for example, `"en"`, `"fr"`, `"ja"`) that the session is expected to handle for this content type. The user agent uses this list to determine whether the model supports the specified languages and to select appropriate model components or fine-tunings.

## Examples

### Requesting multilingual text support

```js
const availability = await LanguageModel.availability({
  expectedInputs: [
    { type: "text", languages: ["en", "fr", "de"] },
  ],
  expectedOutputs: [
    { type: "text", languages: ["en"] },
  ],
});

if (availability !== "unavailable") {
  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["en", "fr", "de"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
}
```

### Requesting image input support

```js
const session = await LanguageModel.create({
  expectedInputs: [
    { type: "text" },
    { type: "image" },
  ],
});
```

## Specifications

{{Specifications}}

## See also

- {{domxref("LanguageModelCreateCoreOptions")}}
- {{domxref("LanguageModel.availability_static", "LanguageModel.availability()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
