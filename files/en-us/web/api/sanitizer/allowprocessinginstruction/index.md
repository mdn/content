---
title: "Sanitizer: allowProcessingInstruction() method"
short-title: allowProcessingInstruction()
slug: Web/API/Sanitizer/allowProcessingInstruction
page-type: web-api-instance-method
browser-compat: api.Sanitizer.allowProcessingInstruction
---

{{APIRef("HTML Sanitizer API")}}

The **`allowProcessingInstruction()`** method of the {{domxref("Sanitizer")}} interface sets that the specified processing instructions is allowed in the output when the sanitizer is used.

## Syntax

```js-nolint
allowProcessingInstruction(processingInstruction)
```

### Parameters

- `processingInstruction`
  - : A string indicating the name of the allowed processing instruction, or an object with the following properties:
    - `target`
      - : A string containing the target of the processing instruction.

### Return value

`true` if the operation changed the configuration to allow the element, and `false` if the configuration was not changed (usually because the element was already allowed, but potentially because the change could not be made).

Note that `false` might be returned if the internal configuration:

- defines the [`processingInstructions`](/en-US/docs/Web/API/SanitizerConfig#processingInstructions) array and the processing instruction is already present (it does not need to be added again).

## Description

The `allowProcessingInstruction()` method sets that the specified processing instruction is allowed in the output when the sanitizer is used.

The method can be used with either an [allow configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#allow_configurations) or a [remove configuration](/en-US/docs/Web/API/HTML_Sanitizer_API#remove_configurations).
If used with an allow configuration, the specified processing instruction is added to the `processingInstructions` array.
If used with a remove configuration, the processing instruction is removed from the `processingInstructions` array (if present).

For example, the following code creates an allow `Sanitizer` that allows `<?start>` processing instructions and then calls `allowProcessingInstruction()` to additionally allow `<?end>` processing instructions.

```js
const sanitizer = new Sanitizer({ processingInstructions: ["start"] });
sanitizer.allowElement("end");
```

## Examples

### How to allow processing instructions

This example shows how `allowProcessingInstruction()` is used to add an element to the sanitizer's [`processingInstructions` configuration](/en-US/docs/Web/API/SanitizerConfig#processinginstructions) (the list of allowed processing instructions).

```js
const sanitizer = new Sanitizer({
  processingInstructions: ["start", "end"],
});

console.log(JSON.stringify(sanitizer.get().processingInstructions));
sanitizer.allowProcessingInstruction("marker");
console.log(JSON.stringify(sanitizer.get().processingInstructions));

// Outputs:
// [{"target":"end"},{"target":"start"}]
// [{"target":"end"},{"target":"marker"},{"target":"start"}]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
