---
title: "Sanitizer: removeProcessingInstruction() method"
short-title: removeProcessingInstruction()
slug: Web/API/Sanitizer/removeProcessingInstruction
page-type: web-api-instance-method
browser-compat: api.Sanitizer.removeProcessingInstruction
---

{{APIRef("HTML Sanitizer API")}}

The **`removeProcessingInstruction()`** method of the {{domxref("Sanitizer")}} interface removes a previously allowed processing instruction from a sanitizer configuration.

## Syntax

```js-nolint
removeProcessingInstruction(processingInstruction)
```

### Parameters

- `processingInstruction`
  - : A string indicating the name of the processing instruction to remove, or an object with the following properties:
    - `target`
      - : A string containing the target of the processing instruction..

### Return value

`true` if the operation changed the configuration to disallow the processing instruction, and `false` if the element was already disallowed.

Note that `false` might be returned if the internal configuration:

- defines an [`processingInstructions`](/en-US/docs/Web/API/SanitizerConfig#processingInstructions) array and the processing instruction is already omitted (it does not need to be removed)
- instead defines the [`removeElements`](/en-US/docs/Web/API/SanitizerConfig#removeelements) array and the specified processing instruction is already present (and is hence already filtered)

## Examples

### How to remove processing instructions

This example shows how `removeProcessingInstruction()` is used to add an processing instruction to the sanitizer's [`processingInstructions` configuration](/en-US/docs/Web/API/SanitizerConfig#processinginstructions) (the list of allowed processing instructions).

```js
const sanitizer = new Sanitizer({
  processingInstructions: ["start","end","marker"]
});

console.log(JSON.stringify(sanitizer.get().processingInstructions));
sanitizer.removeProcessingInstruction('marker');
console.log(JSON.stringify(sanitizer.get().processingInstructions));

// Outputs:
// [{"target":"end"},{"target":"marker"},{"target":"start"}]
// [{"target":"end"},{"target":"start"}]

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
```
