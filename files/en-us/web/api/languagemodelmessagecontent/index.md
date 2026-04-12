---
title: LanguageModelMessageContent
slug: Web/API/LanguageModelMessageContent
page-type: web-api-dictionary
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelMessageContent`** dictionary of the [Prompt API](/en-US/docs/Web/API/Prompt_API) represents a single content part within a {{domxref("LanguageModelMessage")}}. Each content part has a type and a corresponding value. Using content parts allows messages to contain multiple modalities, such as a combination of text and images.

## Instance properties

- `type`
  - : A string from the `LanguageModelMessageType` enumeration indicating the kind of content. Must be one of:
    - `"text"` — Plain text content.
    - `"image"` — Image content.
    - `"audio"` — Audio content.
    - `"tool-call"` — A tool invocation issued by the model.
    - `"tool-response"` — The result of a tool invocation.
- `value`
  - : The content value. Its type depends on the `type` property:
    - For `"text"`: a {{jsxref("String")}}.
    - For `"image"`: an `ImageBitmapSource` (for example, a {{domxref("Blob")}}, {{domxref("ImageBitmap")}}, {{domxref("HTMLImageElement")}}, {{domxref("HTMLVideoElement")}}, or {{domxref("HTMLCanvasElement")}}).
    - For `"audio"`: an {{domxref("AudioBuffer")}}.
    - For `"tool-call"` or `"tool-response"`: a `BufferSource` or {{jsxref("String")}}, depending on the implementation.

## Examples

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

## See also

- {{domxref("LanguageModelMessage")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
