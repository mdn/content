---
title: "LanguageModel: availability() static method"
short-title: availability()
slug: Web/API/LanguageModel/availability_static
page-type: web-api-static-method
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`availability()`** static method of the {{domxref("LanguageModel")}} interface returns the availability status of the browser's language model for the given options without creating a session or triggering a download.

## Syntax

```js-nolint
LanguageModel.availability()
LanguageModel.availability(options)
```

### Parameters

- `options` {{optional_inline}}
  - : A `LanguageModelCreateCoreOptions` dictionary that represents the base set of options used when checking language model availability or creating a session. Options include:
    - `expectedInputs` — A sequence of `LanguageModelExpected` objects describing the required input modalities and languages. Options include:
      - `type`
  - : A string from the `LanguageModelMessageType` enumeration indicating the content type. Must be one of:
    - `"text"` — Plain text content.
    - `"image"` — Image content.
    - `"audio"` — Audio content.
    - `"tool-call"` — A tool invocation issued by the model.
    - `"tool-response"` — The result of a tool invocation.
- `languages` {{optional_inline}}
  - : A sequence of strings containing [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) language tags (for example, `"en"`, `"fr"`, `"ja"`) that the session is expected to handle for this content type. The user agent uses this list to determine whether the model supports the specified languages and to select appropriate model components or fine-tunings.
    - `expectedOutputs` — A sequence of `LanguageModelExpected` objects describing the required output modalities and languages. Options include:
      - `type`
  - : A string from the `LanguageModelMessageType` enumeration indicating the content type. Must be one of:
    - `"text"` — Plain text content.
    - `"image"` — Image content.
    - `"audio"` — Audio content.
    - `"tool-call"` — A tool invocation issued by the model.
    - `"tool-response"` — The result of a tool invocation.
- `languages` {{optional_inline}}
  - : A sequence of strings containing [BCP 47](https://www.rfc-editor.org/rfc/rfc5646) language tags (for example, `"en"`, `"fr"`, `"ja"`) that the session is expected to handle for this content type. The user agent uses this list to determine whether the model supports the specified languages and to select appropriate model components or fine-tunings.
    - `tools` — A sequence of `LanguageModelTool` objects to verify tool support. Options include:
      - `name`
  - : A string giving the tool a unique name the model uses to refer to it when issuing a tool call.
- `description`
  - : A string describing what the tool does. The model uses this description to decide when and whether to invoke the tool.
- `inputSchema`
  - : An object containing a [JSON Schema](https://json-schema.org/) that describes the tool's input parameters. The model uses this schema to construct the arguments it passes to the tool's `execute` function.
- `execute`
  - : A {{domxref("LanguageModelToolFunction")}} callback that the user agent invokes when the model calls this tool. It receives the arguments the model provides and must return a {{jsxref("Promise")}} that resolves with a {{jsxref("String")}} representing the tool's result.

### Return value

A {{jsxref("Promise")}} that resolves with one of the following `Availability` string values:

- `"available"` — The model is ready to use with the given options.
- `"downloadable"` — The model can support the given options but requires a download that has not yet started.
- `"downloading"` — The model can support the given options and a download is currently in progress.
- `"unavailable"` — The model cannot support the given options, or the user agent cannot determine availability (for example, due to a transient error). This value may sometimes indicate a transient error. In which case, the caller should retry or fall back to an alternative implementation.

## Description

Use `availability()` before calling {{domxref("LanguageModel.create_static", "LanguageModel.create()")}} to determine whether the desired configuration is supported. This avoids initiating a session only to have it fail, and lets you provide a meaningful fallback to users when the model is not available.

## Examples

### Checking basic availability

```js
const status = await LanguageModel.availability();

switch (status) {
  case "available":
    console.log("Model is ready.");
    break;
  case "downloadable":
    console.log("Model needs to be downloaded first.");
    break;
  case "downloading":
    console.log("Model is currently downloading.");
    break;
  case "unavailable":
    console.log("Model is not available on this device.");
    break;
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

### Checking availability for a specific language

```js
const status = await LanguageModel.availability({
  expectedInputs: [{ type: "text", languages: ["ja"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});

if (status === "available") {
  const session = await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: ["ja"] }],
    expectedOutputs: [{ type: "text", languages: ["en"] }],
  });
  const translation = await session.prompt("桜はきれいです");
  console.log(translation);
}
```

### Checking availability for a multimodal configuration

```js
const availability = await LanguageModel.availability({
  expectedInputs: [{ type: "text" }, { type: "image" }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
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

### Gating UI on availability

```js
const translateButton = document.querySelector("#translate");

const status = await LanguageModel.availability();
translateButton.disabled = status === "unavailable";

if (status === "downloadable" || status === "downloading") {
  translateButton.textContent = "Download model to enable translation";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LanguageModel.create_static", "LanguageModel.create()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
