---
title: "Summarizer: destroy() method"
short-title: destroy()
slug: Web/API/Summarizer/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Summarizer.destroy
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

The **`destroy()`** method of the {{domxref("Summarizer")}} interface destroys the `Summarizer` instance it is called on. It makes sense to destroy `Summarizer` objects if they are no longer going to be used, as they tie up significant resources in their handling.

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
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
});

// ...

summarizer.destroy();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Summarizer API](/en-US/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) on chrome.dev
