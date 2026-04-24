---
title: LanguageModelAppendOptions
slug: Web/API/LanguageModelAppendOptions
page-type: web-api-dictionary
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelAppendOptions`** dictionary of the [Prompt API](/en-US/docs/Web/API/Prompt_API) represents the options that can be passed to {{domxref("LanguageModel.append()")}}.

## Instance properties

- `signal` {{optional_inline}}
  - : An {{domxref("AbortSignal")}}. If provided, the append operation can be cancelled by calling {{domxref("AbortController.abort()", "abort()")}} on the corresponding {{domxref("AbortController")}}.

## Examples

### Appending context with an abort signal

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 3000);

try {
  await session.append(
    "Here is some background context for future questions.",
    {
      signal: controller.signal,
    },
  );
  console.log("Context appended successfully.");
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Append was aborted.");
  }
}
```

## Specifications

{{Specifications}}

## See also

- {{domxref("LanguageModel.append()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
