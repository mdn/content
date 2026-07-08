---
title: "LanguageModel: destroy() method"
short-title: destroy()
slug: Web/API/LanguageModel/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.LanguageModel.destroy
---

{{APIRef("Prompt API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`destroy()`** method of the {{domxref("LanguageModel")}} interface releases the resources assigned to the `LanguageModel` instance it is called on and stops any further activity on it. This means that any ongoing and subsequent method calls made on the `LanguageModel` will reject with an `AbortError`.

It makes sense to destroy `LanguageModel` objects if they are no longer being used, as they tie up significant resources in their handling.

## Syntax

```js-nolint
destroy()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Basic `destroy()` usage

```js
const session = await LanguageModel.create({
  expectedInputs: [{ type: "text", languages: ["en"] }],
  expectedOutputs: [{ type: "text", languages: ["en"] }],
});

// ...

session.destroy();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Prompt API](/en-US/docs/Web/API/Prompt_API/Using)
