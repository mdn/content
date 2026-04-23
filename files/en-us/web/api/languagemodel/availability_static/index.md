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
  - : A {{domxref("LanguageModelCreateCoreOptions")}} object specifying the configuration to check. Options include:
    - `expectedInputs` — A sequence of {{domxref("LanguageModelExpected")}} objects describing the required input modalities and languages.
    - `expectedOutputs` — A sequence of {{domxref("LanguageModelExpected")}} objects describing the required output modalities and languages.
    - `tools` — A sequence of {{domxref("LanguageModelTool")}} objects to verify tool support.

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
- {{domxref("LanguageModelCreateCoreOptions")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
