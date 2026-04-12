---
title: LanguageModelCloneOptions
slug: Web/API/LanguageModelCloneOptions
page-type: web-api-dictionary
spec-urls: https://webmachinelearning.github.io/prompt-api/
---

{{APIRef("Prompt API")}}{{SecureContext_Header}}

The **`LanguageModelCloneOptions`** dictionary of the [Prompt API](/en-US/docs/Web/API/Prompt_API) represents the options that can be passed to {{domxref("LanguageModel.clone()")}}. Currently, the only option is an abort signal.

## Instance properties

- `signal` {{optional_inline}}
  - : An {{domxref("AbortSignal")}}. If provided, the clone operation can be cancelled by calling {{domxref("AbortController.abort()", "abort()")}} on the corresponding {{domxref("AbortController")}}.

## Examples

### Cloning a session with an abort signal

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 3000);

try {
  const clonedSession = await session.clone({
    signal: controller.signal,
  });
  console.log("Session cloned successfully.");
} catch (err) {
  if (err.name === "AbortError") {
    console.log("Clone operation was aborted.");
  }
}
```

## Specifications

{{Specifications}}

## See also

- {{domxref("LanguageModel.clone()")}}
- [Prompt API](/en-US/docs/Web/API/Prompt_API)
